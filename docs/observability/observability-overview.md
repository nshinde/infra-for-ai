---
id: observability-overview
title: Observability for ML Infrastructure
sidebar_label: Observability Overview
---

Observability is how you **see** your ML infrastructure:

- Are GPUs busy or idle?  
- Is the network saturated or fine?  
- Are bottlenecks in data, compute, or communication?

This doc is a high‑level entry point to thinking about metrics, logs, and traces for ML systems.

## 1. Key categories of signals

For most ML infra, you’ll care about:

- **GPU metrics** – utilization, memory, SM occupancy, kernels in flight  
- **CPU metrics** – load, run queues, context switches  
- **network metrics** – throughput, drops, retransmits, RTT, queue depth  
- **storage metrics** – IOPS, latency, throughput  
- **application metrics** – step time, loss curves, throughput, latency SLOs

The job of an infra engineer is to **connect these dots**.

## 2. Typical questions observability should answer

- Why is training slower today than yesterday?  
- Why is p99 latency bad only for a subset of requests?  
- Why does scaling to more GPUs stop improving performance?  

Good observability lets you say whether the primary constraint is:

- compute  
- memory  
- network  
- storage  
- coordination / scheduling  
