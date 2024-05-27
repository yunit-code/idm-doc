# 快速上手
因为组件开发无限制您使用哪种技术栈，所以在开始之前，请根据你即将要开发的组件使用哪种技术栈来进行针对性的了解以下文档
## 环境准备

首先得有 `nodejs`，并确保 `nodejs` 版本是 14.17 或以上。
```sh
node -v
v14.17.0
```

## 脚手架初始化
::: tip
快捷拉取组件开发脚手架，可以安装`idm-cli`，代替下面的前三个步骤

```bash
npm i @idm-modules/cli@latest -g
idm create <your-project>
```
:::

- **步骤1**: 创建并进入一个新目录
<CodeGroup>
  <CodeGroupItem title="Both" active>

```bash
mkdir packageName
cd packageName
```

  </CodeGroupItem>
</CodeGroup>

- **步骤2**: 初始化脚手架

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```bash
git clone https://github.com/yunit-code/idm-module-vue.git
```

  </CodeGroupItem>
  
  <CodeGroupItem title="React">

```bash
git clone https://github.com/web-csq/idm-module-react.git
```

  </CodeGroupItem>
  <CodeGroupItem title="Jquery">

```bash
git clone https://github.com/web-csq/idm-module-jquery.git
```

  </CodeGroupItem>
</CodeGroup>

- **步骤3**: 安装脚手架依赖

<CodeGroup>
  <CodeGroupItem title="Both" active>

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
  <CodeGroupItem title="React">

```bash
npm start
```

  </CodeGroupItem>
  <CodeGroupItem title="Jquery">

```bash
npm run dev
```

  </CodeGroupItem>
</CodeGroup>

- **步骤5**: 在浏览器中输入`http://localhost:8080/index.html#/?className=IText`地址访问您的组件
  :::tip
  参数className为组件的类名
  :::

## 开始开发
在开始开发之前建议先了解下 [脚手架目录结构](./scaffoldtoc.md)

::: tip
在[idm组件开发脚手架](./scaffoldtoc.md)里，可以通过脚本直接生成组件模板，只需要`npm run gen`即可
:::

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
    <!--
      组件内部容器
      增加class="drag_container" 必选
      idm-ctrl-id：组件的id，这个必须不能为空
      idm-container-index  组件的内部容器索引，不重复唯一且不变，必选
    -->
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
- **步骤3**: 在`src\components\`目录下新建一个与组件类名同名的`Test001.js`组件代码文件。
```js
import template from './template/Test001.html'
// import otherTemplate from './template/Test001_other.html'

class Test001 {
    propData = {
        title: '测试文本_渲染'
    }
    moduleObject = {}
    initComponent(moduleObject) {
        this.propData = moduleObject?.props?.compositeAttr || this.propData
        this.moduleObject = moduleObject
        this.render(() => {
            moduleObject?.mountComplete?.(moduleObject)
        })
    }
    propDataWatchHandle(props) {
        this.propData = props?.compositeAttr
        this.render()
    }
    convertAttrToStyleObject() {
        var styleObject = {}
        for (const key in this.propData) {
            const element = this.propData[key]
            switch (key) {
                case 'width':
                case 'height':
                    styleObject[key] = element
                    break
                case 'box':
                    IDM.style.setBoxStyle(styleObject, element)
                    break
                case 'border':
                    IDM.style.setBorderStyle(styleObject, element)
                    break
                case 'font':
                    IDM.style.setFontStyle(styleObject, element)
                    break
            }
            window.IDM.setStyleToPageHead(this.moduleObject.id, styleObject)
        }
    }
    initData() {
        
    }
    // 接受消息
    receiveBroadcastMessage(message){}
    // 设置组件的上下文内容值
    setContextValue(object) {}
    // 获取组件的上下文内容值
    getContextValue(){}
    // 渲染数据
    render(_cb) {
        const _this = this
        IDM.laytpl(template).render({ propData: this.propData, moduleObject: this.moduleObject}, (html) => {
            $('#idm_' + this.moduleObject.id + (this.moduleObject?.routerId ?? '')).html(html)
            _cb?.() // 先回调
            IDM.on({
              btnClick:function(){
                alert($(this).data("item")+$(this).attr("key"))
              }
            },{
              elem:'#idm_' + this.moduleObject.id + (this.moduleObject?.routerId ?? '')
            })
            this.convertAttrToStyleObject()
            this.initData()
        })
    }
}

export default Test001
```
- **步骤4**: 在`src\components\template`目录下新建一个与组件类名同名的`Test001.html`html文件。
```html
<!-- 组件主要模板 -->
<div idm-ctrl="idm_module"
   id="{{= d.moduleObject.id}}"
   idm-ctrl-id="{{= d.moduleObject.id}}"
   title="">
   {{= d.propData.title}}
   <button class="my-btn" idm-on="btnClick" data-item="{{= d.propData.title}}" key="1">1231</button>
</div>
```
- **步骤5**: 在浏览器中输入`http://localhost:9527/index.html#/?className=Test001`地址访问您的组件


## 构建及部署
### Vue
- **步骤1**: 执行build打包命令
```bash
npm run build
```
- **步骤2**: 把dist下面的全部文件拷贝到配置项[moduleDir](../setting/config.md#moduledir)配置的目录下，一般情况直接到目录`idm_modules/packageName(包名)/1.0.0(版本号)/`下直接粘贴即可。然后在组件市场中注册（如果已经把配置项[componentMarketUrl](../setting/config.md#componentmarketurl)改成了接口形式）即可，如果接口为空则在mockurl配置项[componentMarketUrl](../setting/config.md#componentmarketurl-1)的数据注册即可。
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
- **步骤1**: 执行build打包命令
```bash
npm run build
```
- **步骤2**: 把`build`下面的全部文件拷贝到配置项[moduleDir](../setting/config.md#moduledir)配置的目录下，一般情况直接到目录`idm_modules/packageName(包名)/1.0.0(版本号)/`下直接粘贴即可。然后在组件市场中注册（如果已经把配置项[componentMarketUrl](../setting/config.md#componentmarketurl)改成了接口形式）即可，如果接口为空则在mockurl配置项[componentMarketUrl](../setting/config.md#componentmarketurl-1)的数据注册即可。
