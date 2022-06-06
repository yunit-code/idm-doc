# 开发工具
[在线预览](https://yunit-code.github.io/idm/index.html#/develop/test)
## 工具介绍
### 快速访问

访问地址取决于你把IDM集成包放置的位置，例如我们列出了下面两种模式：
- [产品模式](./integrated.md#产品模式)访问地址：

  `http(s)://?domain/ProjectName/p1000/idm/index.html#/develop/{pageid}`

- [项目模式](./integrated.md#项目模式)访问地址：

  `http(s)://?domain/ProjectName/idm/index.html#/develop/{pageid}`

:::tip
地址中的 `{pageid}` 为配置的页面ID，可以随意填写或传已存在配置好的页面ID
:::
### 内置参数
为方便开发工具能根据业务不同需求进行细微的定制化，可以通过在访问地址index.html或末尾加上 `?` 传递不同含义的参数进行定制。优先获取末尾的参数，如果末尾没有参数会再去查找index.html后面的参数。

#### showStatusBar
用于控制是否默认显示工作区顶部的状态栏，具体可参考属性 [状态栏【showMobileStatusBar】](../guide/developtool.md#状态栏【showmobilestatusbar】)
- 值类型：不为空则视为 true
#### dragSizeKey
用于进入工具时候默认显示的工作区大小，不传参数时候默认为适应当前屏幕的
- 值类型：尺寸的key值，可选的值可参考配置项 [dragAreaSizeList](../setting/config.md#dragareasizelist)
#### defaultPageTitle
用于设置工具的页面标题的默认初始值，如果不传则页面标题默认为空（页面标题是用于显示浏览器页签上面的标题名称的）
- 值类型：浏览器页签上面要显示的字符串标题
:::tip
传递的参数可扩展，获取方式可通过 `IDM.url.queryObject()` 获取全部参数。

更多用法请参考： [标准API](../coreapi/api.md#queryobject)
:::
### 布局介绍
本章节主要介绍了页面编辑器工具的结构和功能，帮助您快速使用页面编辑器工具开发页面。
<div style="margin-top:10px"></div>
<img :src="$withBase('/images/develop_tool_white_mark_01.png')" alt="布局介绍" />

| 序号 | 名称 | 说明 |
| ------------- | ------------- | ------------- |
| 1 | 工具栏  | 在顶部的工具栏中，左侧区域可以控制当前编辑页面的标题与版本切换，中间可以对工作区进行分辨率切换，右侧则是存放的整个工具的菜单与常用快捷按钮  |
| 2 | 组件  | 在左侧用于存放当前可使用的市场组件和业务组件，可拖动这里的组件到工作区使用该组件  |
| 3 | 属性  | 固定在右侧，用于显示页面与组件的综合属性和当前页面的所有使用的组件，以及可切换组件显示为树结构模式  |
| 4 | 功能区  | 在底部显示，可以关闭不显示，主要显示页面源码、页面动作、历史记录等等功能，可自由拖拽高度也可以关闭  |
| 5 | 工作区  | 在正中央区域，可以自定义工作区大小，整个页面的编辑配置都在这里面完成，同时也可以通过工具栏的菜单进行操作对应的组件，这里是一个页面的配置平台  |

### 主题风格
IDM开发工具具有 `默认主题`和`酷黑主题`两种主题风格，可以使用工具栏右边的`更多>当前主题`进行切换，也可以使用`Ctrl+1和Ctrl+2`进行切换对应的主题。同时工具具有昼夜自动切换主题功能，更好的保护使用者的眼睛
- 默认主题

<div style="margin-top:10px"></div>
<img :src="$withBase('/images/develop_tool_white_01.png')" alt="默认主题" />

- 酷黑主题

<div style="margin-top:10px"></div>
<img :src="$withBase('/images/develop_tool_black_01.png')" alt="酷黑主题" />

### 功能菜单
工具栏右侧的更多包含了全部的功能菜单，如下列出的：
###### 常用操作
- 保存（Ctrl+S）

  用于保存当前配置的页面数据，保存的时候需要填写版本号、作者、备注，是否使用此版本等等信息
- 另存为（Ctrl+Shift+S）

  另存为可在不保存当前页面数据的情况下复制一份当前的页面数据作为新的页面进行存储，也可作为布局组件和业务组件进行存储
- 预览（Ctrl+P）

  预览可在不保存当前页面数据的情况下直接把当前配置作为缓存并打开渲染引擎进行查看实际渲染的效果
- 调试（Ctrl+D）

  TODO
- 撤销（Ctrl+Z）

  可对当前这一步进行撤销还原到上一步操作
- 重做（Ctrl+Shift+Z）

  可对撤销过的进行恢复撤销的操作
- 搜索（Ctrl+Shift+F）

  主要作用会弹出搜索框，主要是搜索页面配置的所有组件，可以通过搜索组件的名称、组件类名、组件ID进行搜索

------------------------------------
- 复制组件（Ctrl+C）

  可对当前选中的组件进行复制到剪切板中，然后可在需要的位置执行粘贴进行复制
- 粘贴组件（Ctrl+V）

  选定需要的位置，可对已经复制或剪切的组件进行粘贴到选定的位置
- 剪切组件（Ctrl+X）

  可对当前选中的组件进行剪切到剪切板中，然后可在需要的位置执行粘贴进行剪切，或者可视为移动组件
- 删除组件（Alt+Del）

  可对当前选中的组件进行删除，删除会删除选定组件以及全部子组件

------------------------------------
- 选择父组件（↑）

  把当前选中的组件切换到选择当前选中的直属父级组件
- 选择子组件（↓）

  把当前选中的组件切换到选择当前选中的子级第一个组件
- 向右选择兄弟组件（→）

  把当前选中的组件切换到选择当前选中的后面一个组件
- 向左选择兄弟组件（←）

  把当前选中的组件切换到选择当前选中的前面一个组件
- 拖拽组件并复制（Alt+Drag）

  拖拽式复制组件，只需要按住键盘的Alt然后鼠标拖动组件就能复制组件到拖动的位置

###### 工具辅助
- 显示网格（Ctrl+Alt+'）

  用于打开工作区的网格辅助线，网格大小与网格线样式、颜色可通过偏好设置进行修改
- 显示标尺（Ctrl+Alt+,）

  用于打开工作区的标尺，标尺坐标（0,0）为起点向X,Y轴的正级延伸
- 显示参考线（Ctrl+Alt+.）

  用于控制是否显示从标尺拖拽出来或通过创建参考线菜单创建出来的参考线
- 创建参考线（Ctrl+Alt+N）

  用于创建水平或垂直的参考线，可输入坐标直接在指定坐标位置创建
- 锁定参考线（Ctrl+Alt+L）

  用于锁定已存在的参考线，参考线是可拖动的，启用锁定则是不能拖动参考线
- 删除所有参考线

  用于删除目前已存在的所有参考线

###### 功能区
- 开关左侧功能区（Ctrl+Alt+[）

  用于控制折叠展开左侧组件列表功能区
- 开关右侧属性区（Ctrl+Alt+]）

  用于控制折叠展开右侧属性功能区

------------------------------------
- 历史记录（Ctrl+Alt+H）

  用于展示当前页面的所有操作记录
- 页面设置（Ctrl+Alt+S）

  用于把当前选中的组件切换到页面层级，在右侧组件属性中显示页面属性
- 动作面板（Ctrl+Alt+M）

  用于页面扩展代码在线编辑，页面与组件的属性支持自定义动作脚本
- 页面源码（Ctrl+Alt+C）

  用于展示页面的schema结构，支持直接修改页面源码，所有的页面配置信息都在这里存储

###### 屏幕模式
- 标准模式（Ctrl+Shift+1）

  会把当前工具切换到标准模式下，标准模式会把全部的功能区域展示出来
- 全屏模式（Ctrl+Shift+2）

  会把当前工具切换到全屏模式下，全屏模式会把所有的功能区域隐藏并且把中间工作区放大至全屏或设置的工作区大小

###### 当前主题
- 默认主题（Ctrl+1）

  切换当前工具主题为亮系主题，也就是工具的默认主题

- 酷黑主题（Ctrl+2）

  切换当前工具主题为暗黑系主题，比较适合夜间工作或者喜欢酷黑风格的

------------------------------------
###### IDM学院
  用于链接打开IDM学院的地址，此地址可通过配置项 [schoolsUrl](../setting/config.md#schoolsurl) 自定义
###### 组件开发
  用于链接打开组件开发文档的地址，此地址可通过配置项 [devComponentUrl](../setting/config.md#devcomponenturl) 自定义
###### 帮助文档（Ctrl+F1）
  用于链接打开组件帮助文档的地址，此地址可通过配置项 [helpDocumentUrl](../setting/config.md#helpdocumenturl) 自定义
###### 文档管理
  用于链接打开组件[文档管理](./documentmanage.md)的地址，此地址可通过配置项 [documentmanageurl](../setting/config.md#documentmanageurl) 自定义

------------------------------------
###### 偏好设置
  用于使用者能自定义自动备份、网格、参考线等工具的辅助功能
###### 关于（Ctrl+Shift+A）
  用于展示版本号、发布日期、框架所使用的Vue版本、对应的jQuery版本、以及开发作者

## 页面属性
### 基本设置
  此级为基本设置属性归类分组，主要用于设置页面的一些基本信息。
#### ICO地址【icoImgUrl】
<img :src="$withBase('/images/attr/page_attr_icoImgUrl.jpg')" style="margin-top:10px" alt="预览效果" />

用于控制页面渲染时候浏览器页面页签中的网页图标，可填写绝对地址或者相对地址，也可以直接上传图片，上传成功后会直接把地址回填到此处文本框中。
- 默认值：`空`
::: tip
地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
:::

#### 状态栏【showMobileStatusBar】
<img :src="$withBase('/images/attr/page_attr_showMobileStatusBar.jpg')" style="margin-top:10px" alt="预览效果" />

该属性用于控制工作区顶部是否显示手机的顶部状态栏（时间、信号、电量等信息），主要作用在于配置页面的时候方便模拟真实页面显示效果，在页面渲染的时候是不会出现的。
- 默认值：`false`
::: tip
该值可以通过url追加参数 `showStatusBar=true` 控制是否默认显示，例如：在 http://domain/projectName/idm/index.html#/develop/{pageid}后面追加 `?showStatusBar=true` 即可
:::

#### 加载动画【openPreviewLoadStyle】
用于设置是否开启加载动画效果，也就是loading进度条
- 标识：`openPreviewLoadStyle`
- 默认值：`true`

::: tip
此处的加载动画与核心框架资源加载动画不同，只有此核心框架加载完成了才会继续执行此处页面内部资源、请求等等资源请求动画。
:::

#### 动画颜色【previewLoadColor】
用于设置动画要显示的颜色，也就是loading进度条的颜色
- 标识：`previewLoadColor`
- 默认值：`@[IDM.setting.applications.defaultPreviewLoadColor]`

### 水印设置
此级为页面级水印设置属性归类分组，主要用于设置页面级水印的一些基本样式。
#### 水印方式【watermarkType】

<img :src="$withBase('/images/attr/page_attr_watermarkType.jpg')" style="margin-top:10px" alt="预览效果" />

主要用于切换页面的水印单个样式布局，有以下几个选项：
1. 文字：使用纯文字进行平铺的模式
2. 图片：单纯的使用图片进行平铺的模式
3. 图文：使用图片在上，文字在下进行平铺的模式
4. 无：不使用水印
- 默认值：`无`
#### 水印层级【watermarkZindex】
<img :src="$withBase('/images/attr/page_attr_watermarkZindex.jpg')" style="margin-top:10px" alt="预览效果" />

主要用于设置水印所在的层级，有以下几个选项：
1. 最底部：在页面所有元素层级最低的，如果页面有其他元素会直接覆盖水印
2. 最上层：在页面所有元素层级最高的，水印会处于最顶级，所有元素都无法覆盖
- 默认值：`最底部`
- 显示条件：`水印方式 != 无`
#### 水印图片【watermarkImg】
<img :src="$withBase('/images/attr/page_attr_watermarkImg.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置水印显示的图片，可填写绝对地址或者相对地址，也可以直接上传图片，上传成功后会直接把地址回填到此处文本框中。
- 默认值：`$/img/logo.png`
- 显示条件：`水印方式 = 图片 or 图文`
::: tip
1. 不能使用跨域图片,否则显示不了。
2. 地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
:::
#### 文字【watermarkFont】
<img :src="$withBase('/images/attr/page_attr_watermarkFont.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置第一行显示的文字内容，并且支持获取当前用户信息和应用信息的方式等，格式为：`@[IDM.user.userObject.用户信息的字段]`，更多用法请参考：[标准API](../coreapi/api.md#express)
- 默认值：`梦创@申龙`
- 显示条件：`水印方式 = 文字`
#### 文字2【watermarkFont1】
<img :src="$withBase('/images/attr/page_attr_watermarkFont1.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置第二行显示的文字内容，并且支持获取当前用户信息和应用信息的方式等，格式为：`@[IDM.user.userObject.用户信息的字段]`，更多用法请参考：[标准API](../coreapi/api.md#express)
- 默认值：`梦创@申龙`
- 显示条件：`水印方式 = 文字 or 图文`
#### 水印大小【watermarkSize】
<img :src="$withBase('/images/attr/page_attr_watermarkSize.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置水印的每一块大小，也可以理解为水印密集度，数值越大，水印间隙越宽，越小越密集，但请不要小于内容的实际宽高
- 默认值：`200`
- 显示条件：`水印方式 != 无`
#### 文字颜色【watermarkColor】
<img :src="$withBase('/images/attr/page_attr_watermarkColor.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置水印的文字、文字2的字体颜色
- 默认值：`#EEEEEEFF`
- 显示条件：`水印方式 != 无 and 图片`
#### 文字大小【watermarkFontSize】
<img :src="$withBase('/images/attr/page_attr_watermarkFontSize.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置水印的文字、文字2的字体大小
- 默认值：`20`
- 显示条件：`水印方式 != 无 and 图片`
#### 图片大小【watermarkImgSize】
<img :src="$withBase('/images/attr/page_attr_watermarkImgSize.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置水印的图片大小，会取水印图片的宽与高的最大值作为缩放比例缩放到这里设置的大小
- 默认值：`44`
- 显示条件：`水印方式 = 图片 or 图文`
#### 旋转角度【watermarkRotate】
<img :src="$withBase('/images/attr/page_attr_watermarkRotate.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置水印的单个旋转角度
- 默认值：`45`
- 显示条件：`水印方式 != 无`
:::tip
建议取值范围为0-90之间的值，超出此范围旋转异常无效
:::
#### 文字偏移(X)【watermarkFontLeftSize】
<img :src="$withBase('/images/attr/page_attr_watermarkFontLeftSize.jpg')" style="margin-top:10px" alt="预览效果" />

设置文字X轴偏移数值，用来调整水印的样式
- 显示条件：`水印方式 != 无 and 图片`
#### 图片偏移(X)【watermarkImgLeftSize】
<img :src="$withBase('/images/attr/page_attr_watermarkImgLeftSize.jpg')" style="margin-top:10px" alt="预览效果" />

设置图片X轴偏移数值，用来调整水印的样式
- 显示条件：`水印方式 = 图片 or 图文`
#### 整体偏移(Y)【watermarkTopSize】
<img :src="$withBase('/images/attr/page_attr_watermarkTopSize.jpg')" style="margin-top:10px" alt="预览效果" />

设置单个水印的X轴偏移数值，用来调整水印的位置
- 显示条件：`水印方式 != 无`
#### 透明度【watermarkOpacity】
<img :src="$withBase('/images/attr/page_attr_watermarkOpacity.jpg')" style="margin-top:10px" alt="预览效果" />

用来设置整体水印的透明度
- 默认值：`90`
- 可设置的值范围：`0-100`
- 显示条件：`水印方式 != 无`
### 样式设置
此级为页面级样式设置属性归类分组，主要用于设置页面级的背景、内容布局、内外边距、文字、边框、页面最小宽度等等样式。

#### 栅格布局【layout】
<img :src="$withBase('/images/attr/page_attr_layout.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置页面中的内容布局方式，有以下四种布局方式：
1. block：块级元素布局，页面中的元素前后会带有换行符
2. inline-block：行内块元素，页面中的元素会被呈递在同一行内，允许空格
3. inline：内联元素，页面中的元素前后没有换行符
4. flex：弹性布局，该模式下包含`row`、`row-reverse`、`column`、`column-reverse`四种元素排列方式
:::tip
- flex布局参考： [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
- flex布局示例： [Flex布局示例](http://static.vgee.cn/static/index.html)
- flex深度理解： [Flex布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
:::
#### 内外边距【box】
<img :src="$withBase('/images/attr/page_attr_box.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置页面的内边距大小和外边距大小，外框为外边距的设置，内框为内边距的设置，可通过对应的快状条调整控制数值大小，也可以自由输入数值，可以以`px`、`%`为数值的单位或`auto`为值的填写方式

注：右下角图标为设置当前组件在所在的容器水平居中显示，也就是外边距左右都为auto
:::tip
- 内边距参考： [padding](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding)
- 外边距参考： [margin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin)
:::
#### 页面最小宽度【pageMinWidth】
<img :src="$withBase('/images/attr/page_attr_pageMinWidth.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置页面支持的最小宽度是多少，设定了最小宽度后，如果页面的实际宽度小于这个值则会出现横向滚动条，注意：该属性在开发工具设计器中不生效，可选单位有：`px` `%` `em` `vw`
#### 背景设置
##### 背景色【bgColor】
<img :src="$withBase('/images/attr/page_attr_bgColor.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置页面的背景颜色值，可手动填写颜色值或使用颜色选择器选择
:::tip
颜色值参考：[color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)
:::
##### 背景图片【bgImgUrl】
<img :src="$withBase('/images/attr/page_attr_bgImgUrl.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置页面的背景图片，可填写绝对地址或者相对地址，也可以直接上传图片，上传成功后会直接把地址回填到此处文本框中。
::: tip
地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
:::
##### 横向偏移【positionX】
<img :src="$withBase('/images/attr/page_attr_positionX.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置背景图片的X轴偏移位置，数值可为正负数，可选单位有：`px` `%` `em`
##### 纵向偏移【positionY】
<img :src="$withBase('/images/attr/page_attr_positionY.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置背景图片的Y轴偏移位置，数值可为正负数，可选单位有：`px` `%` `em`
##### 背景大小【bgSize】
<img :src="$withBase('/images/attr/page_attr_bgSize.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置背景图片显示方式，有以下三种方式：
1. 裁切显示：会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小
2. 完全显示：会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小
3. 自定义：自定义图像的宽高
:::tip
参考资料：[background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)
:::
##### 宽度【bgSizeWidth】
<img :src="$withBase('/images/attr/page_attr_bgSizeWidth.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置背景大小在自定义模式下的图片大小的宽度，可选单位有：`px` `%` `em`
- 显示条件：`背景大小 = 自定义`
##### 高度【bgSizeHeight】
<img :src="$withBase('/images/attr/page_attr_bgSizeHeight.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置背景大小在自定义模式下的图片大小的高度，可选单位有：`px` `%` `em`
- 显示条件：`背景大小 = 自定义`
##### 平铺模式【bgRepeat】
<img :src="$withBase('/images/attr/page_attr_bgRepeat.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置背景图片平铺方式，有以下五种方式：
1. 双向重复：背景图像将在垂直方向和水平方向重复
2. 水平重复：背景图像将在水平方向重复
3. 垂直重复：背景图像将在垂直方向重复
4. 不重复：背景图像将仅显示一次
5. 继承：从父元素继承平铺模式属性的设置
:::tip
参考资料：[background-repeat](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat)
:::
##### 背景模式【bgAttachment】
<img :src="$withBase('/images/attr/page_attr_bgAttachment.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动，有以下三种方式：
1. 固定：背景图片不会随着页面的滚动而滚动
2. 滚动：背景图片随着页面的滚动而滚动
3. 继承：从父元素继承背景模式属性的设置
:::tip
参考资料：[background-attachment](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)
:::
#### 边框【border】
<img :src="$withBase('/images/attr/page_attr_border.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置页面的四边的边框、以及边框的圆角。当左侧选中十字架图标时，调整右侧设置会同时设置四边（角）。如果左侧选中切换到单边（角）时，调整右侧设置会只设置当前选中的边（角）。
#### 文字【font】
<img :src="$withBase('/images/attr/page_attr_font.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置页面的整体文字样式，依次是设置文字的 `字体`、`字重`、`斜体`、`字体颜色`、`大小`、`行高`、`对齐`、`修饰`

:::tip
参考资料：[font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font)

字体可选项配置参考：[配置项](../setting/config.md#fontfamilylist)
:::
### 高级设置

此级为复杂的设置属性归类分组，主要用于设置下拉刷新、应用信息、用户信息、应用主题、扩展脚本样式、页面接口、自定义加载函数等等。

#### 下拉刷新

##### 开启下拉刷新【openPulltorefresh】

用于设置页面是否开启下拉刷新功能，开启后将会加载下拉刷新功能，注意：此功能只在移动端生效
- 默认值：`false`

##### 刷新方式【pulltorefreshType】

用于设置下拉刷新触发的类型，有以下三种方式：
1. 刷新页面：会重新加载整个页面
2. 刷新数据：将会发送消息给各个组件刷新组件内部的数据，请参考【组件开发-组件通信】(../moduledevelop/communication.md)
3. 自定义：通过自定义函数来执行自己的逻辑

- 标识：`pulltorefreshType`

##### 自定义处理函数【pulltorefreshFunction】

用于处理下拉刷新触发的自定义函数设置，通过此属性可以实现下拉刷新后符合自己的需求逻辑，函数接收参数格式为：
```json
{
    "customParam":"自定义的参数"
}
```
- 支持多选：`是`

#### 应用信息

##### 开启应用信息【openFetchApplicationInfo】
<img :src="$withBase('/images/attr/page_attr_openFetchApplicationInfo.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置页面是否启用获取应用信息功能，开启后将会在页面加载之前获取应用信息并存储到`IDM.app` 中
- 默认值：`false`
:::tip
获取应用信息只需要调用 `IDM.app.getAppInfo()` 即可获取
:::
##### 应用信息接口地址【applicationInfoUrl】
<img :src="$withBase('/images/attr/page_attr_applicationInfoUrl.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置获取应用信息的接口地址，开启了应用信息后在页面加载之前会请求此接口并返回应用信息对象
- 默认值：自动获取配置项`api.applicationInfoUrl` 配置的地址
- 显示条件：`开启应用信息 = true`

:::tip
- 默认值配置参考：[配置项](../setting/config.md#applicationinfourl)
- 应用信息对象格式参考：[mock data](../setting/mockdata.md#applicationinfodata)
- 地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
:::

::: warning
如果应用信息返回的数据格式为{"code":200,data:{appName:\"\"}},则会直接取data下面的对象作为应用信息对象，其他情况则直接用返回结果作为应用对象
:::
#### 用户信息
##### 开启用户信息【openFetchUserInfo】
<img :src="$withBase('/images/attr/page_attr_openFetchUserInfo.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置页面是否启用获取用户信息功能，开启后将会在页面加载之前获取用户信息并存储到`IDM.user` 中
- 默认值：`false`
:::tip
获取用户信息只需要调用 `IDM.user.getCurrentUserInfo()` 即可获取
:::
##### 用户信息接口地址【userInfoUrl】
<img :src="$withBase('/images/attr/page_attr_userInfoUrl.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置获取用户信息的接口地址，开启了用户信息后在页面加载之前会请求此接口并返回用户信息对象
- 默认值：自动获取配置项`api.userInfoUrl` 配置的地址
- 显示条件：`开启用户信息 = true`

:::tip
- 默认值配置参考：[配置项](../setting/config.md#userinfourl)
- 用户信息对象格式参考：[mock data](../setting/mockdata.md#userinfodata)
- 地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
:::
##### 登录判断【switchUserInfo】
<img :src="$withBase('/images/attr/page_attr_switchUserInfo.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置页面是否必须登录才能显示的权限，开启后将会在页面加载之前先获取用户信息是否已经登录，未登录则跳转到登录界面
- 默认值：`false`
- 显示条件：`开启用户信息 = true`
##### 判断字段【switchUserInfoFiledName】
<img :src="$withBase('/images/attr/page_attr_switchUserInfoFiledName.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置判断是否登录了用户的字段，用户是否登录依据此处设置的判断字段是否为true，如果为 true 则显示，false 则会跳转到登录页
- 默认值：`userid`
- 显示条件：`登录判断 = true`
:::tip
此处填写的格式为a.b.c或者[0]a.b[0].c，例如：用户信息返回的数据格式为{userid:\"\"}，则这里填写userid，如果返回结果userid为false则会自动跳转到设置的登录地址，更多语法请参考：[标准API](../coreapi/api.md#express)
:::
::: warning
如果用户信息返回的数据格式为{"code":200,data:{userid:\"\"}},则会直接取data下面的对象作为用户信息对象，其他情况则直接用返回结果作为用户对象
:::
##### 登录页地址【loginPageUrl】
<img :src="$withBase('/images/attr/page_attr_loginPageUrl.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置跳转到登录页的地址，检测到未登录用户时会跳转到此处设置的登录页地址
- 默认值：自动获取配置项`applications.defaultLoginPageUrl` 配置的地址
- 显示条件：`登录判断 = true`
:::tip
- 默认值配置参考：[配置项](../setting/config.md#defaultloginpageurl)
- 地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
:::
##### 用户个性化定制【switchUserCustomization】
<img :src="$withBase('/images/attr/page_attr_switchUserCustomization.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置页面是否支持用户组件个性化定制排序，开启后所有用户都能支持个性化拖拽定制页面，注意不支持非容器组件的内部容器组件拖拽
- 默认值：`false`
- 显示条件：`开启用户信息 = true`
##### 个性化保存地址【userCustomizationSaveUrl】
<img :src="$withBase('/images/attr/page_attr_userCustomizationSaveUrl.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置用户完成个性化配置后保存的地址
- 默认值：自动获取配置项`api.saveUserCustomizationUrl` 配置的地址
- 显示条件：`用户个性化定制 = true`
:::tip
- 默认值配置参考：[配置项](../setting/config.md#saveusercustomizationurl)
- 地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
:::
##### 个性化获取地址【userCustomizationFetchUrl】
<img :src="$withBase('/images/attr/page_attr_userCustomizationFetchUrl.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置页面加载时候获取当前用户个性化后的数据接口地址
- 默认值：自动获取配置项`api.userCustomizationUrl` 配置的地址
- 显示条件：`用户个性化定制 = true`
:::tip
- 默认值配置参考：[配置项](../setting/config.md#usercustomizationurl)
- 地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
:::
#### websocket

websocket初始化连接，监听等等方法请自行处理，这里只做一个与组件之间的沟通桥梁
##### 开启websocket监听【switchWebSocket】

用于设置页面是否启用websocke功能，开启后将会在页面加载用户信息之后调用初始化websocket方法
- 默认值：`true`

##### 初始化websocket方法名【websocketInitName】

用于设置调用外部的websocket的初始化的方法名称
- 默认值：自动获取配置项`websocket.websocketInitEventName`
- 显示条件：`开启websocket监听 = true`

##### 连接打开监听方法名【websocketOpenEvent】

用于外部的websocket打开的时候调用此处设置的方法名
- 默认值：自动获取配置项`websocket.websocketOpenEventName`
- 显示条件：`开启websocket监听 = true`

##### 自定义打开处理函数【websocketOpenFunction】

用于处理连接打开后需要执行额外逻辑的处理函数设置，函数接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数"
}
```
- 支持多选：`是`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::

##### 监听接收消息方法名【websocketMessageEvent】

用于外部的websocket监听接收到消息的时候调用此处设置的方法名
- 默认值：自动获取配置项`websocket.websocketMessageEventName`
- 显示条件：`开启websocket监听 = true`

##### 接收消息自定义函数【websocketOpenFunction】

用于处理接收到消息后需要执行额外逻辑的处理函数，函数接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数",
    "msgData":"websocket接收到的消息"
}
```
- 支持多选：`是`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::

#### 应用主题
##### 开启应用主题【openIdmTheme】
<img :src="$withBase('/images/attr/page_attr_openIdmTheme.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置页面是否启用主题风格切换功能，开启后将会在页面加载之前根据设置的获取主题方式获取用户存储的主题信息并存储到`IDM.theme` 中
- 默认值：`false`
:::tip
获取用户信息只需要调用 `IDM.theme.getCurrentThemeInfo()` 即可获取
:::
##### 获取主题方式【themeFetchType】
<img :src="$withBase('/images/attr/page_attr_themeFetchType.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置获取当前用户设置主题的方式，有以下三种方式：
1. 自定义函数：通过在页面动作中写js方法自定义实现获取用户设置的主题信息
2. 自定义接口：通过直接填写接口地址来实现获取用户设置的主题信息
3. 页面结果集：通过页面属性中的页面接口属性中接口请求成功后返回的结果集作为用户设置的主题结果
- 默认值：`自定义函数`
- 显示条件：`开启应用主题 = true`
##### 接口地址【themeInterfaceUrl】
<img :src="$withBase('/images/attr/page_attr_themeInterfaceUrl.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置获取当前用户设置主题的接口地址，自动在接口地址后面追加以下参数：

|参数|说明|
|-|-|
|pageId|当前配置的页面id|
|urlData|当前url地址的所有参数JSONObject字符串格式，也就是 `JSON.stringify(IDM.url.queryObject())` 的结果|
- 显示条件：`开启应用主题 = true && 获取主题方式 = 自定义接口`
:::tip
地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
:::
##### 结果集名【themeDataName】
<img :src="$withBase('/images/attr/page_attr_themeDataName.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置使用哪个页面接口的返回的结果集名称，页面接口设定的结果集名称位置为：页面设置》高级设置》页面接口
- 显示条件：`开启应用主题 = true && 获取主题方式 = 页面结果集`
##### 显示字段【themeDataFiled】
<img :src="$withBase('/images/attr/page_attr_themeDataFiled.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置根据接口返回数据格式或指定结果集的字段，比如接口返回的值为或结果集名为resultData的值为{data:{userTheme:'theme-red'}}，则这里应该填写data.userTheme

- 显示条件：`开启应用主题 = true && 获取主题方式 != 自定义函数`
:::tip
此处填写的格式为a.b.c或者[0]a.b[0].c，例如：用户信息返回的数据格式为{code:'',data:{userTheme:\"\"}}，则这里填写data.userTheme，更多语法请参考：[标准API](../coreapi/api.md#express)
:::
##### 自定义处理函数【themeDataFunction】
<img :src="$withBase('/images/attr/page_attr_themeDataFunction.jpg')" style="margin-top:10px" alt="预览效果" />

页面接口设定的结果集返回或接口返回会优先调用此处设置的自定义函数来返回所需要设置的主题数据，接收参数格式为：
```json
{
    "customParam":"自定义的参数",
    "_this":"当前渲染引擎的this对象",
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "结果集名或接口返回的resultData":{}
}
```
 `{customParam:自定义的,结果集名或接口返回的resultData,_this:当前渲染引擎的this对象}`
- 显示条件：`开启应用主题 = true && 获取主题方式 != 自定义函数`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::
##### 自定义处理函数【themeCustomFunction】
<img :src="$withBase('/images/attr/page_attr_themeCustomFunction.jpg')" style="margin-top:10px" alt="预览效果" />

页面组件加载之前会调用此处设置的自定义函数来返回所需要设置的主题数据，接收参数格式为：
```json
{
    "customParam":"自定义的参数",
    "_this":"当前渲染引擎的this对象",
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式"
}
```
- 显示条件：`开启应用主题 = true && 获取主题方式 = 自定义函数`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::


#### 微信JS-SDK

用于开启设置微信JS-SDK功能，如果配置的页面有使用到微信APP的功能请开启此项配置
##### 开启JS-SDK功能【switchWeixinJSSDK】

开启后将会自动加载微信的js-sdk，并且会根据配置项加载对应的功能
- 默认值：`@[IDM.setting.applications.defaultOpenWeixinJSSDK]`

##### 自定义ready处理函数【weixinReadyFunction】

如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中，函数接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数"
}
```
- 支持多选：`是`

- ***📢温馨提示：***
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)

##### 自定义error处理函数【weixinErrorFunction】

config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名，函数接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数",
    "error":"config信息验证失败的消息"
}
```
- 支持多选：`是`

- ***📢温馨提示：***
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)

#### 脚本与样式【子表】【resourceList】
<img :src="$withBase('/images/attr/page_attr_resourceList.jpg')" style="margin-top:10px" alt="预览效果" />

用于加载框架之外或自定义的脚本与样式，此处是一个以子表形式展示的控件，支持新增和删除以及调整行数
:::tip
此处设置的资源不会在开发工具中加载，只有在渲染模式下才会加载生效
:::
##### 资源类型【resourceType】
<img :src="$withBase('/images/attr/page_attr_resourceType.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置要加载的资源类型，有以下二种方式：
1. 脚本：用于加载js脚本类型的资源文件
2. 样式：用于加载css样式类型的资源文件
- 默认值：`脚本`
##### 链接地址【resourceUrl】
<img :src="$withBase('/images/attr/page_attr_resourceUrl.jpg')" style="margin-top:10px" alt="预览效果" />

用于填写js或css资源文件的地址，可加载外部的脚本与样式。
:::tip
地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
:::
##### 加载属性

- 显示条件：`资源类型 = 脚本`
###### async【async】
<img :src="$withBase('/images/attr/page_attr_async.jpg')" style="margin-top:10px" alt="预览效果" />

一旦上述填写的脚本可用，则会异步执行。
- 默认值：`false`
:::tip
async解释请参考： [async](https://www.w3school.com.cn/html5/att_script_async.asp)
:::
###### defer【defer】
<img :src="$withBase('/images/attr/page_attr_defer.jpg')" style="margin-top:10px" alt="预览效果" />

当页面已完成加载后，才会执行脚本。
- 默认值：`false`
:::tip
defer解释请参考： [async](https://www.w3school.com.cn/html5/att_script_defer.asp)
:::
#### 页面接口【子表】【interfaceList】
<img :src="$withBase('/images/attr/page_attr_interfaceList.jpg')" style="margin-top:10px" alt="预览效果" />

用于页面需要自定义请求接口的设置，例如页面的所有组件都是用的一个请求返回的结果，在这种模式下此属性就会有效果，此处是一个以子表形式展示的控件，支持新增和删除以及调整行数
:::tip
此处设置的页面接口不会在开发工具中加载，只有在渲染模式下才会加载生效

页面接口使用方法请参考： [组件高级开发-统一接口](../moduledevelop/unifiedinterface.md)
:::
##### 请求方式【interfaceMode】
<img :src="$withBase('/images/attr/page_attr_interfaceMode.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置接口请求方式，目前支持Get、Post两种方式，请根据接口进行选择对应的方式
- 默认值：`GET`
:::tip
Get、Post解释请参考： [GET 对比 POST](https://www.runoob.com/tags/html-httpmethods.html)
:::
##### 参数类型【interfaceContentType】
<img :src="$withBase('/images/attr/page_attr_interfaceContentType.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置接口请求携带的参数是什么类型，也就是Headers的Content-Type类型，目前有以下三种方式：
1. 默认：没有设置Content-Type的任何类型，使用默认的方式
2. JSON：设置Content-Type的类型为 application/json;charset=UTF-8 类型
3. FormData：设置Content-Type的类型为 multipart/form-data 类型
- 默认值：`默认`
:::tip
参数类型解释请参考： [内容类型注解](https://www.runoob.com/http/http-content-type.html)
:::
##### 接口地址【interfaceUrl】
<img :src="$withBase('/images/attr/page_attr_interfaceUrl.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置要请求的接口地址，自动在接口地址后面追加以下参数：

|参数|说明|
|-|-|
|idmPageId|当前配置的页面id|
|moduleIds|当前页面的所有组件的packageid，用逗号隔开，此ID每次都会生成新的组件ID|
|componentIds|当前页面的所有组件的comId，用逗号隔开，同一个组件引用多次的话ID都是一样的|
|...地址栏参数|当前url地址的所有参数会直接往后追加|
:::tip
地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
:::
##### 表单数据自定义函数【formDataFunction】
<img :src="$withBase('/images/attr/page_attr_formDataFunction.jpg')" style="margin-top:10px" alt="预览效果" />

请求接口post要提交的数据，请求前会调用此处设置的自定义函数，函数接收参数为格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    ..."自定义的参数"
}
```
自定义函数返回的格式必须为 `{a:b,c:d}`
- 显示条件：`请求方式 = POST`
- 支持多选：`否`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::
##### 请求前置条件自定义函数【preAllowFunction】
<img :src="$withBase('/images/attr/page_attr_preAllowFunction.jpg')" style="margin-top:10px" alt="预览效果" />

请求接口前会调用设置的自定义函数来返回true或false进行判断是否请求该接口，函数接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    ..."自定义的参数"
}
```
自定义函数必须返回 true 或 false ，不返回代表可以请求接口
- 支持多选：`否`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::
##### 结果集名称【resultDataName】
<img :src="$withBase('/images/attr/page_attr_resultDataName.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置当前接口返回结果的结果集名称，单个页面内每个接口名不能重复
##### 请求成功返回自定义函数【interfaceRunLaterFunction】
<img :src="$withBase('/images/attr/page_attr_interfaceRunLaterFunction.jpg')" style="margin-top:10px" alt="预览效果" />

请求成功返回结果后会调用此处设置的自定义函数，接收参数格式为上面执行提交的返回结果，格式如下：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数",
    "resultData":Object,
    "_this":"当前渲染引擎的this对象"
}
```
- 支持多选：`是`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::
#### 组件加载之前执行【beforeLoadingFunction】
<img :src="$withBase('/images/attr/page_attr_beforeLoadingFunction.jpg')" style="margin-top:10px" alt="预览效果" />

组件加载之前会调用此处设置的方法，接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数",
    "_this":"当前渲染引擎的this对象"
}
```
- 支持多选：`是`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::
#### 组件加载完后执行【afterLoadingFunction】
<img :src="$withBase('/images/attr/page_attr_afterLoadingFunction.jpg')" style="margin-top:10px" alt="预览效果" />

组件加载完之后会调用此处设置的方法，接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数",
    "_this":"当前渲染引擎的this对象"
}
```
- 支持多选：`是`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::
### 控制中心设置

用于设置组件的控制中心（动态属性或可以理解为在渲染引擎上组件个性化定制）的抽屉式弹出框样式风格等基本信息。
:::tip
该设置项只有在预览时候才能看到效果。更详细的用法参考：组件开发的 [控制中心](../moduledevelop/controlcenter.md)
:::
#### 控制地址【moduleControlCenterSettingUrl】
<img :src="$withBase('/images/attr/page_attr_moduleControlCenterSettingUrl.jpg')" style="margin-top:10px" alt="预览效果" />

用于配置当前页面每个组件控制中心动态属性的设置地址
- 默认值：自动获取配置项`applications.moduleControlCenterSettingUrl` 配置的地址
:::tip
地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)

目前已有该渲染动态属性的组件： [控制中心组件](https://github.com/yunit-code/controlCenter)
:::
#### 显示标题【drawerTitleShow】
<img :src="$withBase('/images/attr/page_attr_drawerTitleShow.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置弹出的抽屉式层是否显示顶部的标题
- 默认值：`true`
#### 默认标题【drawerTitle】
<img :src="$withBase('/images/attr/page_attr_drawerTitle.jpg')" style="margin-top:10px" alt="预览效果" />

用于配置弹出抽屉的默认标题，默认标题会被组件实时调用替换
- 默认值：`属性设置`
- 显示条件：`显示标题 = true`
#### 容器类名【drawerWrapClassName】
<img :src="$withBase('/images/attr/page_attr_drawerWrapClassName.jpg')" style="margin-top:10px" alt="预览效果" />

用于配置弹出抽屉外层容器的样式类名，多个可用空格隔开
#### 抽屉方向【drawerPlacement】
<img :src="$withBase('/images/attr/page_attr_drawerPlacement.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置弹出的抽屉层方向，分别可以为 `上`、`右`、`下`、`左` 四个边弹出
- 默认值：`右`
#### 层级索引【drawerZIndex】
<img :src="$withBase('/images/attr/page_attr_drawerZIndex.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置弹出的抽屉层级索引，如果遇到被其他组件元素覆盖则可以调整这里的数值大小
- 默认值：`1000`
#### 显示关闭【drawerClosable】
<img :src="$withBase('/images/attr/page_attr_drawerClosable.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置弹出的抽屉式层是否显示顶部右上角的关闭图标按钮
- 默认值：`true`
#### 关闭销毁【drawerDestroyOnClose】
<img :src="$withBase('/images/attr/page_attr_drawerDestroyOnClose.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置弹出的抽屉式层关闭时是否销毁 弹出抽屉 里的子元素
- 默认值：`false`
#### 显示遮罩【drawerMask】
<img :src="$withBase('/images/attr/page_attr_drawerMask.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置弹出的抽屉式层底部是否显示半透明遮罩
- 默认值：`true`
#### 遮罩关闭【drawerMaskClosable】
<img :src="$withBase('/images/attr/page_attr_drawerMaskClosable.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置弹出的抽屉式层底部的半透明遮罩是否能点击关闭抽屉式属性弹框
- 默认值：`true`
#### esc关闭【drawerKeyboarde】
<img :src="$withBase('/images/attr/page_attr_drawerKeyboarde.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置弹出的抽屉式层是否支持键盘 esc 关闭
- 默认值：`true`
#### 宽高
##### 宽度【drawerWidth】
<img :src="$withBase('/images/attr/page_attr_drawerWidth.jpg')" style="margin-top:10px" alt="预览效果" />

设置弹出抽屉的宽度，可以使用px、%、vw等单位，比如100%、100px、100vw等等
- 默认值：`256px`
##### 高度【drawerHeight】
<img :src="$withBase('/images/attr/page_attr_drawerHeight.jpg')" style="margin-top:10px" alt="预览效果" />

设置弹出抽屉的高度，或者使用px、%、vh等单位，比如100%、100px、100vh等等
- 默认值：`256px`
:::tip
只有抽屉方向为上、下的值此处设置才生效
:::
#### 抽屉样式自定义函数设置

此级为自定义抽屉弹出层的样式的自定义函数属性归类分组，主要用于设置抽屉弹出层的一些基本外观样式。
##### 遮罩样式自定义函数【drawerMaskStyleFunction】
<img :src="$withBase('/images/attr/page_attr_drawerMaskStyleFunction.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置遮罩层的样式，接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数",
    "_this":"当前渲染引擎的this对象",
}
```
自定义函数返回格式必须为cssObject对象 `{a:b,c:d}`
- 支持多选：`否`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::
##### 最外层样式自定义函数【drawerWrapStyleFunction】
<img :src="$withBase('/images/attr/page_attr_drawerWrapStyleFunction.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置可用于设置 抽屉 最外层容器的样式，接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数",
    "_this":"当前渲染引擎的this对象",
}
```
自定义函数返回格式必须为cssObject对象 `{a:b,c:d}`
- 支持多选：`否`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::
##### 抽屉样式自定义函数【drawerStyleFunction】
<img :src="$withBase('/images/attr/page_attr_drawerStyleFunction.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置可用于设置 抽屉 弹出层的样式，接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数",
    "_this":"当前渲染引擎的this对象",
}
```
自定义函数返回格式必须为cssObject对象 `{a:b,c:d}`
- 支持多选：`否`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::
##### 抽屉头部样式自定义函数【drawerHeaderStyleFunction】
<img :src="$withBase('/images/attr/page_attr_drawerHeaderStyleFunction.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置可用于设置 抽屉 头部的样式，接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数",
    "_this":"当前渲染引擎的this对象",
}
```
自定义函数返回格式必须为cssObject对象 `{a:b,c:d}`
- 支持多选：`否`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::
##### 抽屉内容样式自定义函数【drawerBodyStyleFunction】
<img :src="$withBase('/images/attr/page_attr_drawerBodyStyleFunction.jpg')" style="margin-top:10px" alt="预览效果" />

用于设置可用于设置 抽屉 内容部分的样式，接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数",
    "_this":"当前渲染引擎的this对象",
}
```
自定义函数返回格式必须为cssObject对象 `{a:b,c:d}`
- 支持多选：`否`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::
#### 切换显示动画结束自定义函数【drawerAfterVisibleChangeFunction】
<img :src="$withBase('/images/attr/page_attr_drawerAfterVisibleChangeFunction.jpg')" style="margin-top:10px" alt="预览效果" />

切换抽屉时动画结束后会调用此处设置的自定义函数，接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数",
    "_this":"当前渲染引擎的this对象",
}
```
- 支持多选：`是`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::
#### 关闭回调自定义函数【drawerCloseFunction】
<img :src="$withBase('/images/attr/page_attr_drawerCloseFunction.jpg')" style="margin-top:10px" alt="预览效果" />

点击遮罩层或右上角叉或取消按钮会调用此处设置的自定义函数，接收参数格式为：
```json
{
    "pageId":"当前配置的页面ID",
    "urlData":"当前url地址的所有参数JSONObject字符串格式",
    "customParam":"自定义的参数",
    "_this":"当前渲染引擎的this对象",
}
```
- 支持多选：`是`
:::tip
自定义函数用法请参考：[页面扩展开发](../moduledevelop/pageextend.md)
:::
## 字体图标
核心框架工具组件的图标使用的是字体图标的，IDM使用的是[iconfont](https://www.iconfont.cn/)的字体图标，目前IDM默认提供了一部分，如果觉得满足不了需求或者想自定义只需要把代码包下的`static/iconfont`替换掉即可。

预览[IDM内置字体](https://at.alicdn.com/t/project/2443260/e464be62-3947-4190-9448-fc72eafb49a3.html?spm=a313x.7781069.1998910419.71)


::: tip
使用到了字体图标的地方有组件图标，参考 [组件市场返回结构示例](../setting/mockdata.md#componentmarketdata) 的`iconClass`属性以及组件属性控件 [iconSelect](../reference/config.md#public) 也是使用此字体图标
:::