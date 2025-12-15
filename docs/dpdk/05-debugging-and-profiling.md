---
id: dpdk-debugging-and-profiling
title: Debugging & Profiling DPDK Apps
sidebar_label: Debugging
---

Useful tools and approaches:

## 1) Start from a known-good app

- `dpdk-testpmd` is a common sanity check.
- If testpmd can't RX/TX, your environment isn't ready for custom code.

## 2) Check hugepages

- Not enough hugepages → EAL init errors
- Wrong mount / permissions → memory failures

## 3) Check NIC availability

- Ensure the interface is visible to DPDK
- Confirm correct driver binding if your setup requires it

## 4) Log key stages

Print:

- port count
- port link status
- RX/TX queue setup results
- burst receive counts

## 5) Profile carefully

DPDK performance depends heavily on:

- CPU pinning
- cache locality
- batch sizes
- memory bandwidth

Next: go to the **GPU Networking Examples** repo for runnable DPDK examples.
