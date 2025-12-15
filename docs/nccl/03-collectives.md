---
id: nccl-collectives
title: NCCL Collectives & Traffic Patterns
sidebar_label: Collectives
---

Most distributed training traffic can be described using a small set of collectives.

## AllReduce

**What it does:** Everyone contributes a buffer; everyone gets the reduced result (sum/avg/max…).

**Where it appears:** Gradient synchronization in data-parallel training.

**Traffic pattern intuition:** Many-to-many; implemented via rings/trees/hybrids depending on size and topology.

## ReduceScatter + AllGather

Many modern optimizers and sharding approaches rely on combinations of:

- ReduceScatter (reduce then shard result)
- AllGather (gather shards)

These can be more bandwidth-efficient than a full AllReduce in some designs.

## Broadcast

Used for distributing parameters, initialization, or control messages.

## Stream semantics

NCCL operations are launched into a CUDA stream; they obey stream ordering.
If you want to measure correctly, synchronize the stream around the region you time.

Next: **[Topology & Performance](./04-topology-and-perf.md)**
