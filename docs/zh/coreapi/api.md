# 全局API

`IDM` 是一个对象，包含整个框架的全局[配置项](../setting/config.md)和框架提供组件使用的标准API。可以在应用启动之后通过`IDM.方法名` or `IDM.分类名.方法名` 访问下列Function：
## util

此分类为基础的公共方法分类，此分类可省略类名（`IDM.方法名`）直接访问下列的方法，也可以追加分类（`IDM.util.方法名`）访问。
### UUID
- **定义**：

  `UUID()`

- **返回值**：`string`

- **用法**：
  ``` js
  //uuid生成范围 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

  IDM.UUID() // => MM8VhsDVwh9WYkhw
  ```
  获取16位的唯一标识
### uuid
- **定义**：

  `uuid(len, radix)`

- **参数**：
  - `{number} [len]` 要获取的长度
  - `{number} [radix]` 基数大小，也就是指定uuid生成范围

- **返回值**：`string`

- **用法**：
  ``` js
  //uuid生成范围 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

  IDM.uuid(16) // => MM8VhsDVwh9WYkhw

  IDM.uuid(16,2) // => 0000110011110110
  ```
  获取指定位数的唯一标识
### getClientWH
- **定义**：

  `getClientWH()`
  
- **返回值**：

  `{width:number,height:number}`
- **用法**：
  ``` js
  IDM.getClientWH() // => {width:1920,height:960}
  ```
  获取浏览器可视区域宽高方法
### mix
- **定义**：

  `mix()`
- **参数**：
  - `{boolean} [deep]` 可选。 Boolean类型 指示是否深度合并对象，默认为false。如果该值为true，且多个对象的某个同名属性也都是对象，则该"属性对象"的属性也将进行合并。
  - `{Object} [target]` Object类型 目标对象，其他对象的成员属性将被附加到该对象上。
  - `{Object} [object1]` 可选。 Object类型 第一个被合并的对象。
  - `{Object} [objectN]` 可选。 Object类型 第N个被合并的对象。
- **用法**：
  ``` js
  var object1 = {
      apple: 0,
      banana: {weight: 52, price: 100},
      cherry: 97
  };
  var object2 = {
      banana: {price: 200},
      durian: 100
  };
  /* object2 合并到 object1 中 */
  IDM.mix(object1, object2)

  /* object1的最终结果 */
  {
    "apple": 0,
    "banana": {
        "price": 200
    },
    "cherry": 97,
    "durian": 100
  }

  /* object2 合并到 object1 中 (深度合并对象) */
  IDM.mix(true, object1, object2)

  /* object1的最终结果 */
  {
    "apple": 0,
    "banana": {
        "weight": 52,
        "price": 200
    },
    "cherry": 97,
    "durian": 100
  }
  ```
  类似jQuery.extend方法，可用于对象合并
  :::warning
  不支持第一个参数传递 false 。

  如果多个对象具有相同的属性，则后者会覆盖前者的属性值。
  :::
### error
- **定义**：

  `error()`

- **用法**：
  ``` js
  IDM.error("IDM! 这是一个错误信息")
  ```
  代理console.error
- **参考**：

  [console.error](https://developer.mozilla.org/en-US/docs/Web/API/console/error)

### warn
- **定义**：

  `warn()`

- **用法**：
  ``` js
  IDM.warn("IDM! 这是一个警告信息")
  ```
  代理console.warn
- **参考**：

  [console.warn](https://developer.mozilla.org/en-US/docs/Web/API/console/warn)

### timeEnd
- **定义**：

  `timeEnd()`

- **用法**：
  ``` js
  IDM.timeEnd(label)
  ```
  代理console.timeEnd
- **参考**：

  [console.timeEnd](https://developer.mozilla.org/en-US/docs/Web/API/console/timeEnd)

### time
- **定义**：

  `time()`

- **用法**：
  ``` js
  IDM.time(label)
  ```
  代理console.time
- **参考**：

  [console.time](https://developer.mozilla.org/en-US/docs/Web/API/console/time)

### log
- **定义**：

  `log()`

- **用法**：
  ``` js
  IDM.log({a:1,b:2}) // => {a:1,b:2}
  IDM.log(123,456) // => 123 456
  ```
  代理console.log
- **参考**：

  [console.log](https://developer.mozilla.org/en-US/docs/Web/API/console/log)

### isPlainObject
- **定义**：

  `isPlainObject(obj)`

- **参数**：
  - `{Object} [obj]`

- **返回值**：`boolean`

- **用法**：
  ``` js
  IDM.isPlainObject({a:1,b:2}) // => true
  IDM.isPlainObject({}) // => true
  IDM.isPlainObject([]) // => false
  IDM.isPlainObject(1) // => false
  IDM.isPlainObject(true) // => false
  IDM.isPlainObject(function(){}) // => false
  ```
  验证是否是一个纯粹的对象
### hasOwn
- **定义**：

  `hasOwn(obj, key)`

- **参数**：
  - `{Object} [obj]`
  - `{string} [key]`

- **返回值**：`boolean`

- **用法**：
  ``` js
  IDM.hasOwn({a:1,b:2},"b") // => true
  IDM.hasOwn({a:1,b:2},"c") // => false
  IDM.hasOwn({a:1,b:{c:3}},"c") // => false
  ```
  验证对象中是否包含指定的key
### isFunction
- **定义**：

  `isFunction(fn)`

- **参数**：
  - `{Function} [fn]`

- **返回值**：`boolean`

- **用法**：
  ``` js
  IDM.isFunction(function(){}) // => true
  IDM.isFunction(1) // => false
  ```
  验证类型是否为函数
### type
- **定义**：

  `type(obj)`

- **参数**：
  - `{Object} [obj]`

- **返回值**：`string`

- **用法**：
  ``` js
  IDM.type(1) // => 'number'
  IDM.type({}) // => 'object'
  IDM.type([]) // => 'array'
  IDM.type("123") // => 'string'
  IDM.type(function(){}) // => 'function'
  IDM.type(true) // => 'boolean'
  ```
  获取对象类型
### isUnDef
- **定义**：

  `isUnDef(obj)`

- **参数**：
  - `{Object} [obj]`

- **返回值**：`boolean`

- **用法**：
  ``` js
  IDM.isUnDef() // => true
  IDM.isUnDef(1) // => false
  IDM.isUnDef(undefined) // => true
  IDM.isUnDef(null) // => true
  IDM.isUnDef(0) // => false
  IDM.isUnDef(false) // => false
  ```
  验证是否为undefind或者null
### isDef
- **定义**：

  `isDef(obj)`

- **参数**：
  - `{Object} [obj]`

- **返回值**：`boolean`

- **用法**：
  ``` js
  IDM.isDef() // => false
  IDM.isDef(1) // => true
  IDM.isDef(undefined) // => false
  IDM.isDef(null) // => false
  IDM.isDef(0) // => true
  IDM.isDef(false) // => true
  ```
  验证是否不为undefind或者null
### isEmptyObject
- **定义**：

  `isEmptyObject(obj)`

- **参数**：
  - `{Object} [obj]`

- **返回值**：`boolean`

- **用法**：
  ``` js
  IDM.isEmptyObject({}) // => true
  IDM.isEmptyObject([]) // => true
  IDM.isEmptyObject({a:1}) // => false
  IDM.isEmptyObject([{a:1}]) // => false
  IDM.isEmptyObject() // => true
  IDM.isEmptyObject(true) // =>true
  IDM.isEmptyObject(false) // =>true
  IDM.isEmptyObject(0) // =>true
  ```
  验证是否为一个空对象
### setStyleToPageHead
- **定义**：

  `setStyleToPageHead(id,object,addSelector)`
- **参数**：
  - `{string} [id]`
  - `{Object} [object]`
  - `{Boolean} [addSelector]` 是否添加前缀，传false就不加，不传则默认加

- **用法**：
  ``` js
  var cssObject = {
      'border':'1px solid #000000',
      'background-color':'red'
  }

  //如果开头没有 # 或 . 会自动追加 #，例如此处会对 #ElementId 的元素生效
  IDM.setStyleToPageHead('ElementId',cssObject) 

  //如果开头有 # 则不会追加 #，例如此处会对 #ElementId 的元素生效
  IDM.setStyleToPageHead('#ElementId',cssObject) 

  //如果开头有 . 则不会追加 #，例如此处会对包含样式名为 ClassName 的元素生效
  IDM.setStyleToPageHead('.ClassName',cssObject) 

  //可以指定多层级元素样式，例如此处会对包含样式名为 ClassName 下的所有div元素生效
  IDM.setStyleToPageHead('.ClassName div',cssObject) 
  ```
  把object样式转换为style标签样式并添加到head的标签中

  :::tip
  如果id已经添加过会删除已经存在的相同ID并重新添加。
  :::


### setStyleHtmlToPageHead
- **定义**：

  `setStyleHtmlToPageHead(selector,styleHtml)`
- **参数**：
  - `{string} [selector]` 样式的唯一ID，
  - `{string} [styleHtml]` 样式的字符串代码

- **用法**：
  ``` js
  var cssObject = 'body{border:1px solid #000000;background-color:red}'

  IDM.setStyleHtmlToPageHead(IDM.uuid(),cssObject) 
  ```
  把object样式转换为style标签样式并添加到head的标签中

  :::tip
  如果selector已经添加过会删除已经存在的相同selector并重新添加。
  :::

### getExpressData
- **定义**：

  `getExpressData(expressStr, objectData, defaultPrefix,addAt)`
- **参数**：
  - `{string} [expressStr]` 表达式字符串，不包含 @[]，如果传了addAt为false，则需要带上 @[]，
  - `{Object} [objectData]` 表达式所使用的对象数据，如果为object类型则可直接使用，如果为数组或者其他类型则会默认给添加到 _idm_ 字段中，因此表达式需要带上 _idm_.dataFieldName 这样
  - `{string} [defaultPrefix]` 为数组或者其他类型的默认字段名称，默认为 _idm_ ，如果需要定义其他可以传此参数
  - `{Boolean} [addAt]` 是否自动追加艾特@符号 '@[]',默认为追加，为false则不追加

- **用法**：
  ``` js
    //例1：
    IDM.getExpressData("data.dataFieldName",{data:{dataFieldName:"1234"}})  // => 1234
    //例2：
    IDM.getExpressData("_idm_[0].data.dataFieldName",[{data:{dataFieldName:"1234"}}])  // => 1234
    //例3：
    IDM.getExpressData("_idm_","这里是字符串1234")  // => 这里是字符串1234
    //例4：
    IDM.getExpressData("mydata[0].data.dataFieldName",[{data:{dataFieldName:"1234"}}],"mydata")  // => 1234
  ```
  通用的获取表达式匹配后的结果


### renderAttrStyleToPage
- **定义**：

  `renderAttrStyleToPage(attrArray, moduleObject, otherObject)`
- **参数**：
  - `{Array} [attrArray]` 样式属性对象，必须是数组格式
  - `{Object} [moduleObject]` 组件对象，不能为空
  - `{Object} [otherObject]` 能在使用条件或者样式中使用的表达式对象

- **用法**：
  ``` js
  //会移除form为 ElementId 的 style 标签样式
  IDM.renderAttrStyleToPage(this.propData.styleAttrArray,this.moduleObject,{...填写样式所需要用到的组件内的数据来进行判断等}) 
  ```
  组件内手动渲染属性样式到页面的head中，组件属性控件 `styleEditor` 默认是不需要进行单独处理渲染的，如果属性控件配置为这种方式：
  ````JSON
  {
    "type": "styleEditor",
    "ctrlAttrObject":{
      "idmCoreLoad":true
    },
    ...
  }
  ```
  则组件内不需要单独处理，如果为`idmCoreLoad=false`则需要组件内调用此方法且传`otherObject`参数并且在需要的地方调用即可，可重复调用。
  
  :::tip
  如果在写样式的时候需要用到组件内的动态数据等，则必须组件内调用，在需要的地方重复调用即可
  :::

### removeStyleTagForId
- **定义**：

  `removeStyleTagForId(id)`
- **参数**：
  - `{string} [id]`

- **用法**：
  ``` js
  //会移除form为 ElementId 的 style 标签样式
  IDM.removeStyleTagForId('ElementId') 
  //会移除form为 .ClassName div 的 style 标签样式
  IDM.removeStyleTagForId('.ClassName div') 
  ```
  根据id移除style标签
  
### invokeCustomFunctions
- **定义**：

  `invokeCustomFunctions(...args)`
- **参数**：
  - `{...} [args]`

- **用法**：
  ``` js
  const results = IDM.invokeCustomFunctions.apply(this, [this.propData.customFunction, {}]); // => [function result 1,function result 2]
  ```
  用于调用属性中自定义动作（自定义函数）的公共执行方法。

### difference
- **定义**：

  `difference(object, base)`
- **参数**：
  - `{Object} [object]` 旧对象
  - `{Object} [base]` 要对比的新对象

- **用法**：
  ``` js
  IDM.difference({a:1,b:2},{a:2}) // => {a: 1, b: 2}

  IDM.difference({a:1,b:2},{a:2,b:2}) // => {a: 1}

  IDM.difference({a:{c:1,d:3},b:2},{a:{c:2,d:3},b:2})  // => {a: {c: 1}}
  ```
  对比被修改的值，返回被修改的旧对象
### refreshVueData
- **定义**：

  `refreshVueData(_this,dataName,attrData)`
- **参数**：
  - `{vue对象} [_this]`
  - `{string} [dataName]`
  - `{Object} [attrData]`
  
- **用法**：
  ``` js
  IDM.refreshVueData(this,"dataA.dataB",{a:1,b:2})
  ```
  强制更新Vue的Data，更多详细的内部方法可参考：[Vue.set](https://cn.vuejs.org/v2/api/#Vue-set)
  
### dateFormat
- **定义**：

  `dateFormat(timestamp, formats)`
- **参数**：
  - `{string} [timestamp]`
  - `{string} [formats]`
  
- **用法**：
  ``` js
  IDM.dateFormat(new Date().getTime(),"Y年m月d日") // => '2022年06月15日'

  IDM.dateFormat("2022-06-15","Y年m月d日") // => '2022年06月15日'

  IDM.dateFormat("2022-06-15 23:10:00","Y年m月d日 H时i分") // => '2022年06月15日 23时10分'

  IDM.dateFormat("2022-06-15 23:10:33","Y-m-d H:i:s") // => '2022-06-15 23:10:33'
  ```
  对日期时间进行格式化显示

### getCookie
- **定义**：

  `getCookie(t)`
- **参数**：
  - `{string} [t]`
  
- **用法**：
  ``` js
  IDM.getCookie("cookieKey") // => '返回cookie的名称'
  ```
  根据cookie名称获取cookie的值

### hex8ToRgbaString
- **定义**：

  `hex8ToRgbaString(hex8)`
- **参数**：
  - `{string} [hex8]`
  
- **用法**：
  ``` js
  IDM.hex8ToRgbaString("#FF0000FF") // => 'rgba(255,0,0,1)'

  IDM.hex8ToRgbaString("#000000FF") // => 'rgba(0,0,0,1)'

  IDM.hex8ToRgbaString("#000000") // => '#000000'
  ```
  根据hex8格式的颜色值转换为rgba的字符串格式颜色值

### hex8ToRgbaObject
- **定义**：

  `hex8ToRgbaObject(hex8)`
- **参数**：
  - `{string} [hex8]`
  
- **用法**：
  ``` js
  IDM.hex8ToRgbaObject("#FF0000FF") // => {r: 255, g: 0, b: 0, a: 1}
  
  IDM.hex8ToRgbaObject("#000000FF") // => {r: 0, g: 0, b: 0, a: 1}

  IDM.hex8ToRgbaObject("#000000") // => '#000000'
  ```
  根据hex8格式的颜色值转换为rgba的对象格式颜色值

## array
此分类为操作数组的公共方法分类，此分类需要追加分类名（`IDM.array.方法名`）访问下列的方法。
### ensure
- **定义**：

  `ensure(target, item)`
- **参数**：
  - `{Array} [target]` 要操作的数组
  - `{Object} [item]` 要添加的元素

- **用法**：
  ``` js
  /************示例1************/
  var abc = [1,2],ddd = 3;
  //添加
  IDM.array.ensure(abc,ddd);
  //输出结果
  abc // => [1, 2, 3]

  /************示例2************/
  var abc = [1,2],ddd = 1;
  //添加
  IDM.array.ensure(abc,ddd);
  //输出结果
  abc // => [1, 2]
  ```

  添加不存在的元素，只有当前数组不存在此元素时添加它
### removeAt
- **定义**：

  `removeAt(target, index)`
- **参数**：
  - `{Array} [target]` 要操作的数组
  - `{number} [index]` 要移除的索引位置

- **返回值**：`boolean`

- **用法**：
  ``` js
  /************示例1************/
  var abc = [1,2],ddd = 2;
  
  IDM.array.removeAt(abc,ddd); // => false
  //输出结果
  abc // => [1,2]

  /************示例2************/
  var abc = [1,2],ddd = 1;
  
  IDM.array.removeAt(abc,ddd); // => true
  //输出结果
  abc // => [1]
  ```
  移除数组中指定位置的元素，返回布尔表示成功与否
### remove
- **定义**：

  `remove(target, item)`
- **参数**：
  - `{Array} [target]` 要操作的数组
  - `{Object} [item]` 要移除的元素
- **返回值**：`boolean`

- **用法**：
  ``` js
  /************示例1************/
  var abc = [1,2,1,2],ddd = 2;
  
  IDM.array.remove(abc,ddd); // => true
  //输出结果
  abc // => [1,1,2]

  /************示例2************/
  var abc = [1,2,1,2],ddd = 3;
  
  IDM.array.remove(abc,ddd); // => false
  //输出结果
  abc // => [1,2,1,2]
  ```
  移除数组中第一个匹配传参的那个元素，返回布尔表示成功与否
## url
此分类为操作路径url相关的公共方法分类，此分类需要追加分类名（`IDM.url.方法名`）访问下列的方法。
### getWebPath
- **定义**：

  `getWebPath(url, rootPath, projectNo)`
- **参数**：
  - `{String} [url]` 要进行转换的地址
  - `{String} [rootPath]` 可选，根目录前缀路径
  - `{String} [projectNo]` 可选，项目编号

- **返回值**：`string`

- **用法**：
  ``` js
  /* 前缀 $ 转换 */
  IDM.url.getWebPath("$/iconfont/iconfont.css"); 
  // 输出结果
  // => './static/iconfont/iconfont.css'

  /* 前缀 ~ 转换 */
  IDM.url.getWebPath("~/iconfont/iconfont.css"); 
  // 输出结果
  // => './iconfont/iconfont.css'
  
  /* 前缀 @ 转换 */
  IDM.url.getWebPath("@/iconfont/iconfont.css"); 
  // 输出结果
  // => './idm_modules/iconfont/iconfont.css'

  /* 前缀 ! 转换 */
  IDM.url.getWebPath("!/lib/vconsole/vconsole.min.js"); 
  // 输出结果
  // => '/DreamWeb/p1000/idm/lib/vconsole/vconsole.min.js'

  /* 无前缀转换 */
  IDM.url.getWebPath("/iconfont/iconfont.css"); 
  // 输出结果
  // => '/DreamWeb/iconfont/iconfont.css'

  /* 无前缀转换，带 rootPath 参数 */
  IDM.url.getWebPath("/iconfont/iconfont.css","/ProjectName/"); 
  // 输出结果
  // => '/ProjectName/iconfont/iconfont.css'

  ```
  路径转换方法，如果参数 `url` 的前缀为`./`或`../`或`http://`或`https://`则不转换直接原内容返回。其他情况则按以下规则进行转换：

  - 前缀$代表：使用配置项 `webRoot > assetsDir` 替换，参考[assetsDir](../setting/config.md#assetsdir)

  - 前缀~代表：使用配置项 `webRoot > htmlDir` 替换，参考[htmlDir](../setting/config.md#htmldir)

  - 前缀@代表：使用配置项 `webRoot > moduleDir` 替换，参考[moduledir](../setting/config.md#moduledir)
  
  - 前缀!代表：使用配置项 `webRoot > default`+`webRoot > platformNo`+`webRoot > idm` 替换（如果`rootPath`参数不为空则在地址前面追加`rootPath`的参数），参考[default](../setting/config.md#default)，[platformNo](../setting/config.md#platformno)，[idm](../setting/config.md#idm)，

  - 其他情况使用配置项 `webRoot > default` 替换（如果`rootPath`参数不为空则在地址前面追加`rootPath`的参数），参考[default](../setting/config.md#default)

  :::tip
  1. `url`参数开头为`/`会被移除再进行转换

  2. 如果前缀为@的情况，并且开启了[useProjectNoSetting](../setting/config.md#useprojectnosetting)的配置项，则会调用[getModuleAbsoluteDir](./api.md#getmoduleabsolutedir)方法返回要拼接的前缀，否则就是按上述的规则进行转换
  :::
### getModuleAbsoluteDir
- **定义**：

  `getModuleAbsoluteDir(projectNo,rootPath)`
- **参数**：
  - `{String} [projectNo]` 可选，项目编号
  - `{boolean} [rootPath]` 可选，是否使用根目录前缀路径

- **返回值**：`string`

- **用法**：
  ``` js
  IDM.url.getModuleAbsoluteDir()
  // 输出结果
  // => '/DreamWeb/p1000/idm/idm_modules/'
  
  IDM.url.getModuleAbsoluteDir('p8888')
  // 输出结果
  // => '/DreamWeb/p8888/idm/idm_modules/'

  IDM.url.getModuleAbsoluteDir(null,false)
  // 输出结果
  // => 'p1000/idm/idm_modules/'
  ```
  根据项目编号获取配置项的组件的绝对路径，配置项参考[moduleAbsoluteDir](../setting/config.md#moduleabsolutedir)
### getModuleAssetsWebPath
- **定义**：

  `getModuleAssetsWebPath(url,module)`
- **参数**：
  - `{String} [url]` 资源的地址
  - `{Object} [module]` 加载的组件对象，来源参考[组件属性](../moduledevelop/attributes.md)

- **返回值**：`string`

- **用法**：
  ``` js
  /* 组件内使用以下方法获取组件包内的静态资源 */

  IDM.url.getModuleAssetsWebPath(require('../assets/logo.png'),moduleObject)
  ```
  根据配置返回组件模块的资源路径公共方法
  :::tip
  moduleObject对象内容参考：[组件属性](../moduledevelop/attributes.md)
  :::
### getAbsolutePath
- **定义**：

  `getAbsolutePath(url)`
- **参数**：
  - `{String} [url]` 资源的地址

- **返回值**：`string`
- **用法**：
  ``` js
  IDM.url.getAbsolutePath('~/assets/logo.png') // => '/DreamWeb/assets/logo.png'

  IDM.url.getAbsolutePath('/assets/logo.png') // => '/DreamWeb/assets/logo.png'
  ```

  直接获取从根目录的绝对路径
### queryString
- **定义**：

  `queryString(key)`
- **参数**：
  - `{String} [key]` 参数名称
- **返回值**：`string`

- **用法**：
  ``` js
  window.location.hash;
  //例如输出结果如下
  // => '#/preview/idm_console_homepage_03?abc=123&dd=456'

  IDM.url.queryString("abc"); // => '123'
  ```
  直接获取hash后面指定的参数名称的值

### stringify
- **定义**：

  `stringify(params, options)`
- **参数**：
  - `{Object} [params]`
  - `{Object} [options]`
- **返回值**：`string`
- **用法**：
  ``` js
  IDM.url.stringify({ a: ['b', 'c', 'd'] });
  // 'a[0]=b&a[1]=c&a[2]=d'
  IDM.url.stringify({ a: ['b', 'c', 'd'] }, { indices: false });
  // 'a=b&a=c&a=d'
  IDM.url.stringify({ a: ['b', 'c'] }, { arrayFormat: 'indices' })
  // 'a[0]=b&a[1]=c'
  IDM.url.stringify({ a: ['b', 'c'] }, { arrayFormat: 'brackets' })
  // 'a[]=b&a[]=c'
  IDM.url.stringify({ a: ['b', 'c'] }, { arrayFormat: 'repeat' })
  // 'a=b&a=c'
  ```
  将对象 序列化成URL的形式，以&进行拼接
  :::tip
  更多用法请参考：[qs](https://www.npmjs.com/package/qs)
  :::
### parse
- **定义**：

  `parse(str, options)`
- **参数**：
  - `{string} [str]`
  - `{Object} [options]`
- **返回值**：`Object`

- **用法**：
  ``` js
  IDM.url.parse('id=1&name=idm.yunit.cn')
  // => {id: '1', name: 'idm.yunit.cn'}

  IDM.url.parse('a[hasOwnProperty]=b', { plainObjects: true })
  // => {"a": {"hasOwnProperty": "b"}}

  IDM.url.parse('a[b][c][d][e][f][g][h][i]=j', { depth: 1 })
  // => {"a": {"b": {"[c][d][e][f][g][h][i]": "j"}}}

  IDM.url.parse('a=b&c=d', { parameterLimit: 1 })
  // => {"a": "b"}
  ```
  将URL解析成对象的形式
  :::tip
  更多用法请参考：[qs](https://www.npmjs.com/package/qs)
  :::
### analyzing

- **定义**：

  `analyzing(url)`
- **参数**：
  - `{string} [url]`
- **返回值**：`Object`

- **用法**：
  ``` js
  IDM.url.analyzing(window.location.href);
  /*
  {
    "url": "http://localhost:8080/DreamWeb/p1000/idm/index.html#/preview/idm_console_homepage_03?abc=123&dd=456",
    "protocol": "http:",
    "slash": "//",
    "host": "localhost",
    "port": "8080",
    "path": "/DreamWeb/p1000/idm/index.html",
    "queryString": "",
    "hash": "/preview/idm_console_homepage_03?abc=123&dd=456",
    "query": {}
  }
  */
  ```
  将URL解析成对象的形式
### getURLRoot

- **定义**：

  `getURLRoot()`
- **返回值**：`string`

- **用法**：
  ``` js
  IDM.url.getURLRoot();
  // => 'http://localhost:8080/DreamWeb/'
  ```
  获取url的前缀根路径
### getContextWebUrl
- **定义**：

  `getContextWebUrl(url)`
- **参数**：
  - `{string} [url]`
- **返回值**：`string`

- **用法**：
  ``` js
  //生产环境
  IDM.url.getContextWebUrl("idm/index.html");
  // => 'http://localhost:8080/DreamWeb/idm/index.html'
  
  //开发环境
  IDM.url.getContextWebUrl("idm/index.html");
  // => '/DreamWeb/idm/index.html'
  
  ```
  根据环境的不同获取对应的url，IDM开发环境与生产环境所获取的地址根据配置和实际url拼接的地址。
  :::tip
  注意上述开发环境用法是调用 [getWebPath](./api.md#getwebpath) 实现的，生产环境情况下是调用 [getURLRoot](./api.md#geturlroot) +`参数url` 实现的
  :::
### queryObject

- **定义**：

  `queryObject(query)`
- **参数**：
  - `{string} [query]` 可选，url地址
- **返回值**：`Object`

- **用法**：
  ``` js
  /************示例1************/
  var url1 = "http://localhost:8080/DreamWeb/p1000/idm/index.html#/preview/idm_console_homepage_03?abc=123&dd=456";
  IDM.url.queryObject(url1); // => {abc: '123', dd: '456'}
  
  /************示例2************/
  window.location.href;
  //如果输出结果为：
  //"http://localhost:8080/DreamWeb/p1000/idm/index.html?abc=123&dd=456#/preview/idm_console_homepage_03"
  IDM.url.queryObject(); // => {abc: '123', dd: '456'}

  /************示例3************/
  window.location.href;
  //如果输出结果为：
  //"http://localhost:8080/DreamWeb/p1000/idm/index.html#/preview/idm_console_homepage_03?abc=123&dd=456"
  IDM.url.queryObject(); // => {abc: '123', dd: '456'}

  /************示例4************/
  window.location.href;
  //如果输出结果为：
  //"http://localhost:8080/DreamWeb/p1000/idm/index.html?abc=123&dd=456#/preview/idm_console_homepage_03?abc=abc&dd=def"
  IDM.url.queryObject(); // => {abc: 'abc', dd: 'def'}
  ```
  可根据参数获取url转换的object对象，也可不传参数直接获取页面url的参数转换为object对象

  :::tip
  如果没有传`query`参数，则自动优先获取hash后面拼接的参数，如果hash后面没有参数再获取第一个问号后面的参数。
  :::
## router
此分类为操作单页面应用之间的页面跳转相关的公共方法分类，此分类需要追加分类名（`IDM.router.方法名`）访问下列的方法。

:::tip
组件内获取路由ID可以直接`this.moduleObject.routerId`获取，参考[组件开发-组件对象](../moduledevelop/moduleobject.md)
:::
### push
- **定义**：

  `push(from,next,keep,params,enterAnim,quitAnim)`
- **参数**：
  - `{String} [from]` 当前页面ID
  - `{String} [next]` 下一个页面ID
  - `{Object or Boolean} [keep]` true 为保留缓存页面，false为不缓存，或者为对象格式{keep,params,enterAnim,quitAnim}
  - `{Object} [params]` 要传递的参数对象
  - `{String} [enterAnim]` 进入动画名称
  - `{String} [quitAnim]` 退出动画名称

- **返回值**：`string` 当前生成的路由ID

- **用法**：
  ``` js
  IDM.router.push("当前页面ID","下一个页面ID",true,{a:1,b:2},"","");
  // 跳转页面并返回结果
  // => 'lZbDZhbGj3ZeLU92'
  
  //此效果与上述效果一致
  IDM.router.push("当前页面ID","下一个页面ID",{
    keep:true,
    params:{a:1,b:2},
    enterAnim:"",
    quitAnim:""
  });
  // 跳转页面并返回结果
  // => 'lZbDZhbGj3ZeLU92'
  ```
  单页面应用的路由跳转页面，可以搭配组件属性开发单页面情况下进行页面跳转。
### back
- **定义**：

  `back(routerId,params)`
- **参数**：
  - `{String} [routerId]` 要返回的路由ID
  - `{Object} [params]` 携带返回的参数

- **返回值**：`string` 当前返回的路由对象

- **用法**：
  ``` js
  IDM.router.back("lZbDZhbGj3ZeLU92");
  ```
  单页面应用的路由返回关闭页面，可以搭配组件属性开发单页面情况下进行页面返回操作。
### getParam
- **定义**：

  `getParam(routerId)`
- **参数**：
  - `{String} [routerId]` 要获取参数的路由ID

- **返回值**：`Object` 当前路由传递的参数

- **用法**：
  ``` js
  IDM.router.getParam("lZbDZhbGj3ZeLU92");
  ```
  单页面应用如果要获取上一个页面打开传递的参数可以通过此方法获取。
### getRouter
- **定义**：

  `getRouter(routerId)`
- **参数**：
  - `{String} [routerId]` 要获取路由对象的路由ID

- **返回值**：`Object` 当前路由对象

- **用法**：
  ``` js
  IDM.router.getRouter("lZbDZhbGj3ZeLU92");
  ```
  要获取当前路由的对象信息可以通过此方法获取

## validate
此分类为内容的校验相关的公共方法，此方法（`IDM.validate(arg1,arg2,argN)`）第一个参数为校验类型，第二个参数起为校验所需要的内容，以下列出了可使用的校验类型：
### isExternal
- **说明**：

  校验是否外部的资源，可校验url地址、邮箱、电话等。
- **用法**：
  ``` js
  IDM.validate("isExternal","http://www.yunit.cn") // => true
  
  IDM.validate("isExternal","www.yunit.cn") // => false

  IDM.validate("isExternal","tel:13212341234") // => true

  IDM.validate("isExternal","mailto:960504980@qq.com") // => true
  ```
### isNull
- **说明**：

  校验是否为空。
- **用法**：
  ``` js
  IDM.validate("isNull","") // => true

  IDM.validate("isNull",{}) // => true

  IDM.validate("isNull",[]) // => true

  IDM.validate("isNull",[{}]) // => false

  IDM.validate("isNull",true) // => false

  IDM.validate("isNull","http://www.yunit.cn") // => false
  ```
### isNumber
- **说明**：

  校验是否是一个数字。
- **用法**：
  ``` js
  IDM.validate("isNumber","") // => false

  IDM.validate("isNumber",0) // => true

  IDM.validate("isNumber",123) // => true

  IDM.validate("isNumber",123.12) // => false

  IDM.validate("isNumber",123.12,1) // => false

  IDM.validate("isNumber",123.12,2) // => true

  IDM.validate("isNumber",123.123,3) // => true

  ```
  :::tip
  第三个参数为精度校验
  :::
### isString
- **说明**：

  校验是否是一个字符串。
- **用法**：
  ``` js
  IDM.validate("isString","") // => true

  IDM.validate("isString","123") // => true

  IDM.validate("isString",0) // => false

  IDM.validate("isString",{}) // => false
  ```
### isArray
- **说明**：

  校验是否是一个数组。
- **用法**：
  ``` js
  IDM.validate("isArray","") // => false

  IDM.validate("isArray",0) // => false

  IDM.validate("isArray",[]) // => true

  IDM.validate("isArray",{}) // => false
  ```
### isNumberOver
- **说明**：

  校验数字是否超出指定数字。
- **用法**：
  ``` js
  IDM.validate("isNumberOver",0) // => false

  IDM.validate("isNumberOver",0,1) // => false

  IDM.validate("isNumberOver",0,0) // => false
  
  IDM.validate("isNumberOver",2,1) // => true
  ```
  :::tip
  第二个参数为要校验的数字，第三个参数为校验第二个参数是否超过此数字大小
  :::
### isNumberUnder
- **说明**：

  校验数字是否小于指定数字。
- **用法**：
  ``` js
  IDM.validate("isNumberUnder",0) // => false

  IDM.validate("isNumberUnder",0,1) // => true

  IDM.validate("isNumberUnder",0,0) // => false
  
  IDM.validate("isNumberUnder",2,1) // => false
  ```
  :::tip
  第二个参数为要校验的数字，第三个参数为校验第二个参数是否小于此数字大小
  :::
### precision
- **说明**：

  校验数字数字精度。
- **用法**：
  ``` js
  IDM.validate("precision",1) // => true

  IDM.validate("precision",1.1) // => false

  IDM.validate("precision",1,1) // => true

  IDM.validate("precision",1.12,1) // => false

  IDM.validate("precision",1.12,2) // => true

  IDM.validate("precision",1.12,3) // => true
  ```
  :::tip
  第三个参数为校验第二个数字参数的精度是否小于或等于此参数大小
  :::
### maxLength
- **说明**：

  校验字符串超出指定长度。
- **用法**：
  ``` js
  IDM.validate("maxLength","1",0) // => true

  IDM.validate("maxLength","abc",1) // => true

  IDM.validate("maxLength","abc",3) // => false
  ```
  :::tip
  第三个参数为校验第二个字符串参数的长度是否大于此参数大小
  :::
### minLength
- **说明**：

  校验字符小于指定长度。
- **用法**：
  ``` js
  IDM.validate("minLength","1",0) // => false

  IDM.validate("minLength","abc",1) // => false

  IDM.validate("minLength","abc",3) // => false

  IDM.validate("minLength","abc",4) // => true
  ```
  :::tip
  第三个参数为校验第二个字符串参数的长度是否小于此参数大小
  :::
### isIDCard
- **说明**：

  校验是否为身份证号码。
- **用法**：
  ``` js
  IDM.validate("isIDCard","1") // => false

  IDM.validate("isIDCard","262361943401011371") // => true

  IDM.validate("isIDCard","26236194340101137X") // => true
  ```
### isMobile
- **说明**：

  校验是否手机号码。
- **用法**：
  ``` js
  IDM.validate("isMobile","1") // => false

  IDM.validate("isMobile",1232221234) // => false

  IDM.validate("isMobile",13232221234) // => true

  IDM.validate("isMobile","13232221234") // => true
  ```
### isTelPhone
- **说明**：

  校验是否座机号码。
- **用法**：
  ``` js
  IDM.validate("isTelPhone","1") // => false

  IDM.validate("isTelPhone",1232221234) // => false

  IDM.validate("isTelPhone",1213125) // => true

  IDM.validate("isTelPhone","0754-1213195") // => true
  ```
### isMobileOrTelPhone
- **说明**：

  校验是否手机号码或座机号码。
- **用法**：
  ``` js
  IDM.validate("isMobileOrTelPhone","1") // => false

  IDM.validate("isMobileOrTelPhone",1232221234) // => false

  IDM.validate("isMobileOrTelPhone",1213125) // => true
  
  IDM.validate("isMobileOrTelPhone",13232221234) // => true

  IDM.validate("isMobileOrTelPhone","0754-1213195") // => true
  ```
### isEmail
- **说明**：

  校验是否电子邮箱。
- **用法**：
  ``` js
  IDM.validate("isEmail","1") // => false

  IDM.validate("isEmail","1@q.com") // => true
  ```
### isPlateNumber
- **说明**：

  校验是否车牌号码。
- **用法**：
  ``` js
  IDM.validate("isPlateNumber","1") // => false

  IDM.validate("isPlateNumber","冀873672") // => true

  IDM.validate("isPlateNumber","冀·873672") // => false
  ```
### isUrl
- **说明**：

  校验是否网址。
- **用法**：
  ``` js
  IDM.validate("isUrl","1") // => false

  IDM.validate("isUrl","http://") // => false

  IDM.validate("isUrl","http://www.yunit.c") // => false

  IDM.validate("isUrl","http://www.yunit.cn") // => true

  IDM.validate("isUrl","ftp://www.yunit.cn") // => true
  ```
### isIpAddress
- **说明**：

  校验是否ip地址。
- **用法**：
  ``` js
  IDM.validate("isIpAddress","1") // => false

  IDM.validate("isIpAddress","192.168.1.2") // => true
  
  IDM.validate("isIpAddress","192.256.1.2") // => false
  
  IDM.validate("isIpAddress","255.255.255.0") // => true
  ```
### isMacAddress
- **说明**：

  校验是否mac地址。
- **用法**：
  ``` js
  IDM.validate("isMacAddress","128:330:20:0A:8C:6D") // => false

  IDM.validate("isMacAddress","08:00:20:0A:8C:6D") // => true
  ```

## http
此分类为数据资源请求相关的公共方法分类，此分类需要追加分类名（IDM.http.方法名）访问下列的方法。
### get
- **定义**：

  `get(path, params, options, rootPath)`
- **参数**：
  - `{String} [path]` 请求地址，此地址会经 [getWebPath](./api.md#getwebpath) 转换
  - `{Object} [params]`  携带参数
  - `{Object} [options]`  请求选项，如果为字符串则会直接当做rootPath参数
  - `{String} [rootPath]`  可选，如果options参数为字符串则此参数无效

- **用法**：
  ``` js
  IDM.http.get('api/getMyInfo', {
     userId: '1b1d18d830c44b509d4fa730fa9d0b9b'
  }).done((d) => {
     alert('模拟Get请求成功', true)
  }).error((response) => {
     alert('模拟Get请求失败', false)
  }).always((res) => {
     debugger
  })
  ```
  基于 [Axios](https://axios-http.com/docs/api_intro) 的 get 异步请求方法。
  :::tip
  更多用法请参考：

  Axios 中文文档：[Axios中文](https://www.axios-http.cn/docs/intro)
  
  Axios 英文文档：[Axios英文](https://axios-http.com/docs/api_intro)

  Axios Github：[Axios](https://github.com/axios/axios)
  :::
### post
- **定义**：

  `post(path, params, options, rootPath)`
- **参数**：
  - `{String} [path]` 请求地址，此地址会经 [getWebPath](./api.md#getwebpath) 转换
  - `{Object} [params]`  携带参数
  - `{Object} [options]`  请求选项，如果为字符串则会直接当做rootPath参数
  - `{String} [rootPath]`  可选，如果options参数为字符串则此参数无效

- **用法**：
  ``` js
  IDM.http.post('api/saveMyInfo', {
     userName:"申龙",
     mobile:"11000000000"
  }).done((d) => {
     alert('模拟Post请求成功', true)
  }).error((response) => {
     alert('模拟Post请求失败', false)
  }).always((res) => {
     debugger
  })
  ```
  基于 [Axios](https://axios-http.com/docs/api_intro) 的 post 异步请求方法。
  :::tip
  更多用法请参考：

  Axios 中文文档：[Axios中文](https://www.axios-http.cn/docs/intro)
  
  Axios 英文文档：[Axios英文](https://axios-http.com/docs/api_intro)

  Axios Github：[Axios](https://github.com/axios/axios)
  :::

### getAxios
- **定义**：

  `getAxios()`
- **参数**：
  无
- **用法**：
  ``` js
  IDM.http.getAxios().get('api/getMyInfo', {
     userId: '1b1d18d830c44b509d4fa730fa9d0b9b'
  }).done((d) => {
     alert('模拟Get请求成功', true)
  }).error((response) => {
     alert('模拟Get请求失败', false)
  }).always((res) => {
     debugger
  })
  ```
  用于直接返回 [Axios](https://axios-http.com/docs/api_intro) 对象。
  :::tip
  更多用法请参考：

  Axios 中文文档：[Axios中文](https://www.axios-http.cn/docs/intro)
  
  Axios 英文文档：[Axios英文](https://axios-http.com/docs/api_intro)

  Axios Github：[Axios](https://github.com/axios/axios)
  :::
### all
- **定义**：

  `all(arr)`
- **参数**：
  - `{Array} [arr]`

- **用法**：
  ``` js
  function getUserAccount() {
    return IDM.http.get('/user/12345');
  }

  function getUserPermissions() {
    return IDM.http.get('/user/12345/permissions');
  }
  IDM.http.all([getUserAccount(), getUserPermissions()]).then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
  ```
  基于 [Axios](https://axios-http.com/docs/api_intro) 的 all 并发请求方法。
  :::tip
  更多用法请参考：

  Axios 中文文档：[Axios中文](https://www.axios-http.cn/docs/intro)
  
  Axios 英文文档：[Axios英文](https://axios-http.com/docs/api_intro)

  Axios Github：[Axios](https://github.com/axios/axios)
  :::
### upload
- **定义**：

  `upload(path, file, params, options, rootPath)`
- **参数**：
  - `{String} [path]` 请求地址，此地址会经 [getWebPath](./api.md#getwebpath) 转换
  - `{File} [file]`  文件对象
  - `{Object} [params]`  上传时携带的参数
  - `{Object} [options]`  请求选项，如果为字符串则会直接当做rootPath参数
  - `{String} [rootPath]`  可选，如果options参数为字符串则此参数无效

- **用法**：
  ``` js
  IDM.http.upload('api/uploadFileServerUrl', file,{"uploadType":"custom"})
  .done((d) => {
     alert('模拟上传文件成功', true)
  }).error((response) => {
     alert('模拟上传文件失败', false)
  }).always((res) => {
     debugger
  })
  ```
  基于 [Axios](https://axios-http.com/docs/api_intro) 的 post 实现的文件上传方法。
  上传的文件字段名为`file`
  :::tip
  
  更多用法请参考：

  Axios 中文文档：[Axios中文](https://www.axios-http.cn/docs/intro)
  
  Axios 英文文档：[Axios英文](https://axios-http.com/docs/api_intro)

  Axios Github：[Axios](https://github.com/axios/axios)
  :::

### getSync
- **定义**：

  `getSync(path, params, options, rootPath)`
- **参数**：
  - `{String} [path]` 请求地址，此地址会经 [getWebPath](./api.md#getwebpath) 转换
  - `{Object} [params]`  携带参数
  - `{Object} [options]`  请求选项，如果为字符串则会直接当做rootPath参数
  - `{String} [rootPath]`  可选，如果options参数为字符串则此参数无效

- **用法**：
  ``` js
  var resultData = IDM.http.getSync('api/getMyInfo', {
     userId: '1b1d18d830c44b509d4fa730fa9d0b9b'
  },{
    contentType:"application/json"
  })
  /**
   * resultData输出结果为
   * {
    ...
   }
   */
  ```
  基于 [jQuery Ajax](https://www.w3school.com.cn/jquery/ajax_ajax.asp) 的 get 同步请求方法。

### postSync
- **定义**：

  `postSync(path, params, options, rootPath)`
- **参数**：
  - `{String} [path]` 请求地址，此地址会经 [getWebPath](./api.md#getwebpath) 转换
  - `{Object} [params]`  携带参数
  - `{Object} [options]`  请求选项，如果为字符串则会直接当做rootPath参数
  - `{String} [rootPath]`  可选，如果options参数为字符串则此参数无效

- **用法**：
  ``` js
  var resultData = IDM.http.postSync('api/saveMyInfo', {
     userName:"申龙",
     mobile:"11000000000"
  },{
    contentType:"application/json"
  });
  /**
   * resultData输出结果为
   * {
    ...
   }
   */
  ```
  基于 [jQuery Ajax](https://www.w3school.com.cn/jquery/ajax_ajax.asp) 的 post 同步请求方法。
  
### importFiles
- **定义**：

  `importFiles(files)`
- **参数**：
  - `{Array} [files]` 要加载的资源数组

- **用法**：
  ``` js
  var configUrl = IDM.url.getWebPath("$/js/libs/UEditor/ueditor.config.js");
  var fileUrl = IDM.url.getWebPath("$/js/libs/UEditor/ueditor.all.js");
  
  IDM.http.importFiles([configUrl,fileUrl])
  .then(() => {
    //加载完成
    //this.renderEditor();
  })
  .catch(err => {
    alert("加载UEditor.js文件出错");
  })       
  ```
  动态加载js、css等静态资源。
  
## broadcast
此分类为消息桥接、广播、组件通信等相关的公共方法分类，此分类需要追加分类名（IDM.broadcast.方法名）访问下列的方法。
### send
- **定义**：

  `send(object)`
- **参数**：
  - `{Object} [object]`

  Object的格式为：
  ```json
  {
    "type":String,
    "message":any,
    "rangeModule":null|Array,
    "className":String,
    "globalSend":Boolean,
    "messageKey":String,
    "triggerType":String,
    ...
  }
  ```
  |key|说明|
  |-|-|
  |type|消息类型，内置协议值参考下方|
  |message|实际的消息对象|
  |rangeModule|为空发送给全部，指定组件对象的packageid值，用法参考下方rangeModule 获取方式|
  |className|指定组件的类名，比如只给文本组件（类名：IText）发送，然后再去过滤上面的值|
  |globalSend|如果为true则全站发送消息（即相邻的跨页面发送），注意全站rangeModule是无效的，只有className才有效，默认为false|
  |messageKey|消息的key值|
  |triggerType|消息变化触发的类型值，AT：自动触发的，MT：手动切换触发的，OT：其他方式触发的|
  |...|其他自定义的类型值，但是建议要在组件文档中写明用处，方便其他组件配合适用|
  
  **type 内置协议值**：
  - linkageResult：组件联动传结果值
  - linkageDemand：组件联动传需求值
  - linkageReload：联动组件重新加载
  - linkageOpenDialog：打开弹窗
  - linkageCloseDialog：关闭弹窗
  - linkageShowModule：显示组件
  - linkageHideModule：隐藏组件
  - linkageResetDefaultValue：重置默认值
  - pageResize：页面大小调整通知
  
  **rangeModule 获取方式**：
  ``` js
  //rangeModule 需要的数组
  var moduleIdArray = [];
  /*
  此处为vue的写法，
  propData为组件属性的实际设置值对象，
  linkageDemandPageModule为具体的属性值（这里代表为下拉框联动的组件范围），
  使用了组件属性控件type为pageModuleSelect的属性控件
  */
  this.propData.linkageDemandPageModule.forEach(item=>{
    moduleIdArray.push(item.moduleId)
  });
  ```

- **用法**：
  ``` js
  //下拉框选择的对象
  var selectObject = {};
  //rangeModule 需要的数组
  var moduleIdArray = [];
  /*
  此处为vue的写法，
  propData为组件属性的实际设置值对象，
  linkageDemandPageModule为具体的属性值（这里代表为下拉框联动的组件范围），
  使用了组件属性控件type为pageModuleSelect的属性控件
  */
  this.propData.linkageDemandPageModule.forEach(item=>{
    moduleIdArray.push(item.moduleId)
  });
  /**
   * formFiledKey代表为表单字段的key，这里只是做示例，实际请根据自己定义的属性与需求修改
   * ctrlId代表组件的id，也是自己定义的
   * option代表触发消息所变动的类型，AT：自动触发的（比如数据回显绑定切换的），MT：手动触发的（比如手动切换下拉框值）
   */
  IDM.broadcast.send({
    type:"linkageDemand",
    message:selectObject,
    rangeModule:moduleIdArray,
    messageKey:this.propData.formFiledKey||this.propData.ctrlId,
    triggerType:option===true?'AT':(option?'MT':'OT')
  })
  ```
  用于组件直接的消息发送，消息广播，组件之间的通信等等。
  :::tip
  组件接收消息请参考：组件开发的[组件通信](../moduledevelop/communication.md) 或 [内置方法](../moduledevelop/builtin.md) - [receiveBroadcastMessage](../moduledevelop/builtin.md#receivebroadcastmessage)

  组件内置协议值详细请参考：[组件通信-内置通信协议](../moduledevelop/communication.md#内置通信协议)
  :::
### getModuleContextValue
- **定义**：

  `getModuleContextValue(pageModuleList,groupKey)`
- **参数**：
  - `{Array} [pageModuleList]` 可选，组件的集合
  - `{String} [groupKey]` 可选，组件的分组key，要使用此参数（组件的分组属性）的话组件属性的`bindKey`必须为`formGroupKey`值。

  pageModuleList的格式为：
  ```json
  [{
    "moduleId":"组件的packageid",
    "moduleName":"组件的asName"
  }]
  ```
- **返回值**：`Object`|`{resultData:组件返回的数据对象,errorData:"组件验证的错误的数据对象"}`

- **用法**：
  ``` js
   /**
   * 组件范围选择返回的格式：
    * [
    *  {
    *  moduleId:packageid,
    *  moduleName:asName
    *  }
    * ]
    */
  let pageModuleSelectDataMultiple = this.propData.pageModuleSelectDataMultiple;
  //表单分组标识
  let formGroupKey = this.propData.formGroupKey;
  //所有返回结果
  let moduleAllData = IDM.broadcast.getModuleContextValue(pageModuleSelectDataMultiple,formGroupKey);
  if(moduleAllData.errorData.length>0){
    //有校验失败的，不提交数据
    return false;
  }
  //验证通过，可以对 moduleAllData.resultData进行提交处理
  ```
  用于获取组件内部处理后的上下文数据结果，可用于组件的数据获取、进行整体表单数据提交至后端保存等等功能需求。
  :::tip
  获取组件处理后结果需要组件提供了内部方法：组件开发的[内置方法](../moduledevelop/builtin.md) - [getContextValue](../moduledevelop/builtin.md#getcontextvalue)
  :::
### getRangeModule
- **定义**：

  `getRangeModule(pageModuleList,groupKey)`
- **参数**：
  - `{Array} [pageModuleList]` 必选，组件的集合
  - `{String} [groupKey]` 必选，组件的分组key，要使用此参数（组件的分组属性）的话组件属性的`bindKey`必须为`formGroupKey`值。

  pageModuleList的格式为：
  ```json
  [{
    "moduleId":"组件的packageid",
    "moduleName":"组件的asName"
  }]
  ```
- **返回值**：`Array`|`["packageid",...]`

- **用法**：
  ``` js
  /**
   * 组件范围选择返回的格式：
    * [
    *  {
    *  moduleId:packageid,
    *  moduleName:asName
    *  }
    * ]
    */
  let pageModuleSelectDataMultiple = this.propData.pageModuleSelectDataMultiple;
  //表单分组标识
  let formGroupKey = this.propData.formGroupKey;
  let moduleIdArray = IDM.broadcast.getRangeModule(pageModuleSelectDataMultiple,formGroupKey)
  //获取后可用于发送 linkageResetDefaultValue：重置默认值 类型进行表单重置等等用途
  ```
  根据提供的组件集合和组件分组key来获取所有组件的 packageid。
### openDialog
- **定义**：

  `openDialog(option)`
- **参数**：
  - `{Object} [option]`

  option的格式为：
  ```json
  {
    "moduleId":"窗口ID",
    /*当只有一个iframe的时候直接为iframe的地址string类型即可，
    当弹出窗内有多个iframe时候请使用数组形式，
    [{name:'iframe的name',url:''}]，
    如果为非iframe则留空即可*/
    "openUrl":"打开的url地址",
    "success":"层弹出后的成功回调方法",
    "yes":"确定按钮回调方法",
    "cancel":"关闭触发的回调",
    "end":"层销毁后触发的回调"
  }
  ```
- **用法**：
  ``` js
  //比如打开的窗口为iframe内嵌网页的窗口，这个窗口的内容是由页面配置，并非单个组件提供的
  IDM.broadcast.openDialog({
    "moduleId":"dkjdfkdfiukjasas123fj123",
    "openUrl":"http://www.yunit.cn",
    "success":function(res){},
    "yes":function(res){},
    "cancel":function(res){},
    "end":function(res){}
  })
  ```
  用于打开指定ID的窗口类型的组件，此方法一般在页面动作中要自定义扩展js的时候会非常有用。
  :::tip
  此方法可全站打开窗口（即相邻的跨页面打开窗口）
  :::
### closeDialog
- **定义**：

  `closeDialog(option)`
- **参数**：
  - `{Object} [option]`

  option的格式为：
  ```json
  {
    "moduleId":"窗口ID" or ["窗口ID1","窗口ID2"]
  }
  ```
- **用法**：
  ``` js
  IDM.broadcast.closeDialog(["dkjdfkdfiukjasas123fj123","233443344354545fgffggf"])
  ```
  用于关闭指定ID的窗口类型的组件，此方法一般在页面动作中要自定义扩展js的时候会非常有用。
  :::tip
  此方法可全站关闭窗口（即相邻的跨页面关闭窗口）
  :::
### openControlSetPanel
- **定义**：

  `openControlSetPanel(option)`
- **参数**：
  - `{Object} [option]`

  option的格式为：
  ```json
  {
   "url":"要展示的页面地址，如果为空则使用 页面设置=>控制中心 的默认地址，如果此地址不为空则 param 参数为非必填",
   "param":{
    "marketModuleId":"必填，市场组件的ID，组件内取this.moduleObject.comId即可",
    "pageId":"必填，页面的ID，直接使用 IDM.broadcast.pageModule.id 即可获取",
    "packageid":"必填，组件实例的ID，主要用于区别页面的同一个组件，直接使用 this.moduleObject.packageid 即可获取到"
   },
   "showTop":"默认为true，设置是否显示在最顶级页面中，这样做的目的是为了在跨页面的时候遮罩显示在最外面，能覆盖整个窗口",
   "success":"层弹出后的成功回调方法",
   "yes":"确定按钮回调方法",
   "reset":"重置后的回调",
   "other":"关闭或其他按钮触发回调方法"
  }
  ```
- **返回值**：`String` 返回控制中心窗口的ID

- **用法**：
  ``` js
  //组件内调用
  IDM.broadcast.openControlSetPanel({
    //如果要想打开IDM内置的控制中心，则此处url必须为空。
    "url":"",
    "param":{
      "marketModuleId":this.moduleObject.comId,
      "pageId":IDM.broadcast.pageModule.id,
      "packageid":this.moduleObject.packageid
    },
    "showTop":true,
    "success":function(res){},
    "yes":function(res){
      //确定后控制中心的表单数据保存了，可以再次调用获取方法获取已经保存的个性化组件属性
    },
    "reset":function(res){
      //重置后可重新获取到初始值
    },
    "other":function(res){
      //关闭或其他按钮触发回调方法
    }
  })
  ```
  用于打开控制中心的设置窗口，此方法一般在页面动作中要自定义扩展js的时候会非常有用或者组件内部js直接调用。
  :::tip
  此方法可全站打开控制中心的设置窗口（即相邻的跨页面打开）
  :::
### closeControlSetPanel
- **定义**：

  `closeControlSetPanel(option)`
- **参数**：
  - `{Object} [option]`

  option的格式为：
  ```json
  {
    "controlSetPanelId":"控制面板窗口ID"
  }
  ```
- **用法**：
  ``` js
  IDM.broadcast.closeControlSetPanel("233443344354545fgffggf")
  ```
  用于关闭指定ID（上述[打开方法](./api.md#opencontrolsetpanel)返回的ID）的控制中心窗口，此方法一般在页面动作中要自定义扩展js的时候会非常有用或者组件内部js直接调用。
  :::tip
  此方法可全站关闭控制中心的设置窗口（即相邻的跨页面关闭）
  :::
## express
此分类为表达式获取内容等相关的公共方法分类，此分类需要追加分类名（IDM.express.方法名）访问下列的方法。

**表达式基础语法：**

- **`@[a.b.c]`**

  用于从对象 `{a:{b:{c:1}}}` 中获取c的值

- **`@[a[n].b[n].c]`**

  用于从对象 `{a:[{b:[{c:1}]}]}` 中获取c的值

- **`@[url('abc')]`**

  用于从当前页面的 url 中获取参数abc的值

- **`@[has('@[123]')]`**

  用于判断指定的字符串中是否存在表达式

- **`@[filePath('[{"relativePath":"abc/1.0.0/main.js"}]')]`**

  用于获取数组或对象中的relativePath的值

- **`@[map([{\"abc\":\"123\"}],0,'abc')]`**

  用于获取指定数组中的对象索引并从对象中获取指定key的值
### replace
- **定义**：

  `replace(expressStr, data, isFlag)`
- **参数**：
  - `{String} [expressStr]` 带有表达式的字符串
  - `{Object} [data]` 携带的数据对象，表达式可以从这里面获取
  - `{Boolean} [isFlag]` 未找到是否返回空字符串，true：返回空字符串，false：返回undefined，默认为 true

- **返回值**：`String` 返回替换表达式后的结果

- **用法**：
  ``` js
  IDM.express.replace("@[a]",{ab:1233},true) // => ''

  IDM.express.replace("@[a]",{ab:1233},false) // => undefined

  IDM.express.replace("@[a]",{a:1233},true) // => 1233
  
  /*假设url中携带abc=123参数*/
  IDM.express.replace("@[url('abc')+'---'+abc]",{abc:1233},true) // => '123---1233'

  IDM.express.replace("@[has('@[123]')]",{},true) // => true
  
  IDM.express.replace("@[has('123')]",{},true) // => false
  
  IDM.express.replace("@[filePath('[{\"relativePath\":\"abc/1.0.0/main.js\"}]')]",{},true)
  // => 'abc/1.0.0/main.js'

  IDM.express.replace("@[map([{\"abc\":\"123\"}],0,'abc')]",{},true)

  // => '123'
  ```
  用于替换第一个参数`expressStr`中书写了表达式的值，并返回替换后的结果。这个方法非常实用，在组件开发中、属性填写中、页面扩展js中都能用到。
### eval
- **定义**：

  `eval(expressStr, data)`
- **参数**：
  - `{String} [expressStr]` 带有表达式的脚本字符串
  - `{Object} [data]` 携带的数据对象，表达式可以从这里面获取

- **用法**：
  ``` js
  IDM.express.eval("alert(@[a])",{ab:1233}) // => 弹出 undefined
  IDM.express.eval("alert(@[a])",{a:1233}) // => 弹出 1233
  
  /*假设url中携带abc=123参数*/
  IDM.express.eval("alert(@[url('abc')+'---'+abc])",{abc:1233}) // => 弹出 '123---1233'
  ```
  用于执行第一个参数`expressStr`中书写了表达式的脚本。
### has
- **定义**：

  `has(expressStr)`
- **参数**：
  - `{String} [expressStr]` 带有表达式的字符串

- **用法**：
  ``` js
  IDM.express.has("@[url('abc')]") // => true

  IDM.express.replace("@[has('123')]") // => false

  IDM.express.replace("@[has('@[123]')]") // => true
  ```
  用于判断表达式字符串中是否有合格表达式，表达式语法请参考：[表达式基础语法](./api.md#express)
## cachePool
此分类为map缓存池的公共方法分类，此分类不需要追加分类名直接调用，并传最大缓存池参数（`IDM.cachePool(最大缓存数字).方法名`）进行调用以下方法
### put
- **定义**：

  `put(key, value)`
- **参数**：
  - `{String} [key]`
  - `{Object} [value]`

- **用法**：
  ``` js
  var mapCache = IDM.cachePool(100);
  mapCache.put("keystr0","123");
  mapCache.put("keystr1","456");
  mapCache.put("keystr2","456");
  ```
  此方法用于往缓存池追加map数据，如果数量超过指定的最大值，则删除前面的缓存map数据

### get
- **定义**：

  `get(key)`
- **参数**：
  - `{String} [key]`

- **用法**：
  ``` js
  var mapCache = IDM.cachePool(2);
  mapCache.put("keystr0","123");
  mapCache.put("keystr1","456");
  mapCache.put("keystr0","456");
  mapCache.put("keystr2","456");

  mapCache.get("keystr0") // => undefined

  mapCache.get("keystr2") // => 456
  ```
  此方法用于获取缓存池中的数据

## page
此分类为页面全局功能控制信息存储的公共方法分类，此分类需要追加分类名（IDM.page.方法名）访问下列的方法。
### getPullToRefreshStatus
- **定义**：

  `getPullToRefreshStatus()`
- **用法**：
  ``` js
  IDM.page.getPullToRefreshStatus() // => true or false
  ```
  用于获取当前页面下拉刷新功能的开启状态，返回`true`则是已经开启，返回`false`则是关闭或禁用状态
### getPullToRefreshPtr
- **定义**：

  `getPullToRefreshPtr()`
- **用法**：
  ``` js
  IDM.page.getPullToRefreshPtr
  ```
  返回下拉刷新PullToRefresh带有destroy()方法的唯一 ptr 实例。

  :::tip
  实例可参考 [PullToRefresh](https://github.com/BoxFactura/pulltorefresh.js)
  :::

### stopPullToRefresh
- **定义**：

  `stopPullToRefresh()`
- **用法**：
  ``` js
  IDM.page.stopPullToRefresh()
  ```
  停止禁用页面下拉刷新，比如有手势操作其他功能的时候不想页面也被下拉刷新出现可以通过调用此方法禁用

### startPullToRefresh
- **定义**：

  `startPullToRefresh()`
- **参数**：
  - `{PullToRefresh} [ptr]`

- **用法**：
  ``` js
  IDM.page.startPullToRefresh()
  //以下示例为渲染引擎下拉刷新的部分代码
  const ptr = PullToRefresh.init({
    mainElement: 'body',
    instructionsPullToRefresh:"下拉刷新",
    instructionsReleaseToRefresh:"松手刷新",
    instructionsRefreshing:"刷新中",
    onRefresh() {
      that.initPulltorefreshHandle();
    },
    shouldPullToRefresh:function(){
      return IDM.page.getPullToRefreshStatus();
    }
  });
  IDM.page.startPullToRefresh(ptr)
  ```
  启用允许页面下拉刷新，比如有手势操作其他功能的时候不想页面也被下拉刷新出现会通过`IDM.page.stopPullToRefresh()`禁用刷新，当需要再次启用的时候可调用`IDM.page.startPullToRefresh()`方法启用刷新


### changePageUserDefinedStatus
- **定义**：

  `changePageUserDefinedStatus(ctx)`
- **参数**：
  - `{routerId,status,save} [ctx]`
  - **参数含义**
    - routerId：路由ID，可为空
    - status: true 进入编辑状态   false  退出编辑状态
    - save: true 且 status的参数为 false 的时候则是需要保存状态,其他情况则是不执行保存状态
- **用法**：
  ``` js
  IDM.page.changePageUserDefinedStatus({status:true})
  ```
  改变页面用户定制化工作状态，用于开始进入编辑状态、退出编辑状态的切换

### executeUserDefinedSave
- **定义**：

  `executeUserDefinedSave(ctx)`
- **参数**：
  - `{routerId} [ctx]`
  - **参数含义**
    - routerId：路由ID，可为空
- **用法**：
  ``` js
  IDM.page.executeUserDefinedSave()
  
  IDM.page.executeUserDefinedSave({routerId:this.moduleObject.routerId})
  ```
  执行内部的个性化功能用户自定义保存事件

### executeUserDefinedReset
- **定义**：

  `executeUserDefinedReset(ctx)`
- **参数**：
  - `{routerId} [ctx]`
  - **参数含义**
    - routerId：路由ID，可为空
- **用法**：
  ``` js
  IDM.page.executeUserDefinedReset()
  
  IDM.page.executeUserDefinedReset({routerId:this.moduleObject.routerId})
  ```
  执行内部的个性化功能用户自定义重置事件

### executeUserDefinedQuit
- **定义**：

  `executeUserDefinedQuit(ctx)`
- **参数**：
  - `{routerId} [ctx]`
  - **参数含义**
    - routerId：路由ID，可为空
- **用法**：
  ``` js
  IDM.page.executeUserDefinedQuit()
  
  IDM.page.executeUserDefinedQuit({routerId:this.moduleObject.routerId})
  ```
  执行内部的个性化功能用户自定义退出事件

### checkComponentHasAuthority
- **定义**：

  `checkComponentHasAuthority(item)`
- **参数**：
  - `{Object} [item]`
  - **参数含义**
    IDM的Schema结构中的单个组件对象。
- **用法**：
  ``` js
  IDM.page.checkComponentHasAuthority(item)
  ```
  检查单个组件对象是否有权限显示，注意需要开启用户信息且[setting.js](../setting/config.md#basicattributeauthorizeconfig)是否正确配置。
  
- **返回值**：`Boolean` 返回当前用户是否有此权限显示此组件，`false`表示无权限

## app
此分类为应用程序信息存储的公共方法分类，此分类需要追加分类名（IDM.app.方法名）访问下列的方法。
### getAppInfo
- **定义**：

  `getAppInfo()`
- **用法**：
  ``` js
  IDM.app.getAppInfo() // => {...}
  ```
  用于获取当前页面存储共享应用程序信息，信息初始化参考：页面属性的 [应用信息](../guide/developtool.md#应用信息)
### setAppInfo
- **定义**：

  `setAppInfo(object)`
- **参数**：
  - `{Object} [object]`
- **用法**：
  ``` js
  IDM.app.setAppInfo({appName:"IDM低代码",appId:"abc123",...})
  ```
  用于设置当前页面共享应用程序信息，信息初始化参考：页面属性的 [应用信息](../guide/developtool.md#应用信息)
## user
此分类为当前登录用户信息存储的公共方法分类，此分类需要追加分类名（IDM.user.方法名）访问下列的方法。
### getCurrentUserInfo
- **定义**：

  `getCurrentUserInfo()`
- **用法**：
  ``` js
  IDM.user.getCurrentUserInfo() // => {...}
  ```
  用于获取当前登录用户信息，信息初始化参考：页面属性的 [用户信息](../guide/developtool.md#用户信息)
### setCurrentUserInfo
- **定义**：

  `setCurrentUserInfo(object)`
- **参数**：
  - `{Object} [object]`
- **用法**：
  ``` js
  IDM.user.setCurrentUserInfo({userName:"IDM无限",userId:"user123",...})
  ```
  用于设置当前登录用户信息，信息初始化参考：页面属性的 [用户信息](../guide/developtool.md#用户信息)
  
### getUserFontSizeRatio
- **定义**：

  `getUserFontSizeRatio()`
- **用法**：
  ``` js
  IDM.user.getUserFontSizeRatio() // => 1
  ```
  用于获取获取当前用户字体设置比例，内部会直接依据配置项配置的[fontSizeRatioRule](../setting/config.md#fontsizeratiorule)使用字段（支持a.b.c）格式去获取`IDM.user.getCurrentUserInfo()`返回的内部某个属性字段的值。

  :::tip
  前提条件是需要该页面已配置并启用了用户信息，请参考：页面属性的 [用户信息](../guide/developtool.md#用户信息)
  :::

### setUserFontSizeRatio
- **定义**：

  `setUserFontSizeRatio(object)`
- **参数**：
  - `{Object} [Number]`
- **用法**：
  ``` js
  IDM.user.setUserFontSizeRatio(1)
  ```
  用于设置当前用户字体设置的比例，内部会直接依据配置项配置的[fontSizeRatioRule](../setting/config.md#fontsizeratiorule)使用字段（支持a.b.c）格式去设置`IDM.user.getCurrentUserInfo()`中对象的某个属性字段的值。

  :::warning
  为了使搭建出来的页面用户体验更加，改变用户个性化字体大小设置后建议逻辑是这样的：
  1. 调用`IDM.user.setUserFontSizeRatio(1)`修改当前用户设置的字体
  2. 根据需求再次去调用设置用户字体大小的后端接口
  3. 发送改变字体设置大小的组件消息(基于组件通信协议：[userCustomFontSizeRatio](../moduledevelop/communication.md#内置通信协议))
  :::
## theme
此分类为当前登录用户主题存储的公共方法分类，此分类需要追加分类名（IDM.theme.方法名）访问下列的方法。
### getCurrentThemeInfo
- **定义**：

  `getCurrentThemeInfo()`
- **用法**：
  ``` js
  IDM.theme.getCurrentThemeInfo() // => {...}
  ```
  用于获取当前用户设置的主题信息，信息初始化参考：页面属性的 [应用主题](../guide/developtool.md#应用主题)
### setCurrentThemeInfo
- **定义**：

  `setCurrentThemeInfo(object)`
- **参数**：
  - `{String} [object]`
- **用法**：
  ``` js
  IDM.theme.setCurrentThemeInfo("blue")
  ```
  用于设置当前登录用户的主题信息，信息初始化参考：页面属性的 [应用主题](../guide/developtool.md#应用主题)

## style
此分类为设置组件属性样式公共方法分类，此分类需要追加分类名（IDM.style.方法名）访问下列的方法。
### setBorderStyle
此方法将设置边框样式的操作进行封装
- **定义**：
  `setBorderStyle(styleObject, element, isImportant = false)`
- **参数**：
  - `{Object} [styleObject]` 要设置的样式对象
  - `{Object} [element]` 组件配置属性列表中元素
  - `{Boolean} [isImportant]` 是否important, 默认false
- **用法**：
  ```js
  for (const key in this.propData) {
    case 'border':
      IDM.style.setBorderStyle(styleObject, element)
      break
  }
  ```

### setBoxStyle
此方法将设置内外边距的操作进行封装
- **定义**：
  `setBoxStyle(styleObject, element, isImportant = false)`
- **参数**：
  - `{Object} [styleObject]` 要设置的样式对象
  - `{Object} [element]` 组件配置属性列表中元素
  - `{Boolean} [isImportant]` 是否important, 默认false
- **用法**：
  ```js
  for (const key in this.propData) {
    case 'box':
      IDM.style.setBoxStyle(styleObject, element)
      break
  }
  ```

### setFontStyle
此方法将设置字体样式的操作进行封装
- **定义**：
  `setFontStyle(styleObject, element, isImportant = false)`
- **参数**：
  - `{Object} [styleObject]` 要设置的样式对象
  - `{Object} [element]` 组件配置属性列表中元素
  - `{Boolean} [isImportant]` 是否important, 默认false
- **用法**：
  ```js
  for (const key in this.propData) {
    case 'font':
      IDM.style.setFontStyle(styleObject, element)
      break
  }
  ```

  
### setLayoutStyle
此方法将设置layout属性控件的flex的操作进行封装
- **定义**：
  `setLayoutStyle(styleObject, element, isImportant = false)`
- **参数**：
  - `{Object} [styleObject]` 要设置的样式对象
  - `{Object} [element]` 组件配置属性列表中元素
  - `{Boolean} [isImportant]` 是否important, 默认false
- **用法**：
  ```js
  for (const key in this.propData) {
    case 'layout':
      IDM.style.setLayoutStyle(styleObject, element)
      break
  }
  ```
  
### setBackgroundStyle
此方法将设置背景颜色属性的操作进行封装
- **定义**：
  `setBackgroundStyle(styleObject, propData, keyObject, isImportant = false)`
- **参数**：
  - `{Object} [styleObject]` 要设置的样式对象
  - `{Object} [propData]` 背景属性所在的属性对象
  - `{
        bgSize: "bgSize",
        bgSizeWidth: "bgSizeWidth",
        bgSizeHeight: "bgSizeHeight",
        positionX: "positionX",
        positionY: "positionY",
        bgColor: "bgColor",
        bgImgUrl: "bgImgUrl",
        bgRepeat: "bgRepeat",
        bgAttachment: "bgAttachment",
    } [keyObject]` 背景颜色的属性的字段名称指定，默认为此，如没有变动则不需要传此参数
  - `{Boolean} [isImportant]` 是否important, 默认false
- **用法**：
  ```js
  var styleObject = {};
  IDM.style.setBackgroundStyle(styleObject, this.propData,{
        bgSize: "bgSize",
        bgSizeWidth: "bgSizeWidth",
        bgSizeHeight: "bgSizeHeight",
        positionX: "positionX",
        positionY: "positionY",
        bgColor: "bgColor",
        bgImgUrl: "bgImgUrl",
        bgRepeat: "bgRepeat",
        bgAttachment: "bgAttachment",
    })
  ```

  
### setMultiBackgroundStyle
此方法将设置[多背景图属性控件](../moduledevelop/attributes.md#multibackground)的样式进行封装
- **定义**：
  `setMultiBackgroundStyle(styleObject, element, isImportant = false)`
- **参数**：
  - `{Object} [styleObject]` 要设置的样式对象
  - `{Object} [element]` 组件配置属性列表中元素
  - `{Boolean} [isImportant]` 是否important, 默认false
- **用法**：
  ```js
  for (const key in this.propData) {
    case 'multiBackground':
      IDM.style.setMultiBackgroundStyle(styleObject, element)
      break
  }
  ```

### setFilterStyle
此方法将设置过滤镜样式属性的操作进行封装
- **定义**：
  `setFilterStyle(styleObject, propData, keyObject, isImportant = false)`
- **参数**：
  - `{Object} [styleObject]` 要设置的样式对象
  - `{Object} [propData]` 滤镜属性所在的属性对象
  - `{
        openFilter:"openFilter",
        contrast:"contrast",
        saturate:"saturate",
        brightness:"brightness",
        opacity:"opacity",
        grayscale:"grayscale",
        hueRotate:"hueRotate",
        invert:"invert",
        blur:"blur",
    } [keyObject]` 滤镜属性的字段名称指定，默认为此，如没有变动则不需要传此参数
  - `{Boolean} [isImportant]` 是否important, 默认false
- **用法**：
  ```js
  var styleObject = {};
  IDM.style.setFilterStyle(styleObject, this.propData,{
        openFilter:"openFilter",
        contrast:"contrast",
        saturate:"saturate",
        brightness:"brightness",
        opacity:"opacity",
        grayscale:"grayscale",
        hueRotate:"hueRotate",
        invert:"invert",
        blur:"blur",
    })
  ```

### generateClassName
此方法用于批量生成css类名, 方便设置css选择器权重
- **定义**：
  `generateClassName(selectorPrefix, subSelectorArray)`
- **参数**：
  - `{String} [selectorPrefix]` 前缀选择器
  - `{Array<String>} [subSelectorArray]` 子级选择器数组
- **用法**：
  ```js
    IDM.setStyleToPageHead(
        IDM.style.generateClassName(this.moduleObject.id + ' .class', [
            ` .sub-class-one`,
            ` .sub-class-two`
        ]),
        styleObject
    )
  ```

## watermark
此分类为水印设置与关闭的公共方法分类，此分类需要追加分类名（IDM.watermark.方法名）访问下列的方法。
### set
- **定义**：

  `set($el, type, mainContent, text1, option)`
- **参数**：
  - `{HTMLElement} [$el]` 要添加到的元素位置
  - `{Number} [type]` 0：背景水印，1：水印置顶
  - `{String} [mainContent]` 可为图片路径（只支持带.png,.jpg,.jpeg后缀的），可为文字内容。如果为路径会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
  - `{String} [text1]` 再次要添加的文字内容
  - `{Object} [option]` 其他选项
  option的格式为：
  ``` json
  {
    "fontColor":"字体颜色",
    "fontSize":"字体大小，例如：18px",
    "width": "水印宽度，例如：200",
    "height": "水印高度，例如：200",
    "rotate": "旋转角度，例如：45",
    "imgSize": "图片大小，例如：44",
    "imgLeftSize": "图片偏移(X)，例如：11",
    "fontLeftSize":"文字偏移(X)，例如：11",
    "opacity": "水印透明度，例如：0.11",
    "topSize": "整体偏移(Y)，例如：11",
  }
  ``` 
- **用法**：
  ``` js
  //propData为页面设置的属性数据
  var _watermarkFont = IDM.express.replace(propData.watermarkFont, {
      IDM: IDM,
    }),
    _watermarkFont1 = IDM.express.replace(propData.watermarkFont1, {
      IDM: IDM,
    });
  //文字水印
  IDM.watermark.set(
    this.$refs.idm_page_root,
    propData.watermarkZindex,
    propData.watermarkType != "font"
      ? propData.watermarkImg
      : _watermarkFont,
    propData.watermarkType == "image" ? "" : _watermarkFont1,
    {
      fontColor:
        propData.watermarkColor && propData.watermarkColor.hex8,
      fontSize: `${propData.watermarkFontSize}px`,
      width: propData.watermarkSize,
      height: propData.watermarkSize,
      rotate: propData.watermarkRotate,
      imgSize: propData.watermarkImgSize,
      imgLeftSize: propData.watermarkImgLeftSize,
      fontLeftSize: propData.watermarkFontLeftSize,
      opacity: propData.watermarkOpacity / 100,
      topSize: propData.watermarkTopSize,
    }
  );
  ```
  用于设置水印样式，参考：页面属性的 [水印设置](../guide/developtool.md#水印设置)
### close
- **定义**：

  `close($el)`
- **参数**：
  - `{HTMLElement} [$el]` 要移除水印的元素位置
  
- **用法**：
  ``` js
  IDM.watermark.close(this.$refs.idm_page_root);
  ```
  用于移除水印样式，参考：页面属性的 [水印设置](../guide/developtool.md#水印设置)
## message
此分类为消息提醒功能的公共方法分类，此分类需要追加分类名（IDM.message.方法名）访问下列的方法。
### config
- **定义**：

  `config(cfg)`
- **参数**：
  - `{Object} [cfg]` 全局配置信息
  cfg的格式为：
  ``` json
  {
    "position":"位置，仅支持'center','right','left',默认'center'",
    "type":"类型，支持'info','warning','success','error','loading'", 
    "showClose":"是否显示关闭图标，默认为false不显示",
    "timeout":"多久后自动关闭，单位ms,默认2500",
    "autoClose":"是否自动关闭，默认true,注意在type为loading的时候自动关闭为false",
    "content":"提示的内容",
    "onClose":"关闭的回调函数",
    "maxNums":"5 最大的提醒数量"
  }
  ``` 
  
- **用法**：
  ``` js
  //设置消息弹出的默认配置信息
  IDM.message.config({"position":"right"});
  //调用成功消息提醒，显示在右边
  IDM.message.success("保存成功！");
  ```
  用于全局修改覆盖消息提醒的默认配置项。
### info
- **定义**：

  `info(txt,config)`
- **参数**：
  - `{String} [txt]` 要提醒的内容
  - `{Object} [config]` 可修改覆盖默认配置项，请参考[config](./api.md#config)
  
- **返回值**：`Object` 当前提醒的对象
- **用法**：
  ``` js
  IDM.message.info("信息提醒");
  ```
  用于弹出信息提醒
### warning
- **定义**：

  `warning(txt,config)`
- **参数**：
  - `{String} [txt]` 要提醒的内容
  - `{Object} [config]` 可修改覆盖默认配置项，请参考[config](./api.md#config)
  
- **返回值**：`Object` 当前提醒的对象
- **用法**：
  ``` js
  IDM.message.warning("警告提醒");
  ```
  用于弹出警告提醒
### success
- **定义**：

  `success(txt,config)`
- **参数**：
  - `{String} [txt]` 要提醒的内容
  - `{Object} [config]` 可修改覆盖默认配置项，请参考[config](./api.md#config)
  
- **返回值**：`Object` 当前提醒的对象
- **用法**：
  ``` js
  IDM.message.success("成功提醒");
  ```
  用于弹出成功提醒
### error
- **定义**：

  `error(txt,config)`
- **参数**：
  - `{String} [txt]` 要提醒的内容
  - `{Object} [config]` 可修改覆盖默认配置项，请参考[config](./api.md#config)
  
- **返回值**：`Object` 当前提醒的对象
- **用法**：
  ``` js
  IDM.message.error("错误提醒");
  ```
  用于弹出错误提醒
### loading
- **定义**：

  `loading(txt,config)`
- **参数**：
  - `{String} [txt]` 要提醒的内容
  - `{Object} [config]` 可修改覆盖默认配置项，请参考[config](./api.md#config)
  
- **返回值**：`Object` 当前提醒的对象
- **用法**：
  ``` js
  IDM.message.loading("正在加载中...");
  ```
  用于弹出加载中状态
### remove
- **定义**：

  `remove(id)`
- **参数**：
  - `{String} [id]` 要删除的ID，可以从上述返回值的取到
  
- **用法**：
  ``` js
  IDM.message.remove("1");
  ```
  用于移除指定ID的提醒
### closeAll
- **定义**：

  `closeAll()`
- **用法**：
  ``` js
  IDM.message.closeAll();
  ```
  用于移除所有的提醒
## datasource
此分类为操作数据源的公共方法分类，此分类需要追加分类名（IDM.develop.方法名）访问下列的方法。
### request
此方法用于请求指定数据源返回数据源的结果方法，提供给组件快速使用数据源从而不需要单独去维护接口等属性
- **定义**：
  `request(dataSourceId, paramInfo, successCallback, errorCallback, finallyCallback)`
- **参数**：
  - `{String} [dataSourceId]` 数据源ID主键
  - `{Object} [paramInfo]` 参数信息，需要包含moduleObject和param，其中param就是数据源可能用到的变量，建议把有用的信息都传递过去，例如获取详情接口需要一个详情ID，则这样传即可`{moduleObject:this.moduleObject,param:{id:'获取过来的详情ID'}}`
  - `{Function} [successCallback]` 成功回调方法
  - `{Function} [errorCallback]` 失败回调方法
  - `{Function} [finallyCallback]` 最后执行回调方法

- **用法**：
  ```js
    IDM.datasource.request(this.propData[数据源ID属性变量名][0].id,{
      moduleObject:this.moduleObject,
      param:{id:'获取过来的详情ID'}
    },function(resData){
      //这里是请求成功的返回结果
    },function(error){
      //这里是请求失败的返回结果
    })
  ```

### getConfig
此方法用于请求指定数据源的所有配置信息，可以通过获取数据源信息实现自定义请求数据源。
- **定义**：
  `getConfig(dataSourceId, success, error, finallyCb)`
- **参数**：
  - `{String} [dataSourceId]` 数据源ID主键
  - `{Function} [success]` 成功回调方法
  - `{Function} [error]` 失败回调方法
  - `{Function} [finallyCb]` 最后执行回调方法

- **用法**：
  ```js
    IDM.datasource.getConfig(this.propData[数据源ID属性变量名][0].id,
    function(resData){
      //这里是请求成功的返回结果
    },function(error){
      //这里是请求失败的返回结果
    })
  ```

## develop
此分类为操作开发工具的公共方法分类，此分类需要追加分类名（IDM.develop.方法名）访问下列的方法。
### externalMixAttributeChangeHandle
- **定义**：

  `externalMixAttributeChangeHandle(attrData,modulePackageid,attrDataInnerIndex,responseProps)`
- **参数**：
  - `{Object} [attrData]`  {attrKey1,attrKey2}  要变更的属性对象
  - `{String} [modulePackageid]` 对应的组件包ID
  - `{String} [attrDataInnerIndex]` 属性对应的类型，默认为-1是组件属性，如果为组件内部的容器属性，则需要传指定容器的idm-container-index
  - `{Boolean} [responseProps]` 是否响应props属性，默认为false，如果为true，将会调用idmProps方法把最新的属性传递给组件进行响应

- **用法**：
  ``` js
  //newAttrData 为  {attrKey1,attrKey2}  格式
  //attrDataInnerIndex 为内部组件
  IDM.develop.externalMixAttributeChangeHandle(newAttrData,this.moduleObject.packageid,-1,false)
  ```
  此方法用于开发工具对外开放的组件属性修改改变处理函数
  :::tip
  详细使用请参考组件开发=>组件属性=>[反向设置属性](../moduledevelop/attributes.md#反向设置属性)
  :::

### getDragWorkspaceInfo
- **定义**：

  `getDragWorkspaceInfo()`

- **用法**：
  ``` js
  IDM.develop.getDragWorkspaceInfo()
  ```
- **返回值**：
  ``` json
  {
    "key": "dragworkspace",
    "width": 400,
    "height": 300,
    //非全屏左侧组件市场打开状态
    "leftAreaOpened": true,
    //非全屏右侧组件属性打开状态
    "rightAreaOpened": true,
    //非全屏顶部区域打开状态
    "topAreaOpened": true,
    //非全屏底部区域打开状态
    "bottomAreaOpened": true,
    //全屏状态下的临时打开窗口
    "leftAreaLsOpened": false,
    "rightAreaLsOpened": false,
    "topAreaLsOpened": false,
    "bottomAreaLsOpened": false,
  }
  ```
  此方法用于获取当前拖拽区域、设计工具的一些信息

## controlcenter
此分类为操作组件的控制中心(动态属性)方法分类，此分类需要追加分类名（IDM.controlcenter.方法名）访问下列的方法。
### getModuleAttrList
- **定义**：

  `getModuleAttrList(paramObject, success, error)`
- **参数**：
  - `{Object} [paramObject]`  {marketModuleId:组件comId,pageId:页面ID,packageid:组件实例ID(packageid)}  请求参数对象
  - `{Function} [success]` 请求成功回调方法
  - `{Function} [error]` 请求失败回调方法

- **用法**：
  ``` js
  IDM.controlcenter.getModuleAttrList({
    marketModuleId: this.moduleObject.comId,
    pageId: IDM.broadcast ? IDM.broadcast.pageModule.id : "",
    packageid: this.moduleObject.packageid
  },function(res){

  },function(err){
    
  })
  ```
  此方法用于组件内获取控制中心设置的组件动态属性

### getModuleAttrInstance
- **定义**：

  `getModuleAttrInstance(paramObject)`
- **参数**：
  - `{Object} [paramObject]`  {marketModuleId:组件comId,pageId:页面ID,packageid:组件实例ID(packageid)}  请求参数对象

- **用法**：
  ``` js
  IDM.controlcenter.getModuleAttrInstance({
    marketModuleId: this.moduleObject.comId,
    pageId: IDM.broadcast ? IDM.broadcast.pageModule.id : "",
    packageid: this.moduleObject.packageid
  }).then((res) => {
      //成功结果
  }).catch((err) => {
      //失败结果
  })
  ```
- **返回值**：http axios

  此方法用于组件内获取控制中心设置的组件动态http axios 实例

## layer

此分类为公共弹出层方法分类，此分类需要追加分类名（IDM.layer.方法名）访问下列的方法。

:::tip
IDM的layer弹窗延用了layui框架作者贤心开发的[layer](https://gitee.com/sentsin/layer/tree/master)源码，在此非常感谢!

以下方法参数几乎与layer文档一致，如果你熟悉可直接跳过，只不过需要在layer前面加上IDM即可
:::

### 基础参数
我们提到的基础参数主要指调用方法时用到的配置项，如：`IDM.layer.open({content: ''})` `IDM.layer.msg('', {time: 3})`等，其中的content和time即是基础参数，以键值形式存在，基础参数可合理应用于任何层类型中，您不需要所有都去配置，大多数都是可选的。而其中的`IDM.layer.open`、`IDM.layer.msg`就是内置方法

### type-基本层类型
- 类型：Number
- 默认：0

  layer提供了5种层类型。可传入的值有：0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）。 若你采用`IDM.layer.open({type: 1})`方式调用，则type为必填项（信息框除外）

### title-标题
- 类型：String/Array/Boolean
- 默认：'信息'

  title支持三种类型的值，若你传入的是普通的字符串，如`title :'我是标题'`，那么只会改变标题文本；若你还需要自定义标题区域样式，那么你可以`title: ['文本', 'font-size:18px;']`，数组第二项可以写任意css样式；如果你不想显示标题栏，你可以`title: false`

### content-内容
- 类型：String/DOM/Array
- 默认：''

  content可传入的值是灵活多变的，不仅可以传入普通的html内容，还可以指定DOM，更可以随着type的不同而不同。譬如：
  ```js
  /!*
  如果是页面层
  */
  IDM.layer.open({
    type: 1, 
    content: '传入任意的文本或html' //这里content是一个普通的String
  });
  IDM.layer.open({
    type: 1,
    content: $('#id') //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
  });
  //Ajax获取
  $.post('url', {}, function(str){
    IDM.layer.open({
      type: 1,
      content: str //注意，如果str是object，那么需要字符拼接。
    });
  });
  /!*
  如果是iframe层
  */
  IDM.layer.open({
    type: 2, 
    content: 'http://sentsin.com' //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
  }); 
  /!*
  如果是用layer.open执行tips层
  */
  IDM.layer.open({
    type: 4,
    content: ['内容', '#id'] //数组第二项即吸附元素选择器或者DOM
  });   
  ```
### skin-样式类名
- 类型：String
- 默认：''

  skin不仅允许你传入layer内置的样式class名，还可以传入您自定义的class名。这是一个很好的切入点，意味着你可以借助skin轻松完成不同的风格定制。目前layer内置的skin有：`idm-layer-lan` `idm-layer-molv`，未来我们还会选择性地内置更多，但更推荐您自己来定义。以下是一个自定义风格的简单例子
  ```js
  //单个使用
  IDM.layer.open({
    skin: 'demo-class'
  });
  //全局使用。即所有弹出层都默认采用，但是单个配置skin的优先级更高
  IDM.layer.config({
    skin: 'demo-class'
  })
  //CSS 
  body .demo-class .idm-layer-title{background:#c00; color:#fff; border: none;}
  body .demo-class .idm-layer-btn{border-top:1px solid #E9E7E7}
  body .demo-class .idm-layer-btn a{background:#333;}
  body .demo-class .idm-layer-btn .idm-layer-btn1{background:#999;}
  …
  加上body是为了保证优先级。你可以借助Chrome调试工具，定义更多样式控制层更多的区域。   
  ```

### area-宽高
- 类型：String/Array
- 默认：'auto'

  在默认状态下，layer是宽高都自适应的，但当你只想定义宽度时，你可以`area: '500px'`，高度仍然是自适应的。当你宽高都要定义时，你可以`area: ['500px', '300px']`

### offset-坐标
- 类型：String/Array
- 默认：垂直水平居中
  
  offset默认情况下不用设置。但如果你不想垂直水平居中，你还可以进行以下赋值：
  |值|备注|
  |-|-|
  |offset: 'auto'|默认坐标，即垂直水平居中|
  |offset: '100px'|只定义top坐标，水平保持居中|
  |offset: ['100px', '50px']|同时定义top、left坐标|
  |offset: 't'|快捷设置顶部坐标|
  |offset: 'r'|快捷设置右边缘坐标|
  |offset: 'b'|快捷设置底部坐标|
  |offset: 'l'|快捷设置左边缘坐标|
  |offset: 'lt'|快捷设置左上角|
  |offset: 'lb'|快捷设置左下角|
  |offset: 'rt'|快捷设置右上角|
  |offset: 'rb'|快捷设置右下角|

### icon-图标
- 类型：Number
- 默认：-1（信息框）/0（加载层）

  信息框默认不显示图标。当你想显示图标时，默认皮肤可以传入0-6如果是加载层，可以传入0-2。如：
  ```js
  //eg1
  IDM.layer.alert('酷毙了', {icon: 1});
  //eg2
  IDM.layer.msg('不开心。。', {icon: 5});
  //eg3
  IDM.layer.load(1); //风格1的加载
  ```
  :::tip
  信息框和加载层的私有参数
  :::

### btn-按钮
- 类型：String/Array
- 默认：'确认'

  信息框模式时，btn默认是一个确认按钮，其它层类型则默认不显示，加载层和tips层则无效。当您只想自定义一个按钮时，你可以`btn: '我知道了'`，当你要定义两个按钮时，你可以`btn: ['yes', 'no']`。当然，你也可以定义更多按钮，比如：`btn: ['按钮1', '按钮2', '按钮3', …]`，按钮1的回调是yes，而从按钮2开始，则回调为btn2: function(){}，以此类推。如：
  ```js
  //eg1       
  IDM.layer.confirm('纳尼？', {
    btn: ['按钮一', '按钮二', '按钮三'] //可以无限个按钮
    ,btn3: function(index, layero){
      //按钮【按钮三】的回调
    }
  }, function(index, layero){
    //按钮【按钮一】的回调
  }, function(index){
    //按钮【按钮二】的回调
  });
  
  //eg2
  IDM.layer.open({
    content: 'test'
    ,btn: ['按钮一', '按钮二', '按钮三']
    ,yes: function(index, layero){
      //按钮【按钮一】的回调
    }
    ,btn2: function(index, layero){
      //按钮【按钮二】的回调
      
      //return false 开启该代码可禁止点击该按钮关闭
    }
    ,btn3: function(index, layero){
      //按钮【按钮三】的回调
      
      //return false 开启该代码可禁止点击该按钮关闭
    }
    ,cancel: function(){ 
      //右上角关闭回调
      
      //return false 开启该代码可禁止点击该按钮关闭
    }
  });
  ```

### btnAlign-按钮排列
- 类型：String
- 默认：r
  
  你可以快捷定义按钮的排列位置，btnAlign的默认值为r，即右对齐。该参数可支持的赋值如下：
  |值|备注|
  |-|-|
  |btnAlign: 'l'|按钮左对齐|
  |btnAlign: 'c'|按钮居中对齐|
  |btnAlign: 'r'|按钮右对齐。默认值，不用设置|

### closeBtn-关闭按钮
- 类型：String/Boolean
- 默认：1

  layer提供了两种风格的关闭按钮，可通过配置1和2来展示，如果不显示，则`closeBtn: 0`

### shade-遮罩
- 类型：String/Array/Boolean
- 默认：0.3

  即弹层外区域。默认是0.3透明度的黑色背景（'#000'）。如果你想定义别的颜色，可以`shade: [0.8, '#393D49']`；如果你不想显示遮罩，可以`shade: 0`

### shadeClose-是否点击遮罩关闭
- 类型：Boolean
- 默认：false

  如果你的shade是存在的，那么你可以设定shadeClose来控制点击弹层外区域关闭。

### time-自动关闭所需毫秒
- 类型：Number
- 默认：0

  默认不会自动关闭。当你想自动关闭时，可以`time: 5000`，即代表5秒后自动关闭，注意单位是毫秒（1秒=1000毫秒）

### id-弹层唯一标识
- 类型：String
- 默认：空字符

  设置该值后，不管是什么类型的层，都只允许同时弹出一个。一般用于页面层和iframe层模式

### anim-弹出动画
- 类型：Number
- 默认：0

  我们的出场动画全部采用CSS3。这意味着除了ie6-9，其它所有浏览器都是支持的。目前anim可支持的动画类型有0-6 如果不想显示动画，设置 `anim: -1` 即可。另外需要注意的是，3.0之前的版本用的是 shift 参数

|值|备注|
|-|-|
|anim: 0|平滑放大。默认|
|anim: 1|从上掉落|
|anim: 2|从最底部往上滑入|
|anim: 3|从左滑入|
|anim: 4|从左翻滚|
|anim: 5|渐显|
|anim: 6|抖动|

### isOutAnim-关闭动画
- 类型：Boolean
- 默认：true

  默认情况下，关闭层时会有一个过度动画。如果你不想开启，设置 `isOutAnim: false` 即可

### maxmin-最大最小化。
- 类型：Boolean
- 默认：false

  该参数值对`type:1`和`type:2`有效。默认不显示最大小化按钮。需要显示配置`maxmin: true`即可

### fixed-固定
- 类型：Boolean
- 默认：true

  即鼠标滚动时，层是否固定在可视区域。如果不想，设置`fixed: false`即可

### resize-是否允许拉伸
- 类型：Boolean
- 默认：true

  默认情况下，你可以在弹层右下角拖动来拉伸尺寸。如果对指定的弹层屏蔽该功能，设置 false即可。该参数对loading、tips层无效

### resizing-监听窗口拉伸动作
- 类型：Function
- 默认：null

  当你拖拽弹层右下角对窗体进行尺寸调整时，如果你设定了该回调，则会执行。回调返回一个参数：当前层的DOM对象

  ```js
  resizing: function(layero){
    console.log(layero);
  }
  ```
        
### scrollbar-是否允许出现滚动条
- 类型：Boolean
- 默认：true

  默认允许浏览器滚动，如果设定`scrollbar: false`，则屏蔽

### maxWidth-最大宽度
- 类型：Number
- 默认：360

  请注意：只有当`area: 'auto'`时，maxWidth的设定才有效。

### maxHeight-最大高度
- 类型：Number
- 默认：无

  请注意：只有当高度自适应时，maxHeight的设定才有效。

### zIndex-层叠顺序
- 类型：Number
- 默认：19920101

  一般用于解决和其它组件的层叠冲突。

### move-触发拖动的元素
- 类型：String/DOM/Boolean
- 默认：'.layui-layer-title'

  默认是触发标题区域拖拽。如果你想单独定义，指向元素的选择器或者DOM即可。如`move: '.mine-move'`。你还配置设定`move: false`来禁止拖拽

### moveOut-是否允许拖拽到窗口外
- 类型：Boolean
- 默认：false

  默认只能在窗口内拖拽，如果你想让拖到窗外，那么设定`moveOut: true`即可

### moveEnd-拖动完毕后的回调方法
- 类型：Function
- 默认：null

  默认不会触发moveEnd，如果你需要，设定`moveEnd: function(layero){}`即可。其中layero为当前层的DOM对象

### tips-tips方向和颜色
- 类型：Number/Array
- 默认：2

  tips层的私有参数。支持上右下左四个方向，通过1-4进行方向设定。如`tips: 3`则表示在元素的下面出现。有时你还可能会定义一些颜色，可以设定`tips: [1, '#c00']`

### tipsMore-是否允许多个tips
- 类型：Boolean
- 默认：false

  允许多个意味着不会销毁之前的tips层。通过`tipsMore: true`开启

### success-层弹出后的成功回调方法
- 类型：Function
- 默认：null

  当你需要在层创建完毕时即执行一些语句，可以通过该回调。success会携带两个参数，分别是当前层DOM当前层索引。如：

  ```js
  IDM.layer.open({
    content: '测试回调',
    success: function(layero, index){
      console.log(layero, index);
    }
  });
  ```  
        
### yes-确定按钮回调方法
- 类型：Function
- 默认：null

  该回调携带两个参数，分别为当前层索引、当前层DOM对象。如：

  ```js
  IDM.layer.open({
    content: '测试回调',
    yes: function(index, layero){
      //do something
      IDM.layer.close(index); //如果设定了yes回调，需进行手工关闭
    }
  });
  ```    
        
### cancel-右上角关闭按钮触发的回调
- 类型：Function
- 默认：null

  该回调携带两个参数，分别为：当前层索引参数（index）、当前层的DOM对象（layero），默认会自动触发关闭。如果不想关闭，`return false`即可，如；

  ```js
  cancel: function(index, layero){ 
    if(confirm('确定要关闭么')){ //只有当点击confirm框的确定时，该层才会关闭
      IDM.layer.close(index)
    }
    return false; 
  }
  ``` 
        
### end-层销毁后触发的回调
- 类型：Function
- 默认：null

  无论是确认还是取消，只要层被销毁了，end都会执行，不携带任何参数。

### full/min/restore
- 类型：Function
- 默认：null

  携带两个参数，即当前层 DOM、当前层索引

  ```js
  min: function(layero, index){
    //当层最小化时触发
    
    //自定义操作，并阻止默认最小化
    //IDM.layer.min(index); //单独执行最小化
    //return false; //阻止默认最小化
  } 
  ```
  分别代表最大化、最小化、还原 后触发的回调
        
### minStack-是否默认堆叠在左下角
- 类型：Boolean
- 默认：true

### 内置方法
### config-全局配置

- 方法：IDM.layer.config(options)

  可以配置层 默认的基础参数，如：
  ```js
  IDM.layer.config({
    anim: 1, //默认动画风格
    skin: 'layui-layer-molv' //默认皮肤
    //…
  });
  ```
### open-核心方法
- 方法：IDM.layer.open(options)

  基本上是露脸率最高的方法，不管是使用哪种方式创建层，都是走IDM.layer.open()，创建任何类型的弹层都会返回一个当前层索引，上述的options即是基础参数，另外，该文档统一采用options作为基础参数的标识例子：
  ```js
  var index = IDM.layer.open({
    content: 'test'
  });
  //拿到的index是一个重要的凭据，它是诸如layer.close(index)等方法的必传参数。  
  ```
  :::tip
  噢，请等等，上面这位主角的介绍篇幅怎么看怎么都觉得跟它的地位不符，作者在文档中只给了它如此可怜的一块地？？这是因为，它真的已经大众得不能再大众了，你真正需要了解的，是它的内部器官，即上面一大篇幅介绍的各种基础参数。
  :::
### alert-普通信息框
- 方法：IDM.layer.alert(content, options, yes)

  它的弹出似乎显得有些高调，一般用于对用户造成比较强烈的关注，类似系统alert，但却比alert更灵便。它的参数是自动向左补齐的。通过第二个参数，可以设定各种你所需要的基础参数，但如果你不需要的话，直接写回调即可。如
  ```js
  //eg1
  IDM.layer.alert('只想简单的提示');        
  //eg2
  IDM.layer.alert('加了个图标', {icon: 1}); //这时如果你也还想执行yes回调，可以放在第三个参数中。
  //eg3
  IDM.layer.alert('有了回调', function(index){
    //do something
    
    IDM.layer.close(index);
  });
  ```

### confirm-询问框
- 方法：IDM.layer.confirm(content, options, yes, cancel)

  类似系统confirm，但却远胜confirm，另外它不是和系统的confirm一样阻塞你需要把交互的语句放在回调体中。同样的，它的参数也是自动补齐的。
  ```js
  //eg1
  IDM.layer.confirm('is not?', {icon: 3, title:'提示'}, function(index){
    //do something
    
    IDM.layer.close(index);
  });
  //eg2
  IDM.layer.confirm('is not?', function(index){
    //do something
    
    IDM.layer.close(index);
  });       
  ```

### msg-提示框
- 方法：IDM.layer.msg(content, options, end)
  
  我们在源码中用了相对较大的篇幅来定制了这个msg，目的是想将其打造成露脸率最高的提示框。而事实上我的确也在大量地使用它。因为它简单，而且足够得自觉，它不仅占据很少的面积，而且默认还会3秒后自动消失所有这一切都决定了我对msg的爱。因此我赋予了它许多可能在外形方面，它坚持简陋的变化，在作用方面，它坚持零用户操作。而且它的参数也是自动补齐的。

  ```js
  //eg1
  IDM.layer.msg('只想弱弱提示');
  //eg2
  IDM.layer.msg('有表情地提示', {icon: 6}); 
  //eg3
  IDM.layer.msg('关闭后想做些什么', function(){
    //do something
  }); 
  //eg
  IDM.layer.msg('同上', {
    icon: 1,
    time: 2000 //2秒关闭（如果不配置，默认是3秒）
  }, function(){
    //do something
  });   
  ```

### load-加载层
- 方法：IDM.layer.load(icon, options)
  
  type:3的深度定制。load并不需要你传太多的参数，但如果你不喜欢默认的加载风格，你还有选择空间。icon支持传入0-2如果是0，无需传。另外特别注意一点：load默认是不会自动关闭的，因为你一般会在ajax回调体中关闭它。
  ```js
  //eg1
  var index = IDM.layer.load();
  //eg2
  var index = IDM.layer.load(1); //换了种风格
  //eg3
  var index = IDM.layer.load(2, {time: 10*1000}); //又换了种风格，并且设定最长等待10秒 
  //关闭
  IDM.layer.close(index);  
  ```

### tips-吸附
- 方法：IDM.layer.tips(content, follow, options)

  type:4的深度定制。也是我本人比较喜欢的一个层类型，因为它拥有和msg一样的低调和自觉，而且会智能定位，即灵活地判断它应该出现在哪边。默认是在元素右边弹出

  ```js
  //eg1
  IDM.layer.tips('只想提示地精准些', '#id');
  //eg 2
  $('#id').on('click', function(){
    var that = this;
    IDM.layer.tips('只想提示地精准些', that); //在元素的事件回调体中，follow直接赋予this即可
  });
  //eg 3
  IDM.layer.tips('在上面', '#id', {
    tips: 1
  });
  ```

:::tip
上面主要是一些弹层的调用方式，而下面介绍的是一些辅助性的方法
:::

### close-关闭层
- 方法：IDM.layer.close(index)

  关于它似乎没有太多介绍的必要，唯一让你疑惑的，可能就是这个index了吧。事实上它非常容易得到。

  ```js
  //当你想关闭当前页的某个层时
  var index = IDM.layer.open();
  var index = IDM.layer.alert();
  var index = IDM.layer.load();
  var index = IDM.layer.tips();
  //正如你看到的，每一种弹层调用方式，都会返回一个index
  IDM.layer.close(index); //此时你只需要把获得的index，轻轻地赋予IDM.layer.close即可
  
  //如果你想关闭最新弹出的层，直接获取IDM.layer.index即可
  IDM.layer.close(IDM.layer.index); //它获取的始终是最新弹出的某个层，值是由layer内部动态递增计算的
  
  //当你在iframe页面关闭自身时
  var index = parent.IDM.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
  parent.IDM.layer.close(index); //再执行关闭 
  
  //关闭后的回调
  IDM.layer.close(index, function(){
    //do something
  });  
  ```

### closeAll-关闭所有层
- 方法：IDM.layer.closeAll(type)

  如果你很懒，你不想去获取index你只想关闭。那么closeAll真的可以帮上你。如果你不指向层类型的话，它会销毁掉当前页所有的layer层。当然，如果你只想关闭某个类型的层，那么你可以

  ```js
  IDM.layer.closeAll(); //疯狂模式，关闭所有层
  IDM.layer.closeAll('dialog'); //关闭信息框
  IDM.layer.closeAll('page'); //关闭所有页面层
  IDM.layer.closeAll('iframe'); //关闭所有的iframe层
  IDM.layer.closeAll('loading'); //关闭加载层
  IDM.layer.closeAll('tips'); //关闭所有的tips层    
  
  //关闭后的回调（layui 2.6.5、layer 3.4.0 新增）
  IDM.layer.closeAll('loading', function(){ //关闭 loading 并执行回调
    //do something
  }); 
  IDM.layer.closeAll(function(){ //关闭所有层并执行回调
    //do something
  }); 
  ```

### style-重新定义层的样式
- 方法：IDM.layer.style(index, cssStyle)

  该方法对loading层和tips层无效。参数index为层的索引，cssStyle允许你传入任意的css属性

  ```js
  //重新给指定层设定width、top等
  IDM.layer.style(index, {
    width: '1000px',
    top: '10px'
  });
  ```  

### title-改变层的标题
- 方法：IDM.layer.title(title, index)

  使用方式：`IDM.layer.title('标题变了', index)`

### getChildFrame-获取iframe页的DOM
- 方法：IDM.layer.getChildFrame(selector, index)

  当你试图在当前页获取iframe页的DOM元素时，你可以用此方法。selector即iframe页的选择器

  ```js
  IDM.layer.open({
    type: 2,
    content: 'test/iframe.html',
    success: function(layero, index){
      var body = IDM.layer.getChildFrame('body', index);
      var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
      console.log(body.html()) //得到iframe页的body内容
      body.find('input').val('Hi，我是从父页来的')
    }
  });
  ```

### getFrameIndex-获取iframe层的索引
- 方法：IDM.layer.getFrameIndex(windowName)

  此方法一般用于在iframe页关闭自身时用到。

  ```js
  //假设这是iframe页
  var index = parent.IDM.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
  parent.IDM.layer.close(index); //再执行关闭        
  ```

### iframeAuto-指定iframe层自适应
- 方法：IDM.layer.iframeAuto(index)

  调用该方法时，iframe层的高度会重新进行适应

### iframeSrc-重置特定iframe url
- 方法：IDM.layer.iframeSrc(index, url)

  似乎不怎么常用的样子。使用方式：IDM.layer.iframeSrc(index, 'http://sentsin.com')

### setTop-置顶当前窗口
- 方法：IDM.layer.setTop(layero)

  非常强大的一个方法，虽然一般很少用。但是当你的页面有很多很多layer窗口，你需要像Window窗体那样，点击某个窗口，该窗体就置顶在上面，那么setTop可以来轻松实现。它采用巧妙的逻辑，以使这种置顶的性能达到最优

  ```js
  //通过这种方式弹出的层，每当它被选择，就会置顶。
  IDM.layer.open({
    type: 2,
    shade: false,
    area: '500px',
    maxmin: true,
    content: 'http://www.layuion.com',
    zIndex: IDM.layer.zIndex, //重点1
    success: function(layero){
      IDM.layer.setTop(layero); //重点2
    }
  });
  ```

### full/min/restore-手工执行最大小化
- 方法：IDM.layer.full()、IDM.layer.min()、IDM.layer.restore()

  一般用于在自定义元素上触发最大化、最小化和全屏。

  ```js
  IDM.layer.full(index); //执行最大化
  IDM.layer.min(index); //执行最小化
  IDM.layer.restore(index); //执行还原  
  ```

### 其他内置方法
### prompt-输入层
- 方法：IDM.layer.prompt(options, yes)

    prompt的参数也是向前补齐的。options不仅可支持传入基础参数，还可以传入prompt专用的属性。当然，也可以不传。yes携带value 表单值index 索引elem 表单元素

  ```js
  //prompt层新定制的成员如下
  {
    formType: 1, //输入框类型，支持0（文本）默认1（密码）2（多行文本）
    value: '', //初始时的值，默认空字符
    maxlength: 140, //可输入文本的最大长度，默认500
  }
  
  //例子1
  IDM.layer.prompt(function(value, index, elem){
    alert(value); //得到value
    IDM.layer.close(index);
  });
  
  //例子2
  IDM.layer.prompt({
    formType: 2,
    value: '初始值',
    title: '请输入值',
    area: ['800px', '350px'] //自定义文本域宽高
  }, function(value, index, elem){
    alert(value); //得到value
    IDM.layer.close(index);
  });
  ```

### tab-tab层    
- 方法：IDM.layer.tab(options)

  tab层只单独定制了一个成员，即tab: []，这个好像没有什么可介绍的，简单粗暴看例子

  ```js
  IDM.layer.tab({
    area: ['600px', '300px'],
    tab: [{
      title: 'TAB1', 
      content: '内容1'
    }, {
      title: 'TAB2', 
      content: '内容2'
    }, {
      title: 'TAB3', 
      content: '内容3'
    }]
  });
  ``` 

### photos-相册层
- IDM.layer.photos(options)

  相册层，也可以称之为图片查看器。它的出场动画从layer内置的动画类型中随机展现。photos支持传入json和直接读取页面图片两种方式。如果是json传入，如下：

  ```js
  $.getJSON('/jquery/layer/test/photos.json', function(json){
    IDM.layer.photos({
      photos: json
      ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
    });
  }); 
  //而返回的json需严格按照如下格式：

  {
    "title": "", //相册标题
    "id": 123, //相册id
    "start": 0, //初始显示的图片序号，默认0
    "data": [   //相册包含的图片，数组格式
      {
        "alt": "图片名",
        "pid": 666, //图片id
        "src": "", //原图地址
        "thumb": "" //缩略图地址
      }
    ]
  }
  ```  
  如果是直接从页面中获取图片，那么需要指向图片的父容器，并且你的img可以设定一些规定的属性（但不是必须的）。

  ```js
  //HTML示例
  <div id="layer-photos-demo" class="layer-photos-demo">
    <img layer-pid="图片id，可以不写" layer-src="大图地址" src="缩略图" alt="图片名">
    <img layer-pid="图片id，可以不写" layer-src="大图地址" src="缩略图" alt="图片名">
  </div>
  
  <script>
  //调用示例
  IDM.layer.photos({
    photos: '#layer-photos-demo'
    ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
  }); 
  </script>
  ```
        
  第二种方式的图片查看器显然更加简单，因为无需像第一种那样返回规定的json，但是他们还是有各自的应用场景的，你可以按照你的需求进行选择。另外，photos还有个tab回调，切换图片时触发。

  ```js
  IDM.layer.photos({
    photos: json/选择器,
    tab: function(pic, layero){
      console.log(pic) //当前图片的一些信息
    }
  });
  ```
        