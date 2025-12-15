---
id: nccl-communicators
title: NCCL Communicators
sidebar_label: Communicators
---

A communicator is NCCL’s way of representing a **group of ranks** that can participate in collective operations.

## Core ideas

- **Rank:** an integer ID (0..world_size-1), usually one process per GPU
- **World size:** total number of ranks participating
- **Unique ID:** a token used to connect all ranks into the same communicator

## Typical pattern (multi-process)

1. Rank 0 generates a unique ID.
2. The unique ID is distributed to all ranks (e.g., via MPI broadcast).
3. All ranks call `ncclCommInitRank(world, id, rank)`.

## Lifecycle and safety

- Create communicator once, reuse across many iterations.
- Destroy communicator at the end of the process.
- Create and use a CUDA stream for NCCL calls.
- NCCL calls are typically enqueued on a CUDA stream; you synchronize as needed.

Next: **[Collectives](./03-collectives.md)**
