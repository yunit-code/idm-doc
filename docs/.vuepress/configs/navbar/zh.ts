import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const zh: NavbarConfig = [
  {
    text: '指南',
    link: '/zh/guide/',
  },
  {
    text: '配置参考',
    children: [
      {
        text: '配置',
        children: [
          '/zh/setting/config.md'
        ],
      },
      {
        text: '模拟数据',
        children: [
          '/zh/setting/mockdata.md',
        ],
      }
    ],
  },
  {
    text: '组件开发',
    children: [
      {
        text: '基础',
        children: [
          '/zh/moduledevelop/introduce.md',
          '/zh/moduledevelop/easystart.md',
          '/zh/moduledevelop/scaffoldtoc.md',
          '/zh/moduledevelop/designcriterion.md',
        ],
      },
      {
        text: '高级开发',
        children: [
          '/zh/moduledevelop/config.md',
          '/zh/moduledevelop/attributes.md',
          '/zh/moduledevelop/communication.md',
          '/zh/moduledevelop/notifications.md',
          '/zh/moduledevelop/unifiedinterface.md',
          '/zh/moduledevelop/env.md',
          '/zh/moduledevelop/container.md',
          '/zh/moduledevelop/theme.md',
          '/zh/moduledevelop/commondialog.md',
          '/zh/moduledevelop/commonstyle.md',
          '/zh/moduledevelop/controlcenter.md',
          '/zh/moduledevelop/builtin.md',
          '/zh/moduledevelop/helpdoc.md',
        ],
      },
      {
        text: '深入开发',
        children: [
          '/zh/moduledevelop/infosharing.md',
          '/zh/moduledevelop/moduleobject.md',
          '/zh/moduledevelop/responsive.md',
          '/zh/moduledevelop/pageextend.md',
        ],
      },
    ],
  },
  {
    text: '标准API',
    link: '/zh/coreapi/variables.md',
  },
  {
    text: `v${version}`,
    children: [
      {
        text: '更新日志',
        link: '/zh/CHANGELOG.md',
      }
    ],
  },
  {
    text: '常见问题',
    link: '/zh/faq/',
    children: [
      {
        text: '兼容性',
        children: [
          '/zh/faq/compatible-ie11.md'
        ]
      }
    ]
  },
]
