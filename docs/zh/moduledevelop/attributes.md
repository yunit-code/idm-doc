# 组件属性
:::tip
此页面文档假设你已经阅读过了 [组件快速上手](./easystart.md)。如果你对组件开发还不太了解，推荐你先阅读它。
:::
## 属性文件
在我们的IDM开发工具-[布局介绍](../guide/developtool.md#布局介绍)中提到了属性区用于显示组件的属性，这里显示的属性则是来源于我们在`public\static\attributes\`目录下新建一个与组件类名同名的属性注册文件，以[组件快速上手](./easystart.md#开始开发)中的`Test001.json`为例，结构如下：
```json
{
    "classId": "idm.componet.packagename.test001",
    "comName": "示例001",
    "className": "Test001",
    "comType": "common",
    "comLangue": "vue",
    "compositeAttr": [
        {
            "type": "input",
            "layoutType": "inline",
            "text": "唯一标识",
            "bindKey": "ctrlId",
            "disabled": true,
            "default": "@[packageid]"
        },
        {
            "type": "textarea",
            "layoutType": "inline",
            "text": "文本内容",
            "bindKey": "fontContent",
            "default": "文本内容"
        },
        ...
    ],
    "innerComName": "格子",
    "innerAttr": [
        {
            "type": "input",
            "layoutType": "inline",
            "text": "内部容器属性",
            "bindKey": "innerAttrKey",
            "default": ""
        },
        ...
    ]
}
```
- **基本结构介绍**

  |key|说明|
  |-|-|
  |classId|组件的类ID，在同一环境的IDM框架中保持唯一即可|
  |comName|组件的中文名称|
  |className|组件的类名，请参考[组件类名](./config.md#组件类名)|
  |comType|组件的类型，common：通用型组件，dialog：弹窗类型组件，请根据组件用途谨慎选择|
  |comLangue|组件的技术栈，可以为vue、react、angular、jquery以及其他|
  |compositeAttr|组件的综合属性数组|
  |innerComName|组件内部容器的容器名称，比如如果要在开发工具中能单独设置这个容器的属性，则此属性就是可以定义该容器的名称|
  |innerAttr|组件内部容器的综合属性数组，比如如果要在开发工具中能单独设置这个容器的属性，则此属性就是可以定义该容器有哪些属性值能设置|
  :::tip
  `compositeAttr` 和 `innerAttr` 数组内的单个属性key介绍请继续往下阅读 [属性介绍](./attributes.md#属性介绍)
  :::
## 属性介绍
### Key大全
此处描述组件的单个属性支持设定哪些属性Key，以下列出了支持的属性Key：
- **type**
  - 值类型：string

  属性使用的控件类型，支持的控件请参考[属性控件](./attributes.md#属性控件)
  :::tip
  值为`group`、`inlineGroup`不是控件，是分别代表折叠面板分组、行内分组，他们都有共同的一个`children`属性，用于存放子级属性控件
  :::
- **layoutType**
  - 值类型：string | 'inline' | 'block'

  控件布局的模式，inline：支持一行显示，也就是标题和控件在一行。block：支持换行显示，也就是标题和控件在两行显示
  :::tip
  控件类型为`box`、`border`的只能是`block`，为`table`、`font`的此属性无效
  :::
- **text**
  - 值类型：string

  显示的属性标题名称，布局模式为`inline`的字数不建议超过4个字，如果超过4个字建议使用`block`的布局模式
- **tabText**
  - 值类型：string

  设置表格类型每行数据的标题，支持`[index]`的索引变量（从1开始），例如如果设置了`标题[index]`，在设置的时候设置了两条数据则会显示`标题1`、`标题2`
- **bindKey**
  - 值类型：string

  此属性控件对应的key标识，在开发组件的时候可以根据此key值来获取在开发工具中配置的属性实际值。
  :::tip
  使用方法可以参考[开始开发](./easystart.md#开始开发)的步骤3中的`propData.fontContent`,`fontContent`就代表的是此处设置的key
  :::
- **disabled**
  - 值类型：boolean

  设置此属性控件是否禁用，默认为false不禁用，true代表禁用。
- **default**
  - 值类型：Any

  设置此属性控件的默认值，请根据控件类型来设置对应的默认值。
- **placeholder**
  - 值类型：string

  设置此属性控件的提示内容。
- **display**
  - 值类型：string
  
  设置此属性控件是否显示，这里可以填写表达式，具体请参考[express.eval](../coreapi/api.md#eval)，返回true则显示，返回false不显示
  :::tip
  表达式中可以直接使用当前组件所有的属性值，例如：`@[fontContent!='']`，fontContent为其他属性设置的bindKey
  :::
- **width**
  - 值类型：string

  设置此属性控件的宽度，单位可以为px或%，只对部分控件有效，例如：`richtext`
- **styleType**
  - 值类型：string

  设置此属性控件的风格，只对部分控件有效。
  :::tip
  支持的类型：
  
  radio单选支持两种【按钮方式：button（默认），单选方式：radio】
  :::
- **desc**
  - 值类型：string

  设置此属性控件的帮助提示，鼠标悬浮至问号上的悬浮提示，如果提示内容过多建议在[文档管理](../guide/documentmanage.md)中维护，然后维护`helpAnchorText` 要跳转的锚点文本或为空使用默认模板提供的值，在开发工具中点击问号会自行跳转。
- **helpAnchorText**
  - 值类型：string

  设置点击此属性控件的问号图标跳转的锚点文本，如果文档管理中维护的组件文档使用默认模板则此处可以留空。
- **maxLength**
  - 值类型：number

  设置控件的可输入文字的最大长度，一般只对输入控件有效
- **max**
  - 值类型：number

  设置控件的最大数值，一般只对数字控件有效
- **min**
  - 值类型：number

  设置控件的最小数值，一般只对数字控件有效
- **multiple**
  - 值类型：boolean

  设置提供了多选的是否支持多选模式，目前只有`actionSelect`、`iconSelect`、`pageModuleSelect`、`select``treeSelect`才有效。
- **dataSourceUrl**
  - 值类型：string

  设置控件所需要的数据源地址，目前只有`checkbox`、`numberunit`、`radio`、`select`、`treeselect` 类型的控件才有效。

  :::tip
  数据源返回的格式要求请参考：[属性控件](./attributes.md#属性控件)
  :::
- **dictionary**
  - 值类型：Array

  设置控件所需要的数据字典，目前只有`checkbox`、`numberunit`、`radio`、`select`、`treeselect`、`uploadImage` 类型的控件才有效。
  :::tip
  `uploadImage`的字典为字符串数组格式，主要用于上传图片的时候能默认出现可选择的图库，这里就是图库中图片的地址，例如：`["/resource/idm/img/demo1.png","/resource/idm/img/demo2.png","/resource/idm/img/demo3.png"]`，图片的地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
  :::
- **buttonText**
  - 值类型：string

  设置控件中的按钮显示的文本，目前只有`richtext`类型的控件才有效。
- **children**
  - 值类型：Array

  用于存放子级属性控件，主要用于分组、分层级显示，只有`group`、`inlineGroup`才有效。
- **ctrlAttrObject**
  - 值类型：Object

  用于存放属性控件的综合属性，每个控件所需要的属性可能不同，这里面详细属性介绍可以参考对应的属性控件的介绍。
- **openGroup**
  - 值类型：boolean

  用于设置type=group的时候是否默认展开，默认为折叠状态，只有设置为true的时候才展开。
### 层级结构
IDM开发工具组件的属性控件展示是支持树结构展示形式的，但是展示的层级以及控件是有限定的，格式如下：
```bash
-分组
-----二级分组
---------行内分组
-------------具体的属性控件
---------具体的属性控件（支持全部）
-----二级table
---------三级分组
---------------四级行内分组
--------------------具体的属性控件
---------------具体的属性控件（支持全部）
---------三级行内分组
--------------具体的属性控件
---------具体的属性控件（支持全部）
-----二级行内分组
---------具体的属性控件
-----具体的属性控件（支持全部）
-表格
-----二级分组
---------三级行内分组
-------------具体的属性控件
---------具体的属性控件（支持全部）
-----二级行内分组
---------具体的属性控件
-----具体的属性控件（支持全部）
-行内分组
-----具体的属性控件
-具体的属性控件（支持全部）
```
:::tip
行内分组下都只支持 input、inputNumber、select、treeSelect、switch、datePicker、colorPicker、uploadImage、richText
:::
## 属性控件
目前开发工具右侧属性中支持的控件类型有以下几种：
### actionSelect
- 中文名：动作选择

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_themeCustomFunction.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```json
  [
      {
          "name": "IdmBuiltin_ShowModule",
          "param": {
              "targetModule": [
                  {
                      "moduleId": "ceslayout_001",
                      "moduleName": "页面"
                  }
              ]
          },
          "idmBuiltin": true
      }
  ]
  ```
  :::tip
  返回值示例并不代表一定是此结构，示例中的只是一种情况，实际返回结果是根据选择的动作决定的，需要更加详细请参考：[页面扩展开发](./pageextend.md)
  :::
### border
- 中文名：边框

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_border.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```json
  {
      "border": {
          "top": {
              "style": "solid",
              "width": 6,
              "widthUnit": "px",
              "colors": {"请参考下述colors对象结构"}
          },
          "right": {
              "style": "solid",
              "width": 6,
              "widthUnit": "px",
              "colors": {"请参考下述colors对象结构"}
          },
          "bottom": {
              "style": "solid",
              "width": 6,
              "widthUnit": "px",
              "colors": {"请参考下述colors对象结构"}
          },
          "left": {
              "style": "solid",
              "width": 6,
              "widthUnit": "px",
              "colors": {"请参考下述colors对象结构"}
          }
      },
      "radius": {
          "leftTop": {
              "radius": 6,
              "radiusUnit": "px"
          },
          "rightTop": {
              "radius": 6,
              "radiusUnit": "px"
          },
          "leftBottom": {
              "radius": 6,
              "radiusUnit": "px"
          },
          "rightBottom": {
              "radius": 6,
              "radiusUnit": "px"
          }
      }
  }
  ```
  **colors对象结构：**
  ```json
  {
      "hsl": {
          "h": 0,
          "s": 0.9056090841655702,
          "l": 0.5052490000000001,
          "a": 1
      },
      "hex": "#F30F0F",
      "hex8": "#F30F0FFF",
      "rgba": {
          "r": 243,
          "g": 15,
          "b": 15,
          "a": 1
      },
      "hsv": {
          "h": 0,
          "s": 0.94,
          "v": 0.9533,
          "a": 1
      },
      "oldHue": 0,
      "source": "hsva",
      "a": 1
  }
  ```
### box
- 中文名：盒子边距

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_box.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```json
  {
      "marginTopVal": "",
      "marginRightVal": "auto",
      "marginBottomVal": "5px",
      "marginLeftVal": "auto",
      "paddingTopVal": "9px",
      "paddingRightVal": "",
      "paddingBottomVal": "",
      "paddingLeftVal": ""
  }
  ```
### checkbox
- 中文名：复选框

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_checkboxtest.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```json
  [
      "image",
      "none"
  ]
  ```
- `dictionary`数据字典格式示例：
  ```json
  [
    {
        "label":"显示的文本",
        "value":"字典的值"
    }
  ]
  ```
- `dataSourceUrl`接口返回示例：
  ```json
  {
      "code":"200",
      "type":"success",
      "message":"操作成功",
      "metadata":null,
      "token":"",
      "data":["参考dictionary数据字典"]
  }
  ```
### colorPicker
- 中文名：颜色选择

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_watermarkColor.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```json
  {
      "hsl": {
          "h": 0,
          "s": 0.895734597156398,
          "l": 0.45011575,
          "a": 1
      },
      "hex": "#DA0C0C",
      "hex8": "#DA0C0CFF",
      "rgba": {
          "r": 218,
          "g": 12,
          "b": 12,
          "a": 1
      },
      "hsv": {
          "h": 0,
          "s": 0.945,
          "v": 0.8533,
          "a": 1
      },
      "oldHue": 0,
      "source": "hsva",
      "a": 1
  }
  ```
  :::tip
  如果未修改属性值的时候设置了默认值为字符串，则返回的值也可能是字符串，比如设置了"#DA0C0CFF"，则也是返回此格式，所以开发的时候请注意判断数据类型
  :::
### datePicker
- 中文名：日期选择

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_datepickertest.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```bash
  "2022-03-09T14:45:18.382Z"
  ```
### font
- 中文名：字体

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_font.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```json
  {
      "fontFamily": "impact, 'microsoft yahei'",
      "fontColors": {
          "hsl": {
              "h": 0,
              "s": 0.8957345971563979,
              "l": 0.49585,
              "a": 1
          },
          "hex": "#F00D0D",
          "hex8": "#F00D0DFF",
          "rgba": {
              "r": 240,
              "g": 13,
              "b": 13,
              "a": 1
          },
          "hsv": {
              "h": 0,
              "s": 0.945,
              "v": 0.94,
              "a": 1
          },
          "oldHue": 0,
          "source": "hsva",
          "a": 1
      },
      "fontWeight": "600 Semi Bold",
      "fontStyle": "normal",
      "fontSize": 5,
      "fontSizeUnit": "px",
      "fontLineHeight": 5,
      "fontLineHeightUnit": "px",
      "fontTextAlign": "center",
      "fontDecoration": "underline"
  }
  ```
### grid
- 中文名：网格布局

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_gridtest.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```bash
  "12:12"
  ```
### iconSelect
- 中文名：图标选择

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_iconselecttest.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```json
  [
      "idm-icon-iframe2"
  ]
  ```
  :::tip
  此处可选择的图标选项使用的IDM的[字体图标](../guide/developtool.md#字体图标)
  :::
### input
- 中文名：文本框

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_watermarkFont.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```bash
  "梦创@申龙"
  ```
### layout
- 中文名：弹性布局组合

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_layout.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```json
  {
      "display": "flex",
      "direction": "column",
      "align": "center",
      "justify": "flex-end"
  }
  ```
### inputNumber
- 中文名：数字框

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_watermarkSize.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```bash
  200
  ```
### inputNumberUnit
- 中文名：数字单位组合

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_positionX.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```json
  {
      "inputVal": 6,
      "selectVal": "px"
  }
  ```
- `dictionary`数据字典格式示例：
  ```json
  [
    {
        "label":"显示的文本",
        "value":"字典的值"
    }
  ]
  ```
- `dataSourceUrl`接口返回示例：
  ```json
  {
      "code":"200",
      "type":"success",
      "message":"操作成功",
      "metadata":null,
      "token":"",
      "data":["参考dictionary数据字典"]
  }
  ```
### pageModuleSelect
- 中文名：页面组件选择

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_pagemoduleselecttest.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```json
  [
      {
          "moduleId": "component_rndS0VgbZH7niLuU",
          "moduleName": "选项卡"
      }
  ]
  ```
### radio
- 中文名：单选框

- 效果图：
  - button类型

  <img :src="$withBase('/images/attr/page_attr_watermarkType.jpg')" alt="预览效果" />

  - radio类型

  <img :src="$withBase('/images/attr/page_attr_themeFetchType.jpg')" alt="预览效果" />

- 返回值示例：
  ```bash
  "font"
  ```
### richText
- 中文名：富文本

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_richtexttest.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```html
  '<p>测试例子</p>\n
  <table style="border-collapse: collapse; width: 100%; height: 42px;" border="1">\n
  <tbody>\n
    <tr style="height: 21px;">\n
    <td style="width: 49.6436%; height: 21px;">列1</td>\n
    <td style="width: 49.6436%; height: 21px;">列2</td>\n
    </tr>\n<tr style="height: 21px;">\n
    <td style="width: 49.6436%; height: 21px;">1</td>\n
    <td style="width: 49.6436%; height: 21px;">2</td>\n
    </tr>\n
  </tbody>\n
  </table>'
  ```
  :::tip
  返回值为HTML格式的字符串形式。
  :::
### select
- 中文名：下拉框

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_interfaceContentType.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```bash
  "FormData"
  ```

- ctrlAttrObject属性介绍：
  - mode：`tags` or  `combobox`

  tags：用于设置下拉框支持标签类型的选择，也就是标签可以从下拉框中提供的值选择，也能自己输入，注意：此属性只有在multiple属性为true时候才有效
  
  combobox：用于可静态搜索式的可输入的下拉框类型，注意：此属性只有在multiple属性为false时候才有效

- `dictionary`数据字典格式示例：
  ```json
  [
    {
        "label":"显示的文本",
        "value":"字典的值"
    }
  ]
  ```
- `dataSourceUrl`接口返回示例：
  ```json
  {
      "code":"200",
      "type":"success",
      "message":"操作成功",
      "metadata":null,
      "token":"",
      "data":["参考dictionary数据字典"]
  }
  ```
### slider
- 中文名：数字滑块

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_watermarkOpacity.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```bash
  90
  ```
### switch
- 中文名：开关

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_showMobileStatusBar.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```bash
  true
  ```
### textarea
- 中文名：多行文本框

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_themeDataFiled.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```bash
  "字符串形式"
  ```
### treeSelect
- 中文名：树结构下拉选择框

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_treeselecttest.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  - 单选的时候返回结果：
    ```json
    {
      "title": "Child Node2",
      "value": "0-0-2",
      "key": "0-0-2"
    }
    ```
    
  - 多选的时候返回结果：
    ```json
    [
      {
        "title": "Child Node2",
        "value": "0-0-2",
        "key": "0-0-2"
      },
      {
        "title": "Node2",
        "value": "0-1",
        "key": "0-1"
      }
    ]
    ```
- `dictionary`数据字典格式示例：
  ```json
  [
    {
        "title": "Node1",
        "value": "0-0",
        "key": "0-0",
        "children": [
            {
                "value": "0-0-1",
                "key": "0-0-1",
                "title": "Child Node1",
                "disabled": true
            },
            {
                "title": "Child Node2",
                "value": "0-0-2",
                "key": "0-0-2"
            }
        ]
    },
    {
        "title": "Node2",
        "value": "0-1",
        "key": "0-1"
    }
  ]
  ```
- `dataSourceUrl`接口返回示例：
  ```json
  {
      "code":"200",
      "type":"success",
      "message":"操作成功",
      "metadata":null,
      "token":"",
      "data":["参考dictionary数据字典"]
  }
  ```
### uploadImage
- 中文名：图片上传

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_icoImgUrl.jpg')" style="margin-top:10px" alt="预览效果" />

  <img :src="$withBase('/images/attr/page_attr_icoImgUrl_uploadimg_001.jpg')" style="margin-top:10px" alt="预览效果" />

  <img :src="$withBase('/images/attr/page_attr_icoImgUrl_uploadimg_002.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```bash
  "/p1000/idm/upload/imgname.jpg"
  ```
- ctrlAttrObject属性介绍：
  - width：
  
    图库中的图片宽度，为空则默认为auto
  - height：
  
    图库中的图片高度，为空则默认为auto
  - maxSize：
  
    上传控件最大上传的文件大小，单位为B，默认为无限制
  - suffix：
  
    上传控件可上传的文件类型，默认为无限制
  - desc：
  
    上传控件备注提示内容，默认为`支持${suffix||'jpg,jpeg,png,gif,bmp,ico'}格式文件，请上传尺寸小于${maxSize}的图片`

  - cropper：
  
    是否使用裁剪功能，如果设置为true则上传完图片后会出现裁剪功能（前提是裁剪保存的接口地址[saveCropperBase64ImageUrl](../setting/config.md#savecropperbase64imageurl)正常使用才行）
  - cropperOption:

    用于配置裁剪功能的
    |属性名称|功能|默认值|可选值|
    |-|-|-|-|
    |outputSize | 裁剪生成图片的质量 | `1` | 0.1 ~ 1|
    |outputType | 裁剪生成图片的格式 | jpg (jpg 需要传入jpeg) | `jpeg`, `png`, `webp`|
    |info | 裁剪框的大小信息 | `true` | `true`, `false`|
    |canScale | 图片是否允许滚轮缩放 | `true` | `true`, `false`|
    |autoCrop | 是否默认生成截图框 | `true` | `true`, `false`|
    |autoCropWidth | 默认生成截图框宽度 | 200 | 0 ~ max|
    |autoCropHeight | 默认生成截图框高度 | 200 | 0 ~ max|
    |fixed | 是否开启截图框宽高固定比例 | `false` | `true`, `false`|
    |fixedNumber | 截图框的宽高比例 | `[1, 1]` | `[ 宽度 ,  高度 ]`|
    |full | 是否输出原图比例的截图 | `false` | `true`, `false`|
    |canMove | 上传图片是否可以移动 | `true` | `true`, `false`|
    |canMoveBox | 截图框能否拖动 | `true` | `true`, `false`|
    |original | 上传图片按照原始比例渲染 | `false` | `true`, `false`|
    |centerBox | 截图框是否被限制在图片里面 | `false` | `true`, `false`|
    |high | 是否按照设备的dpr 输出等比例图片 | `true` | `true`, `false`|
    |infoTrue | true 为展示真实输出图片宽高 `false` 展示看到的截图框宽高 | false | `true`, `false`|
    |maxImgSize | 限制图片最大宽度和高度 | `2000` | 0 ~ max|
    |enlarge | 图片根据截图框输出比例倍数 | `1` | 0 ~ max(建议不要太大不然会卡死的呢)|
    |mode | 图片默认渲染方式 | `contain` | `contain` , `cover`, `100px`, `100%` auto|
### table
- 中文名：表格

- 效果图：

  <img :src="$withBase('/images/attr/page_attr_resourceList.jpg')" style="margin-top:10px" alt="预览效果" />

- 返回值示例：
  ```json
  [
      {
          "resourceType": "js",
          "resourceUrl": "hhhh",
          "async": true
      },
      {
          "resourceType": "css",
          "resourceUrl": "dddddd"
      }
  ]
  ```
  :::tip
  返回值示例中的格式是正确的，以数组形式返回，但数组中每个对象里面的具体属性值是根据自己配置的属性返回的。
  :::