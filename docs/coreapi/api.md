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

  `setStyleToPageHead(id,object)`
- **参数**：
  - `{string} [id]`
  - `{Object} [object]`

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
  基于 [Axios](https://axios-http.com/docs/api_intro) 的 get 请求方法。
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
  基于 [Axios](https://axios-http.com/docs/api_intro) 的 post 请求方法。
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
            ` .sub-class-two`,
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
