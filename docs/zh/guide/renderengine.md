# 渲染引擎
## 引擎地址

地址取决于你把IDM集成包放置的位置，例如我们列出了下面两种模式：
- [产品模式](./integrated.md#产品模式)访问地址：

  `http(s)://?domain/ProjectName/p1000/idm/index.html#/preview/{pageid}/{inPageid}?`

- [项目模式](./integrated.md#项目模式)访问地址：

  `http(s)://?domain/ProjectName/idm/index.html#/preview/{pageid}/{inPageid}?`

:::tip

地址中的 `{pageid}` 为配置的页面ID，可以填写`devpreview`或传已存在配置好的页面ID，如果为`devpreview`则表示是通过开发工具点预览打开预览当前配置的页面

地址中的 `{inPageid}?` 为主页面打开的子页面ID，任何页面都能作为子页面，同理，任何子页面都能作为主页面（第一次打开的称为主页面），如果需要开发单应用请参考[标准API-router](../coreapi/api.md#router)
:::

## 引擎分析

TODO