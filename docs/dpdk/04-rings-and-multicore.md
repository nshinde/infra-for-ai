---
id: dpdk-rings-and-multicore
title: Rings, Queues, and Multicore Scaling
sidebar_label: Rings & Multicore
---

DPDK is designed for multicore scaling.

Common patterns:

- one RX core, multiple worker cores, one TX core
- per-queue cores (RSS)
- lockless rings (`rte_ring`) for moving work between cores

`rte_ring` is a high-performance queue used in many DPDK pipelines.

Next: **[Debugging & Profiling](./05-debugging-and-profiling.md)**
