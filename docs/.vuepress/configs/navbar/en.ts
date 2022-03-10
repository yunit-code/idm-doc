import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const en: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'Configure',
    children: [
      {
        text: 'Setting',
        children: [
          '/setting/config.md'
        ],
      },
      {
        text: 'Mock Data',
        children: [
          '/setting/mockdata.md',
        ],
      }
    ],
  },
  {
    text: 'Module Develop',
    children: [
      {
        text: 'Basics',
        children: [
          '/moduledevelop/introduce.md',
          '/moduledevelop/easystart.md',
          '/moduledevelop/scaffoldtoc.md',
        ],
      },
      {
        text: 'Advanced development',
        children: [
          '/moduledevelop/config.md',
          '/moduledevelop/attributes.md',
          '/moduledevelop/communication.md',
          '/moduledevelop/notifications.md',
          '/moduledevelop/unifiedinterface.md',
          '/moduledevelop/env.md',
          '/moduledevelop/container.md',
          '/moduledevelop/theme.md',
          '/moduledevelop/commondialog.md',
          '/moduledevelop/commonstyle.md',
          '/moduledevelop/controlcenter.md',
          '/moduledevelop/builtin.md',
          '/moduledevelop/helpdoc.md',
        ],
      },
      {
        text: 'Further development',
        children: [
          '/moduledevelop/infosharing.md',
          '/moduledevelop/responsive.md',
          '/moduledevelop/pageextend.md',
        ],
      },
    ],
  },
  {
    text: 'standard API',
    link: '/coreapi/variables.md',
  },
  {
    text: `v${version}`,
    children: [
      {
        text: 'Change Log',
        link: '/CHANGELOG.md',
      }
    ],
  },
  {
    text: 'FAQ',
    link: '/faq/',
  },
]
