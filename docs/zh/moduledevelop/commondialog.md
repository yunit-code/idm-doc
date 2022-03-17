# 公共弹窗
弹窗组件在实际项目需求中是一个常用的组件，也就是我们常说的对话框(Dialog)组件。在IDM中弹窗组件与普通组件是有区别的，所以在框架中对Dialog类型的做了特殊处理。
## 方法与步骤
做弹窗的组件其实大部分与普通组件没有多大区别，主要就是属性`comType`需要设置为`dialog`即可，另外IDM属性控件[actionSelect](./attributes.md#actionSelect)已经基于消息通信功能内置了打开弹窗和关闭弹窗的动作选择，在[接收消息](./communication.md#接收消息)方法内进行相应的处理即可。
- **一、注册组件**

  在`public\static\config.json`文件中注册一个新的组件类名为Dialog001的组件。
    ```json
    {
        "version": "1.0.0",
        "lasttime": "2022-3-7 18:10:21",
        "author": "申龙",
        "className": "packageName",
        "module": [
            {
                "classId": "idm.componet.packagename.dialog001",
                "comName": "对话框示例001",
                "className": "Dialog001",
                "comType": "dialog",
                "comLangue": "vue"
            }
        ]
    }
    ```
- **二、新建属性文件**

  在`public\static\attributes\`目录下新建一个与组件类名同名的`Dialog001.json`属性注册文件。
    ```json
    {
        "classId": "idm.componet.packagename.dialog001",
        "comName": "对话框示例001",
        "className": "Dialog001",
        "comType": "dialog",
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
                "type": "input",
                "layoutType": "inline",
                "text": "窗口标题",
                "bindKey": "dialogTitle",
                "default": "窗口标题"
            }
        ]
    }
    ```
- **三、新建代码文件**

  在`src\components\`目录下新建一个与组件类名同名的`Dialog001.vue`组件代码文件。
  ```vue
  <template>
    <!--
        根目录规范(必须不能为空)：
        idm-ctrl：控件类型 drag_container：容器，drag_container_inlieblock：行内容器，idm_module：非容器的组件
        id：使用moduleObject.id，如果id不使用这个将会被idm-ctrl-id属性替换
        idm-ctrl-id：组件的id，这个必须不能为空
    -->
    <div idm-ctrl="idm_module" :id="moduleObject.id" :idm-ctrl-id="moduleObject.id">
        <!--
        组件内部容器
        增加class="drag_container" 必选
        idm-ctrl-id：组件的id，这个必须不能为空
        idm-container-index  组件的内部容器索引，不重复唯一且不变，必选
        -->
        <div class="idm-md-modal" :class="`${dialogVisible||moduleObject.env=='develop'?'idm-md-show':''} idm-${propData.animationKey||'md-effect-1'}`">
            <div class="idm-md-content">
                <button type="button" v-if="propData.closeDisplay"  @click="cancelDialog" class="idm-md-close">
                <span class="idm-md-close-x">
                    <i class="idm-md-close-icon">
                    </i>
                </span>
                </button>
                <div class="idm-md-header" v-if="propData.labelDisplay">{{propData.dialogTitle}}</div>
                <div class="idm-md-body">
                    <div class="drag_container" :idm-ctrl-id="moduleObject.id" idm-container-index="1">
                        
                    </div>
                </div>
                <div class="idm-md-footer">
                </div>
            </div>
        </div>
    </div>
  </template>

  <script>
    export default {
        name: 'Dialog001',
        data(){
            return {
            moduleObject:{},
            propData:this.$root.propData.compositeAttr||{},
            dialogVisible:false
            }
        },
        props: {
        },
        created() {
            this.moduleObject = this.$root.moduleObject
        },
        mounted() {
            //赋值给window提供跨页面调用
            this.$nextTick(function(params) {
            window[this.moduleObject.packageid] = this;
            });
        },
        destroyed() {},
        methods:{
            /**
            * 提供父级组件调用的刷新prop数据组件
            */
            propDataWatchHandle(propData){
            this.propData = propData.compositeAttr||{};
            }
            /**
            * 调用IDM提供的内置关闭方法
            */
            closeMyDialog(isOk){
                let that = this;
                window.IdmBuiltin_CloseDialog({
                    targetModule:[{moduleId:this.moduleObject.packageid,moduleName:this.moduleObject.asName}],
                    isOkEvent:isOk
                })
            },
            openThisDialogHandle(){
            this.dialogVisible = true;
            },
            closeThisDialogHandle(){
            this.dialogVisible = false;
            },
            /**
            * 组件通信：接收消息的方法
            */
            receiveBroadcastMessage(object){
                if(object.type&&object.type=="linkageOpenDialog"){
                    this.openThisDialogHandle();
                }else if(object.type&&object.type=="linkageCloseDialog"){
                    this.closeThisDialogHandle();
                }
            }
        }
    }
  </script>
  <style lang="scss">
  </style>
  ```
- **四、注册组件市场**

    如下`comType`类型，其他与[ComponentMarketData](../setting/mockdata.md#componentmarketdata)一模一样即可。
    ```json
    {
    "code": "200",
    "type": "success",
    "message": "操作成功",
    "metadata": null,
    "token": "",
    "data": [
        {
        "groupId": "1",
        "groupTitle": "布局组件",
        "componentList": [
            {
            "comType": "dialog",
            }
        ]
        }
    ]
    }
    ```
## 弹窗组件
在IDM提供的`layout`组件包内已经有对话框组件了，类名为`IDialog`,使用了[ant design vue](https://www.antdv.com/components/modal-cn/)的`Modal`组件,实际效果图可参考如下：

<img :src="$withBase('/images/idm_module_dialog_001.jpg')" alt="弹窗组件" />

:::tip
layout组件包：[layout](https://github.com/yunit-code/layout)
:::