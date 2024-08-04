# 云IT公开接口
## 什么是云IT？
[云IT](http://idm.dreamdt.cn)是一个公开的SaaS平台，主要提供了以下服务：组件包共享、组件共享、教程、资源（页面、业务组件、模板、图片）、资源专题广场、云圈、组织、IDM架构升级等服务功能，其中云IT的共享是指用户可以通过云IT平台发布自己的组件包，供其他用户使用（可按组织范围发布）。

## 什么是公开接口？
公开接口是指云IT平台提供给第三方开发者（比如本地项目的页面控制台）的接口，第三方开发者可以通过接口获取云IT平台上的资源，例如：组件包、组件、页面、业务组件、模板、图片等。

## 如何使用公开接口？
### 1. 注册账号
注册账号后，在云IT平台上创建一个组织，组织名称可以随意，例如：`IDream团队`。

### 2. 获取AccessKey
登录[云IT](http://idm.dreamdt.cn)平台后，点击右上角的头像，进入AccessKey管理，勾选授权范围并保存，然后获取并复制AccessKey ID和AccessKey Secret，以备后续使用。

### 3. 生成Token
提供以下生成Token（java+jwt）代码：
```java
/**
 * token过期时间
 */
private static final long EXPIRE_TIME = 30 * 60 * 1000;
private static final String AccessKeyID = 'ff8080818761913c018761913c641000';
private static final String AccessKeySecret = 'Iqy6akvSVXxRyODlmFftG31teRY21WIr';
// 设置过期时间
Date date = new Date(System.currentTimeMillis() + EXPIRE_TIME);
// 私钥和加密算法
Algorithm algorithm = Algorithm.HMAC256(AccessKeySecret);
// 设置头部信息
Map<String, Object> header = new HashMap<>(2);
header.put("Type", "Jwt");
header.put("alg", "HS256");
// 返回token字符串
return JWT.create()
        .withHeader(header)
        .withClaim("AccessKeyID", AccessKeyID)
        .withClaim("TimeSpan", System.currentTimeMillis())
        .withExpiresAt(date)
        .sign(algorithm);
```
### 4. 调用接口
根据需求，调用以下相应的接口即可。
:::warning
平台统一token有效期时间为5分钟（根据TimeSpan确定）
:::

## 接口列表
### 获取组件包列表
- 接口地址：`http://idm.dreamdt.cn/idm/api/getCodepackageList`

- 请求方式：GET

- 功能描述：分页获取授权范围内的组件包列表

- 请求头：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| X-Sign | string | 是 | 根据AccessKeyID+AccessKeySecret+时间戳生成的JWT签名 |
| X-AccessKey-ID | string | 是 | 加密校验的AccessKey的ID，通过此参数去解密 |
| X-TIMESTAMP | string | 是 | 当前接口请求携带签名的时间戳，有效期5分钟 |

- 请求参数：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| searchTxt | string | 否 | 搜索相关关键字 |
| className | string | 否 | 包含或者排除的组件包类名，多个用逗号隔开 |
| classNameType | int | 否 | className的参数类型，1：排除className参数的组件包、其他：包含className参数的组件包 |
| pageNo | int | 是 | 页编号，从1开始 |
| pageSize | int | 是 | 页大小，默认为20 |
| sort | int | 否 | 排序方式，默认0：按最新，1：按最热 |

- 响应状态码

  200：请求成功

  400：请求错误（如参数缺失或格式错误）

  401：未授权

  500：服务器内部错误

- 响应数据结构：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": "时间戳",
    "result": {
        "size": "页大小",
        "total": "总数",
        "current": "当前页数",
        "pages": "总页数",
        "records":[
            {
                "id": "组件包ID",
                "createTime": "创建时间",
                "updateTime": "更新时间",
                "userId": "用户ID",
                "userIdNO": "用户编号",
                "userNickname": "用户昵称",
                "userPhoto": "用户头像相对地址",
                "title": "组件包标题",
                "classname": "组件包类名",
                "currentVersion": "组件包当前版本",
                "codeLangue": "组件包代码语言",
                "currentRemark": "组件包备注",
                "tags": "组件包标签",
                "githubUrl": "github的仓库地址",
                "giteeUrl": "gitee的仓库地址",
                "otherUrl": "其他仓库地址",
                "publishRange": "发布范围ID，多个逗号隔开",
                "publishRangeName": "发布范围名称，多个逗号隔开",
                "currentConfigText": "当前组件包的配置文本",
                "currentCodePath": "当前版本组件包的代码（可运行）相对地址",
                "currentZipPath": "当前版本组件包的压缩包相对地址",
                "currentRunPath": "当前版本组件包的可运行的压缩包相对地址",
                "versionCount": "组件包版本数量",
                "publishOpen": "是否公开，1：公开，0：使用发布范围",
                "praiseNumber": "点赞数量",
                "collectNumber": "收藏数量",
                "commentNumber": "评论数量",
                "shareNumber": "分享数量",
                "playtourNumber": "赞助数量",
                "readNumber": "阅读数量",
                "status": "发布状态，1标识已发布，0标识未发布",
                "currentZipSize": "当前版本源码zip压缩包文件大小",
                "currentRunSize": "当前版本可运行的zip压缩包文件大小"
            }
        ]
    }
}
```

- 响应示例：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": 1721628420603,
    "result": {
        "size": 20,
        "total": 1,
        "current": 1,
        "pages": 1,
        "records":[
            {
                "id": "ff8080818761913c01876a87ef120014",
                "createTime": "2023-04-10 17:38:26",
                "updateTime": "2023-04-10 17:41:09",
                "userId": "ff8080818761913c018763313c620000",
                "userIdNO": "1806181",
                "userNickname": "申龙",
                "userPhoto": "/resource/images/default_userphoto.png",
                "title": "通用基础组件",
                "classname": "basics",
                "currentVersion": "1.0.0",
                "codeLangue": "Vue",
                "currentRemark": "此代码包基于IDM框架开发的一些基础常用的原子组件，主要有文本、图片、按钮、图标、链接等一些比较常见的且功能比较单一的最小级别的组件，复用性比较高且支持更加高级的扩展。",
                "tags": "按钮,通用,原子组件",
                "githubUrl": "https://github.com/yunit-code/basics.git",
                "giteeUrl": null,
                "otherUrl": null,
                "publishRange": null,
                "publishRangeName": null,
                "currentConfigText": "{\r\n    \"version\": \"1.0.0\",\r\n    \"lasttime\": \"2021-04-05 00:36:27\",\r\n    \"author\": \"申龙\",\r\n    \"className\": \"basics\",\r\n    \"module\": [\r\n        {\r\n            \"classId\": \"idm.componet.basics.attrdemo\",\r\n            \"comName\": \"属性\",\r\n            \"className\": \"Demo\",\r\n            \"comType\": \"common\",\r\n            \"comLangue\": \"vue\"\r\n        },\r\n        {\r\n            \"classId\": \"idm.componet.basics.text\",\r\n            \"comName\": \"文本\",\r\n            \"className\": \"IText\",\r\n            \"comType\": \"common\",\r\n            \"comLangue\": \"vue\"\r\n        },\r\n        {\r\n            \"classId\": \"idm.componet.basics.iimage\",\r\n            \"comName\": \"图片\",\r\n            \"className\": \"IImage\",\r\n            \"comType\": \"common\",\r\n            \"comLangue\": \"vue\"\r\n        },\r\n        {\r\n            \"classId\": \"idm.componet.basics.ibutton\",\r\n            \"comName\": \"按钮\",\r\n            \"className\": \"IButton\",\r\n            \"comType\": \"common\",\r\n            \"comLangue\": \"vue\"\r\n        },\r\n        {\r\n            \"classId\": \"idm.componet.basics.iicon\",\r\n            \"comName\": \"图标\",\r\n            \"className\": \"IIcon\",\r\n            \"comType\": \"common\",\r\n            \"comLangue\": \"vue\"\r\n        },\r\n        {\r\n            \"classId\": \"idm.componet.basics.ilink\",\r\n            \"comName\": \"链接\",\r\n            \"className\": \"ILink\",\r\n            \"comType\": \"common\",\r\n            \"comLangue\": \"vue\"\r\n        }\r\n    ]\r\n}",
                "currentCodePath": "/codepackage/1806181/basics/1.0.0/",
                "currentZipPath": "/component/soundfile/1806181/basics1.0.0_1681119656692.zip",
                "currentRunPath": "/component/runfile/1806181/basics1.0.0_1681119506170.zip",
                "versionCount": 1,
                "publishOpen": 1,
                "praiseNumber": 0,
                "collectNumber": 0,
                "commentNumber": 0,
                "shareNumber": 0,
                "playtourNumber": 0,
                "readNumber": 76,
                "status": 1,
                "currentZipSize": 317542,
                "currentRunSize": 373322
            }
        ]
    }
}
```

### 获取组件列表
- 接口地址：`http://idm.dreamdt.cn/idm/api/getComponentList`

- 请求方式：GET

- 功能描述：分页获取授权范围内的组件列表

- 请求头：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| X-Sign | string | 是 | 根据AccessKeyID+AccessKeySecret+时间戳生成的JWT签名 |
| X-AccessKey-ID | string | 是 | 加密校验的AccessKey的ID，通过此参数去解密 |
| X-TIMESTAMP | string | 是 | 当前接口请求携带签名的时间戳，有效期5分钟 |

- 请求参数：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| searchTxt | string | 否 | 搜索相关关键字 |
| classId | string | 否 | 包含或者排除的组件类ID，多个用逗号隔开 |
| classIdType | int | 否 | classId的参数类型，1：排除classId参数的组件、其他：包含classId参数的组件 |
| pageNo | int | 是 | 页编号，从1开始 |
| pageSize | int | 是 | 页大小，默认为20 |
| sort | int | 否 | 排序方式，默认0：按最新，1：按最热 |

- 响应状态码

  200：请求成功

  400：请求错误（如参数缺失或格式错误）

  401：未授权

  500：服务器内部错误

- 响应数据结构：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": "时间戳",
    "result": {
        "size": "页大小",
        "total": "总数",
        "current": "当前页数",
        "pages": "总页数",
        "records":[
            {
                
				"id": "组件ID",
				"createTime": "创建时间",
				"updateTime": "修改时间",
				"userId": "用户ID",
				"userIdNO": "用户编号",
				"userNickname": "用户昵称",
				"userPhoto": "用户头像相对地址",
				"codepackageId": "组件包ID",
				"codepackageClassname": "组件包类名",
				"codepackageVersion": "组件包当前版本",
				"codepackageRemark": "组件包备注",
				"codepackageTitle": "组件包名",
				"publishRange": "发布范围ID，多个逗号隔开",
				"publishRangeName": "发布范围名称，多个逗号隔开",
				"publishOpen": "是否公开，1：公开，0：使用发布范围",
				"comClassname": "组件类名",
				"comClassid": "组件类ID",
				"comTitle": "组件名称",
				"comLangue": "组件语言",
				"comType": "组件类型，common：通用组件，dialog：弹窗组件",
				"comIconfont": "组件字体图标",
				"comPreviewImgJson": "组件预览图json格式",
				"comDefaultSize": "组件默认大小",
				"coverPath": "组件封面相对路径",
				"comRemark": "组件备注",
				"tags": "组件标签",
				"courseId": "暂无可用",
				"autocreate": "是否自动创建的，1为是自动创建的，0：非自动创建或已修改过",
				"adaptiveType": "组件适配类型，默认0：通用，1：PC，2：移动",
				"praiseNumber": "点赞数量",
                "collectNumber": "收藏数量",
                "commentNumber": "评论数量",
                "shareNumber": "分享数量",
                "playtourNumber": "赞助数量",
                "readNumber": "阅读数量",
                "status": "发布状态，1标识已发布，0标识未发布",
				"zipSize": "当前版本源码zip压缩包文件大小",
				"runSize": "当前版本可运行的zip压缩包文件大小",
				"codePath": "当前版本组件包的代码（可运行）相对地址",
				"versionCount": "暂无可用"
            }
        ]
    }
}
```

- 响应示例：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": 1721628420603,
    "result": {
        "size": 20,
        "total": 1,
        "current": 1,
        "pages": 1,
        "records":[
            {
				"id": "ff808081877ef9fb01878d34373a0024",
				"createTime": "2023-04-17 11:13:42",
				"updateTime": "2023-04-17 11:22:20",
				"userId": "ff8080818761913c018761913c620000",
				"userIdNO": "1806181",
				"userNickname": "申龙",
				"userPhoto": "/resource/images/default_userphoto.png",
				"codepackageId": "ff808081877ef9fb01878d325de70023",
				"codepackageClassname": "advanced",
				"codepackageVersion": "1.0.0",
				"codepackageRemark": "此代码包专门用于基于IDM开发比较高级的功能组件，对于一些比较复杂的功能组件可以提取出更高级的、复杂的功能组件，但组件的复杂度的同时也提高了，例如表格列表、上传控件等等。",
				"codepackageTitle": "高级组件包",
				"publishRange": null,
				"publishRangeName": null,
				"publishOpen": null,
				"comClassname": "IEasyTableList",
				"comClassid": "idm.componet.advanced.ieasytablelist",
				"comTitle": "表格列表",
				"comLangue": "Vue",
				"comType": "common",
				"comIconfont": "icon-table",
				"comPreviewImgJson": "[{\"name\":\"Dingtalk_20230417111635.jpg\",\"src\":\"/component/images/1806181/Dingtalk_20230417111635_1681701359142.jpg\",\"width\":625,\"height\":417,\"size\":37324,\"status\":\"done\",\"percent\":100}]",
				"comDefaultSize": "400,300",
				"coverPath": "/component/images/1806181/Dingtalk_20230417111635_1681701317028.jpg",
				"comRemark": "基于IDM和antd vue 开发的一个简易且容易配置的表格组件，基本的表格属性是能支持配置的，且支持字段列自定义配置，配置简单且功能比较丰富，对于样式没有过高要求的可以使用此组件。",
				"tags": "表格,高级,列表",
				"courseId": null,
				"autocreate": 1,
				"adaptiveType": 0,
				"praiseNumber": 0,
				"collectNumber": 0,
				"commentNumber": 0,
				"shareNumber": 0,
				"playtourNumber": 0,
				"readNumber": 3,
				"status": 1,
				"zipSize": null,
				"runSize": null,
				"codePath": "/codepackage/1806181/advanced/1.0.0/",
				"versionCount": null
            }
        ]
    }
}
```


### 获取IdmCore最新版本
- 接口地址：`http://idm.dreamdt.cn/idm/api/getIdmCoreNewVersion`

- 请求方式：GET

- 功能描述：获取核心框架IDM-CORE的最新版本

- 请求头：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| X-Sign | string | 是 | 根据AccessKeyID+AccessKeySecret+时间戳生成的JWT签名 |
| X-AccessKey-ID | string | 是 | 加密校验的AccessKey的ID，通过此参数去解密 |
| X-TIMESTAMP | string | 是 | 当前接口请求携带签名的时间戳，有效期5分钟 |

- 请求参数：

  无

- 响应状态码

  200：请求成功

  400：请求错误（如参数缺失或格式错误）

  401：未授权

  500：服务器内部错误

- 响应数据结构：
```json
{
	"success": true,
	"message": "",
	"code": 200,
	"result": {
		"id": "数据ID",
		"createTime": "创建时间",
		"updateTime": "修改时间",
		"userId": "维护的用户ID",
		"updateDate": "版本更新时间",
		"features": "特点说明",
		"bugfixes": "bug修复说明",
		"zipFilename": "核心框架包文件名",
		"zipSize": "包大小",
		"zipPath": "包相对路径",
		"version": "当前的版本"
	},
	"timestamp": "时间戳"
}
```

- 响应示例：
```json
{
	"success": true,
	"message": "",
	"code": 200,
	"result": {
		"id": "pndrvKzFOLDOe8VOXc22fVt6BTKGcXSM",
		"createTime": "2024-07-11 00:20:23",
		"updateTime": "2024-07-11 00:28:04",
		"userId": "ff8080818761913c018761913c620000",
		"updateDate": "2024-07-11",
		"features": "撒大声大声道\n发的地方的地方\n的是第三代234",
		"bugfixes": "的分等丰富的\n的丰富的非的发",
		"zipFilename": "idm-core@2.3.0@2024-07-10 22-26-15.zip",
		"zipSize": 22310125,
		"zipPath": "/component/other/1806181/3Kdf6aMkMzT4XmgZSVbaW3lUgwSBIbqQ_1720628318553.zip",
		"version": "2.3.0"
	},
	"timestamp": 1721804371439
}
```


### 获取教程列表
- 接口地址：`http://idm.dreamdt.cn/idm/api/getCourseList`

- 请求方式：GET

- 功能描述：分页获取授权范围内的教程列表

- 请求头：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| X-Sign | string | 是 | 根据AccessKeyID+AccessKeySecret+时间戳生成的JWT签名 |
| X-AccessKey-ID | string | 是 | 加密校验的AccessKey的ID，通过此参数去解密 |
| X-TIMESTAMP | string | 是 | 当前接口请求携带签名的时间戳，有效期5分钟 |

- 请求参数：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| searchTxt | string | 否 | 搜索相关关键字 |
| type | int | 否 | 教程类型，0：视频、1：图文、2：电子书 |
| pageNo | int | 是 | 页编号，从1开始 |
| pageSize | int | 是 | 页大小，默认为20 |
| sort | int | 否 | 排序方式，默认0：按最新，1：按最热 |

- 响应状态码

  200：请求成功

  400：请求错误（如参数缺失或格式错误）

  401：未授权

  500：服务器内部错误

- 响应数据结构：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": "时间戳",
    "result": {
        "size": "页大小",
        "total": "总数",
        "current": "当前页数",
        "pages": "总页数",
        "records":[
            {
				"id": "教程ID",
				"createTime": "创建时间",
				"updateTime": "修改时间",
				"coverUrl": "教程封面相对地址",
				"title": "教程标题",
				"personRange": "教程简介_适用人群",
				"reapContent": "教程简介_你将收获",
				"introduction": "教程简介_教程介绍",
				"tags": "标签",
				"publishRange": "发布范围ID，多个逗号隔开",
				"publishRangeName": "发布范围名称，多个逗号隔开",
				"publishOpen": "是否公开，1：公开，0：使用发布范围",
				"attachment": "教程中的附件",
				"type": "教程类型，0：视频、1：图文、2：电子书",
				"ebookPath": "电子书路径",
				"ebookName": "电子书名称",
				"articleContent": "图文内容",
				"userId": "用户ID",
				"status": "发布状态：0:未发布、1：已发布",
				"praiseNumber": "点赞数量",
                "collectNumber": "收藏数量",
                "commentNumber": "评论数量",
                "shareNumber": "分享数量",
                "playtourNumber": "赞助数量",
                "readNumber": "阅读数量",
				"userIdNO": "用户编号",
				"userNickname": "用户昵称",
				"userPhoto": "用户头像相对地址",
				"vedioNumber": "视频章节数量"
			}
        ]
    }
}
```

- 响应示例：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": 1721628420603,
    "result": {
        "size": 20,
        "total": 1,
        "current": 1,
        "pages": 1,
        "records":[
            {
				"id": "8ae680918e750e72018e750e72620000",
				"createBy": null,
				"createTime": "2024-03-25 18:01:05",
				"updateBy": null,
				"updateTime": "2024-04-09 10:17:16",
				"sysOrgCode": null,
				"coverUrl": "/component/images/1806181/教程封面_1712625319902.jpg",
				"title": "IDM框架介绍",
				"personRange": "所有人员",
				"reapContent": "了解并能上手使用IDM",
				"introduction": "IDM框架的介绍，以及使用和集成",
				"tags": "框架",
				"publishRange": null,
				"publishRangeName": null,
				"publishOpen": 1,
				"attachment": "[{\"name\":\"IDM列表表单.docx\",\"url\":\"/component/other/1806181/IDM列表表单_1711360861735.docx\",\"loading\":false,\"size\":1528939,\"time\":\"2024-03-25 18:01:01\"}]",
				"type": 0,
				"ebookPath": null,
				"ebookName": null,
				"articleContent": null,
				"userId": "ff8080818761913c018761913c620000",
				"status": 1,
				"deleted": 0,
				"deleteTime": null,
				"praiseNumber": 2,
				"collectNumber": 1,
				"commentNumber": 3,
				"shareNumber": 0,
				"playtourNumber": 0,
				"readNumber": 61,
				"userIdNO": "1806181",
				"userNickname": "申龙",
				"userPhoto": "/resource/images/default_userphoto.png",
				"vedioNumber": 7
			}
        ]
    }
}
```


### 获取公告列表
- 接口地址：`http://idm.dreamdt.cn/idm/api/getNoticeList`

- 请求方式：GET

- 功能描述：分页获取授权范围内的公告列表

- 请求头：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| X-Sign | string | 是 | 根据AccessKeyID+AccessKeySecret+时间戳生成的JWT签名 |
| X-AccessKey-ID | string | 是 | 加密校验的AccessKey的ID，通过此参数去解密 |
| X-TIMESTAMP | string | 是 | 当前接口请求携带签名的时间戳，有效期5分钟 |

- 请求参数：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| searchTxt | string | 否 | 搜索相关关键字 |
| pageNo | int | 是 | 页编号，从1开始 |
| pageSize | int | 是 | 页大小，默认为20 |
| sort | int | 否 | 排序方式，默认0：按最新，1：按最热 |

- 响应状态码

  200：请求成功

  400：请求错误（如参数缺失或格式错误）

  401：未授权

  500：服务器内部错误

- 响应数据结构：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": "时间戳",
    "result": {
        "size": "页大小",
        "total": "总数",
        "current": "当前页数",
        "pages": "总页数",
        "records":[
            {
				"id": "公告ID",
				"createTime": "创建时间",
				"updateTime": "修改时间",
				"title": "标题",
				"levelType": "紧急程度0：一般、1：重要、2：紧急",
				"content": "公告内容",
				"publishRange": "发布范围ID，多个逗号隔开",
				"publishRangeName": "发布范围名称，多个逗号隔开",
				"publishOpen": "是否公开，1：公开，0：使用发布范围",
				"status": "发布状态：0:未发布、1：已发布",
				"praiseNumber": "点赞数量",
                "collectNumber": "收藏数量",
                "commentNumber": "评论数量",
                "shareNumber": "分享数量",
                "playtourNumber": "赞助数量",
                "readNumber": "阅读数量",
				"userId": "用户ID",
				"userIdNO": "用户编号",
				"userNickname": "用户昵称",
				"userPhoto": "用户头像相对地址"
			}
        ]
    }
}
```

- 响应示例：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": 1721628420603,
    "result": {
        "size": 20,
        "total": 1,
        "current": 1,
        "pages": 1,
        "records":[
            {
				"id": "zRUkXYCB5fpFyx4TbxOjUnuJKkvy986j",
				"createBy": null,
				"createTime": "2024-07-08 16:50:46",
				"updateBy": null,
				"updateTime": "2024-07-09 00:27:22",
				"sysOrgCode": null,
				"title": "dffddf",
				"levelType": 2,
				"content": "<p>fgfgf</p>",
				"publishOpen": 1,
				"publishRange": null,
				"publishRangeName": null,
				"status": 1,
				"deleted": 0,
				"deleteTime": null,
				"praiseNumber": 0,
				"collectNumber": 0,
				"commentNumber": 0,
				"shareNumber": 0,
				"playtourNumber": 0,
				"readNumber": 0,
				"userId": "ff8080818761913c018761913c620000",
				"userIdNO": "1806181",
				"userNickname": "申龙",
				"userPhoto": "/resource/images/default_userphoto.png"
			}
        ]
    }
}
```

### 获取页面列表
- 接口地址：`http://idm.dreamdt.cn/idm/api/getPageList`

- 请求方式：GET

- 功能描述：分页获取授权范围内的页面列表

- 请求头：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| X-Sign | string | 是 | 根据AccessKeyID+AccessKeySecret+时间戳生成的JWT签名 |
| X-AccessKey-ID | string | 是 | 加密校验的AccessKey的ID，通过此参数去解密 |
| X-TIMESTAMP | string | 是 | 当前接口请求携带签名的时间戳，有效期5分钟 |

- 请求参数：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| searchTxt | string | 否 | 搜索相关关键字 |
| type | string | 否 | 类型，portal，form，list，largescreen，other |
| ownerType | string | 否 | 所属，platform，product，project |
| idmId | string | 否 | 包含或者排除的页面实际ID，多个用逗号隔开 |
| idmIdType | int | 否 | idmId的参数类型，1：排除idmId参数的页面、其他：包含idmId参数的页面 |
| pageNo | int | 是 | 页编号，从1开始 |
| pageSize | int | 是 | 页大小，默认为20 |
| sort | int | 否 | 排序方式，默认0：按最新，1：按最热 |

- 响应状态码

  200：请求成功

  400：请求错误（如参数缺失或格式错误）

  401：未授权

  500：服务器内部错误

- 响应数据结构：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": "时间戳",
    "result": {
        "size": "页大小",
        "total": "总数",
        "current": "当前页数",
        "pages": "总页数",
        "records":[
            {
				"id": "云IT的页面ID",
				"createTime": "创建时间",
				"updateTime": "修改时间",
				"userId": "用户ID",
				"userIdNO": "用户编号",
				"userNickname": "用户昵称",
				"userPhoto": "用户头像相对地址",
				"title": "标题",
				"idmId": "页面配置的实际ID",
				"coverPath": "封面",
				"type": "类型标识",
				"ownerType": "所属标识",
				"productName": "产品/项目名称",
				"moduleName": "模块名称",
				"moduleCode": "模块标识",
				"tags": "标签",
				"currentRemark": "备注",
				"currentPageSchema": "当前页面可运行的结构",
				"publishOpen": "是否公开，1：公开，0：使用发布范围",
				"publishRange": "发布范围ID，多个逗号隔开",
				"publishRangeName": "发布范围名称，多个逗号隔开",
				"currentVersion": "当前版本",
				"currentZipPath": "当前压缩包路径",
				"currentUnzipPath": "当前压缩包解压后的路径",
				"currentZipSize": "当前压缩包大小",
				"currentZipFilename": "当前压缩包名称",
				"status": "发布状态：0:未发布、1：已发布",
				"versionCount": "版本数量",
				"praiseNumber": "点赞数量",
                "collectNumber": "收藏数量",
                "commentNumber": "评论数量",
                "shareNumber": "分享数量",
                "playtourNumber": "赞助数量",
                "readNumber": "阅读数量",
				"typeCN": "类型中文名",
				"ownerTypeCN": "所属中文名"
			}
        ]
    }
}
```

- 响应示例：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": 1721628420603,
    "result": {
        "size": 20,
        "total": 1,
        "current": 1,
        "pages": 1,
        "records":[
            {
				"id": "qIQvg2YS4Rt7MRMv8BmA2ZMgtDMlDmAn",
				"createBy": null,
				"createTime": "2024-07-09 21:56:27",
				"updateBy": null,
				"updateTime": "2024-07-12 12:32:10",
				"sysOrgCode": null,
				"userId": "ff8080818761913c018761913c620000",
				"userIdNO": "1806181",
				"userNickname": "申龙",
				"userPhoto": "/resource/images/default_userphoto.png",
				"title": "一体化办公平台-通用工作台",
				"idmId": "230529142102lbwTVqaf9FyI7F1vvyS",
				"coverPath": "",
				"type": "portal",
				"ownerType": "product",
				"productName": "一体化",
				"moduleName": null,
				"moduleCode": null,
				"tags": "",
				"currentRemark": "一体化办公平台-通用工作台",
				"publishOpen": 0,
				"publishRange": "ff8080818761913c0187638c5f0b0002",
				"publishRangeName": "智慧管理组件共享社区",
				"currentVersion": "2.1.0",
				"currentPageSchemaSource": null,
				"currentPageSchema": "{...}",
				"currentZipPath": "/resource/page/1806181/WIwKjOUC15QWv5b0DrFNpo1pdqCcmAfy_1720533385896.zip",
				"currentUnzipPath": "/resource/page/1806181/WIwKjOUC15QWv5b0DrFNpo1pdqCcmAfy_1720533385896",
				"currentZipSize": 14066645,
				"currentZipFilename": "一体化办公平台-通用工作台(230529142102lbwTVqaf9FyI7F1vvyS)20240514000500.zip",
				"status": 1,
				"versionCount": 1,
				"deleted": null,
				"deleteTime": null,
				"praiseNumber": 1,
				"collectNumber": 1,
				"commentNumber": 1,
				"shareNumber": 0,
				"playtourNumber": 0,
				"readNumber": 43,
				"typeCN": "门户",
				"ownerTypeCN": "产品",
				"subjectId": null
			}
        ]
    }
}
```


### 获取页面结构组件(包)详情
- 接口地址：`http://idm.dreamdt.cn/idm/api/getSchemaComponentList`

- 请求方式：GET

- 功能描述：获取页面/模板/业务组件结构的组件、组件包详情

- 请求头：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| X-Sign | string | 是 | 根据AccessKeyID+AccessKeySecret+时间戳生成的JWT签名 |
| X-AccessKey-ID | string | 是 | 加密校验的AccessKey的ID，通过此参数去解密 |
| X-TIMESTAMP | string | 是 | 当前接口请求携带签名的时间戳，有效期5分钟 |

- 请求参数：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 业务ID(页面、模板、业务组件) |
| type | string | 是 | 类型,page:页面，custom：模板/业务组件 |
| version | string | 否 | 版本，如果最新不需要传 |

- 响应状态码

  200：请求成功

  400：请求错误（如参数缺失或格式错误）

  401：未授权

  500：服务器内部错误

- 响应数据结构：
```json
{
	"success": true,
	"message": "",
	"code": 200,
	"result": {
		"codepackageList": [
			{
				"codeLangue": "组件包语言，如果平台未注册则为空",
				"currentCodePath": "组件包代码相对可运行的地址，如果平台未注册则为空",
				"className": "组件包类名",
				"remark": "组件包备注，如果平台未注册则为空",
				"id": "组件包的主键ID，如果平台未注册则为空",
				"title": "组件包名称，如果平台未注册则为空",
				"version": "组件包版本",
				"currentVersion": "组件包最新版本，如果平台未注册则为空"
			}
		],
		"componentList": [
			{
				"comType": "组件类型，common、dialog",
				"dbTitle": "平台注册的组件名称",
				"asName": "包内的组件别名",
				"coverPath": "图片相对地址",
				"adaptiveType": "组件适配类型",
				"comLangue": "组件技术栈",
				"className": "组件类名",
				"packageVersion": "组件包版本",
				"classId": "组件类ID",
				"dbId": "平台注册的ID",
				"packageClassName": "组件包类名",
				"currentCodePath": "当前可运行的组件包地址",
				"comId": "包内的组件市场ID",
				"comName": "包内的组件名称",
				"codepackageId": "组件包ID"
			}
		]
	},
	"timestamp": "时间戳"
}
```

- 响应示例：
```json
{
	"success": true,
	"message": "",
	"code": 200,
	"result": {
		"codepackageList": [
			{
				"codeLangue": "Vue",
				"currentCodePath": "/codepackage/1806181/layout/2.2.0/",
				"className": "layout",
				"remark": "此代码包基于IDM框架专门用于页面布局类的开发的布局组件包，主要包括容器、行内容器、栅格、选项卡、全屏布局等。",
				"id": "ff808081876f3ac301876f3ac36d0000",
				"title": "布局组件包",
				"version": "2.2.0",
				"currentVersion": "2.2.0"
			},
			{
				"className": "oaCommon",
				"version": "2.0.0"
			}
		],
		"componentList": [
			{
				"comType": "common",
				"dbTitle": "栅格",
				"asName": "栅格",
				"coverPath": "/component/images/1806181/Dingtalk_20230411183218_1681209060268.jpg",
				"adaptiveType": 0,
				"comLangue": "Vue",
				"className": "IGrid",
				"packageVersion": "2.2.0",
				"classId": "idm.componet.layout.igrid",
				"dbId": "ff808081876f3ac301876f4259ba0003",
				"packageClassName": "layout",
				"currentCodePath": "/codepackage/1806181/layout/2.2.0/",
				"comId": "2",
				"comName": "栅格",
				"codepackageId": "ff808081876f3ac301876f3ac36d0000"
			},
			{
				"comType": "common",
				"classId": "idm.componet.oacommon.iverticalMenu",
				"asName": "竖向菜单",
				"comLangue": "Vue",
				"packageClassName": "oaCommon",
				"className": "IVerticalMenu",
				"packageVersion": "2.0.0",
				"comId": "220704163727ATFviYxow4jQrfUsctj",
				"comName": "竖向菜单"
			}
		]
	},
	"timestamp": 1721804371439
}
```


### 获取模板列表
- 接口地址：`http://idm.dreamdt.cn/idm/api/getTemplateList`

- 请求方式：GET

- 功能描述：分页获取授权范围内的模板列表

- 请求头：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| X-Sign | string | 是 | 根据AccessKeyID+AccessKeySecret+时间戳生成的JWT签名 |
| X-AccessKey-ID | string | 是 | 加密校验的AccessKey的ID，通过此参数去解密 |
| X-TIMESTAMP | string | 是 | 当前接口请求携带签名的时间戳，有效期5分钟 |

- 请求参数：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| searchTxt | string | 否 | 搜索相关关键字 |
| type | string | 否 | 类型，portal，form，list，largescreen |
| contentType | int | 否 | 内容类型0：布局，1：内容 |
| ownerType | string | 否 | 所属，platform，product，project |
| businessId | string | 否 | 包含或者排除的业务数据实际ID，多个用逗号隔开 |
| businessIdType | int | 否 | businessId的参数类型，1：排除businessId参数的业务数据、其他：包含businessId参数的业务数据 |
| pageNo | int | 是 | 页编号，从1开始 |
| pageSize | int | 是 | 页大小，默认为20 |
| sort | int | 否 | 排序方式，默认0：按最新，1：按最热 |

- 响应状态码

  200：请求成功

  400：请求错误（如参数缺失或格式错误）

  401：未授权

  500：服务器内部错误

- 响应数据结构：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": "时间戳",
    "result": {
        "size": "页大小",
        "total": "总数",
        "current": "当前页数",
        "pages": "总页数",
        "records":[
            {
				"id": "主键ID",
				"createTime": "创建时间",
				"updateTime": "修改时间",
				"title": "标题",
				"businessId": "业务数据的ID",
				"coverPath": "封面相对地址",
				"type": "分类标识",
				"contentType": "内容类型0：布局，1：内容",
				"ownerType": "所属标识",
				"productName": "产品/项目名称",
				"tags": "标签",
				"currentRemark": "备注",
				"publishOpen": "是否公开，1：公开，0：使用发布范围",
				"publishRange": "发布范围ID，多个逗号隔开",
				"publishRangeName": "发布范围名称，多个逗号隔开",
				"currentPageSchema": "当前页面可运行的结构",
				"currentZipPath": "当前压缩包路径",
				"currentUnzipPath": "当前压缩包解压后的路径",
				"currentZipSize": "当前压缩包大小",
				"currentZipFilename": "当前压缩包名称",
				"status": "发布状态：0:未发布、1：已发布",
				"praiseNumber": "点赞数量",
                "collectNumber": "收藏数量",
                "commentNumber": "评论数量",
                "shareNumber": "分享数量",
                "playtourNumber": "赞助数量",
                "readNumber": "阅读数量",
				"userId": "用户ID",
				"userIdNO": "用户编号",
				"userNickname": "用户昵称",
				"userPhoto": "用户头像",
				"markdownPath": "md文档地址",
				"typeCN": "类型中文名",
				"ownerTypeCN": "所属中文名"
			}
        ]
    }
}
```

- 响应示例：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": 1721628420603,
    "result": {
        "size": 20,
        "total": 1,
        "current": 1,
        "pages": 1,
        "records":[
            {
				"id": "CjzmOtvXu8Nh1FSILAQHOsMMD2XDJVVn",
				"createBy": null,
				"createTime": "2024-07-08 22:56:39",
				"updateBy": null,
				"updateTime": "2024-07-09 23:42:08",
				"sysOrgCode": null,
				"title": "新一代国产办公平台-梦创双杨",
				"businessId": "tSa1kBBdmmnU0l9dmY3KNai5yQ106vZo",
				"coverPath": "/component/images/1806181/cl45uAIXRaUlkbQTwdBnInU7RYqgSHxm_1720450575310.jpg",
				"dataType": 0,
				"type": "portal",
				"contentType": 0,
				"ownerType": "platform",
				"productName": null,
				"tags": "测试",
				"currentRemark": "横向菜单全屏布局模板",
				"publishOpen": 0,
				"publishRange": "ff8080818761913c0187638c5f0b0002",
				"publishRangeName": "智慧管理组件共享社区",
				"currentPageSchemaSource": null,
				"currentPageSchema": "{...}",
				"currentZipPath": "/resource/template/1806181/Y8h2XJkD5wJj8BbKfNepuWLZZlETqGxP_1720450563884.zip",
				"currentUnzipPath": "/resource/template/1806181/Y8h2XJkD5wJj8BbKfNepuWLZZlETqGxP_1720450563884",
				"currentZipSize": 4537171,
				"currentZipFilename": "门户模板组件_新一代国产办公平台-梦创双杨(tSa1kBBdmmnU0l9dmY3KNai5yQ106vZo)_1720343134319.zip",
				"status": 1,
				"deleted": 0,
				"deleteTime": "2024-07-08 23:14:36",
				"praiseNumber": 0,
				"collectNumber": 1,
				"commentNumber": 1,
				"shareNumber": 0,
				"playtourNumber": 0,
				"readNumber": 19,
				"userId": "ff8080818761913c018761913c620000",
				"userIdNO": "1806181",
				"userNickname": "申龙",
				"userPhoto": "/resource/images/default_userphoto.png",
				"markdownPath": "/markdown/custom/CjzmOtvXu8Nh1FSILAQHOsMMD2XDJVVn/index.md",
				"typeCN": "门户",
				"ownerTypeCN": "平台",
				"subjectId": null
			}
        ]
    }
}
```


### 获取业务组件列表
- 接口地址：`http://idm.dreamdt.cn/idm/api/getCustomComponentList`

- 请求方式：GET

- 功能描述：分页获取授权范围内的业务组件列表

- 请求头：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| X-Sign | string | 是 | 根据AccessKeyID+AccessKeySecret+时间戳生成的JWT签名 |
| X-AccessKey-ID | string | 是 | 加密校验的AccessKey的ID，通过此参数去解密 |
| X-TIMESTAMP | string | 是 | 当前接口请求携带签名的时间戳，有效期5分钟 |

- 请求参数：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| searchTxt | string | 否 | 搜索相关关键字 |
| ownerType | string | 否 | 所属，platform，product，project |
| businessId | string | 否 | 包含或者排除的业务数据实际ID，多个用逗号隔开 |
| businessIdType | int | 否 | businessId的参数类型，1：排除businessId参数的业务数据、其他：包含businessId参数的业务数据 |
| pageNo | int | 是 | 页编号，从1开始 |
| pageSize | int | 是 | 页大小，默认为20 |
| sort | int | 否 | 排序方式，默认0：按最新，1：按最热 |

- 响应状态码

  200：请求成功

  400：请求错误（如参数缺失或格式错误）

  401：未授权

  500：服务器内部错误

- 响应数据结构：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": "时间戳",
    "result": {
        "size": "页大小",
        "total": "总数",
        "current": "当前页数",
        "pages": "总页数",
        "records":[
            {
				"id": "主键ID",
				"createTime": "创建时间",
				"updateTime": "修改时间",
				"title": "标题",
				"businessId": "业务数据的ID",
				"coverPath": "封面相对地址",
				"ownerType": "所属标识",
				"productName": "产品/项目名称",
				"tags": "标签",
				"currentRemark": "备注",
				"publishOpen": "是否公开，1：公开，0：使用发布范围",
				"publishRange": "发布范围ID，多个逗号隔开",
				"publishRangeName": "发布范围名称，多个逗号隔开",
				"currentPageSchema": "当前页面可运行的结构",
				"currentZipPath": "当前压缩包路径",
				"currentUnzipPath": "当前压缩包解压后的路径",
				"currentZipSize": "当前压缩包大小",
				"currentZipFilename": "当前压缩包名称",
				"status": "发布状态：0:未发布、1：已发布",
				"praiseNumber": "点赞数量",
                "collectNumber": "收藏数量",
                "commentNumber": "评论数量",
                "shareNumber": "分享数量",
                "playtourNumber": "赞助数量",
                "readNumber": "阅读数量",
				"userId": "用户ID",
				"userIdNO": "用户编号",
				"userNickname": "用户昵称",
				"userPhoto": "用户头像",
				"markdownPath": "md文档地址",
				"typeCN": "类型中文名",
				"ownerTypeCN": "所属中文名"
			}
        ]
    }
}
```

- 响应示例：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": 1721628420603,
    "result": {
        "size": 20,
        "total": 1,
        "current": 1,
        "pages": 1,
        "records":[
            {
				"id": "xMM7Ht4rWjxVpUbtkAHBXPGSKSS6w3N9",
				"createBy": null,
				"createTime": "2024-07-07 22:59:08",
				"updateBy": null,
				"updateTime": "2024-07-18 15:57:34",
				"sysOrgCode": null,
				"title": "常用工具卡片1",
				"businessId": "mhcIHuJWFMD4cRl3CNCm7Q1IkakA2KGB",
				"coverPath": "/component/images/1806181/T0E6BB87N6UeLMSBIRePIEMYt6W6fW5W_1720540586619.jpg",
				"dataType": 1,
				"type": "portal",
				"contentType": 0,
				"ownerType": "platform",
				"productName": null,
				"tags": "",
				"currentRemark": "已配置好且适用于DreamWeb的通用型平台级的常用工具（需要在门户管理=>业务应用管理中 维护分组标识为 cygj 的数据代码值中的数据）组件，平台级无扩展需求的常用工具组件，如需要拖过来可直接应用",
				"publishOpen": 0,
				"publishRange": "ff8080818761913c0187638c5f0b0002",
				"publishRangeName": "智慧管理组件共享社区",
				"currentPageSchemaSource": null,
				"currentPageSchema": "{...}",
				"currentZipPath": "/resource/bcomponent/1806181/jOwCdHWtuaLumhZrmxW2T0nWeeKSfAkd_1720364326167.zip",
				"currentUnzipPath": "/resource/bcomponent/1806181/jOwCdHWtuaLumhZrmxW2T0nWeeKSfAkd_1720364326167",
				"currentZipSize": 2638520,
				"currentZipFilename": "业务组件_常用工具卡片(mhcIHuJWFMD4cRl3CNCm7Q1IkakA2KGB)_1720342483860.zip",
				"status": 1,
				"deleted": 0,
				"deleteTime": null,
				"praiseNumber": 1,
				"collectNumber": 0,
				"commentNumber": 1,
				"shareNumber": 0,
				"playtourNumber": 0,
				"readNumber": 17,
				"userId": "ff8080818761913c018761913c620000",
				"userIdNO": "1806181",
				"userNickname": "申龙",
				"userPhoto": "/resource/images/default_userphoto.png",
				"markdownPath": "/markdown/custom/xMM7Ht4rWjxVpUbtkAHBXPGSKSS6w3N9/index.md",
				"typeCN": "门户",
				"ownerTypeCN": "平台",
				"subjectId": null
			}
        ]
    }
}
```


### 获取图片列表
- 接口地址：`http://idm.dreamdt.cn/idm/api/getImageList`

- 请求方式：GET

- 功能描述：分页获取授权范围内的图片列表

- 请求头：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| X-Sign | string | 是 | 根据AccessKeyID+AccessKeySecret+时间戳生成的JWT签名 |
| X-AccessKey-ID | string | 是 | 加密校验的AccessKey的ID，通过此参数去解密 |
| X-TIMESTAMP | string | 是 | 当前接口请求携带签名的时间戳，有效期5分钟 |

- 请求参数：

| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| searchTxt | string | 否 | 搜索相关关键字 |
| size | int | 否 | 图片尺寸，4：特大、3：大、2：中、1：小 |
| type | string | 否 | 图片类型，例如：PNG,JPG |
| md5 | string | 否 | 包含或者排除的图片实际MD5，多个用逗号隔开 |
| md5Type | int | 否 | md5的参数类型，1：排除md5参数的图片数据、其他：包含md5参数的图片数据 |
| pageNo | int | 是 | 页编号，从1开始 |
| pageSize | int | 是 | 页大小，默认为20 |
| sort | int | 否 | 排序方式，默认0：按最新，1：按最热 |

- 响应状态码

  200：请求成功

  400：请求错误（如参数缺失或格式错误）

  401：未授权

  500：服务器内部错误

- 响应数据结构：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": "时间戳",
    "result": {
        "size": "页大小",
        "total": "总数",
        "current": "当前页数",
        "pages": "总页数",
        "records":[
            {
				"id": "主键ID",
				"createTime": "创建时间",
				"updateTime": "修改时间",
				"title": "标题",
				"fileMd5": "文件MD5校验值",
				"tags": "标签",
				"imgPath": "原图相对地址",
				"coverPath": "缩略图相对地址",
				"fileSize": "文件大小",
				"imgFilename": "文件名，暂无可用",
				"publishOpen": "是否公开，1：公开，0：使用发布范围",
				"publishRange": "发布范围ID，多个逗号隔开",
				"publishRangeName": "发布范围名称，多个逗号隔开",
				"status": "发布状态：0:未发布、1：已发布",
				"praiseNumber": "点赞数量",
                "collectNumber": "收藏数量",
                "commentNumber": "评论数量",
                "shareNumber": "分享数量",
                "playtourNumber": "赞助数量",
                "readNumber": "阅读数量",
				"imgWidth": "原图宽",
				"imgHeight": "原图高",
				"userId": "用户ID",
				"userIdNO": "用户编号",
				"userNickname": "用户昵称",
				"userPhoto": "用户头像",
				"coverWidth": "缩略图宽",
				"coverHeight": "缩略图高",
				"type": "图片后缀类型"
			}
        ]
    }
}
```

- 响应示例：
```json
{
    "code": 200,
    "success": true,
    "message": "",
    "timestamp": 1721628420603,
    "result": {
        "size": 20,
        "total": 1,
        "current": 1,
        "pages": 1,
        "records":[
            {
				"id": "QkT621Mv10EdTGJGQDIDG3CI09g4EpcT",
				"createBy": null,
				"createTime": "2024-07-11 22:13:22",
				"updateBy": null,
				"updateTime": null,
				"sysOrgCode": null,
				"title": "公告.png",
				"fileMd5": "28e825722b5afbf538388998043af955",
				"tags": "",
				"imgPath": "/resource/images/1806181/G6PTngMBUy1cUdfUtd5aM4yvVG1XaVEG_1720707200135.png",
				"coverPath": "/resource/images/1806181/G6PTngMBUy1cUdfUtd5aM4yvVG1XaVEG_1720707200135_thumbnail.jpg",
				"fileSize": 673,
				"imgFilename": null,
				"publishOpen": 1,
				"publishRange": null,
				"publishRangeName": null,
				"status": 1,
				"deleted": 0,
				"deleteTime": null,
				"praiseNumber": 0,
				"collectNumber": 0,
				"commentNumber": 0,
				"shareNumber": 0,
				"playtourNumber": 0,
				"readNumber": 3,
				"imgWidth": 32,
				"imgHeight": 32,
				"userId": "ff8080818761913c018761913c620000",
				"userIdNO": "1806181",
				"userNickname": "申龙",
				"userPhoto": "/resource/images/default_userphoto.png",
				"coverWidth": 500,
				"coverHeight": 500,
				"type": "PNG"
			}
        ]
    }
}
```