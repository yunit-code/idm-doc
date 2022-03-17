# 响应式使用
## 页面大小变化响应
在实际应用页面中，页面响应式处理、监听页面大小改变是常用的需求。在IDM中内置了页面大小改变事件监听，并且监听到改变会把当前页面宽度作为消息以类型为`pageResize`的值广播给所有组件，组件内可根据值做响应的处理即可。

因为`window.onresize`一个页面只能只有一个方法，如果在组件内直接使用`window.onresize=function(){}`会导致IDM内置失效发生冲突，所以建议使用以下方案解决冲突：
```js
function addEventOnResize(fn){
    var originFn = window.onresize
    window.onresize =function () {
        originFn && originFn()
        fn()
    }
}
```
:::tip
使用方法可参考：[组件通信-内置通信协议](./communication.md#内置通信协议)
:::
## 响应式全屏布局组件
可能实际业务中会有这样一个需求，需要全屏显示全部页面部件出来，并且要适配各种分辨率，并且还能根据分辨率隐藏部分组件，这种IDM称作全屏适配。因此基于此需求IDM官方开发出来一个新的组件（类名`IFullScreenLayout`），叫全屏布局组件，能通过像Excel画格子自由圈画组件大小范围，自由定制响应式条件等等。

<img :src="$withBase('/images/idm_module_fullscreenlayout_001.jpg')" alt="全屏布局组件" />

:::tip
IFullScreenLayout在layout组件包中：[layout](https://github.com/yunit-code/layout)
:::