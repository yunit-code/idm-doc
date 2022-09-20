# 样式规范
## 基础样式
所有组件开发建议都以IDM提供的基础样式为基础，样式文件地址在脚手架的目录`public/lib/idm.base.css`，内容如下：
```css
/*样式重写，这是基础样式，所有组件都以此样式为基础*/
body{
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.4;
    background-color: #fff;
    font-feature-settings: "tnum";
}
* {
    font-family: pingfang SC, helvetica neue, arial, hiragino sans gb, microsoft yahei ui, microsoft yahei, simsun, sans-serif;
}
input::-ms-clear,
input::-ms-reveal {
  display: none;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
@-ms-viewport {
    width: device-width;
}

@-ms-viewport {
    width: device-width;
}

article,
aside,
dialog,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
    display: block;
}
img{
    vertical-align: middle;
    border-style: none;
}
```
## 样式规范

- 所有组件内的样式不能写全局样式，比如`*{padding:0}`

- 组件内的所有元素样式建议都加上组件根节点的class