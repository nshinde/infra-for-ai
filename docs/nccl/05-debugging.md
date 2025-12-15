---
id: nccl-debugging
title: NCCL Debugging Workflow
sidebar_label: Debugging
---

When NCCL is “slow” or “flaky”, a good workflow is:

## 1) Confirm the mapping

- One process per GPU?
- `CUDA_VISIBLE_DEVICES` correct?
- Correct rank↔GPU mapping?

## 2) Turn on logs

Start with:

- `NCCL_DEBUG=INFO`
- `NCCL_DEBUG_SUBSYS=INIT,NET,GRAPH,COLL`

Look for:

- Which transport NCCL selected (IB/RoCE/TCP)
- Ring/tree construction
- Topology graph decisions

## 3) Reduce the problem

A/B test:

- Single node, multi-GPU (isolates fabric issues)
- Two nodes only (isolates scale-related issues)
- Disable IB or P2P (forces different paths, helps isolate)

## 4) Check the fabric

Depending on your environment:

- NIC counters (drops, ECN marks, PFC pauses)
- Switch counters (congestion, buffer utilization)
- Routing symmetry and hotspot links

## 5) Reproduce with a minimal benchmark

Use a minimal AllReduce example (in the examples repo) to confirm whether the issue
is NCCL/topology/fabric rather than model code.

Next: go to the **GPU Networking Examples** repo for runnable NCCL examples.
