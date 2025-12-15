---
id: nccl-install-and-env
title: NCCL Installation & Environment
sidebar_label: Install & Environment
---

This guide assumes you will run NCCL examples on **Linux** with **NVIDIA GPUs**.

## Minimum environment checklist

- NVIDIA GPU(s)
- NVIDIA driver installed and working (`nvidia-smi`)
- CUDA toolkit available (or at least CUDA runtime)
- NCCL library installed
- A launcher for multi-process runs:
  - MPI (e.g., OpenMPI) is the simplest for examples
  - or SLURM / your cluster launcher

## Typical cluster setup notes (conceptual)

- One process per GPU is common for examples
- NCCL will choose transports based on what is available:
  - NVLink / NVSwitch inside node
  - PCIe paths to NICs
  - Infiniband / RoCE / TCP between nodes

## Helpful environment variables (starter set)

Use these when debugging:

- `NCCL_DEBUG=INFO` (or `WARN`)
- `NCCL_DEBUG_SUBSYS=INIT,NET,GRAPH,COLL`
- `NCCL_IB_DISABLE=1` (force non-IB network path for A/B tests)
- `NCCL_P2P_DISABLE=1` (disable P2P to isolate topology issues)
- `CUDA_VISIBLE_DEVICES=...` (control mapping)

The exact set you use depends on your fabric (IB vs RoCE vs TCP) and how your cluster is configured.

Next: **[Communicators](./02-communicators.md)**
