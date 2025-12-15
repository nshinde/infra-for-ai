import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/infra-for-ai/blog',
    component: ComponentCreator('/infra-for-ai/blog', '027'),
    exact: true
  },
  {
    path: '/infra-for-ai/blog/archive',
    component: ComponentCreator('/infra-for-ai/blog/archive', 'e54'),
    exact: true
  },
  {
    path: '/infra-for-ai/blog/authors',
    component: ComponentCreator('/infra-for-ai/blog/authors', 'cea'),
    exact: true
  },
  {
    path: '/infra-for-ai/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/infra-for-ai/blog/authors/all-sebastien-lorber-articles', 'aa9'),
    exact: true
  },
  {
    path: '/infra-for-ai/blog/authors/yangshun',
    component: ComponentCreator('/infra-for-ai/blog/authors/yangshun', 'db7'),
    exact: true
  },
  {
    path: '/infra-for-ai/blog/first-blog-post',
    component: ComponentCreator('/infra-for-ai/blog/first-blog-post', '563'),
    exact: true
  },
  {
    path: '/infra-for-ai/blog/long-blog-post',
    component: ComponentCreator('/infra-for-ai/blog/long-blog-post', '973'),
    exact: true
  },
  {
    path: '/infra-for-ai/blog/mdx-blog-post',
    component: ComponentCreator('/infra-for-ai/blog/mdx-blog-post', 'c4a'),
    exact: true
  },
  {
    path: '/infra-for-ai/blog/tags',
    component: ComponentCreator('/infra-for-ai/blog/tags', '215'),
    exact: true
  },
  {
    path: '/infra-for-ai/blog/tags/docusaurus',
    component: ComponentCreator('/infra-for-ai/blog/tags/docusaurus', '86e'),
    exact: true
  },
  {
    path: '/infra-for-ai/blog/tags/facebook',
    component: ComponentCreator('/infra-for-ai/blog/tags/facebook', '2a0'),
    exact: true
  },
  {
    path: '/infra-for-ai/blog/tags/hello',
    component: ComponentCreator('/infra-for-ai/blog/tags/hello', '848'),
    exact: true
  },
  {
    path: '/infra-for-ai/blog/tags/hola',
    component: ComponentCreator('/infra-for-ai/blog/tags/hola', 'e42'),
    exact: true
  },
  {
    path: '/infra-for-ai/blog/welcome',
    component: ComponentCreator('/infra-for-ai/blog/welcome', '92a'),
    exact: true
  },
  {
    path: '/infra-for-ai/markdown-page',
    component: ComponentCreator('/infra-for-ai/markdown-page', 'e35'),
    exact: true
  },
  {
    path: '/infra-for-ai/docs',
    component: ComponentCreator('/infra-for-ai/docs', 'fae'),
    routes: [
      {
        path: '/infra-for-ai/docs',
        component: ComponentCreator('/infra-for-ai/docs', '55f'),
        routes: [
          {
            path: '/infra-for-ai/docs',
            component: ComponentCreator('/infra-for-ai/docs', '1a3'),
            routes: [
              {
                path: '/infra-for-ai/docs/career/ml-infra-interview-themes',
                component: ComponentCreator('/infra-for-ai/docs/career/ml-infra-interview-themes', '8fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/career/networking-to-ml-infra',
                component: ComponentCreator('/infra-for-ai/docs/career/networking-to-ml-infra', '3e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/dpdk/dpdk-build-and-run-linux',
                component: ComponentCreator('/infra-for-ai/docs/dpdk/dpdk-build-and-run-linux', 'a42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/dpdk/dpdk-debugging-and-profiling',
                component: ComponentCreator('/infra-for-ai/docs/dpdk/dpdk-debugging-and-profiling', 'e12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/dpdk/dpdk-eal-and-mbufs',
                component: ComponentCreator('/infra-for-ai/docs/dpdk/dpdk-eal-and-mbufs', '582'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/dpdk/dpdk-intro',
                component: ComponentCreator('/infra-for-ai/docs/dpdk/dpdk-intro', '068'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/dpdk/dpdk-rings-and-multicore',
                component: ComponentCreator('/infra-for-ai/docs/dpdk/dpdk-rings-and-multicore', '14c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/dpdk/dpdk-rx-tx-basics',
                component: ComponentCreator('/infra-for-ai/docs/dpdk/dpdk-rx-tx-basics', '47b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/gpu-networking/gpu-networking-101',
                component: ComponentCreator('/infra-for-ai/docs/gpu-networking/gpu-networking-101', '6ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/intro',
                component: ComponentCreator('/infra-for-ai/docs/intro', '2d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/intro/overview',
                component: ComponentCreator('/infra-for-ai/docs/intro/overview', 'cac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/ml-infra/distributed-training',
                component: ComponentCreator('/infra-for-ai/docs/ml-infra/distributed-training', '546'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/ml-infra/nccl-internals',
                component: ComponentCreator('/infra-for-ai/docs/ml-infra/nccl-internals', '414'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/ml-infra/rdma-for-ml-infra',
                component: ComponentCreator('/infra-for-ai/docs/ml-infra/rdma-for-ml-infra', '58d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/nccl/nccl-collectives',
                component: ComponentCreator('/infra-for-ai/docs/nccl/nccl-collectives', '469'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/nccl/nccl-communicators',
                component: ComponentCreator('/infra-for-ai/docs/nccl/nccl-communicators', 'cb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/nccl/nccl-debugging',
                component: ComponentCreator('/infra-for-ai/docs/nccl/nccl-debugging', '9e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/nccl/nccl-install-and-env',
                component: ComponentCreator('/infra-for-ai/docs/nccl/nccl-install-and-env', '02e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/nccl/nccl-intro',
                component: ComponentCreator('/infra-for-ai/docs/nccl/nccl-intro', '9d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/nccl/nccl-topology-and-perf',
                component: ComponentCreator('/infra-for-ai/docs/nccl/nccl-topology-and-perf', '761'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/networking-basics/why-networking-matters',
                component: ComponentCreator('/infra-for-ai/docs/networking-basics/why-networking-matters', '481'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/observability/gpu-metrics',
                component: ComponentCreator('/infra-for-ai/docs/observability/gpu-metrics', '2cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/observability/network-metrics',
                component: ComponentCreator('/infra-for-ai/docs/observability/network-metrics', '5b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/observability/observability-overview',
                component: ComponentCreator('/infra-for-ai/docs/observability/observability-overview', '69f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/infra-for-ai/',
    component: ComponentCreator('/infra-for-ai/', 'd65'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
