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
    component: ComponentCreator('/infra-for-ai/docs', '76a'),
    routes: [
      {
        path: '/infra-for-ai/docs',
        component: ComponentCreator('/infra-for-ai/docs', '340'),
        routes: [
          {
            path: '/infra-for-ai/docs',
            component: ComponentCreator('/infra-for-ai/docs', 'd82'),
            routes: [
              {
                path: '/infra-for-ai/docs/category/tutorial---basics',
                component: ComponentCreator('/infra-for-ai/docs/category/tutorial---basics', '710'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/category/tutorial---extras',
                component: ComponentCreator('/infra-for-ai/docs/category/tutorial---extras', '296'),
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
                path: '/infra-for-ai/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/infra-for-ai/docs/tutorial-basics/congratulations', '85f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/infra-for-ai/docs/tutorial-basics/create-a-blog-post', 'eb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/infra-for-ai/docs/tutorial-basics/create-a-document', '33c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/infra-for-ai/docs/tutorial-basics/create-a-page', '290'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/infra-for-ai/docs/tutorial-basics/deploy-your-site', '1fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/infra-for-ai/docs/tutorial-basics/markdown-features', '980'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/infra-for-ai/docs/tutorial-extras/manage-docs-versions', '17d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/infra-for-ai/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/infra-for-ai/docs/tutorial-extras/translate-your-site', '223'),
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
