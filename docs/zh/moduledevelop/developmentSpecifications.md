# 开发规范
本章节主要介绍在开发idm组件过程中的规范。

## 目录相关
在开发组件时idm的组件目录结构如下，其他使用的组件与其分开，避免组件多次注册
```
├── src
│   ├── commonComponents // 存放idm组件所需要的组件，例如一些弹窗等..
│   ├── components // 只存放idm组件的.vue，即public/static/config.json里配置的组件
```

## 样式相关
:::warning
在处理组件配置的样式时，要尽量减少对`this.propData`的循环，多次循环易损耗性能
:::

当组件配置属性是`border`,`box`,`font`等，可以查看`IDM.style.*`中的函数使用，[点此进入](../coreapi/api.html#style)

```js
convertAttrToStyleObject(){
    const styleObject = {};
    for (const key in this.propData) {
        const element = this.propData[key];
        switch (key) {
            case "border":
                IDM.style.setBorderStyle(styleObject, element)
                break
    }
}
```

## 函数相关

当组件配置属性是`actionSelect`时，可用`IDM.invokeCustomFunctions`来执行调用，[点此进入介绍](../coreapi/api.html#invokecustomfunctions)

```js
const customArray = IDM.invokeCustomFunctions.apply(this, [this.propData.customShowEvent, {}]);
```

