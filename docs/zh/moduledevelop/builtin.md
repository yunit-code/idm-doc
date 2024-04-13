# 内置方法
组件内都默认提供了一些基础方法，只需要在组件内增加即可实现对应的功能，然后在方法内实现逻辑即可。
## propDataWatchHandle
其主要作用在于开发工具修改属性的时候能实时渲染应用到组件上，每次修改属性都会调用此方法，如下示例：
```vue
<template>
</template>
<script>
export default {
  name: 'Demo',
  data(){
    return {
      propData:this.$root.propData.compositeAttr||{}
    }
  },
  created() {
  },
  methods:{
    /**
     * 提供父级组件调用的刷新prop数据组件
     */
    propDataWatchHandle(propData){
      this.propData = propData.compositeAttr||{};
    }
  }
}
</script>
<style lang="scss"  scoped>
</style>
```
## receiveBroadcastMessage
用于接收组件之间通信的消息，如下示例：
```vue
<template>
</template>
<script>
export default {
  name: 'Demo',
  data(){
    return {
    }
  },
  created() {
  },
  methods:{
    /**
     * 组件通信：接收消息的方法
     */
    receiveBroadcastMessage(object) {
      console.log("组件收到消息", object);
    }
  }
}
</script>
<style lang="scss"  scoped>
</style>
```
|key|说明|
|-|-|
|type|消息类型，内置协议值参考[组件通信-内置通信协议](./communication.md#内置通信协议)|
|message|实际的消息对象|
|messageKey|消息的key值|
|isAcross|如果为true则代表发送来源是其他页面的组件，默认为false|
|triggerType|消息变化触发的类型值，AT：自动触发的，MT：手动切换触发的，OT：其他方式触发的|
|...|其他自定义的类型值，可以参考发送的时候携带的额外参数|

:::tip
发送与接收详细说明请参考：[组件通信](./communication.md)
:::
## setContextValue
用于设置组件的上下文内容值，组件内根据需要自行对数据进行处理显示，如下示例：
```vue
<template>
</template>
<script>
export default {
  name: 'Demo',
  data(){
    return {
    }
  },
  created() {
  },
  methods:{
    /**
     * 设置组件的上下文内容值
     */
    setContextValue(object) {
      console.log("接收到的内容值", object);
    }
  }
}
</script>
<style lang="scss"  scoped>
</style>
```
|key|说明|
|-|-|
|type|定义的类型，已知类型：pageCommonInterface（页面统一接口返回值）|
|key|数据key标识，页面每个接口设置的数据集名称，方便识别获取自己需要的数据|
|data|数据集，内容为：字符串 or 数组 or 对象 or 任意格式数据|
:::tip
目前页面属性配置的[页面接口](../guide/developtool.md#页面接口子表interfacelist)都会回调结果集给所有组件的此方法，并且type类型值为`pageCommonInterface`。
:::
## getContextValue
用于获取组件的上下文内容值，组件内根据需要自行对数据进行处理返回，如下示例：
```vue
<template>
</template>
<script>
export default {
  name: 'Demo',
  data(){
    return {
    }
  },
  created() {
  },
  methods:{
    /**
     * 获取需要返回的值，例如：{noVerify:true} 代表组件内部不进行校验
     */
    getContextValue(object) {
      //此返回结果仅作为示例，并不固定。
      let result = {
        type: "success",
        message: "",
        key: this.propData.formFiledKey || this.propData.ctrlId,
      };
      return result;
    }
  }
}
</script>
<style lang="scss"  scoped>
</style>
```
表单类型的控件建议返回下面统一格式，后端处理从而更加方便，如下示例：
```json
{
    "type":"success",
    "message":"type为失败的时候原因",
    "key":"定义的key标识，一般组件定义了一个属性，然后获取指定属性填写的值，这样返回后就能识别对应的字段或者元数据",
    "data":"要返回的值，内容为：字符串 or 数组 or 对象 or 任意格式数据",
}
```