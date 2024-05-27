# 脚手架结构
本章节主要介绍所有已经发布的脚手架目录结构。
## idm-module-vue
基于[Vue](https://cn.vuejs.org/)开发的组件脚手架
- **脚手架地址**

  [https://github.com/yunit-code/idm-module-vue/](https://github.com/yunit-code/idm-module-vue/)

- **目录结构**
  ```bash
  └─ idm-module-vue  # <- 脚手架名，建议改成相应的包名
     ├─ scripts  # <- npm脚本目录
     ├─ public  # <- 静态资源文件目录
     |  └─ lib  # <- 核心包目录，此目录的不会被打包进去，只有组件单独访问的时候才会使用
     |  |  └─ idm.base.css  # <- idm提供的基本样式文件，所有组件都需要基于此样式进行开发
     |  |  └─ idm.core.js  # <- idm提供的标准API文件，组件独立运行也能调用idm提供的标准API
     |  |  └─ ... # <- 其他lib文件
     |  └─ static  # <- 静态资源目录
     |  |  └─ attributes  # <- 存放所有组件的属性注册json文件
     |  |  |  └─ IText.json  # <- 文本组件的属性注册文件，开发的时候可删除，这里只是作为参考示例
     |  |  |  └─ ...
     |  |  └─ doc  # <- 存放组件包和组件文档（MD）的目录
     |  |  |  └─ components  # <- 存放组件文档的目录
     |  |  |  |  └─ IText.md  # <- 文本组件的描述文档文件，开发的时候可删除，这里只是作为参考示例
     |  |  |  |  └─ ...
     |  |  |  └─ index.md  # <- 组件包的描述文档文件
     |  |  └─ config.json  # <- 组件注册文件，开发新组件的时候需要修改
     |  |  └─ main.js  # <- 组件包加载入口，此文件不需要做任何改动，否则组件加载可能异常
     |  └─ favicon.ico  # <- ico图标
     |  └─ index.html  # <- 组件包的页面
     └─ src  # <- 源码目录
     |  └─ api  # <- 可用于存放公共api封装的目录
     |  └─ assets  # <- 静态资源文件目录
     |  └─ components  # <- 所有组件存放的目录，目录下一个Vue文件一个组件
     |  |  └─ IText.vue  # <- 文本组件代码，开发的时候可删除，这里只是作为参考示例
     |  |  └─ ...
     |  └─ core  # <- 脚手架核心代码存储目录，开发组件一般不需要修改此处
     |  |  └─ regModule.js  # <- 组件注册的脚本文件，开发组件不需要修改此文件
     |  └─ icons  # <- svg格式的icon自动引入的目录
     |  |  └─ svg  # <- 存放svg图标文件目录
     |  └─ plugins  # <- 组件包所用到的其他插件的加载入口文件
     |  |  └─ antd.js  # <- ant design vue组件按需引入脚本文件，不需要antd的插件可以不用理会
     |  |  └─ antdicons.js  # <- ant design vue图标按需引入脚本文件，不需要antd的插件可以不用理会
     |  └─ main.js  # <- 代码包主入口脚本文件
     |  └─ Main.vue  # <- 代码包主入口Vue文件
     └─ webpack  # <- webpack相关目录
     |  └─ clean.js  # <- 每次打包清除dist文件夹js
     └─ .gitignore
     └─ babel.config.js
     └─ LICENSE
     └─ package.json
     └─ package-lock.json
     └─ README.md
     └─ vue.config.js  # <- 脚手架的配置文件
  ```

## idm-module-react

基于[React](https://reactjs.org/)开发的组件脚手架

- **脚手架地址**

  [https://github.com/web-csq/idm-module-react/](https://github.com/web-csq/idm-module-react/)

::: warning
 由于idm框架使用了`antd-vue`，在`idm-module-react`中可以使用`idm-react-ant`UI组件，避免和idm-core和其他组件中的样式冲突
:::

- **目录结构**
  ```bash
  └─ idm-module-react  # <- 脚手架名，建议改成相应的包名
     ├─ config  # <- 项目打包配置文件
     ├─ scripts  # <- npm脚本目录
     ├─ public  # <- 静态资源文件目录
     |  └─ lib  # <- 核心包目录，此目录的不会被打包进去，只有组件单独访问的时候才会使用
     |  |  └─ idm.base.css  # <- idm提供的基本样式文件，所有组件都需要基于此样式进行开发
     |  |  └─ idm.core.js  # <- idm提供的标准API文件，组件独立运行也能调用idm提供的标准API
     |  |  └─ ... # <- 其他lib文件
     |  └─ static  # <- 静态资源目录
     |  |  └─ attributes  # <- 存放所有组件的属性注册json文件
     |  |  |  └─ DemoText.json  # <- 文本组件的属性注册文件，开发的时候可删除，这里只是作为参考示例
     |  |  |  └─ ...
     |  |  └─ doc  # <- 存放组件包和组件文档（MD）的目录
     |  |  |  └─ components  # <- 存放组件文档的目录
     |  |  |  |  └─ DemoText.md  # <- 文本组件的描述文档文件，开发的时候可删除，这里只是作为参考示例
     |  |  |  |  └─ ...
     |  |  |  └─ index.md  # <- 组件包的描述文档文件
     |  |  └─ config.json  # <- 组件注册文件，开发新组件的时候需要修改
     |  |  └─ main.js  # <- 组件包加载入口，此文件不需要做任何改动，否则组件加载可能异常
     |  └─ favicon.ico  # <- ico图标
     |  └─ index.html  # <- 组件包的页面
     └─ src  # <- 源码目录
     |  └─ api  # <- 可用于存放公共api封装的目录
     |  └─ assets  # <- 静态资源文件目录
     |  └─ components  # <- 所有组件存放的目录，目录下一个Vue文件一个组件
     |  |  └─ DemoText.tsx  # <- 文本组件代码，开发的时候可删除，这里只是作为参考示例
     |  |  └─ ...
     |  └─ core  # <- 脚手架核心代码存储目录，开发组件一般不需要修改此处
     |  |  └─ regModule.ts  # <- 组件注册的脚本文件，开发组件不需要修改此文件
     |  └─ icons  # <- svg格式的icon自动引入的目录
     |  |  └─ svg  # <- 存放svg图标文件目录
     |  └─ utils  # <- 工具类存放目录
     |  └─ index.ts  # <- 代码包主入口脚本文件
     |  └─ index.css  # <- 全局样式文件
     └─ types # <- ts 类型声明文件夹
     └─ .gitignore
     └─ LICENSE
     └─ package.json
     └─ package-lock.json
     └─ README.md
  ```

## idm-module-jquery

基于[jQuery](https://jquery.com/)开发的组件脚手架

- **脚手架地址**

  [https://github.com/web-csq/idm-module-jquery/](https://github.com/web-csq/idm-module-jquery/)

- **目录结构**

  ```bash
  └─ idm-module-jquery  # <- 脚手架名，建议改成相应的包名
    ├─ config  # <- 项目打包配置文件
    ├─ public  # <- 静态资源文件目录
    |  └─ lib  # <- 核心包目录，此目录的不会被打包进去，只有组件单独访问的时候才会使用
    |  |  └─ idm.base.css  # <- idm提供的基本样式文件，所有组件都需要基于此样式进行开发
    |  |  └─ idm.core.js  # <- idm提供的标准API文件，组件独立运行也能调用idm提供的标准API
    |  |  └─ ... # <- 其他lib文件
    |  └─ static  # <- 静态资源目录
    |  |  └─ attributes  # <- 存放所有组件的属性注册json文件
    |  |  |  └─ IText.json  # <- 文本组件的属性注册文件，开发的时候可删除，这里只是作为参考示例
    |  |  |  └─ ...
    |  |  └─ doc  # <- 存放组件包和组件文档（MD）的目录
    |  |  |  └─ components  # <- 存放组件文档的目录
    |  |  |  |  └─ IText.md  # <- 文本组件的描述文档文件，开发的时候可删除，这里只是作为参考示例
    |  |  |  |  └─ ...
    |  |  |  └─ index.md  # <- 组件包的描述文档文件
    |  |  └─ config.json  # <- 组件注册文件，开发新组件的时候需要修改
    |  |  └─ main.js  # <- 组件包加载入口，此文件不需要做任何改动，否则组件加载可能异常
    |  └─ favicon.ico  # <- ico图标
    |  └─ index.html  # <- 组件包的页面
    └─ src  # <- 源码目录
    |  └─ components  # <- 所有组件存放的目录，目录下一个Vue文件一个组件
    |  |  └─ template  # <- 组件所需要的html模板存放目录
    |  |  |  |  └─ IText.html  # <- 组件html模板
    |  |  |  |  └─ IText_other.html  # <- 组件所需要的其他模板，和组件分开，提升渲染速度
    |  |  └─ IText.js  # <- 文本组件代码，开发的时候可删除，这里只是作为参考示例
    |  |  └─ ...
    |  └─ core  # <- 脚手架核心代码存储目录，开发组件一般不需要修改此处
    |  |  └─ regModule.ts  # <- 组件注册的脚本文件，开发组件不需要修改此文件
    |  └─ index.js  # <- 代码包主入口脚本文件
    |  └─ index.scss  # <- 全局样式文件
    └─ package.json
    └─ package-lock.json
    └─ README.md
  ```