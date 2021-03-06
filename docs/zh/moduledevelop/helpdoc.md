# 组件文档
## 什么是组件文档？
组件文档其实就是对当前组件的信息、属性等概要说明，以及如何使用组件等等信息的帮助手册。在IDM框架中，内置了加载对应位置的编写的组件文档，点击属性的帮助标识就能直接定位到对应的属性帮助文档上，从而实现在配置的时候有不明白的属性能直接快速查找文档。

## 文档目录
IDM对文档目录有一定的要求，虽然能自由规定文档目录，但是需要对所有组件的文档目录进行统一并且把文档目录配置到系统配置项中才能正常使用IDM的属性帮助。
:::tip
详细的目录配置信息可参考：[文档管理](../guide/documentmanage.md)
:::
## 文档规范
1. 文档有统一的模板，在模板中建议属性使用内置目录标签`@[compositeAttrToc]`、`@[innerAttrDataToc]`作为组件属性的介绍

2. 文档维护建议使用[文档管理](../guide/documentmanage.md)在线维护然后下载到组件的开发环境代码包中

3. 一个组件包只有一个组件包文档，一个组件只有对应一个组件文档，组件包文档命名为`index.md`，组件的文档命名为`组件类名.md`