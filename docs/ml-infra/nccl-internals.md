---
id: nccl-internals
title: NCCL Internals (High Level)
sidebar_label: NCCL Internals
---

NCCL (NVIDIA Collective Communication Library) is the workhorse behind many multi‑GPU training jobs.

This page gives a **high‑level mental model**, not a line‑by‑line implementation tour.

## 1. What NCCL does

NCCL implements collectives such as:

- AllReduce  
- AllGather  
- ReduceScatter  
- Broadcast  

using GPU‑aware transport paths:

- NVLink / NVSwitch  
- PCIe  
- network (Infiniband, RoCE, TCP)

## 2. Topology awareness

NCCL inspects:

- GPU connectivity (NVLink, PCIe hierarchy)  
- proximity of GPUs to NICs (NUMA)  
- available network interfaces  

It then builds one or more:

- **rings** – good for bandwidth  
- **trees** – good for latency  
- **hybrid structures** – for large clusters

As an infra engineer, reading NCCL’s debug output helps you see:

- how it mapped your GPUs into rings  
- which NICs it chose  
- whether some GPUs are on “worse” paths

## 3. Why it matters

When scaling training and it doesn’t speed up:

- sometimes the issue is pure algorithmic / ML  
- often, the issue is that NCCL **can’t find efficient paths** given topology and fabric

Knowing how to inspect NCCL choices lets you:

- refine node and GPU placement  
- improve how the scheduler packs jobs  
- provide useful feedback to networking and hardware teams
