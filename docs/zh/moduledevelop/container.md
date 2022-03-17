# 容器组件
## 什么是容器组件？
在传统的开发方式中，一个网页是由HTML的DOM树结构组成的，DOM之间是支持无限层级嵌套的。所以在组件化过程中，实现组件树是必不可少的，因此容器类型的组件也是不可缺失的。在IDM中，容器组件也是等同于一个组件，只不过它能让其他组件放入容器组件定义好的容器内，从而实现传统的DOM树结构的HTML开发。
## HTML结构与属性
容器主要还是由传统的DOM标签组成，只需要包含固定的属性即可实现容器组件，具体如下两种示例：
### 普通容器
普通容器代表只有容器，容器内没有其他任何元素，以下为示例代码：
```html
  <!--
    根目录规范(必须不能为空)：
    idm-ctrl：控件类型 drag_container：容器，drag_container_inlieblock：行内容器，idm_module：非容器的组件
    id：使用moduleObject.id，如果id不使用这个将会被idm-ctrl-id属性替换
    idm-ctrl-id：组件的id，这个必须不能为空
  -->
  <div idm-ctrl="drag_container" :id="moduleObject.id" :idm-ctrl-id="moduleObject.id">
  </div>
```
### 内嵌容器
内嵌容器代表外层是普通组件形式，内部含有容器的元素，可以放下其他组件，以下为示例代码：
```html
  <!--
    根目录规范(必须不能为空)：
    idm-ctrl：控件类型 drag_container：容器，drag_container_inlieblock：行内容器，idm_module：非容器的组件
    id：使用moduleObject.id，如果id不使用这个将会被idm-ctrl-id属性替换
    idm-ctrl-id：组件的id，这个必须不能为空
  -->
  <div idm-ctrl="idm_module" :id="moduleObject.id" :idm-ctrl-id="moduleObject.id" class="idm-columns-layout">
    <!--
      组件内部容器
      增加class="drag_container" 代表内部可存放组件容器 必选
      增加idm-ctrl-inner 代表内部容器组件（可定义单独的属性，只支持定义一类的属性,一个组件内只包含一种） 可选
      idm-ctrl-id：组件的id，这个必须不能为空
      idm-container-index  组件的内部容器索引，不重复唯一且不变，必选，建议从1开始
    -->
    <div class="drag_container" idm-ctrl-inner :idm-ctrl-id="moduleObject.id" idm-container-index="1">
      
    </div>
    <div class="drag_container" idm-ctrl-inner :idm-ctrl-id="moduleObject.id" idm-container-index="2">
      
    </div> -->
  </div>
```
:::warning
容器组件暂时不支持异步请求然后生成的DOM元素，后期会以其他方案解决此问题
:::
## 属性设置
容器也是可以定义组件属性的，普通容器的属性应用与普通组件的属性应用没有任何区别，这里不概述。但是内嵌容器的属性与组件本身的容器属性是共存关系，具体请看下述介绍。
### 内嵌容器属性
组件属性文件中维护对应的容器名称和容器属性即可
```json
{
    "classId": "idm.componet.layout.igrid",
    "comName": "栅格",
    "compositeAttr":[],
    ...
    "innerComName": "格子",
    "innerAttr":[]
}
```
**字段注解：**
- innerComName：
  
  组件内部容器的容器名称，一个组件内只能存在一种容器，且只能有一种容器名称

- innerAttr：

  组件内部容器的容器属性集合，与`compositeAttr`相同方式维护属性即可。

:::tip
上述属性维护的文件参考：[组件开发-快速上手-开始开发](./easystart.md#开始开发)的步骤2即可。
:::
## 应用属性
同样的如果要在组件内应用上在开发工具上设置的属性也有所区别，普通组件和容器是直接把开发工具设置的数据存储在`moduleObject.props.compositeAttr`中，并且是以对象的格式存储。而内嵌容器的属性是存储在`moduleObject.props.innerAttr`中，并且是以数组的格式存储的。以下为实际存储格式示例（[组件对象](./moduleobject.md)中的`props`属性）：
```json
{
    "innerAttr": [
        {
            "containerIndex": "2",
            "dataAttr": {
                "width": "auto",
                "height": "auto",
                "bgColor": {},
                "layout": {
                    "display": "inline-block",
                    "direction": "",
                    "align": "",
                    "justify": ""
                },
                "box": {
                    "marginTopVal": "5px",
                    "marginRightVal": "auto",
                    "marginBottomVal": "",
                    "marginLeftVal": "auto",
                    "paddingTopVal": "3px",
                    "paddingRightVal": "",
                    "paddingBottomVal": "",
                    "paddingLeftVal": ""
                },
                "font": {
                    "fontSize": 7,
                    "fontSizeUnit": "em"
                }
            }
        },
        {
            "containerIndex": "1",
            "dataAttr": {
                "width": "auto",
                "height": "auto",
                "bgColor": {},
                "box": {
                    "marginTopVal": "0px",
                    "marginRightVal": "auto",
                    "marginBottomVal": "0px",
                    "marginLeftVal": "auto",
                    "paddingTopVal": "0px",
                    "paddingRightVal": "0px",
                    "paddingBottomVal": "0px",
                    "paddingLeftVal": "0px"
                }
            }
        }
    ]
}
```
:::tip
`innerAttr`为什么用数组格式呢？因为内嵌容器是可以多个的，并且有DOM的属性`idm-container-index`作为容器索引对应关系。
:::
## 注意事项
- 凡是容器属性的组件在开发工具会自动为其追加样式。
- 容器组件暂时不支持异步请求然后生成的DOM元素。