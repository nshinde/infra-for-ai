---
id: network-metrics
title: Network Metrics for ML Workloads
sidebar_label: Network Metrics
---

Network metrics are essential for understanding distributed ML performance.

Useful signals:

- per‑port throughput and utilization  
- packet drops and errors  
- retransmissions (for TCP)  
- ECN marks, PFC pause frames (for RoCE)  
- RTT distributions and tail latency  

Symptoms and hints:

- high retransmits → congestion or loss  
- high ECN marks → queues and congestion, but not necessarily loss  
- frequent PFC pauses → risk of head‑of‑line blocking  
