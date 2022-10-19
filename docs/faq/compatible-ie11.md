# IE 11
:::tip
此页面文档介绍idm框架兼容ie11的方法，IDM核心框架已经做了兼容ie11的处理，如果想要组件包兼容ie11，需要对组件开发的基础脚手架进行修改，请看下面的介绍
:::

### vue
组件开发基础脚手架已经做了默认兼容的处理，如果在使用vue组件开发基础脚手架时，需要对新引入的node_modules使用webpack进行打包，修改vue-cli配置如下

```js
// in vue.config.js
module.exports = {
    transpileDependencies: [
      /[/\\]node_modules[/\\](.+?)?element-ui(.*)/, // 添加新引入的node_modules路径即可
  ],
}

```

### react
create-react-app 使用react-app-polyfill进行兼容处理。在基础脚手架已经添加