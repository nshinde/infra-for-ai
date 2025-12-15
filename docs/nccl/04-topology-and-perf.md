---
id: nccl-topology-and-perf
title: Topology & Performance
sidebar_label: Topology & Performance
---

NCCL performance is heavily shaped by physical topology.

## Inside a node

Key links:

- GPU↔GPU: NVLink / NVSwitch is usually best
- GPU↔NIC: PCIe placement and NUMA affinity matters
- PCIe hierarchy: extra hops across CPU root complexes often hurt

Practical check:

- `nvidia-smi topo -m`
- Look for NVLink connectivity and GPU↔NIC proximity

## Across nodes

Key dimensions:

- Fabric bandwidth (100/200/400 Gb/s, etc.)
- Oversubscription and bisection bandwidth
- Congestion control behavior (especially for RoCE)
- Routing/ECMP balance and hotspots

## Scaling intuition

As you increase GPUs/nodes, collective time often grows because:

- More participants → more data movement / coordination
- More congestion opportunities
- More sensitivity to a few slow paths (stragglers)

## Measuring correctly

Separate:

- Compute time (kernels)
- Communication time (collectives)
- Input pipeline and CPU overhead

Next: **[Debugging](./05-debugging.md)**
