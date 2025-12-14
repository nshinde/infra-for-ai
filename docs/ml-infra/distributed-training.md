---
id: distributed-training
title: Distributed Training & Communication
sidebar_label: Distributed Training & Communication
---

Distributed training lets you use **more GPUs and more machines** to train a model faster or on larger datasets.

From an infrastructure point of view, distributed training is mostly about:

- how we **split the work** across GPUs and nodes  
- how we **move tensors** between those GPUs and nodes  
- how we **keep everything synchronized** without wasting too much time

This page gives a practical mental model for the common strategies and what they mean for **networking and GPU communication**.

## 1. Data parallelism (most common)

In pure data parallelism:

- every worker has a full copy of the model  
- each worker processes a different slice of the batch  
- gradients are **averaged** across all workers each step

The key operation is usually **AllReduce on gradients**.

High‑level loop:

1. Each worker does forward + backward on its local data.  
2. Workers participate in an AllReduce to combine gradients.  
3. Each worker updates its model parameters.  

From the network’s perspective:

- you have large, regular, bursty communication at each step  
- traffic pattern is typically **all‑to‑all** (or structured as rings/trees by NCCL)  
- the cost of the collective grows with **number of GPUs** and **model size**

## 2. Model parallelism

In model parallelism:

- the model is too big to fit on a single GPU  
- different **layers** or **tensor slices** live on different GPUs  

This creates:

- more frequent communication of **activations** and **gradients**  
- tighter dependencies between GPUs (can’t compute without remote data)  

Networking impact:

- more fine‑grained, latency‑sensitive communication  
- NVLink / NVSwitch quality inside a node becomes crucial  
- inter‑node links can easily become the bottleneck

Model parallelism often appears in:

- large language models (LLMs)  
- giant vision or multimodal models  

## 3. Pipeline parallelism

Here:

- the model is split into **stages**  
- micro‑batches flow through the pipeline

Think of it like an assembly line:

- Stage 0 runs on some GPUs  
- Stage 1 runs on others  
- Activations stream between stages  

Networking impact:

- steady flow of activations between specific GPU groups  
- both bandwidth **and** latency matter  
- imbalanced stages or slow links create bubbles in the pipeline

In practice, many large‑scale systems combine:

- **data parallelism** across nodes  
- **model / pipeline parallelism** within and across nodes  

## 4. Collectives: the core communication patterns

Most distributed training communication can be expressed in a handful of collectives:

- **AllReduce** – everyone contributes, everyone gets the sum/avg  
- **AllGather** – everyone shares their tensor, everyone gets the concatenation  
- **ReduceScatter** – like AllReduce, but the result is sharded back out  
- **Broadcast** – one sender, many receivers  

Libraries like **NCCL** implement these efficiently using:

- rings  
- trees  
- hybrids optimized for topology and message sizes  

For infra / networking engineers, these operations show up as:

- bursts of large flows at synchronization points  
- traffic that wants high **bisection bandwidth** and low **tail latency**

## 5. Scaling and where it breaks

Ideal scaling: doubling the number of GPUs roughly halves the training time.

In reality, as you add more GPUs:

- more time is spent waiting at collective operations  
- fabric congestion and oversubscription show up  
- step time stops shrinking and can even increase

Common failure points:

- not enough network bandwidth between racks or nodes  
- poor topology awareness in the job scheduler or NCCL  
- noisy neighbors on shared clusters  
- misconfigured RDMA / flow control / ECN  

## 6. What to watch as an ML infra engineer

When you’re responsible for the platform, key questions include:

- How does step time change as we add nodes?  
- What fraction of time is spent inside collectives (NCCL) vs compute?  
- Are we using RDMA / Infiniband efficiently, or falling back to TCP?  
- Are GPU‑to‑NIC and GPU‑to‑GPU topologies well‑balanced?

The next docs dive into:

- **[GPU Networking 101](../gpu-networking/gpu-networking-101.md)**  
- **RDMA for ML infrastructure**  
- **NCCL internals and debugging**
