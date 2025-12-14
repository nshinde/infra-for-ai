import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro/overview'],
    },
    {
      type: 'category',
      label: 'Networking Basics for ML',
      items: ['networking-basics/why-networking-matters'],
    },
    {
      type: 'category',
      label: 'GPU Networking',
      items: ['gpu-networking/gpu-networking-101'],
    },
    {
      type: 'category',
      label: 'ML Infrastructure',
      items: [
        'ml-infra/distributed-training',
        'ml-infra/rdma-for-ml-infra',
        'ml-infra/nccl-internals',
      ],
    },
    {
      type: 'category',
      label: 'Observability',
      items: [
        'observability/observability-overview',
        'observability/gpu-metrics',
        'observability/network-metrics',
      ],
    },
    {
      type: 'category',
      label: 'Career & Transition',
      items: [
        'career/networking-to-ml-infra',
        'career/ml-infra-interview-themes',
      ],
    },
  ],
};

export default sidebars;
