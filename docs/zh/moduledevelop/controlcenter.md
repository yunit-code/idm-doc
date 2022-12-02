# 控制中心
## 什么是控制中心？
在IDM的开发工具中有组件的属性设置功能，这个是相对于配置页面的时候给组件初始设置的。而控制中心的含义就是在渲染引擎上也能对组件的功能进行定制化设置，这个设置可以跟用户进行绑定的，也可以理解为控制中心就是每个用户对每个组件进行个性化定制的功能页面。因为跟用户有关，所以存储必须涉及到后端，需要结合后端才能正常使用IDM提供的控制中心，如果没有这方面的需求可以略过此文档。
## 组件包
IDM已基于[ant design vue](https://www.antdv.com/components/modal-cn/)的UI组件开发了控制中心页面配置的组件的包，可以通过直接安装此包并且配合后端就能实现控制中心设置，或者也可以使用传统页面开发方式开发一个控制中心页面，然后再通过下面的[使用方法](./controlcenter.md#使用方法)进行相应的配置即可。

- **组件内包含的控件**
  - 文本框：input
  - 数字框：inputNumber
  - 滑动输入条：slider
  - 下拉框：select
  - 颜色选择器：colorPicker
  - 文件上传框：upload
  - 按钮组：radioButton
  - 单选框：radio
  - 复选框：checkbox
  - 开关：switch
  - 多行文本框：textarea
  - 日期：datePicker
  - 树结构下拉框：treeSelect
  - 面板选择：panelSelect
  - 用户/部门选择：userSelect
  - 代码选择：codeSelect
  - 时间选择：timePicker
  - 级联选择：cascader
### 组件数据结构
```json
[{
  "id":"属性的ID，唯一",
  "attrCname":"属性的标题名称",
  "attrCode":"属性唯一的标识，用于存储对应的数据",
  "useCtrlId":"使用的控件标识，根据这里判断为何种控件，也就是使用上面“组件内包含的控件”",
  "useCtrlAttr":"json格式的字符串"
}]
```
### 组件控件属性[useCtrlAttr]介绍
此处用于介绍上述 [组件数据结构](./controlcenter.md#组件数据结构) 中的useCtrlAttr结构，通过维护此处属性能控制各个内部控件的各种状态等。

**面板选择示例**
  ```json
  {
    "desc":"显示备注的",
    "rules":[{ "required": true, "message": "必填项，请输入" }],
    "dataType":"code",
    "codeId":"211119180404fD2g1pqxcFIbG2PMyJo",
    "showFiledName":"data.codeList[0].children",
    "replaceFields":{
      "title":"showName",
      "label":"showName", 
      "key":"id", 
      "value": "id",
      "children":"children"
    }
  }
  ```

**部门/用户选择示例**
  ```json
  {
    "desc":"显示备注的",
    "rules":[{ "required": true, "message": "必填项，请输入" }],
    "dataType":"url",
    "interfaceUrl":"/ctrl/user/select/data?metaKey=C-FW-0034&t=1638256325206&moduleId=190223111129QHn5ZVAru9uvSp7Oqjh&customUserSelectScope=1812101427453OGYKdWUZ8DzdsBd5dS&userProperty=S-BASE-0005&userPropertyText=%E5%88%9B%E5%BB%BA%E9%83%A8%E9%97%A8ID",
    "interfaceType":"post",
    "customParam":{
      "types":"person,privateGroup,orgLV1",
      "action":"self_org",
      "rootObject":"2"
    },
    "showFiledName":"data.departmentList",
    "replaceFields":{
      "title":"showName",
      "label":"showName", 
      "key":"id", 
      "value": "id",
      "children":"children"
    },
    "showCheckedStrategy":"SHOW_ALL"
  }
  ```
#### 通用属性

##### desc
用于设置表单项的标题最右侧问号提示语，提示该表单项的作用等等。

- 值类型：`string`

##### rules
用于设置该控件的校验规则，可参考 [antdv-校验规则](https://1x.antdv.com/components/form-cn/#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99)

- 值类型：`Array<Object>`

- 示例：
```json
{
  "rules":[{ "required": true, "message": "必填项，请输入" }]
}
```

##### placeholder
用于设置表单项的控件输入提示语等等。

- 值类型：`string`

##### allowClear
用于设置输入选择控件是否可以带有清空图标或按钮。

- 值类型：`boolean`


**各种控件特有属性介绍**
#### 文本框【input】

##### maxLength
用于设置文本框表单项的最大输入文字长度等等。

- 值类型：`number`

#### 数字框【inputNumber】

##### min
用于设置数字框表单项的最小值。

- 值类型：`number`

##### max
用于设置数字框表单项的最大值。

- 值类型：`number`

#### 滑动输入条【slider】

##### min
用于设置滑动输入条表单项的最小值。

- 值类型：`number`

##### max
用于设置滑动输入条单项的最大值。

- 值类型：`number`

##### step
用于设置滑动输入条步长值，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。

- 值类型：`number`

##### marks
用于设置滑动输入条单项的刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式

- 值类型：`object`

##### vertical
用于设置滑动输入条单项的方向，值为 true 时，Slider 为垂直方向。

- 值类型：`Boolean`

#### 多行文本框【textarea】

##### autosize
用于设置多行文本框自适应高度，可设置为 true|false 或对象：{ minRows: 2, maxRows: 6 }。

- 值类型：`Boolean`|`object`

#### 日期【datePicker】

##### mode
用于设置日期面板的状态	time|date|month|year|decade

- 值可为：`time|date|month|year|decade`

##### showTime
用于设置日期是否增加时间选择功能，Object配置项请参考[time-picker-api](https://1x.antdv.com/components/time-picker-cn/#API)

- 值类型：`Boolean`|`object`

##### format
用于设置日期格式，例如：YYYY-MM-DD HH:mm:ss

- 值类型：`String`

#### 时间选择【timePicker】

##### format
用于设置日期格式，例如：HH:mm:ss

- 值类型：`String`

#### 下拉框【select】

##### mode
用于设置下拉框的状态

- 值可为：'default' | 'multiple' | 'tags' | 'combobox'

##### options
用于设置下拉框的数据选项，此处可设置静态选项。

- 值类型：`[{value,title,key,disabled}]`

##### dataType
数据请求类型，code：请求数据代码值，options：代表直接使用上述维护的静态数据

- 值类型：`String`|'code'|'options'

##### codeId
用于维护数据代码值请求的code参数值，这一块需要配合属性“数据代码值接口地址”使用

- 值类型：`String`

##### showFiledName
设置下拉选项数据要使用的结果字段，支持a.b.c或a[0].b.c[1].d或[0].a，例如：`data.codeList`

- 值类型：`String`

##### replaceFields
用于维护修改下拉框对应显示结果哪些字段

- 值类型：`Object`

- 示例：
```json
{title:'title', key:'key', value: 'value', disabled:'disabled' }
```

#### 按钮组【radioButton】

##### options
用于设置按钮组的数据选项，此处可设置静态选项。

- 值类型：`[{value,title,key,disabled}]`

##### groupName
用于设置按钮组的分组名称。

- 值类型：`String`

##### buttonStyle
用于设置按钮组的风格样式，目前有描边和填色两种风格outline | solid

- 值类型：`String`

##### dataType
数据请求类型，code：请求数据代码值，options：代表直接使用上述维护的静态数据

- 值类型：`String`|'code'|'options'

##### codeId
用于维护数据代码值请求的code参数值，这一块需要配合属性“数据代码值接口地址”使用

- 值类型：`String`

##### showFiledName
设置选项数据要使用的结果字段，支持a.b.c或a[0].b.c[1].d或[0].a，例如：`data.codeList`

- 值类型：`String`

##### replaceFields
用于维护修改选项对应显示结果哪些字段

- 值类型：`Object`

- 示例：
```json
{title:'title', key:'key', value: 'value', disabled:'disabled' }
```

#### 单选框&复选框【radio&checkbox】

##### options
用于设置控件的数据选项，此处可设置静态选项。

- 值类型：`[{value,title,key,disabled}]`

##### groupName
用于设置控件的分组名称。

- 值类型：`String`

##### dataType
数据请求类型，code：请求数据代码值，options：代表直接使用上述维护的静态数据

- 值类型：`String`|'code'|'options'

##### codeId
用于维护数据代码值请求的code参数值，这一块需要配合属性“数据代码值接口地址”使用

- 值类型：`String`

##### showFiledName
设置选项数据要使用的结果字段，支持a.b.c或a[0].b.c[1].d或[0].a，例如：`data.codeList`

- 值类型：`String`

##### replaceFields
用于维护修改选项对应显示结果哪些字段

- 值类型：`Object`

- 示例：
```json
{title:'title', key:'key', value: 'value', disabled:'disabled' }
```
#### 树结构下拉框&用户/部门/代码选择【treeSelect&userSelect&codeSelect】

##### options
用于设置控件的数据选项，此处可设置静态选项。

- 值类型：`[{value,title,key,disabled,children:[{value,title,key}]}]`

##### replaceFields
用于维护修改选项对应显示结果哪些字段

- 值类型：`Object`

- 示例：
```json
{title:'title', key:'key', value: 'value', disabled:'disabled',children:'children' }
```
##### treeDataSimpleMode
用于设置数据显示模式，默认为：false，设置使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', label:"test1",...},...], pId 是父节点的 id)

- 值类型：`Boolean`

##### showCheckedStrategy
设置选中回填方式，默认为：SHOW_CHILD，定义选中项回填的方式。SHOW_ALL: 显示所有选中节点(包括父节点). SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点.

- 值类型：`String`

##### dataType
数据请求类型，code：请求数据代码值，options：代表直接使用静态数据，url：接口地址，sql：sql语句方式

- 值类型：`String`|'code'|'options'|'url'|'sql'

##### codeId
用于维护数据代码值请求的code参数值，这一块需要配合属性“数据代码值接口地址”使用

- 值类型：`String`

##### showFiledName
设置选项数据要使用的结果字段，支持a.b.c或a[0].b.c[1].d或[0].a，例如：`data.codeList`

- 值类型：`String`

##### interfaceUrl
选项数据的接口地址

- 值类型：`String`

##### metaKey
sql语句元数据Key，这一块需要配合属性“sql执行接口地址”使用

- 值类型：`String`

##### customParam
自定义POST参数，对象格式：{action: self_org,types: person,privateGroup,orgLV1,rootObject: 2,async: true}

- 值类型：`Object`

#### 级联选择&面板选择【cascader&panelSelect】

##### options
用于设置控件的数据选项，此处可设置静态选项。

- 值类型：`[{value,label,disabled,children:[{value,title,key}]}]`

##### replaceFields
用于维护修改选项对应显示结果哪些字段

- 值类型：`Object`

- 示例：
```json
{title:'title', key:'key', value: 'value', disabled:'disabled',children:'children' }
```

##### dataType
数据请求类型，code：请求数据代码值，options：代表直接使用静态数据，url：接口地址，sql：sql语句方式

- 值类型：`String`|'code'|'options'|'url'|'sql'

##### codeId
用于维护数据代码值请求的code参数值，这一块需要配合属性“数据代码值接口地址”使用

- 值类型：`String`

##### showFiledName
设置选项数据要使用的结果字段，支持a.b.c或a[0].b.c[1].d或[0].a，例如：`data.codeList`

- 值类型：`String`

##### interfaceUrl
选项数据的接口地址

- 值类型：`String`

##### metaKey
sql语句元数据Key，这一块需要配合属性“sql执行接口地址”使用

- 值类型：`String`

#### 文件上传框【upload】

##### buttonName
按钮名称

- 值类型：`String`

##### inputFileName
发到后台的文件参数名,默认为  file

- 值类型：`String`

##### uploadAction
上传的接口地址，为空或不填则使用属性“文件上传接口地址”的接口地址

- 值类型：`String`

##### listType
上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card

- 值类型：`String`

##### multipleMode
是否多选模式，默认为false，设置为true则多选

- 值类型：`Boolean`

##### uploadSuffix
接受上传的文件类型，默认为：image/*

- 值类型：`String`

##### showFiledName
设置要使用的结果字段，支持a.b.c或a[0].b.c[1].d或[0].a，例如：`data.codeList`

- 值类型：`String`

:::tip
控制中心组件详细配置与讲解可参考组件包内组件说明文档

控制中心组件包下载：[controlCenter](https://github.com/yunit-code/controlCenter)
:::
## 使用方法
控制中心的整个使用方法过程：

1. 利用上面组件包的IControlSettingPanel组件配置页面
2. 在IDM的配置文件配置项-[moduleControlCenterSettingUrl](../setting/config.md#modulecontrolcentersettingurl)统一配置上面的页面地址
3. 对需要动态属性的组件新增属性数据
4. 在需要动态属性的组件内的设置入口注册调起控制中心页面事件，请参考[标准API-openControlSetPanel](../coreapi/api.md#opencontrolsetpanel)
5. 在组件内获取用户个性化的数据应用到组件需要的地方即可
### 控制中心配置
如果要使用IDM提供的抽屉式控制中心功能，需要在[页面属性-控制中心设置](../guide/developtool.md#控制中心设置)进行正确的配置，默认是使用全局默认配置[moduleControlCenterSettingUrl](../setting/config.md#modulecontrolcentersettingurl)，可以对默认配置进行修改。
### 打开控制中心
在需要打开的地方调用openControlSetPanel即可，请参考[标准API-openControlSetPanel](../coreapi/api.md#opencontrolsetpanel)
### 获取定制结果
在组件内获取用户设置的结果然后应用到组件上，获取接口如下：
```js
var fetchUserSetDataUrl = "/ctrl/idm/console/fetchMarketModuleAttrUserSetData";
IDM.http.get(fetchUserSetDataUrl, this.commonParam())
.then((res) => {
    //每个用户的定制结果
    var resData = res.data;
});

function commonParam() {
    let urlObject = IDM.url.queryObject();
    //urlObject必须包含下面几项：
    //marketModuleId：组件市场ID
    urlObject.marketModuleId = this.moduleObject.comId;
    //pageId：页面ID
    urlObject.pageId = IDM.broadcast.pageModule.id;
    //packageid：组件实例ID
    urlObject.packageid = this.moduleObject.packageid;
    //后端需要获取用户ID的session，如果使用其他方式存储当前用户请在后端自行处理或前端传递相关参数至后端获取。
    
    //上述几项参数可以查看打开控制中心  openControlSetPanel  的方法传递的参数及说明
    var params = {
    pageId:
        window.IDM.broadcast && window.IDM.broadcast.pageModule
        ? window.IDM.broadcast.pageModule.id
        : "",
    urlData: JSON.stringify(urlObject),
    };
    return params;
}
```
或者直接使用IDM提供的[标准API-controlcenter](../coreapi/api.md#controlcenter)获取，使用方法如下：
```js
IDM.controlcenter.getModuleAttrList({
    marketModuleId: this.moduleObject.comId,
    pageId: IDM.broadcast ? IDM.broadcast.pageModule.id : "",
    packageid: this.moduleObject.packageid
  },function(res){

  },function(err){
    
  })
// 或者
IDM.controlcenter.getModuleAttrInstance({
    marketModuleId: this.moduleObject.comId,
    pageId: IDM.broadcast ? IDM.broadcast.pageModule.id : "",
    packageid: this.moduleObject.packageid
  }).then((res) => {
      //成功结果
  }).catch((err) => {
      //失败结果
  })
```
:::tip
IDM默认不提供后端接口，请自行根据上述请求示例开发后端接口。
:::

