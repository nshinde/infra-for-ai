---
id: why-networking-matters
title: Why Networking Matters for ML
sidebar_label: Why Networking Matters for ML
---

When people try to speed up ML, they usually think about:

- bigger or newer GPUs  
- smarter optimizers  
- mixed precision or quantization  

But in distributed systems, **networking is often the invisible bottleneck**.

If GPUs are the engines, the **network is the gearbox and the road**.  
You can have the best engine in the world and still go nowhere if the road is narrow, congested, or full of potholes.

This page explains why networking is central to:

- **distributed training**
- **high‑QPS, low‑latency inference**
- **scalable ML platforms**

---

## 1. How ML changes the networking game

On a single‑GPU workstation, the network barely matters.  
In real systems, you often have:

- multiple GPUs per node (4, 8, 16…)  
- many nodes in a cluster (tens, hundreds, thousands)  
- huge models and datasets  
- long‑running jobs and strict SLOs  

Now:

- GPUs must **exchange gradients and parameters** every step  
- nodes must **stream data efficiently**  
- model servers must **respond within tight latency budgets**

All of this is mediated by:

- **PCIe / NVLink / NVSwitch** inside a node  
- **NICs + switches + fabric** between nodes  

If those paths are slow or unstable, **GPU utilization drops**, training time increases, and inference latency spikes.

---

## 2. Networking in distributed training

In typical data‑parallel training, each worker:

1. Computes gradients on a batch  
2. Exchanges gradients/parameters with other workers (collectives)  
3. Updates its local copy of the model  
4. Repeats

Step 2 is mostly **network traffic**:

- AllReduce, AllGather, ReduceScatter, Broadcast  
- Implemented by libraries like **NCCL**, Gloo, MPI  
- Running over TCP, RDMA/RoCE, or Infiniband

Problems show up as:

- GPUs sitting idle at synchronization barriers  
- step time increasing as you add more GPUs or more nodes  
- mysterious “doesn’t scale” behavior

Very often, the root cause is:

- topology issues  
- oversubscribed links  
- misconfigured NICs or switches  
- RDMA not being used properly  

---

## 3. Networking in inference

For online inference, the focus shifts to **latency and jitter**:

- Request path: client → edge/gateway → model server → dependencies (feature store, cache, DB)  
- Fan‑out: one user request might hit multiple services or models  
- SLOs: p95/p99 latency budgets

Even small networking overheads add up:

- extra hops  
- unnecessary TLS handshakes  
- poor connection reuse  
- bad load‑balancer configuration  

On the network side this is all about:

- minimizing tail latency  
- controlling queueing and retries  
- keeping critical paths short and predictable  

---

## 4. Why networking engineers have an advantage

If you already understand:

- TCP handshakes, retransmissions, congestion control  
- latency, bandwidth, and bandwidth‑delay product (BDP)  
- queues, buffers, and tail latency  
- routing, ECMP, VLANs, overlays  
- counters, packet captures, and flow logs  

…you’re already equipped to reason about many ML infra problems:

- **TCP vs RDMA/RoCE** trade‑offs  
- **QoS and traffic isolation** for training vs inference vs “noise”  
- how **topologies and oversubscription** affect AllReduce  
- how to debug “training is slow” when the model code looks fine  

ML infra is not a separate universe; it is **distributed systems + networking + GPU hardware**.

---

## 5. Typical networking failure modes in ML

Some patterns you’ll see repeatedly:

### 5.1 AllReduce is slow

- Training step time is dominated by gradient exchange  
- scaling from 2 → 8 → 64 GPUs gives poor speedup  

Likely causes:

- weak topology (too many slow links)  
- oversubscribed fabric  
- misconfigured MTU, PFC, ECN, or queues  
- RDMA misconfigurations or fallback to TCP  

### 5.2 Performance is inconsistent

- some runs are fast, others slow  
- only certain node allocations show good performance  

Likely causes:

- noisy neighbors  
- poor placement across racks or AZs  
- uneven hashing or flows on the fabric  
- transient network issues

### 5.3 GPUs are underutilized

- GPU utilization < 50–60%  
- CPUs or NICs are hot instead  

Likely causes:

- data pipeline bottlenecks  
- too many small RPCs  
- serialization/compression overhead  
- lack of kernel‑bypass / RDMA where it would help  

---

## 6. What this track will give you

By the end of the “Networking for ML” section of this guide, you should be able to:

- explain how distributed training depends on the network  
- distinguish **model issues** from **infra/network issues**  
- talk confidently about topology, RDMA vs TCP, and QoS in ML systems  
- reason about where to invest: more GPUs vs better fabric vs better configuration

Next up: **[GPU Networking 101](../gpu-networking/gpu-networking-101.md)**.
