# 全局变量

`IDM` 是一个对象，包含整个框架的全局[配置项](../setting/config.md)和框架提供组件使用的标准API。可以在应用启动之后通过`IDM.变量名or变量对象` 访问下列property：
## env_dev
- **类型**：`boolean`
- **用法**：

  ``` js
  IDM.env_dev
  ```

  如果执行结果值为`true`标志着是基于核心框架的模式下运行的

  :::tip
  此属性可以用来判断组件是独立运行的还是在IDM框架下以组件方式加载运行的。
  :::
## setting
- **类型**：`{ [key: string]: string | {} }`

- **用法**：

  ``` js
  //访问当前版本号
  IDM.setting.version
  //访问当前配置的框架所属项目的根目录名称
  IDM.setting.webRoot.default
  //更多属性参考配置项
  ```

  用于获取框架的配置项信息，更多属性请参考 [配置项](../setting/config.md)

