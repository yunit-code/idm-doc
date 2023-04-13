import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md',
        '/guide/integrated.md',
        '/guide/developtool.md',
        '/guide/renderengine.md',
        '/guide/documentmanage.md',
        '/guide/extenddevelop.md',
      ],
    },
  ],
  '/setting/': [
    {
      text: 'Configure',
      children: [
        '/setting/config.md',
        '/setting/mockdata.md'
      ],
    },
  ],
  '/moduledevelop/': [
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
    }
  ],
  '/coreapi':[
    {
      text: 'standard API',
      children: [
        '/coreapi/variables.md',
        '/coreapi/api.md',
        '/coreapi/compatible.md'
      ],
    }
  ],
  '/faq/': [
    {
      text: 'FAQ.',
      children: [
        '/faq/README.md',
        {
          text: '兼容性',
          children: [
            '/zh/faq/compatible-ie11.md'
          ],
        }
      ]
    },
  ],
}
