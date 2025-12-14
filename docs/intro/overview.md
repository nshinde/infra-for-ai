---
id: overview
title: What is ML Infrastructure?
sidebar_label: What is ML Infrastructure?
---

Machine learning models don’t live in notebooks.

To power real products, they need **infrastructure**: GPUs, networks, storage, schedulers, observability, deployment pipelines, and people who understand how all of this fits together.

This guide, **Infra for AI – ML Infrastructure & GPU Networking**, focuses on that layer.

It explains:

- How GPUs, networks, and systems interact in training and inference
- How design decisions in topology, routing, and RDMA affect **throughput, latency, and cost**
- How an engineer with a **networking / systems** background can grow into an **ML infrastructure** role

## Who this guide is for

This guide is aimed at:

- Network / systems engineers moving into **ML infra / GPU networking**
- ML engineers who want to understand **what actually happens below the framework**
- Infra / platform engineers building or operating **GPU clusters** for training and inference

If you already care about packets, queues, jitter, and failure modes, you’re in the right place.

## What is ML infrastructure?

Very roughly, ML infrastructure is everything that lets teams:

1. **Train models at scale**
2. **Serve models reliably at low latency**
3. **Observe, debug, and iterate** on those systems

That includes:

- **Hardware:** GPUs, CPUs, NICs, switches, NVMe, PCIe, NVLink, Infiniband/RoCE
- **Orchestration:** Kubernetes, Slurm, custom schedulers, resource managers
- **Distributed compute:** data / model / pipeline parallelism, collectives (AllReduce, AllGather…)
- **Networking:** L2/L3, ECMP, QoS, RDMA, congestion control, routing design
- **Storage & data:** datasets, caching, streaming, feature stores
- **Serving:** online inference, batch inference, load balancing, rollout strategies
- **Observability:** metrics, logs, traces, profiling, GPU / network telemetry

This guide emphasizes the **intersection of ML and networking**.

## Structure of this guide

The docs are organized into a few tracks:

- **Networking Basics for ML**
  - Why networking matters for ML workloads
  - Latency, bandwidth, jitter, tail behavior
  - TCP vs RDMA at a high level

- **GPU Networking**
  - PCIe, NVLink, NVSwitch
  - Infiniband vs RoCE
  - How NCCL uses the topology

- **ML Infrastructure**
  - Distributed training communication patterns
  - AllReduce, AllGather, ReduceScatter, Broadcast
  - What traffic really looks like in a job

- **Observability**
  - GPU metrics, network metrics, queue depths
  - Detecting bottlenecks
  - Debugging “training is slow” or “latency is spiky”

- **Career & Transition**
  - Mapping networking skills to ML infra
  - What to learn next
  - Interview themes and how to talk about this work

## How to read this guide

You don’t have to read everything in order.

- If you’re new to ML infra: start with **Networking Basics for ML**.  
- If you already know networking: jump straight to **GPU Networking 101** and **Distributed Training & Communication**.  
- If you’re job-focused: read **Transitioning from Networking to ML Infra** and **ML Infra Interview Themes**.

Next: **[Why Networking Matters for ML](../networking-basics/why-networking-matters.md)**.
