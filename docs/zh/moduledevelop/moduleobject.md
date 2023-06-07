# 组件对象
当IDM调用需要加载的组件时会传递如下信息：
```json
{
    "asName": "文本",
    "callback": ƒ moduleLoadedCallback(module, innerCallback),
    "classId": "idm.componet.basics.text",
    "className": "IText",
    "codeSrc": "basics/1.0.0/static/main.js",
    "comId": "21",
    "comName": "文本",
    "comType": "common",
    "complete": true,
    "datetime": "2021-03-23 12:50:14",
    "env": "production",
    "id": "component_qPAuT5rjdY2TU9x4_inner",
    "idmBroadcastMessage": ƒ (t),
    "idmGetContextValue": ƒ (),
    "idmProps": ƒ (t),
    "idmSetContextValue": ƒ (t),
    "moduleReload": ƒ (),
    "mountComplete": ƒ (),
    "packageid": "component_qPAuT5rjdY2TU9x4",
    "projectNo": "p1000",
    "props": {},
    "compositeAttr": Object,
    "relationId": "ceslayout_001",
    "relationType": "bottom",
    "type": "platform",
    "version": "1.0.0",
    "routerId": "cVL6xqiyE8YHfUZt",
    "pageid": "PAGE_cVL6xqiyE8YHfUZtcVL6xqiyE8YHfUZt",
    "dynamicRenderModuleGroupInitData": ƒ (),
    "removeDynamicRenderModuleGroup": ƒ (),
    "getModuleChildrenPackageId": ƒ (),
}
```
- 数据结构内相关key说明：

|key|说明|
|-|-|
|asName|组件别名|
|callback|IDM加载组件所需要的回调方法，组件包脚手架内不能对此做任何操作，否则会使组件加载异常|
|classId|组件类ID|
|className|组件类名|
|codeSrc|组件的当前版本加载组件代码的入口地址，此地址应该从代码包名开始|
|comId|组件的id，唯一且不重复|
|comName|组件的原名称|
|comType|组件的类型，common：通用型组件，dialog：弹窗类型组件|
|complete|是否加载完成，一般接收组件对象到了都是为true|
|datetime|版本上传的时间|
|env|组件所处的环境，可参考[组件环境](./env.md)|
|id|组件的实例内部ID|
|idmBroadcastMessage|组件包内的接收消息的方法，组件内使用可参考[内置方法](./builtin.md#receivebroadcastmessage)|
|idmGetContextValue|组件包内的获取组件上下文方法，组件内使用可参考[内置方法](./builtin.md#getcontextvalue)|
|idmProps|组件属性更新回调方法，可接收props属性数据包，组件内使用可参考[内置方法](./builtin.md#propdatawatchhandle)|
|idmSetContextValue|组件包内的设置组件上下文方法，组件内使用可参考[内置方法](./builtin.md#setcontextvalue)|
|packageid|组件的实例外部ID|
|projectNo|组件的版本所属项目编号|
|props|组件的属性对象|
|compositeAttr|组件属性配置信息数据|
|relationId|组件关联的ID，也就是相关联的组件实例ID|
|relationType|组件关联的类型，top、bottom、left、right、inner之类的|
|type|组件类型，目前可以为platform、project|
|version|组件的版本编号|
|moduleReload|提供组件重新加载的方法，在组件内可以重复调用此方法加载自己本身，两个参数（packageid:组件实例ID,innerContainerIndex：要加载的内部容器ID，没有不传即可）|
|mountComplete|组件内部全部加载完成需要回调此渲染引擎设置的加载方法，一个参数（moduleObject：当前组件对象，直接回传即可）|
|routerId|路由ID，每次使用内置打开的页面都会有一个新的路由ID|
|pageid|页面ID，当前组件所在页面ID|
|dynamicRenderModuleGroupInitData|动态渲染复制组件组的组件且加载数据，每次只复制一个分组(只有不包含的dynamicModule)，动态渲染会移除之前的重新渲染一遍。五个参数（packageid：组件packageid，要动态渲染复制的父级组件,idmContainerId：要动态渲染的容器索引ID,itemData：动态渲染组件所使用到的数据,containerGroup：是否容器分组，如果是则containerIndex会用 idmContainerId+"_" 前缀这种方式查找,sendMessageKey：发送联动消息的messageKey标识，为空则默认为dynamicRenderModule）|
|removeDynamicRenderModuleGroup|移除动态渲染的组件组，如果删除的是原始组件会找其中一条修改为原始组件，如果是只有一个索引了则不移除数据只移除dom。三个参数（packageid：组件packageid，要动态渲染复制的父级组件,idmContainerId：要动态渲染的容器索引ID,containerGroup：是否容器分组，如果是则containerIndex会用 idmContainerId+"_" 前缀这种方式查找）|
|getModuleChildrenPackageId|获取组件的子组件packageid集合，返回数组。三个参数（packageid：父组件packageid,idmContainerId：要获取所在容器的containerIndex，如果为空则获取所有的,containerGroup：是否容器分组，如果是则containerIndex会用 idmContainerId+"_" 前缀这种方式查找）|