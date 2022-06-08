# 快速上手
因为组件开发无限制您使用哪种技术栈，所以在开始之前，请根据你即将要开发的组件使用哪种技术栈来进行针对性的了解以下文档
## 环境准备
### Vue
首先得有 node，并确保 node 版本是 14.17 或以上。
```sh
node -v
v14.17.0
```
### React
首先得有 node，并确保 node 版本是 14.17 或以上。
```sh
node -v
v14.17.0
```
### Jquery
无需准备任何环境
## 脚手架初始化
- **步骤1**: 创建并进入一个新目录

```bash
mkdir packageName
cd packageName
```
- **步骤2**: 初始化脚手架

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```bash
git clone https://github.com/yunit-code/idm-module-vue.git
```

  </CodeGroupItem>
</CodeGroup>

- **步骤3**: 安装脚手架依赖

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```bash
npm i
```

  </CodeGroupItem>
</CodeGroup>

- **步骤4**: 在本地启动服务器来开发你的组件

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```bash
npm run serve
```

  </CodeGroupItem>
</CodeGroup>

- **步骤5**: 在浏览器中输入`http://localhost:8080/index.html#/?className=IText`地址访问您的组件
  :::tip
  参数className为组件的类名
  :::

## 开始开发
在开始开发之前建议先了解下 [脚手架目录结构](./scaffoldtoc.md)
### Vue
- **步骤1**: 在`public\static\config.json`文件中注册一个新的组件类名为`Test001`的组件。
```json
{
    "version": "1.0.0",
    "lasttime": "2022-3-7 18:10:21",
    "author": "申龙",
    "className": "packageName",
    "module": [
        {
            "classId": "idm.componet.packagename.test001",
            "comName": "示例001",
            "className": "Test001",
            "comType": "common",
            "comLangue": "vue"
        }
    ]
}
```
- **步骤2**: 在`public\static\attributes\`目录下新建一个与组件类名同名的`Test001.json`属性注册文件。
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
        }
    ]
}
```
- **步骤3**: 在`src\components\`目录下新建一个与组件类名同名的`Test001.vue`组件代码文件。
```vue
<template>
  <!--
    根目录规范(必须不能为空)：
    idm-ctrl：控件类型 drag_container：容器，drag_container_inlieblock：行内容器，idm_module：非容器的组件
    id：使用moduleObject.id，如果id不使用这个将会被idm-ctrl-id属性替换
    idm-ctrl-id：组件的id，这个必须不能为空
  -->
  <div idm-ctrl="idm_module"
   :id="moduleObject.id" 
   :idm-ctrl-id="moduleObject.id" 
   :title="propData.htmlTitle?propData.fontContent:''">
    {{propData.fontContent}}
  </div>
</template>

<script>
export default {
  name: 'Test001',
  data(){
    return {
      moduleObject:{},
      propData:this.$root.propData.compositeAttr||{}
    }
  },
  props: {
  },
  created() {
    this.moduleObject = this.$root.moduleObject
  },
  mounted() {
  },
  destroyed() {},
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
```
- **步骤4**: 在浏览器中输入`http://localhost:8080/index.html#/?className=Test001`地址访问您的组件
### React
- **步骤1**: 在`public\static\config.json`文件中注册一个新的组件类名为`DemoText`的组件。
```json
{
    "version": "1.0.0",
    "lasttime": "2022-6-6 18:10:21",
    "author": "申龙",
    "className": "packageName",
    "module": [
        {
            "classId": "idm.componet.packagename.demoText",
            "comName": "测试文本",
            "className": "DemoText",
            "comType": "common",
            "comLangue": "react"
        }
    ]
}
```
- **步骤2**: 在`public\static\attributes\`目录下新建一个与组件类名同名的`DemoText.json`属性注册文件。
```json
{
    "classId": "idm.componet.packagename.demoText",
    "comName": "测试文本",
    "className": "DemoText",
    "comType": "common",
    "comLangue": "react",
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
        }
    ]
}
```
- **步骤3**: 在`src\components\`目录下新建一个与组件类名同名的`DemoText.tsx`组件代码文件。
```tsx
import { Component } from 'react'
class DemoText extends Component {
  constructor(props) {
      super(props)
      this.state = {
        propData: {
          htmlTitle: '测试文本'
        },
        ...props,
      }
  }

  propDataWatchHandle(propData){
    this.setState({ ...this.state, propData })
  }
  render() {
    const { id } = this.props
    const { propData } = this.state
    return <div idm-ctrl="idm_module" idm-ctrl-id={ id }>
      <div>{propData.htmlTitle}</div>
      <div>{propData.text}</div>
    </div>
  }
}
export default DemoText

```
- **步骤4**: 在浏览器中输入`http://localhost:3000/?className=DemoText`地址访问您的组件
### Jquery
TODO
## 构建及部署
### Vue
- **步骤1**: 执行build打包命令
```bash
npm run build
```
- **步骤2**: 把`dist`下面的全部文件拷贝到配置项[moduleDir](../setting/config.md#moduledir)配置的目录下，一般情况直接到目录`idm_modules/packageName(包名)/1.0.0(版本号)/`下直接粘贴即可。然后在组件市场中注册（如果已经把配置项[componentMarketUrl](../setting/config.md#componentmarketurl)改成了接口形式）即可，如果接口为空则在mockurl配置项[componentMarketUrl](../setting/config.md#componentmarketurl-1)的数据注册即可。
  :::tip
  建议搭配IDM页面控制台就能实现组件包自动化更新维护，只要上传zip压缩包即可实现整个过程的更新，目前已内部使用，敬请期待公开产品！！
  :::
### React
- **步骤1**: 执行build打包命令
```bash
npm run build
```
- **步骤2**: 把`build`下面的全部文件拷贝到配置项[moduleDir](../setting/config.md#moduledir)配置的目录下，一般情况直接到目录`idm_modules/packageName(包名)/1.0.0(版本号)/`下直接粘贴即可。然后在组件市场中注册（如果已经把配置项[componentMarketUrl](../setting/config.md#componentmarketurl)改成了接口形式）即可，如果接口为空则在mockurl配置项[componentMarketUrl](../setting/config.md#componentmarketurl-1)的数据注册即可。
### Jquery
TODO