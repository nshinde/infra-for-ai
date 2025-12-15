---
id: dpdk-build-and-run-linux
title: Build & Run DPDK on Linux
sidebar_label: Build & Run (Linux)
---

DPDK applications run in user space and rely on:

- Hugepages
- CPU affinity/pinning
- A NIC driver model (kernel driver or user-space bound device, depending on setup)

## Typical prerequisites

- Linux (recommended)
- A supported NIC
- Root privileges (or appropriate permissions) for hugepages and device access
- DPDK installed (from packages or built from source)

## Common workflow (high level)

1. Configure hugepages
2. Ensure your NIC is available to DPDK
3. Run a known-good sample app (like `dpdk-testpmd`)
4. Build and run your own minimal app

This guide’s examples repo includes CMake-based examples that link against installed DPDK.

Next: **[EAL & mbufs](./02-eal-and-mbufs.md)**
