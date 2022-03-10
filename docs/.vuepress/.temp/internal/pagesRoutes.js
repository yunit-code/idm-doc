import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Not released yet, stay tuned"},["/index.html","/README.md"]],
  ["v-0d80f70d","/zh/CHANGELOG.html",{"title":"更新日志"},["/zh/CHANGELOG","/zh/CHANGELOG.md"]],
  ["v-2d0ad528","/zh/",{"title":"首页"},["/zh/index.html","/zh/README.md"]],
  ["v-594c699b","/zh/coreapi/api.html",{"title":"全局API"},["/zh/coreapi/api","/zh/coreapi/api.md"]],
  ["v-2fb8c069","/zh/coreapi/compatible.html",{"title":"兼容API"},["/zh/coreapi/compatible","/zh/coreapi/compatible.md"]],
  ["v-c920d944","/zh/coreapi/variables.html",{"title":"全局变量"},["/zh/coreapi/variables","/zh/coreapi/variables.md"]],
  ["v-53fbd901","/zh/faq/",{"title":"常见问题"},["/zh/faq/index.html","/zh/faq/README.md"]],
  ["v-3562565f","/zh/guide/developtool.html",{"title":"开发工具"},["/zh/guide/developtool","/zh/guide/developtool.md"]],
  ["v-54bb7a44","/zh/guide/documentmanage.html",{"title":"文档管理"},["/zh/guide/documentmanage","/zh/guide/documentmanage.md"]],
  ["v-2e24f7d1","/zh/guide/extenddevelop.html",{"title":"二次开发"},["/zh/guide/extenddevelop","/zh/guide/extenddevelop.md"]],
  ["v-57304a2b","/zh/guide/integrated.html",{"title":"快速集成"},["/zh/guide/integrated","/zh/guide/integrated.md"]],
  ["v-47357bdb","/zh/guide/",{"title":"介绍"},["/zh/guide/index.html","/zh/guide/README.md"]],
  ["v-5472ba06","/zh/guide/renderengine.html",{"title":"渲染引擎"},["/zh/guide/renderengine","/zh/guide/renderengine.md"]],
  ["v-770d9bc8","/zh/moduledevelop/attributes.html",{"title":"组件属性"},["/zh/moduledevelop/attributes","/zh/moduledevelop/attributes.md"]],
  ["v-3189d09c","/zh/moduledevelop/builtin.html",{"title":"内置方法"},["/zh/moduledevelop/builtin","/zh/moduledevelop/builtin.md"]],
  ["v-905ae900","/zh/moduledevelop/commondialog.html",{"title":"公共弹窗"},["/zh/moduledevelop/commondialog","/zh/moduledevelop/commondialog.md"]],
  ["v-3d2734f9","/zh/moduledevelop/commonstyle.html",{"title":"样式规范"},["/zh/moduledevelop/commonstyle","/zh/moduledevelop/commonstyle.md"]],
  ["v-7adb6849","/zh/moduledevelop/communication.html",{"title":"组件通信"},["/zh/moduledevelop/communication","/zh/moduledevelop/communication.md"]],
  ["v-2f650011","/zh/moduledevelop/config.html",{"title":"组件注册"},["/zh/moduledevelop/config","/zh/moduledevelop/config.md"]],
  ["v-57f8d17e","/zh/moduledevelop/container.html",{"title":"容器组件"},["/zh/moduledevelop/container","/zh/moduledevelop/container.md"]],
  ["v-150e1ca6","/zh/moduledevelop/controlcenter.html",{"title":"控制中心"},["/zh/moduledevelop/controlcenter","/zh/moduledevelop/controlcenter.md"]],
  ["v-183fe7bf","/zh/moduledevelop/easystart.html",{"title":"快速上手"},["/zh/moduledevelop/easystart","/zh/moduledevelop/easystart.md"]],
  ["v-6dd4d512","/zh/moduledevelop/env.html",{"title":"组件环境"},["/zh/moduledevelop/env","/zh/moduledevelop/env.md"]],
  ["v-28384a30","/zh/moduledevelop/helpdoc.html",{"title":"组件文档"},["/zh/moduledevelop/helpdoc","/zh/moduledevelop/helpdoc.md"]],
  ["v-17877431","/zh/moduledevelop/infosharing.html",{"title":"信息共享"},["/zh/moduledevelop/infosharing","/zh/moduledevelop/infosharing.md"]],
  ["v-f23870c0","/zh/moduledevelop/introduce.html",{"title":"介绍"},["/zh/moduledevelop/introduce","/zh/moduledevelop/introduce.md"]],
  ["v-7999fe77","/zh/moduledevelop/notifications.html",{"title":"消息提醒"},["/zh/moduledevelop/notifications","/zh/moduledevelop/notifications.md"]],
  ["v-f210076c","/zh/moduledevelop/pageextend.html",{"title":"页面扩展开发"},["/zh/moduledevelop/pageextend","/zh/moduledevelop/pageextend.md"]],
  ["v-3f23e7df","/zh/moduledevelop/responsive.html",{"title":"响应式使用"},["/zh/moduledevelop/responsive","/zh/moduledevelop/responsive.md"]],
  ["v-157d1ce6","/zh/moduledevelop/scaffoldtoc.html",{"title":"脚手架结构"},["/zh/moduledevelop/scaffoldtoc","/zh/moduledevelop/scaffoldtoc.md"]],
  ["v-38606836","/zh/moduledevelop/theme.html",{"title":"主题皮肤"},["/zh/moduledevelop/theme","/zh/moduledevelop/theme.md"]],
  ["v-69dcdbe8","/zh/moduledevelop/unifiedinterface.html",{"title":"统一接口"},["/zh/moduledevelop/unifiedinterface","/zh/moduledevelop/unifiedinterface.md"]],
  ["v-330d1920","/zh/setting/config.html",{"title":"配置项"},["/zh/setting/config","/zh/setting/config.md"]],
  ["v-1da6b104","/zh/setting/mockdata.html",{"title":"mock data"},["/zh/setting/mockdata","/zh/setting/mockdata.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
