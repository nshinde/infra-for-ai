---
id: rdma-for-ml-infra
title: RDMA for ML Infrastructure Engineers
sidebar_label: RDMA for ML Infra
---

RDMA (Remote Direct Memory Access) lets one machine read or write memory on another machine **without involving the remote CPU** and with **minimal kernel involvement**.

For ML infrastructure this means:

- lower latency  
- lower CPU overhead  
- higher throughput for distributed training and inference

This doc gives a practical, infra‑oriented view of RDMA, RoCE, and how they relate to ML workloads.

## 1. Why RDMA instead of TCP?

TCP is:

- general‑purpose  
- ubiquitous  
- relatively heavy on CPU and kernel involvement  

For massive tensor transfers in training:

- copying data into kernel buffers  
- handling interrupts  
- managing TCP congestion control  

all add overhead.

RDMA offers:

- kernel‑bypass for data path  
- zero‑copy transfers between user‑space buffers  
- offloaded congestion control (Infiniband, DCQCN over RoCE)  
- lower per‑message latency

Result: at scale, using RDMA can be the difference between:

- “training finishes in days” vs “takes weeks”  
- GPUs at 80–90% utilization vs 40–50%

## 2. Transport flavors

At a high level, you’ll see:

- **Infiniband** – a dedicated lossless-ish fabric with its own link and transport layer  
- **RoCEv2** – RDMA over Converged Ethernet, relying on an Ethernet fabric with features like PFC and ECN  
- **iWARP** (less common these days in ML)  

From an ML perspective:

- Infiniband is often the highest‑performance but requires its own fabric  
- RoCEv2 runs on Ethernet gear, but demands careful configuration

## 3. Where RDMA shows up in ML stacks

- **NCCL** on top of Infiniband/RoCE for gradient exchange  
- parameter servers or sharded parameter stores  
- high‑throughput data loaders or feature services  
- some inference serving paths where latency is extremely tight

As an infra engineer, you don’t necessarily write RDMA verbs yourself, but you:

- enable and configure RDMA in the cluster  
- ensure routing, QoS, and congestion control are sane  
- debug issues where performance doesn’t match expectations

## 4. Failure and misconfiguration patterns

Common problems include:

- RDMA silently falling back to TCP  
- link‑level flow control (PFC) causing head‑of‑line blocking  
- lack of ECN/RED leading to bufferbloat and large queues  
- routing asymmetries causing uneven load

Symptoms:

- NCCL collectives much slower than expected  
- GPU utilization low despite enough nominal bandwidth  
- strong dependence on which nodes / racks are chosen for a job

## 5. What you should be comfortable with

As an ML infra / GPU networking engineer, aim to:

- explain at a high level how RDMA differs from TCP  
- know whether your environment uses Infiniband or RoCE  
- understand the role of PFC, ECN, DCQCN in RoCE fabrics  
- be able to read basic NIC and switch counters related to RDMA traffic

You don’t need to be a firmware engineer, but you do need to be able to say:

> “We’re not hitting our scaling targets because collectives are saturating links here, here, and here — and RDMA is not configured optimally.”
