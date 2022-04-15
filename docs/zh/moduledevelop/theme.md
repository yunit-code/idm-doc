# 主题皮肤
在传统应用页面中，会有切换当前页面的主题颜色，也就是换肤功能。但在IDM模式下，组件是相对独立的，我们也可以通过[组件通信](./communication.md)给每个组件发送消息然后进行切换。但是这种方式非常麻烦，所以IDM内置了主题皮肤功能，其原理非常简单，就是在根body标签下增加对应的class，然后组件内通过顶级class名称变化显示对应下面的样式表。但是需要配合IDM提供的配置进行，详细的配置请继续往下了解。
## 主题配置
要实现主题换肤功能，需要先进行样式前缀的配置项修改、页面属性主题接口配置的配置完成后再进行组件样式拽写即可，具体可以看下面两项配置：
### 全局配置项
配置class的前缀，比如默认的值为`idm-theme-`，通过[页面配置-应用主题](../guide/developtool.md#应用主题)配置处理后结果为`blue`的话则body的class名称最终显示为`idm-theme-blue`
:::tip
配置项参考：[applications-themeNamePrefix](../setting/config.md#themenameprefix)
:::
### 接口配置
因为主题是可以跟随用户来变化的，也就是每个人的设置可能不同。不管这个主题数据是通过后端数据库存储还是只缓存到客户端，通过页面属性的应用主题配置都能实现，如果使用后端方式需要开发对应的接口配置上即可，如果使用客户端存储方式可以使用自定义函数来开发，可参考[页面扩展开发](./pageextend.md)
:::tip
接口配置参考：[开发工具-页面属性-高级设置-应用主题](../guide/developtool.md#应用主题)
:::
## 使用方法
组件内对组件的样式写法有以下两种方式，一个是可以直接组件内置几种样式，还有另外一种方法是通过js动态追加样式，也可以通过颜色值属性配置实现任意主题配置，这样就不需要在组件内写多套样式了，但这样就会增加配置工作量，可以根据需求权衡选择。
- **css样式**
    ```css
    .idm-theme-blue{
        color:blue;
    }
    .idm-theme-blue .children-element{
        background-color:blue;
    }
    .idm-theme-red{
        color:red;
    }
    .idm-theme-red .children-element{
        background-color:red;
    }
    ```
- **脚本方式**
    ```js
    var cssObject = {
        "color":"blue",
        "background-color":"blue"
    };
    IDM.setStyleToPageHead('.idm-theme-blue #'+this.moduleObject.packageid,cssObject);
    IDM.setStyleToPageHead('.idm-theme-blue #'+this.moduleObject.packageid+' .children-element',cssObject);
    ```
    上述例子只讲解了如何利用js注册到页面中，但是在实际过程中不可能把样式值写死，这时候就可以通过组件属性进行动态应用样式表，例如以下简单的例子：
    ```js
    //propData.themeList 为配置的组件属性
    var themeList = this.propData.themeList;
    for(var i=0;i<themeList.length;i++){
        var item = themeList[i];
        //item.key：为主题样式的key
        //item.color：其中一项颜色属性值
        //item.bgcolor：其中一项背景颜色属性值
        if(item.key!=IDM.theme.getCurrentThemeInfo()){
            //此处比对是不渲染输出不用的样式
            continue;
        }
        var cssObject = {
            "color":item.color,
            "background-color":item.bgcolor
        };
        IDM.setStyleToPageHead('.idm-theme-'+item.key+' #'+this.moduleObject.packageid,cssObject);
        IDM.setStyleToPageHead('.idm-theme-'+item.key+' #'+this.moduleObject.packageid+' .children-element',cssObject);
    }
    ```
    :::tip
    setStyleToPageHead方法请参考：[标准API-setStyleToPageHead](../coreapi/api.md#setstyletopagehead)
    :::