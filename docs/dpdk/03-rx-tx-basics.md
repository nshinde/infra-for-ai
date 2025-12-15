---
id: dpdk-rx-tx-basics
title: RX/TX Basics
sidebar_label: RX/TX Basics
---

Most DPDK apps are built around a fast loop:

- burst receive packets
- inspect/modify headers as needed
- transmit or drop
- free mbufs

Key API concepts:

- `rte_eth_rx_burst(...)` returns up to N packets
- you must free mbufs you don’t forward
- transmitting is typically `rte_eth_tx_burst(...)`

Performance tips:

- process in bursts
- avoid per-packet syscalls
- pin to cores, avoid migrations
- keep per-core data local (NUMA awareness)

Next: **[Rings & Multicore](./04-rings-and-multicore.md)**
