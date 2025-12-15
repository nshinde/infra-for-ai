---
id: dpdk-eal-and-mbufs
title: EAL, Mempools, and Mbufs
sidebar_label: EAL & Mbufs
---

DPDK apps follow a common skeleton:

1. Initialize **EAL** (Environment Abstraction Layer)
2. Create an mbuf **mempool**
3. Configure Ethernet ports and queues
4. Enter the main RX/TX loop(s)

## EAL

EAL initialization parses DPDK-specific CLI flags (core mask, memory, file prefix, etc.)
and sets up hugepage-backed memory.

## Mempools and mbufs

Packets are represented by `rte_mbuf`. To allocate mbufs quickly, you create a mempool:

- many mbufs pre-allocated
- per-core caches reduce lock contention
- mbuf buffers hold packet data, metadata holds lengths, offloads, etc.

You’ll see this pattern in most examples.

Next: **[RX/TX Basics](./03-rx-tx-basics.md)**
