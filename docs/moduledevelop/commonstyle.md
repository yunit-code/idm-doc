# 样式规范
## 基础样式
```css
/*样式重写，这里其实就跟ant design vue的base.less基本一致，所以这里重写也覆盖预览页面，这是基础样式，所有组件都以此样式为基础*/
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