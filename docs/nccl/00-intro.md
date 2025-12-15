---
id: nccl-intro
title: NCCL Guide
sidebar_label: NCCL Guide
---

NCCL (NVIDIA Collective Communications Library) is the communication backbone behind most multi-GPU training at scale.
It provides highly optimized **collective communication primitives** (AllReduce, AllGather, ReduceScatter, Broadcast)
that frameworks use to synchronize gradients and parameters.

This section is written for ML infra / GPU networking engineers who want a practical understanding of:

- What NCCL is responsible for (and what it is not)
- How NCCL builds communication patterns from your GPU + NIC topology
- How to reason about performance bottlenecks
- How to debug the common “NCCL is slow / flaky” failure modes

## When NCCL matters

NCCL becomes critical when:

- You use multiple GPUs per node (PCIe + NVLink / NVSwitch topology matters)
- You use multiple nodes (fabric bandwidth, congestion control, and topology matters)
- You care about scaling efficiency (time spent in collectives vs compute)

## What this guide covers

1. Installation & environment expectations (Linux + NVIDIA GPUs)
2. Communicators and rank management
3. Collectives and how they map to traffic patterns
4. Topology & performance mental models
5. Debugging workflow and logs
6. Practical code examples (separate examples repo)

Next: **[Installation & Environment](./01-install-and-env.md)**
