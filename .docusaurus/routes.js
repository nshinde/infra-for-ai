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
    component: ComponentCreator('/infra-for-ai/docs', 'bc3'),
    routes: [
      {
        path: '/infra-for-ai/docs',
        component: ComponentCreator('/infra-for-ai/docs', '5a4'),
        routes: [
          {
            path: '/infra-for-ai/docs',
            component: ComponentCreator('/infra-for-ai/docs', '726'),
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
                path: '/infra-for-ai/docs/gpu-networking/gpu-networking-101',
                component: ComponentCreator('/infra-for-ai/docs/gpu-networking/gpu-networking-101', '6ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/intro',
                component: ComponentCreator('/infra-for-ai/docs/intro', 'c1a'),
                exact: true
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
