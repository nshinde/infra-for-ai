---
id: gpu-metrics
title: GPU Metrics to Watch
sidebar_label: GPU Metrics
---

For GPU‑heavy ML workloads, a few metrics tell most of the story:

- **GPU utilization (%)**  
- **memory usage (GB)**  
- **SM (compute) utilization**  
- **PCIe / NVLink utilization**  
- **kernel launch stats (if available)**

As an infra engineer, watch for:

- low utilization with high queueing elsewhere  
- plateaus in utilization as you add GPUs  
- correlation between collective operations and drops in utilization  
