# 组件环境
因为IDM的组件是能独立运行的，也能集成在IDM的框架环境中，所以会有一个全局变量用于区分是IDM环境还是组件独立的环境。并且在IDM环境中，又有区分是在开发工具环境中还是在渲染引擎环境中，归纳总结有以下两种环境判断方式：
## **IDM环境**

  - **判断方法**：
    ```js
    IDM.env_dev
    ```
    组件单独运行则会显示为`false`，如果在IDM环境中则结果为`true`
    
  - **主要作用**：

    主要用于区分组件是独立运行还是在IDM中运行，如果要判断组件是在开发工具中还是渲染引擎中运行请使用下述[组件环境](./env.md#组件环境)方式进行判断。
    :::tip
    判断方法可以参考：[标准API-全局变量-env_dev](../coreapi/variables.md#env-dev)
    :::
## **组件环境**

  - **判断方法**：

    以[快速上手-开始开发](./easystart.md#开始开发)的Vue的步骤3为基础简化后如下：
    ```vue
    <template>
    </template>
    <script>
    export default {
      name: 'Test001',
      data(){
        return {
          moduleObject:{}
        }
      },
      created() {
        //组件对象
        this.moduleObject = this.$root.moduleObject
        //环境判断
        this.moduleObject.env
      }
    }
    </script>
    ```
    在上述的判断方法`this.moduleObject.env`输出结果为`production`代表的是在渲染引擎环境中，如果输出结果为`develop`代表的是在开发工具环境中。
  - **主要作用**：

    主要用于区分组件是在开发环境中运行还是在渲染引擎中运行，可以根据此状态做出相应的逻辑、样式等判断。
    :::tip
    除上述两种结果（production、develop）外可能还会有第三种`customize`结果，其主要作用在于在渲染引擎环境中用户又能个性化定制页面时候显示的定制模式状态。
    :::