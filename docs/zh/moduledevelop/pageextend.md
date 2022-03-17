# 页面扩展开发
页面配置如果全部使用组件进行配置，可能很多功能需求都无法满足，因此IDM开发工具便加入页面动作功能，允许在配置页面的时候通过[属性控件-动作选择](./attributes.md#actionselect)控件选择内置动作或者自定义函数。
## 开发步骤
- **步骤1：添加组件动作选择属性**

    在组件属性文件`public\static\attributes\组件类名.json`内增加[动作选择](./attributes.md#actionselect)控件，如下示例（compositeAttr数组下的对象）：
    ```json
    {
        "classId": "idm.componet.packagename.test001",
        "comName": "示例001",
        "className": "Test001",
        "comType": "common",
        "comLangue": "vue",
        "compositeAttr": [
            {
                "type": "actionSelect",
                "layoutType": "block",
                "text": "自定义处理函数",
                "bindKey": "customFunction",
                "desc": "点击时候会调用这里设置的函数,接收参数为格式为{...自定义的,itemObject:这里可以组件内自定义}",
                "multiple": true
            }
        ]
    }
    ```
- **步骤2：组件内执行call动作方法**
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
        customClickFunction(itemObject){
            var customFunction = this.propData.customFunction;
                customFunction &&
                    customFunction.forEach((item) => {
                    window[item.name] &&
                        window[item.name].call(this, {
                        customParam: item.param,
                        _this: this,
                        itemObject
                        });
                    });
        }
    }
    }
    </script>
    <style lang="scss"  scoped>
    </style>
    ```
- **步骤3：配置组件选择方法**

  在使用IDM的开发工具修改组件属性的区域找到上述步骤1配置的动作选择属性，如下图：
  
  <img :src="$withBase('/images/attr/page_attr_themeDataFunction.jpg')" style="margin-top:10px" alt="预览效果" />

  点击添加的时候可以看到如下内置动作示例图：

  <img :src="$withBase('/images/develop_attr_actionselect_pop_001.jpg')" style="margin-top:10px" alt="预览效果" />

  可以看到如上图有以下内置动作：
  - **打开URL**

    方法名：IdmBuiltin_OpenUrl

    用于打开配置的url
  - **打开弹窗**

    方法名：IdmBuiltin_OpenDialog

    用于打开配置的弹窗
  - **关闭弹窗**

    方法名：IdmBuiltin_CloseDialog

    用于关闭配置的弹窗
  - **显示组件**

    方法名：IdmBuiltin_ShowModule

    用于显示配置的组件
  - **隐藏组件**

    方法名：IdmBuiltin_HideModule

    用于隐藏配置的组件

  以上内置动作都是IDM已经提供了方法并且实现了逻辑，不需要在页面动作功能区再次写上面的方法名函数，只需要选择即可。

  如果上述内置动作无法满足功能需求，可以通过自定义动作来添加自定义方法名以及自定义参数，但是函数的逻辑需要自行在页面动作功能区实现，如下图所示：
  
  <img :src="$withBase('/images/develop_attr_actionselect_pop_002.jpg')" style="margin-top:10px" alt="预览效果" />
  
  在上述示例图中输入方法名称、参数设置，点击确定会自动在页面动作功能区追加函数，如下图所示：
  
  <img :src="$withBase('/images/develop_attr_actionselect_pop_003.jpg')" style="margin-top:10px" alt="预览效果" />

  :::warning
  不管是内置动作还是自定义动作都会是携带统一的属性字段`param`，只不过内置动作已经规定好了param的格式。
  :::
- **步骤4：在添加的页面动作写实现逻辑**

  当如果使用自定义动作时候，需要自行实现逻辑代码，然后点保存即可保存：
  ```js
  /**
   *页面扩展代码，可复用的函数，支持ES6语法
   * 动作面板帮助文档: 
   * @see http://www.yunit.cn/
   */
  export function customFunctionName(ctx) {
    //这里实现自己的逻辑。
    alert(JSON.stringify(ctx))
  }
  ```
  :::tip
  ctx代表所有的参数对象，如果要获取动作选择的参数，需要看步骤2中call传的参数名称。
  :::