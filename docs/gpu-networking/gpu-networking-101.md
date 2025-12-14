---
id: gpu-networking-101
title: GPU Networking 101
sidebar_label: GPU Networking 101
---

Modern machine learning workloads depend heavily on **how GPUs talk to each other**.  
You can have the fastest GPU in the world — but if data can't move quickly between GPUs, your training job will stall.

This page explains the fundamentals of **GPU connectivity**, both **inside a server** and **across multiple servers**, and how these choices affect performance.

---

# 🚀 1. Three Ways GPUs Communicate

GPUs exchange tensors, gradients, activations, and parameters over three primary channels:

## 1.1 PCIe (Peripheral Component Interconnect Express)

- Standard CPU ↔ GPU interface  
- Used in nearly all servers  
- Shared with NICs, NVMe, SSD controllers  
- High bandwidth, but **not the fastest** for GPU-to-GPU traffic  
- Topology matters (which GPU is plugged into which PCIe root complex)

**Typical bandwidth:**
- PCIe Gen4 x16 → ~32 GB/s (bidirectional)
- PCIe Gen5 x16 → ~64 GB/s (bidirectional)

---

## 1.2 NVLink (NVIDIA-only interconnect)

- High-speed GPU ↔ GPU path  
- Much lower latency than PCIe  
- 3–10× more bandwidth depending on generation  
- Used heavily in multi-GPU training (ResNet, LLMs, diffusion models)

**Typical bandwidth:**
- NVLink 3.0 → ~50 GB/s each direction  
- NVLink 4.0 → ~75 GB/s each direction  
- NVSwitch → up to ~900 GB/s aggregate per GPU (H100 systems)

NVLink is a **mesh**, **ring**, or **full crossbar** (NVSwitch) depending on the system.

---

## 1.3 Network Fabric (NICs → Switches → NICs)

When GPUs are in **different nodes**, they talk over the network:

- **Infiniband** (NDR: 400 Gb/s, HDR: 200 Gb/s)
- **RoCEv2** (RDMA over Converged Ethernet)
- **Ethernet TCP** (slowest option for training)

The network layer is what matters most for:

- Multi-node distributed training  
- Scaling beyond 8 or 16 GPUs  
- Large clusters running many jobs  
- Model-parallel workloads

**Typical NIC bandwidth:**

| NIC Type | Speed | Notes |
|----------|--------|-------|
| Ethernet TCP | 100–400 Gb/s | Highest overhead |
| RoCEv2 RDMA | 100–400 Gb/s | Low latency, kernel-bypass |
| Infiniband | 100–400 Gb/s | Most efficient for ML |

---

# 🧠 2. Understanding GPU Topology

A GPU topology describes **which GPU can talk to which other GPU**, and over what path:

```
GPU ↔ GPU (NVLink or PCIe)
GPU ↔ NIC (PCIe)
NIC ↔ Switch (Network)
Switch ↔ NIC (Network)
NIC ↔ GPU (PCIe)
```

Good topology = efficient training.  
Bad topology = GPUs stall waiting for communication.

There are two kinds of topologies to understand:

---

## **2.1 Intra-node GPU topology (inside one server)**

Example for an 8-GPU server:

```
GPU0 ─┬─ NVLink ── GPU1
      └─ PCIe ─── NIC

GPU2 ─┬─ NVLink ── GPU3
      └─ PCIe ─── NIC

GPU4 ─┬─ NVLink ── GPU5
      └─ PCIe ─── NIC

GPU6 ─┬─ NVLink ── GPU7
      └─ PCIe ─── NIC
```

Key questions:

- Which GPUs are connected by NVLink vs PCIe only?  
- How many NVLink hops exist between GPU0 and GPU7?  
- Do GPUs share PCIe root complexes with NICs?  

Systems with **NVSwitch** eliminate many of these issues by creating a **full crossbar** between GPUs:

```
GPU0 ─┐
GPU1 ─┼─ NVSwitch ─ full bandwidth to all GPUs
GPU2 ─┼─
GPU3 ─┘
...
```

---

## **2.2 Inter-node topology (between servers)**

A simple 2-node setup:

```
Node A (8 GPUs)   <——>   Node B (8 GPUs)
     |                          |
     |                          |
    NIC                        NIC
     \                         /
      \                       /
        —— Switch / Fabric ——
```

In a cluster:

- Each node may have **1 or 2 NICs**  
- NICs may connect to **different leaf switches**  
- Switches connect to **spine switches**  
- The overall design may be CLOS/Leaf-Spine

Training communication performance depends heavily on:

- oversubscription  
- ECMP hashing  
- RDMA configuration  
- congestion control (DCQCN, ECN, PFC)  
- cable layout  
- switch buffers  

---

# 🔥 3. NCCL: How GPUs Use the Network

**NVIDIA Collective Communication Library (NCCL)** is the backbone of multi-GPU training.

NCCL selects communication paths based on:

- GPU topology (NVLink availability)  
- NIC affinities (which GPU is closest to which NIC)  
- Network bandwidth and latency  
- Number of rings needed for the collective  

For example, in AllReduce:

```
GPU → NVLink → GPU → NIC → Switch → NIC → GPU → NVLink → GPU
```

NCCL builds:

- **Rings** (for bandwidth)
- **Trees** (for latency)
- **Hybrid topologies** (for large clusters)

Understanding NCCL’s topology logs is one of the most underrated skills in ML infra engineering.

---

# ⚡ 4. PCIe vs NVLink vs Network: What actually matters?

### PCIe
- Good for CPU → GPU transfers  
- Shared bus  
- Higher latency than NVLink

### NVLink
- Optimal for GPU ↔ GPU communication  
- ~10× the bandwidth of PCIe  
- ~5× lower latency  
- Crucial for multi-GPU model training (LLMs, diffusion)

### Network (RDMA or IB)
- Crucial once you cross servers  
- Performance bottleneck if:
  - You use TCP instead of RDMA  
  - The cluster fabric is oversubscribed  
  - ECMP hashing is uneven  
  - NICs are misaligned with GPUs  

**Rule of thumb:**

Inside a node → NVLink dominates.  
Across nodes → RDMA/Infiniband dominates.

---

# 🧰 5. How to inspect GPU topology

Run:

```
nvidia-smi topo --matrix
```

Output shows:

- NVLink connectivity  
- PCIe hops  
- NIC proximity  

Terms:

- **NV1** = NVLink  
- **PIX** = same PCIe switch  
- **PHB** = through CPU root complex (slow)  

---

# 📉 6. Common GPU Networking Bottlenecks

### 1. GPUs share a PCIe root with the NIC  
→ Causes contention → reduces bandwidth.

### 2. NVLink rings are unbalanced  
→ One GPU becomes a choke point.

### 3. Oversubscribed spine switches  
→ Multi-node scaling falls apart.

### 4. RDMA fallback to TCP  
→ Training becomes 3–10× slower.

### 5. Wrong NUMA alignment  
→ NIC connected to a GPU on another CPU socket.

---

# 🏁 7. Summary

**GPU networking is the foundation of ML infrastructure.**  
Understanding:

- PCIe  
- NVLink  
- NIC placement  
- Network fabrics  
- NCCL behavior  

is essential for diagnosing performance issues and designing scalable training clusters.

---
