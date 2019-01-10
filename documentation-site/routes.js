/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-env node */

const {join} = require('path');
const isProd = process.env.BUILD_ENV === 'production';
const prefix = isProd ? '/beta' : '';

const getPath = path => join(prefix, path);

const routes = [
  {
    text: 'Getting started',
    path: getPath('/getting-started'),
    children: [
      {
        text: 'Playground',
        path: getPath('/playground'),
      },
      {
        text: 'Versioning policy',
        path: getPath('/versioning-policy'),
      },
    ],
  },
  {
    text: 'Theming',
    path: getPath('/custom-themes'),
    children: [
      {
        text: 'Theming values',
        path: getPath('/theming-values'),
      },
      {
        text: 'Understanding Overrides',
        path: getPath('/understanding-overrides'),
      },
    ],
  },
  {
    components: true,
    text: 'Components',
    children: [
      {
        text: 'Basic Inputs',
        children: [
          {
            text: 'Input',
            path: getPath('/components/input'),
          },
          {
            text: 'Button',
            path: getPath('/components/button'),
          },
        ],
      },
      {
        text: 'Navigation',
        children: [
          {
            text: 'Header navigation',
            path: getPath('/components/header-navigation'),
          },
          {
            text: 'Tab',
            path: getPath('/components/tabs'),
          },
          {
            text: 'Breadcrumbs',
            path: getPath('/components/breadcrumbs'),
          },
        ],
      },
      {
        text: 'Content',
        children: [
          {
            text: 'Accordion',
            path: getPath('/components/accordion'),
          },
        ],
      },
      {
        text: 'Progress & Validation',
        children: [
          {
            text: 'Toast',
            path: getPath('/components/toast'),
          },
        ],
      },
      {
        text: 'Surfaces',
        children: [
          {
            text: 'Card',
            path: getPath('/components/card'),
          },
          {
            text: 'Modal',
            path: getPath('/components/modal'),
          },
        ],
      },
    ],
  },
];

export default routes;