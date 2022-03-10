import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
    port: 8099, //端口号
    base:"/idm-doc/",
    // 站点配置
    lang: 'zh-CN',
    title: 'IDM',
    head: [['link', { rel: 'icon', href: '/idm-doc/favicon.ico' }]],
    description: '一个组件标准化、可视化拖拽低代码的框架-IDM',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US',
            title: 'IDM',
            description: 'Vue-powered Static Site Generator',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'IDM',
            description: '一个组件标准化、可视化拖拽低代码的框架',
        },
    },
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/logo.png',
        locales: {
          '/': {
            // navbar
            navbar: navbar.en,
    
            // sidebar
            sidebar: sidebar.en,
            selectLanguageName: 'English',
          },
          '/zh/': {
            // navbar
            navbar: navbar.zh,
            selectLanguageName: '简体中文',
            selectLanguageText: '选择语言',
            selectLanguageAriaLabel: '选择语言',
    
            // sidebar
            sidebar: sidebar.zh,
            
            // custom containers
            tip: '提示',
            warning: '注意',
            danger: '警告',
    
            // 404 page
            notFound: [
              '这里什么都没有',
              '我们怎么到这来了？',
              '这是一个 404 页面',
              '看起来我们进入了错误的链接',
            ],
            backToHome: '返回首页',
    
            // a11y
            openInNewWindow: '在新窗口打开',
            toggleDarkMode: '切换夜间模式',
            toggleSidebar: '切换侧边栏',
          },
        },
    },
})