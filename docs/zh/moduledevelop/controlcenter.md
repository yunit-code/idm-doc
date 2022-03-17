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
    //urlObject必须包含下面几项：
    //marketModuleId：组件市场ID
    //pageId：页面ID
    //packageid：组件实例ID
    //后端需要获取用户ID的session，如果使用其他方式存储当前用户请在后端自行处理或前端传递相关参数至后端获取。
    
    //上述几项参数可以查看打开控制中心  openControlSetPanel  的方法传递的参数及说明
    let urlObject = IDM.url.queryObject();
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
:::tip
IDM默认不提供后端接口，请自行根据上述请求示例开发后端接口。
:::

