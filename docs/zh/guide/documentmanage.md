# 文档管理
文档管理即为组件的帮助文档创建与编辑，基于[markdown](https://www.runoob.com/markdown/md-tutorial.html)语法与[v-md-editor](http://ckang1229.gitee.io/vue-markdown-editor/zh/)技术框架开发的一款专用于管理IDM的组件代码包的文档管理工具。
## 快速访问

访问地址取决于你把IDM集成包放置的位置，例如我们列出了下面两种模式：
- [产品模式](./integrated.md#产品模式)访问地址：

  `http(s)://?domain/ProjectName/p1000/idm/index.html#/document`

- [项目模式](./integrated.md#项目模式)访问地址：

  `http(s)://?domain/ProjectName/idm/index.html#/document`

## 布局介绍
本章节主要介绍了文档管理工具的结构和功能，帮助您快速使用文档管理工具管理组件文档。
<div style="margin-top:10px"></div>
<img :src="$withBase('/images/document_tool_mark_01.png')" alt="布局介绍" />

| 序号 | 名称 | 说明 |
| ------------- | ------------- | ------------- |
| 1 | 代码包  | 用于切换显示当前操作指定代码包、指定版本的代码包的所有组件列表与文档，切换后组件列表会显示选定的代码包的组件列表  |
| 2 | 组件列表  | 组件列表第一行为代码包的文档，此文档为代码包的介绍，下面的则为此代码包版本的所有可用的组件  |
| 3 | 文档编辑区  | 此处为组件列表选定某个组件后显示的可编辑的文档，如果该文档已存在则会直接回显可再次进行编辑修改，如果没有该文档会根据模板进行初始化，模板请参考 [文档模板](./documentmanage.md#文档模板)  |
| 4 | 保存与下载  | 用于保存当前编辑的文档至对应的服务器目录中，也可下载当前文档到对应的组件开发环境中  |

:::tip
因保存文档是运行在生产环境上，但是开发环境下也会默认提供文档，因此保存完后建议下载文档到对应版本的开发环境下，相关路径配置信息参考：[文档管理配置](../setting/config.md#document)
:::

## 文档模板
文档模板会直接初始化为模板格式的对应的代码包或组件的文档，只需要往初始化后的文档填写实际的文档内容即可，无需再单独编写目录。
### 代码包文档模板
模板路径为：

`idm/static/doctemp/codepackageMDTemp.md`

模板内容为：
```md
# 代码包说明
~~当前为自动生成的模板，保存前请删除此行~~
本节将介绍包名为 **@[className]** 的代码包。
## 特性
- 特性说明1
- 特性说明2
## 包名
@[className]
## 版本
@[version]
## 组件列表
<!-- moduleList：组件列表，生成模板格式：序号. 组件名称（组件ClassName）—组件ClassId -->
@[moduleList]
```
:::tip
`@[a.b]`或`@[a[0].b]`为获取组件信息的表达式，可填写的表达式参考组件高级开发的 [组件注册](../moduledevelop/config.md)
:::
### 组件文档模板
模板路径为：

`idm/static/doctemp/moduleMDTemp.md`

模板内容为：
```md
# @[comName]
~~当前为自动生成的模板，保存前请删除此行~~
这里用来描述组件的具体作用说明，描述内容建议简明扼要。
## 组件类名（className）
@[className]
## 组件类ID（classId）
@[classId]
## 组件开发语言（comLangue）
@[comLangue]
## 组件类型（comType）
@[comType]
## 所在代码包版本
@[versionObject.className]@@[versionObject.version]
## 组件属性
<!-- compositeAttrToc：综合属性目录，生成模板格式：会根据层级生产对应的h3、h4、h5、h6 -->
@[compositeAttrToc]
<!-- innerAttrDataToc：内部容器属性目录，生成模板格式：会根据层级生产对应的h3、h4、h5、h6 -->
@[innerAttrDataToc]
```
:::tip
`@[a.b]`或`@[a[0].b]`为获取组件信息的表达式，可填写的表达式参考组件高级开发的 [组件注册](../moduledevelop/config.md) 和 [组件属性](../moduledevelop/attributes.md)
:::