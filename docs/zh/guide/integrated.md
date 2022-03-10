# 快速集成
## 环境准备
首先得有一个后端环境，不管是java、.net还是php，只要确保后端能正常启动访问即可集成IDM。

[java后端集成包](https://cn.vuejs.org/)
## 手动安装
IDM目前不需要任何环境，只需要[下载最新版本](../CHANGELOG.md)或[历史版本](../CHANGELOG.md)的代码包放到你的后端任意目录下即可完成安装，修改相应的[配置项](../setting/config.html)即可使用

- [IDM最新版下载](../CHANGELOG.md)
- [IDM更新日志](../CHANGELOG.md)

::: tip
二次开发参考： [开源](../guide/extenddevelop.md)
:::
## 基本配置
IDM的配置文件与IDM的index.html页面在同级目录，配置文件名是`setting.js`，配置文件结构如下：
```json
window.$$IDMSetting = {
    //框架的版本
    version: "1.0.0",
    //IDM的文件夹名称
    webRoot: {
        idm:"idm",
        ...
    }
    ...
}
```
::: tip
配置参考： [webRoot](../setting/config.md)
:::
### idm
- 值类型：`string`

- 默认值：`idm`

  IDM的文件夹名称

### default
- 值类型：`string`

- 默认值：`/DreamWeb/`

  框架的所属项目的根目录名称，比如你的应用程序名称为`projectName`,这里应该填写`/projectName/`，如果没有应用程序名称(例如：http://?.com/能直接访问首页)，这里应该直接为`/`

### htmlDir
- 值类型：`string`

- 默认值：`./`

  页面的前置路径，可相对或绝对（示例：`./`或`../idm/`或`/projectName/idm/`）

  ::: tip
  示例中的`idm`为`webRoot.idm`配置的名称，保持一致即可
  :::
### assetsDir
- 值类型：`string`

- 默认值：`./static/`

  打包编译的静态资源文件，相对于当前的页面路径

### moduleDir
- 值类型：`string`

- 默认值：`./idm_modules/`

  开发的组件相对IDM框架所在项目的目录

### platformNo
- 值类型：`string`

- 默认值：`p1000`

  如果你的项目工程模式为产品（平台）->项目（二次开发）模式，则此处代表的是平台的编号，此项相当于一个产品的基本编号，所有IDM核心框架源码编译后的代码都应该放到这个编号下面，如无编号可留空

  ::: warning
  `DreamWeb`的默认为`p1000`,项目组请勿修改，否则造成程序无法访问
  :::
### projectNo
- 值类型：`string`

- 默认值：`p1000`

  如果你的项目工程模式为产品（平台）->项目（二次开发）模式，则此处代表的是项目的编号，此项相当于一个项目的扩展编号，所有上传的文件和配置产生的文件都会保存在此编号的文件夹下面，如果与`platformNo`相同的编号则默认为都是平台的，也就是项目组配置的和自定义开发的组件都是存放在`platformNo`的编号文件夹中。如果工程就是项目，则此处可留空或与`platformNo`相同即可

  ::: warning
  `DreamWeb`的默认为`p1000`,项目组根据项目编号自行修改
  :::
### moduleAbsoluteDir
- 值类型：`string`

- 默认值：`/{projectNo}/idm/idm_modules/`

  组件的存放路径，相对于程序根目录的绝对的路径
  ::: tip
  `{projectNo}`会自动使用`projectNo`属性设置的值进行替换
  :::

## 目录结构
结合上述配置我们再来看看下面两种工程模式的目录结构
### 产品模式
以我们工程ProjectName的名称为产品（平台）->项目（二次开发）模式为例，目录结构如下：
```bash
└─ ProjectName  # <- 工程名
   ├─ p1000  # <- 产品（平台）编号
   |  └─ idm  # <- IDM的文件夹名称
   |     └─ idm_modules  # <- 存放组件代码包的文件夹
   |     |  └─ basics  # <- 基础组件代码包文件夹名
   |     |  |  └─ 1.0.0  # <- 代码包的版本号
   |     |  └─ layout  # <- 布局组件代码包文件夹名
   |     |  └─ ...
   |     └─ idm_pageschema  # <- 存放页面配置schema的文件夹
   |     └─ lib  # <- 框架所需要用到的核心包存储文件夹
   |     └─ static  # <- 框架编译后的资源目录
   |     └─ upload  # <- 配置与开发过程中上传的资源目录
   |     └─ index.html  # <- 核心框架的页面入口
   |     └─ favicon.ico  # <- 图标ico
   |     └─ setting.js  # <- 核心框架的自定义配置文件
   └─ p2580  # <- 项目（二次开发）编号
   |  └─ idm  # <- IDM的文件夹名称
   |     └─ idm_modules  # <- 存放项目（二次开发）的组件代码包的文件夹
   |     └─ idm_pageschema  # <- 存放项目（二次开发）的页面配置schema的文件夹
   |     └─ upload  # <- 存放项目（二次开发）的配置与开发过程中上传的资源目录

```

### 项目模式
以我们工程以ProjectName的为名称的项目模式为例，目录结构如下：
```bash
└─ ProjectName  # <- 工程名
   └─ idm  # <- IDM的文件夹名称
   |  └─ idm_modules  # <- 存放组件代码包的文件夹
   |  |  └─ basics  # <- 基础组件代码包文件夹名
   |  |  |  └─ 1.0.0  # <- 代码包的版本号
   |  |  └─ layout  # <- 布局组件代码包文件夹名
   |  |  └─ ...
   |  └─ idm_pageschema  # <- 存放页面配置schema的文件夹
   |  └─ lib  # <- 框架所需要用到的核心包存储文件夹
   |  └─ static  # <- 框架编译后的资源目录
   |  └─ upload  # <- 配置与开发过程中上传的资源目录
   |  └─ index.html  # <- 核心框架的页面入口
   |  └─ favicon.ico  # <- 图标ico
   |  └─ setting.js  # <- 核心框架的自定义配置文件
```