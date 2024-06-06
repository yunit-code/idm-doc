import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/integrated.md',
        '/zh/guide/developtool.md',
        '/zh/guide/renderengine.md',
        '/zh/guide/documentmanage.md',
        '/zh/guide/extenddevelop.md',
      ],
    },
  ],
  '/zh/setting/': [
    {
      text: '配置参考',
      children: [
        '/zh/setting/config.md',
        '/zh/setting/mockdata.md'
      ],
    },
  ],
  '/zh/moduledevelop/': [
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
        '/zh/moduledevelop/developmentSpecifications.md',
        '/zh/moduledevelop/scaffoldOptimization.md',
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
    }
  ],
  '/zh/coreapi':[
    {
      text: '标准API',
      children: [
        '/zh/coreapi/variables.md',
        '/zh/coreapi/api.md',
        '/zh/coreapi/compatible.md'
      ],
    }
  ],
  '/zh/faq/': [
    {
      text: '常见问题',
      children: [
        '/zh/faq/README.md',
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
