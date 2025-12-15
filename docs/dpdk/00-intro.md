---
id: dpdk-intro
title: DPDK Guide
sidebar_label: DPDK Guide
---

DPDK (Data Plane Development Kit) is a set of libraries and drivers for **fast packet processing in user space**.
It is widely used for building high-performance networking applications (L2/L3 forwarding, virtual switching,
load balancing, telecom datapaths, and more).

This section is written for engineers who want to understand:

- The DPDK execution model (poll-mode, hugepages, CPU pinning)
- The key building blocks (EAL, mempools, mbufs, rings)
- The shape of a typical RX/TX dataplane loop
- How to build and run sample apps
- How to debug common setup issues

**Note:** DPDK is primarily a **Linux** ecosystem.

Next: **[Build & Run on Linux](./01-build-and-run-linux.md)**
