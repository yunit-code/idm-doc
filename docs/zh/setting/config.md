# 配置项
核心框架已经针对下面的所有属性提供了默认值，此配置文件与IDM的index.html页面在同级目录，该配置文件的配置信息主要用于覆盖IDM提供的默认值，如果以下默认值不适合自己可添加属性进行覆盖，配置文件名是`setting.js`，配置文件结构如下：
```json
window.$$IDMSetting = {
    //框架的版本
    version: "1.0.0",
    //IDM的文件夹名称
    webRoot: {
        idm:"idm",
        ...
    }
    ...
}
```
## version
- 值类型：`string`

  框架的版本号
  :::warning
  请不要私自修改，如果配置文件内没有该属性则不需要添加，也不建议单独设置来覆盖框架的默认版本
  :::
## webRoot
框架的路径基本信息归类
### idm
- 值类型：`string`

- 默认值：`idm`

  IDM的文件夹名称
### default
- 值类型：`string`

- 默认值：`/DreamWeb/`

  框架的所属项目的根目录名称，比如你的应用程序名称为`projectName`,这里应该填写`/projectName/`，如果没有应用程序名称(例如：http://?.com/能直接访问首页)，这里应该直接为`/`

### htmlDir
- 值类型：`string`

- 默认值：`./`

  页面的前置路径，可相对或绝对（示例：`./`或`../idm/`或`/projectName/idm/`）
  ::: tip
  示例中的`idm`为`webRoot.idm`配置的名称，保持一致即可
  :::
### assetsDir
- 值类型：`string`

- 默认值：`./static/`

  打包编译的静态资源文件，相对于当前的页面路径

### moduleDir
- 值类型：`string`

- 默认值：`./idm_modules/`

  开发的组件相对IDM框架所在项目的目录

### platformNo
- 值类型：`string`

- 默认值：`p1000`

  如果你的项目工程模式为产品（平台）->项目（二次开发）模式，则此处代表的是平台的编号，此项相当于一个产品的基本编号，所有IDM核心框架源码编译后的代码都应该放到这个编号下面，如无编号可留空

  ::: warning
  `DreamWeb`的默认为`p1000`,项目组请勿修改，否则造成程序无法访问
  :::
### projectNo
- 值类型：`string`

- 默认值：`p1000`

  如果你的项目工程模式为产品（平台）->项目（二次开发）模式，则此处代表的是项目的编号，此项相当于一个项目的扩展编号，所有上传的文件和配置产生的文件都会保存在此编号的文件夹下面，如果与`platformNo`相同的编号则默认为都是平台的，也就是项目组配置的和自定义开发的组件都是存放在`platformNo`的编号文件夹中。如果工程就是项目，则此处可留空或与`platformNo`相同即可
  ::: warning
  `DreamWeb`的默认为`p1000`,项目组根据项目编号自行修改
  :::
### moduleAbsoluteDir
- 值类型：`string`

- 默认值：`/{projectNo}/idm/idm_modules/`

  组件的存放路径，相对于程序根目录的绝对的路径
  ::: tip
  `{projectNo}`会自动使用`projectNo`属性设置的值进行替换
  :::

## pageSchema
页面结构的存储设置信息归类，主要针对页面设置数据的保存方式以及存储路径等。
### saveType
- 值类型：`string` | `'disk'` | `'database'`

- 默认值：`database`

  页面配置的Schema结构数据保存方式，支持磁盘存储JSON格式 `disk` 和数据库存储 `database`
  
  :::tip
  请根据自己项目环境进行选择合理的存储方式，如果选择磁盘存储第一次始终是要请求一次接口的。
  :::
### jsonDir
- 值类型：`string`

- 默认值：`/{projectNo}/idm/idm_pageschema/{pageid}/{version}.json`
  
  页面配置的Schema结构数据存储方式为 `disk` 的时候磁盘存储JSON页面配置文件的相对路径地址。
  :::tip
  以下格式会自动替换对应的实际值，请参考以下注释：

  `{projectNo}`：配置文件中配置的 [projectNo](./config.md#projectno) 的值

  `{pageid}`：页面配置的页面ID

  `{version}`：页面保存的时候填写的版本号
  :::

## api
框架用到的api后端接口，如果需要框架正常使用或启用全部功能需要完成下面对应的后端接口开发，并返回指定格式的mockdata数据。mockdata数据格式参考：[mockdata](./mockdata.md)

以下属性如果为空则会使用 [mockurl](./config.md#mockurl) 属性下面配置的对应mockdata数据地址。

:::tip
以下属性配置的接口地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
:::
### componentMarketUrl

开发工具的左侧组件市场数据接口地址，带分组结构格式的
- 值类型：`string`

- 默认值：`/ctrl/idm/api/fetchComponentMarketData`

- 请求方式：`GET`

- 请求参数：
  
  url地址接收的参数会作为此处参数

  :::tip
  返回的数据结构请参考：[ComponentMarketData](./mockdata.md#componentmarketdata)
  :::
### pageVersionListUrl

开发工具的页面版本数据接口地址，主要用于工具的左侧顶部版本号列表
- 值类型：`string`

- 默认值：`/ctrl/idm/api/fetchPageVersionList`

- 请求方式：`GET`

- 请求参数：
  
  |参数|说明|
  |-|-|
  |pageid|当前配置的页面id|

  :::tip
  返回的数据结构请参考：[PageVersionListData](./mockdata.md#pageversionlistdata)
  :::
### pageSettingDataUrl

用于获取当前打开的页面配置的数据结构的接口地址
- 值类型：`string`

- 默认值：`/ctrl/idm/api/fetchPageSettingData`

- 请求方式：`GET`

- 请求参数：
  
  |参数|说明|
  |-|-|
  |pageid|当前配置的页面id|
  |version|页面版本号（如果版本号为空则需要返回最新的版本号的数据，不管saveType为disk还是database都是如此）|
  |savetype|当前配置的存储方式，参考 [saveType](./config.md#savetype)|

  :::tip
  返回的数据结构请参考：[pageSettingDataData](./mockdata.md#pagesettingdatadata)
  :::
### customModuleSettingDataUrl

用于获取当前打开的布局组件或业务组件配置的数据结构的接口地址
- 值类型：`string`

- 默认值：`/ctrl/idm/api/fetchCustomModuleSettingData`

- 请求方式：`GET`

- 请求参数：
  
  |参数|说明|
  |-|-|
  |pageid|当前配置的页面id|
  |schemaType|0：布局组件，1：业务组件|
  
  :::tip
  返回的数据结构请参考：[customModuleSettingDataData](./mockdata.md#custommodulesettingdatadata)
  :::

### savePageSettingUrl

用于保存页面配置全部信息的接口地址
- 值类型：`string`

- 默认值：`/ctrl/idm/api/savePageSchema`

- 请求方式：`POST`

- 请求参数：

  |参数|说明|
  |-|-|
  |pageid|当前配置的页面id|
  |pageSettingData|页面结构数据json字符串，保存到数据库或json文件即可|
  |version|当次保存的版本号|
  |author|作者|
  |remark|备注|
  |isUse|是否将此版本设为使用版本，1代表使用，0代表不使用|
  |traceList|历史记录操作数据,格式：[{actionType:动作类型、pageid：页面ID、pageVersion：页面版本、opDate：操作日期、opTime：操作时间、opContent：操作记录内容对象}]|
  |projectNo|项目编号|

- 返回结构：

  只需要code返回值为 200 代表成功，否则为失败。
  ```json
  {
      "code": "200",
      "type": "success",
      "message": "操作成功",
      "metadata": null,
      "token": "",
      "data": null
  }
  ```
  :::tip
  根据自己环境选择保存方式，建议同时保存数据库和磁盘两种方式。
  :::
### saveCustomModuleUrl

用于保存自定义组件（业务组件）配置接口地址
- 值类型：`string`

- 默认值：`/ctrl/idm/api/saveCustomModule`

- 请求方式：`POST`

- 请求参数：

  |参数|说明|
  |-|-|
  |pageid|当前配置的页面id|
  |title|填写的页面标题|
  |previewImgJson|预览的图片JSON|
  |moduleType|组件类型：0：布局组件，1：业务组件|
  |moduleIconfont|组件图标class，使用iconfont，参考：[字体图标](../guide/developtool.md#字体图标)|
  |moduleContainerCount|布局组件的容器数量|
  |pageSettingData|组件结构数据json字符串，保存到数据库即可|
  |author|作者|
  |remark|备注|
  |traceList|历史记录操作数据,格式：[{actionType:动作类型、pageid：页面ID、pageVersion：页面版本、opDate：操作日期、opTime：操作时间、opContent：操作记录内容对象}]|
  |projectNo|项目编号|

- 返回结构：

  只需要code返回值为 200 代表成功，否则为失败。
  ```json
  {
      "code": "200",
      "type": "success",
      "message": "操作成功",
      "metadata": null,
      "token": "",
      "data": null
  }
  ```

### uploadFileServerUrl

用于上传图片、文件的接口地址（主要用于框架、公共上传方法）
- 值类型：`string`

- 默认值：`/ctrl/idm/api/fileupload`

- 请求方式：`POST`

- 请求类型：`Content-Type: multipart/form-data`

- 请求参数：

  |参数|说明|
  |-|-|
  |type|上传的类型值，这个由框架内决定性，例如图片上传属性控件的值为`dev_uploadimage_ctrl`|
  |file|上传的文件|
  |...webRoot|[webRoot](./config.md#webroot) 属性下面的所有子属性都会传递到后端，可以利用此处配置合理的存储文件|

- 返回结构：

  需要返回以下格式数据
  ```json
  {
      "code": "200",
      "type": "success",
      "message": "操作成功",
      "metadata": null,
      "token": "",
      "data": {
        "fileName":"文件名称.png",
        "filePath": "/upload/idmfiles/f22081da-9410-40bc-afa0-6b3106c45c1c.png",
        "fileSize":"2188888",
        "imageWidth":"图片的宽度，如果上传的文件为图片的情况下",
        "imageHeight":"图片的高度，如果上传的文件为图片的情况下"
      }
  }
  ```

### saveCropperBase64ImageUrl

保存裁剪后的图片base64转存为图片文件（主要用于框架、公共上传方法）
- 值类型：`string`

- 默认值：`/ctrl/idm/api/saveBase64ToImageFile`

- 请求方式：`POST`

- 请求参数：

  |参数|说明|
  |-|-|
  |type|上传的类型值，这个由框架内决定性，例如图片上传属性控件的值为`dev_uploadimage_ctrl`|
  |data|图片base64|
  |suffix|后缀名 jpeg, png, webp|
  |...webRoot|[webRoot](./config.md#webroot) 属性下面的所有子属性都会传递到后端，可以利用此处配置合理的存储文件|

- 返回结构：

  需要返回以下格式数据
  ```json
  {
      "code": "200",
      "type": "success",
      "message": "操作成功",
      "metadata": null,
      "token": "",
      "data": {
        "fileName":"文件名称.png",
        "filePath": "/upload/idmfiles/f22081da-9410-40bc-afa0-6b3106c45c1c.png",
        "fileSize":"2188888",
        "imageWidth":"图片的宽度，如果上传的文件为图片的情况下",
        "imageHeight":"图片的高度，如果上传的文件为图片的情况下"
      }
  }
  ```
### developTraceListUrl

开发工具的获取操作痕迹的列表记录接口地址
- 值类型：`string`

- 默认值：`/ctrl/idm/api/fetchDevelopTraceListInfo`

- 请求方式：`GET`

- 请求参数：

  |参数|说明|
  |-|-|
  |pageid|当前配置的页面id|
  |startIndex|分页的开始索引|
  |pageNumber|每页显示大小|

- 返回结构：

  需要返回以下格式数据
  ```json
  {
      "code": "200",
      "type": "success",
      "message": "操作成功",
      "metadata": null,
      "token": "",
      "data": {
        "id":"数据ID，没有实际意义，只有有删除功能才有意义",
        "actionType": "动作类型数字",
        "pageId":"页面ID",
        "pageVersion":"页面版本",
        "opDate":"操作日期",
        "opTime":"操作时间",
        "opContent":"操作实际内容"
      }
  }
  ```
  :::tip
  动作类型数字：1-15分别代表以下含义：
  `添加组件`、`移动组件`、`删除组件`、`修改组件属性`、
  `切换组件版本`、`修改页面标题`、`保存页面`、`修改页面尺寸`、
  `修改页面配置`、`复制组件`、`剪切组件`、`创建辅助线`、`删除辅助线`、`清除全部辅助线`、`移动辅助线`
  :::
### applicationInfoUrl

获取应用信息的默认接口地址，页面属性会使用此配置，但页面属性能更改接口地址，所以此处只作为页面属性的默认接口地址，此处建议返回应用的一些基本信息，IDM框架会取出存放至全局变量中提供所有组件使用。

- 值类型：`string`

- 默认值：`/ctrl/idm/api/fetchApplicationInfo`

- 请求方式：`GET`

- 返回结构：

  需要返回以下格式数据
  ```json
  {
      "code": "200",
      "type": "success",
      "message": "操作成功",
      "metadata": null,
      "token": "",
      "data": {
      }
  }
  ```
  :::tip
  应用信息的数据放置在data下即可
  :::
### userInfoUrl

获取当前登录用户信息的默认接口地址，页面属性会使用此配置，但页面属性能更改接口地址，所以此处只作为页面属性的默认接口地址，此处建议返回当前登录用户的基本信息，IDM框架会取出存放至全局变量中提供所有组件使用。
- 值类型：`string`

- 默认值：`/ctrl/idm/api/fetchUserInfo`

- 请求方式：`GET`

- 返回结构：

  需要返回以下格式数据
  ```json
  {
      "code": "200",
      "type": "success",
      "message": "操作成功",
      "metadata": null,
      "token": "",
      "data": {
      }
  }
  ```
  :::tip
  当前登录用户信息的数据放置在data下即可
  :::
### saveUserCustomizationUrl

用于用户对页面个性化定制的保存的接口地址，比如用户可以调整页面布局进行个性化排序等等。
- 值类型：`string`

- 默认值：`/ctrl/idm/api/saveUserCustomization`

- 请求方式：`POST`

- 请求参数：

  |参数|说明|
  |-|-|
  |urlData|url地址中的全部参数地址|
  |pageid|页面ID|
  |version|页面版本号|
  |customData|个性化定制的数据，结构为对象，对象下包含数组层级的|

- 返回结构：

  需要返回以下格式数据
  ```json
  {
      "code": "200",
      "type": "success",
      "message": "操作成功",
      "metadata": null,
      "token": "",
      "data": null
  }
  ```
  :::tip
  页面个性化功能IDM已内置，如果想要自行实现布局组件可以直接调用此接口进行对数据结构存储即可。
  :::
### userCustomizationUrl

用于获取用户对页面个性化定制的接口地址，比如用户已经对页面进行个性化定制排序后的结果等等。
- 值类型：`string`

- 默认值：`/ctrl/idm/api/fetchUserCustomization`

- 请求方式：`GET`

- 请求参数：

  |参数|说明|
  |-|-|
  |urlData|url地址中的全部参数地址|
  |pageid|页面ID|
  |version|页面版本号|

- 返回结构：

  需要返回以下格式数据
  ```json
  {
      "code": "200",
      "type": "success",
      "message": "操作成功",
      "metadata": null,
      "token": "",
      "data": {
        "id":"定制化ID",
        "idmId":"页面ID",
        "pageId":"页面ID",
        "pageVersion":"页面版本号",
        "customData":"此处为用户个性化定制后的数据，为保存的时候传的customData",
        "userId":"用户ID"
      }
  }
  ```
  :::tip
  如果需要自定义开发定制化页面，可以通过此接口获取当前用户已保存的结构
  :::
### saveFormsMetaDataUrl

表单提交元数据的URl地址
- 值类型：`string`

- 默认值：`/ctrl/idm/api/saveFormsMetaData`

- 请求方式：`POST`

- 请求类型：`Content-Type: application/json;charset=UTF-8`

  此处建议使用json格式提交数据，方便后端获取解析，当然也可以在组件开发内使用 `multipart/form-data` 方式提交数据

- 请求参数：

  |参数|说明|
  |-|-|
  |pageId|当前配置的页面id|
  |urlData|页面url地址携带的所有参数，使用 `IDM.url.queryObject()` 获取得到的结果|
  |moduleData|所有已经校验通过的组件返回结果,数组形式，里面的格式由组件内自行决定|

  :::tip
  返回的数据结构不固定，可以自行解析处理返回的结果
  :::
### allCodepackageUrl

获取文档管理的左上角代码包切换数据接口地址
- 值类型：`string`

- 默认值：`/ctrl/idm/console/fetchAllCodePackageList`

- 请求方式：`GET`

- 请求参数：
  
  无
  :::tip
  返回的数据结构请参考：[AllCodePackageListData](./mockdata.md#allcodepackagelistdata)
  :::
### dynamicAttributeListUrl

获取文档管理的左上角代码包切换数据接口地址
- 值类型：`string`

- 默认值：`/ctrl/idm/console/fetchMarketModuleAttrUserSetData`

- 请求方式：`GET`

- 请求参数：
  
  ```js
  {
    "urlData": JSON.stringify({
          marketModuleId: this.moduleObject.comId,
          pageId: IDM.broadcast ? IDM.broadcast.pageModule.id : "",
          packageid: this.moduleObject.packageid,
        })
  }
  ```
  
- 返回结构：

  需要返回以下格式数据
  ```json
  {
      "code": "200",
      "type": "success",
      "message": "操作成功",
      "metadata": null,
      "token": "",
      "data": [{
        "id":"主键ID",
        "attrCode":"标识key",
        "attrData":"用户设置的数据",
        ...
      }]
  }
  ```
## mockurl

mockdata地址，只有对应的api地址为空的时候才会使用这里的静态数据。mockdata数据格式参考：[mockdata](./mockdata.md)

:::tip
以下属性配置的mockdata会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
:::
### componentMarketUrl
- 值类型：`string`

- 默认值：`$/mockdata/ComponentMarketData.json`

  :::tip
  数据结构请参考：[ComponentMarketData](./mockdata.md#componentmarketdata)
  :::
### pageVersionListUrl
- 值类型：`string`

- 默认值：`$/mockdata/PageVersionListData.json`

  :::tip
  数据结构请参考：[PageVersionListData](./mockdata.md#pageversionlistdata)
  :::
### pageSettingDataUrl
- 值类型：`string`

- 默认值：`$/mockdata/pageSettingDataData.json`

  :::tip
  数据结构请参考：[pageSettingDataData](./mockdata.md#pagesettingdatadata)
  :::
### customModuleSettingDataUrl
- 值类型：`string`

- 默认值：`$/mockdata/customModuleSettingDataData.json`

  :::tip
  数据结构请参考：[customModuleSettingDataData](./mockdata.md#custommodulesettingdatadata)
  :::
### allCodepackageUrl
- 值类型：`string`

- 默认值：`$/mockdata/AllCodePackageListData.json`

  :::tip
  数据结构请参考：[AllCodePackageListData](./mockdata.md#allcodepackagelistdata)
  :::

## develop

主要用来对[开发工具](../guide/developtool.md)的功能进行配置的属性归类
### schoolsUrl
- 值类型：`string`

- 默认值：`http://school.yunit.cn`

  开发工具[功能菜单](../guide/developtool.md#功能菜单)中的[IDM学院](../guide/developtool.md#IDM学院)地址，可以是相对路径，也可以是绝对路径
  :::tip
  地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
  :::
### devComponentUrl
- 值类型：`string`

- 默认值：`http://idm.yunit.cn`

  开发工具[功能菜单](../guide/developtool.md#功能菜单)中的[组件开发](../guide/developtool.md#组件开发)地址，可以是相对路径，也可以是绝对路径
  :::tip
  地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
  :::
### helpDocumentUrl
- 值类型：`string`

- 默认值：`http://www.yunit.cn/help`

  开发工具[功能菜单](../guide/developtool.md#功能菜单)中的[帮助文档](../guide/developtool.md#帮助文档)地址，可以是相对路径，也可以是绝对路径
  :::tip
  地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
  :::
### documentManageUrl
- 值类型：`string`

- 默认值：`./index.html#/document`

  开发工具[功能菜单](../guide/developtool.md#功能菜单)中的[文档管理](../guide/developtool.md#文档管理)地址，可以是相对路径，也可以是绝对路径
  :::tip
  地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
  :::
### dragAreaSizeList
- 值类型：`array`

- 默认值：
  ```json
  [
      {
          key: '3',
          width: 1366,
          height: 768,
          showText: '1366*768',
          type: 3
      },
      {
          key: '4',
          width: 1920,
          height: 1080,
          showText: '1920*1080',
          type: 3
      },
      {
          key: '5',
          width: 375,
          height: 667,
          showText: 'iphone6/7/8',
          type: 3
      },
      {
          key: '6',
          width: 414,
          height: 736,
          showText: 'iphone6/7/8 Plus',
          type: 3
      },
      {
          key: '7',
          width: 768,
          height: 1024,
          showText: 'iPad(768*1024)',
          type: 3
      },
      {
          key: '8',
          width: 1024,
          height: 768,
          showText: 'iPad(1024*768)',
          type: 3
      }
  ]
  ```
  拖拽区域的大小列表配置，主要用于顶部工具栏中间部分的下拉选项配置。以下是各个属性的解释：
  ```json
  {
      key: '从3开始，保证不重复即可',
      width: '拖拽区域的实际宽度（px）',
      height: '拖拽区域的实际高度（px）',
      showText: '要显示的文本',
      type: '类型值,-1:线条,3:系统内置的尺寸'
  }
  ```
### dragAreaSizeDefaultKey
- 值类型：`string`

- 默认值：`1`

  拖拽区域大小默认值key，此默认key会被url中传入的 [dragSizeKey](../guide/developtool.md#dragsizekey) 参数覆盖。

  :::tip
  默认值`1`代表为工具内置的 `适应当前` 尺寸
  
  可填写的默认值可参考 [dragAreaSizeList](./config.md#dragareasizelist) 属性配置的数组，只能从这里面选择一个或者使用默认值为`1`的设置
  :::
### componentMarketListDefaultType
- 值类型：`string` | `'grid'` | `'list'`

- 默认值：`grid`

  开发工具中的组件市场的列表默认显示类型，目前有两种显示类型，`list` 代表为默认显示列表类型，`grid` 代表为默认显示网格类型，虽然此处设置了默认显示，但是在开发工具中可以进行切换显示

### openFetchUserInfo
- 值类型：`boolean`

- 默认值：`true`

  开启开发工具中在初始化的时候获取用户信息填充至[IDM.user](../coreapi/api.md#user)全局变量中

  :::tip
  只会使用配置项中（[userInfoUrl](config.md#userInfoUrl)）的接口进行加载，页面属性设置中如果修改了是不会加载修改后的接口返回的信息，所以请根据按需开启。
  :::

## document

主要用来对[文档管理](../guide/documentmanage.md)的功能进行配置的属性归类
### codepackageDocumentPath
- 值类型：`string`

- 默认值：`static/doc/`

  代码包内的文档相对路径，此文档主要用于介绍代码包的，文档文件名称固定为`index.md`，比如代码包打包后存放的地址为：`idm/idm_modules/basic/1.0.0/`，而此代码包的文档`index.md`文件在 `idm/idm_modules/basic/1.0.0/static/doc/` 目录下面，则此处就应该填写 `static/doc/`。
  
  :::tip
  路径中的各个文件夹名含义：

  idm：为框架的文件夹名，参考 [idm](./config.md#idm) 属性配置

  idm_modules：组件的目录，参考 [moduleDir](./config.md#moduledir) 属性配置

  basic：组件包的文件夹名

  1.0.0：组件包的版本号文件夹

  static：组件打包的静态资源目录，参考 [组件开发](../moduledevelop/easystart.md)

  doc：文档存放的目录，参考 [组件文档](../moduledevelop/easystart.md)
  :::
### moduleDocumentPath
- 值类型：`string`

- 默认值：`static/doc/components/`

  代码包内的组件的文档相对路径，此处的文档主要用于介绍代码包内每个组件的，一个组件对应一个文档，文档文件名称固定为 `组件的类名.md`，比如代码包打包后存放的地址为：`idm/idm_modules/basic/1.0.0/`，而此代码包内的组件的文档文件在 `idm/idm_modules/basic/1.0.0/static/doc/components/` 目录下面，则此处就应该填写 `static/doc/components/`，例如按钮的文档名称为：`IButton.md`

  :::tip
  路径中的各个文件夹名含义参考 [codepackageDocumentPath](./config.md#codepackagedocumentpath) 的提示
  :::
### saveMarkDownFileUrl

用于根据上述的属性配置保存md文件到上述配置的对应目录中
- 值类型：`string`

- 默认值：`/ctrl/idm/api/saveDocumentMdFile`

- 请求方式：`POST`

- 请求参数：

  |参数|说明|
  |-|-|
  |mdPath|md对应要生成的文件地址|
  |type|code代表代码包的路径，module代表组件的文档路径|
  |moduleClassName|组件的类名|
  |mdContent|md文档的内容|

- 返回结构：

  只需要code返回值为 200 代表成功，否则为失败。
  ```json
  {
      "code": "200",
      "type": "success",
      "message": "操作成功",
      "metadata": null,
      "token": "",
      "data": null
  }
  ```

## applications

主要用来对整个框架的功能进行配置的属性归类
### defaultLoginPageUrl
- 值类型：`string`

- 默认值：`/ctrl/login`

  页面设置统一的默认登录页地址，此处为页面属性 [登录页地址](../guide/developtool.md#登录页地址【loginpageurl】) 的默认地址，不会是页面设置的最终登录页地址。
### themeNamePrefix
- 值类型：`string`

- 默认值：`idm-theme-`

  主题class名称的前缀，所有的组件主题可以依据此属性来写不同主题的样式。

  :::tip
  详细请参考：[主题皮肤](../moduledevelop/theme.md)
  :::
### moduleControlCenterSettingUrl
- 值类型：`string`

- 默认值：`~/index.html#/preview/idm_control_setting_panel_001`

  组件控制中心的默认设置url，此处为页面属性 [控制地址](../guide/developtool.md#控制地址【modulecontrolcentersettingurl】)的默认地址，不会是页面设置的最终控制中心页地址。
  
  :::tip
  更详细的控制中心解释请参考：组件开发的 [控制中心](../moduledevelop/controlcenter.md)
  :::
### useProjectNoSetting
- 值类型：`boolean`

- 默认值：true

  应用程序是否启用项目编号模式的配置，也就是平台代码与组件代码分离的方式，默认为true

  :::warning
  中途修改转换可能会造成程序读取异常，请在初始化的时候配置好
  :::
### moduleAttrFolderName
- 值类型：`string`

- 默认值：`attributes`

  组件包内的组件属性文件的存储所在的文件夹名称，具体可参考组件的 [高级开发-组件属性](../moduledevelop/attributes.md)

### fontFamilyList
- 值类型：`array`

- 默认值：
  ```json
  [
      {
          value:"arial, helvetica, 'microsoft yahei'",
          label:"Arial, Helvetica, 微软雅黑"
      },
      {
          value:"arial, helvetica, simhei",
          label:"Arial, Helvetica, 黑体"
      },
      {
          value:"'comic sans ms', 'microsoft yahei'",
          label:"Comic Sans MS, 微软雅黑"
      },
      {
          value:"'comic sans ms', simhei",
          label:"Comic Sans MS, 黑体"
      },
      {
          value:"impact, 'microsoft yahei'",
          label:"Impact, 微软雅黑"
      },
      {
          value:"impact, simhei",
          label:"Impact, 黑体"
      },
      {
          value:"'lucida sans unicode', 'microsoft yahei'",
          label:"Lucida Sans Unicode, 微软雅黑"
      },
      {
          value:"'lucida sans unicode', simhei",
          label:"Lucida Sans Unicode, 黑体"
      }
  ]
  ```
  组件属性控件 [font](../moduledevelop/attributes.md#font) 控件中的字体列表，`value` 代表实际应用的值，`label` 代表下拉选项显示的值

### commonRequireJsCss
- 值类型：`array`

- 默认值：
  ```json
  [
      "/resource/js/public.js",
      "/websocket/webscoket.js"
  ]
  ```
  设置应用程序组件加载之前要加载的公共脚本和样式文件
  
  :::tip
  以上的地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
  :::

### openIdmCoreLoadStyle
- 值类型：`boolean`

- 默认值：true

  用于设置是否开启核心框架的资源加载动画，如果设为false则是关闭，开启则不显示加载动画

  :::tip
  此动画效果非页面属性的 [加载动画](../guide/developtool.md#加载动画【openpreviewloadstyle】)，只有此动画效果结束了才会开始页面级别的加载进度动画。
  :::

### idmCoreLoadColor

- 值类型：`string`

- 默认值：`#1890ff`

  用于设置核心框架的资源加载动画的颜色。

### defaultPreviewLoadColor

- 值类型：`string`

- 默认值：`#1890ff`

  用于设置页面属性的 [动画颜色](../guide/developtool.md#动画颜色【previewloadcolor】) 的默认值。

### defaultOpenWeixinJSSDK

- 值类型：`boolean`

- 默认值：true

  用于设置页面属性的 [开启JS-SDK功能](../guide/developtool.md#开启JS-SDK功能【switchweixinjssdk】) 的默认值。

### defaultOpenPulltorefresh

- 值类型：`boolean`

- 默认值：true

  用于设置页面属性的 [开启下拉刷新](../guide/developtool.md#开启下拉刷新【openPulltorefresh】) 的默认值。

## websocket

主要用来对整个框架的websocket消息配置的属性归类

### websocketInitEventName
- 值类型：`string`

- 默认值：`initDreamSocketClient`

  用于设置调用初始化websocket方法名。

  :::tip
  此处只是用来配置开发工具中的页面设置属性中的[初始化websocket方法名](../guide/developtool.md#初始化websocket方法名【websocketinitname】)

  websocket脚本可通过[commonRequireJsCss](./config.md#commonrequirejscss)引入，也可通过[页面扩展开发](../moduledevelop/pageextend.md)
  :::

### websocketOpenEventName
- 值类型：`string`

- 默认值：`onWebSocketOpen`

  websocket打开后会调用IDM内置的打开方法

  :::tip
  此处只是用来配置开发工具中的页面设置属性中的[连接打开监听方法名](../guide/developtool.md#连接打开监听方法名【websocketopenevent】)
  :::

### websocketMessageEventName
- 值类型：`string`

- 默认值：`onWebSocketMessage`

  websocket收到消息后会调用IDM内置的监听消息方法，收到消息后会给所有组件发送指定协议（websocket）的值

  :::tip
  此处只是用来配置开发工具中的页面设置属性中的[监听接收消息方法名](../guide/developtool.md#监听接收消息方法名【websocketmessageevent】)
  :::

## weixin

主要用来对整个框架的微信功能配置的属性归类

### requireJsCss
- 值类型：`array` or `string`

- 默认值：
  ```json
  [
      "http://res.wx.qq.com/open/js/jweixin-1.2.0.js"
  ]
  ```
  设置应用程序组件加载之前要引入的微信js-sdk
  
  :::tip
  以上的地址会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
  :::


### jsApiList
- 值类型：`array`

- 默认值：`['launch3rdApp', 'request3rdApp', 'onHistoryBack', 'hideAllNonBaseMenuItem', 'hideOptionMenu', 'openUrl', 'closeWindow']`

  设置需要使用的JS接口列表，所有JS接口列表见[官方文档](https://developer.work.weixin.qq.com/document/path/90513)

  :::tip
  微信的JS接口列表可查看[山东通API](http://im.sdt.sdbdc.cn:9080/api/doc#18026)
  :::
  

### debug
- 值类型：`boolean`

- 默认值：false

  设置是否开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。

### signatureUrl
- 值类型：`string`

- 默认值：`/tencentCustomize/getConfig`

  设置签名获取接口地址，返回结果可参考如下：
  ```json
  {
    "code":"200",
    "message":"",
    "type":"success",
    "data":{
      "appId":"",
      "timestamp":"",
      "nonceStr":"",
      "signature":""
    }
  }
  ```

## sessionKeep

主要用来对整个框架的用户登录状态是session存储的但是又需要对会话信息持久化的时候属性归类

### cacheKeyName
- 值类型：`string`

- 默认值：`idm_sessionkeep_token`

  前端缓存后端生成的密钥名称，可通过以下三种方式存储（包括获取缓存顺序）：

  1. localStorage
  2. cookie
  3. url参数
  
  :::tip
  生产的密钥存储请自行进行存储，框架不提供存储方法
  :::

### defaultOpenSessionKeep

- 值类型：`boolean`

- 默认值：true

  用于设置页面属性的 [开启会话保持](../guide/developtool.md#开启会话保持【opensessionkeep】) 的默认值。

### defaultSilentReLoginUrl

- 值类型：`string`

- 默认值：`/silentRelogin`

- 请求方式：`POST`

- 请求参数：

  |参数|说明|
  |-|-|
  |参数名为上述配置的[cacheKeyName](./config.md#cachekeyname)属性|当前登录用户缓存的令牌|

- 返回结构：

  需要返回以下格式数据：
  ```json
  {
    "code":"200"
  }
  ```
  用于设置页面属性的 [静默登录接口地址](../guide/developtool.md#静默登录接口地址【silentreloginurl】) 的默认值。