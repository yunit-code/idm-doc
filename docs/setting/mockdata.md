# mock data

用来模拟服务端返回数据，主要作用是在没有后端接口情况下也能正常使用或在开发环境的时候调试。
:::tip
默认的数据包存放在IDM代码包下的`static/mockdata`路径中
:::
## ComponentMarketData

用于模拟开发工具的左侧组件市场接口返回的数据结构

- 后端接口属性配置： [componentMarketUrl](./config.md#componentmarketurl)

- 模拟接口属性配置： [componentMarketUrl](./config.md#componentmarketurl-1)
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
          "comId": "1",
          "comName": "容器",
          "comType": "common",
          "comLangue": "vue",
          "asName": "容器",
          "classId": "idm.componet.layout.container",
          "className": "Container",
          "iconClass": "idmicon idm-icon-rongqi4",
          "type": "platform",
          "imgList": [
            {
              "src": "~/static/img/demo/dbtablist.jpg",
              "width": 1127,
              "height": 673,
              "size": "113664"
            }
          ],
          "lastVersion": {
            "version": "1.0.0",
            "projectNo": "p1000",
            "codeSrc": "layout/1.0.0/static/main.js",
            "datetime": "2021-03-23 12:50:14"
          },
          "versionList": [
            {
              "version": "1.0.0",
              "projectNo": "p1000",
              "codeSrc": "layout/1.0.0/static/main.js",
              "datetime": "2021-03-23 12:50:14"
            },
            {
              "version": "1.1.0",
              "projectNo": "p1000",
              "codeSrc": "layout/v1.1.0/static/main.js",
              "datetime": "2021-03-23 12:50:14"
            }
          ]
        }
      ]
    }
  ]
}
```
- 数据结构内相关key说明：

  |key|说明|
  |-|-|
  |groupId|组件分组的ID|
  |groupTitle|组件分组展示的名称|
  |componentList|组件分组的数组key值|
  |comId|组件的id，唯一且不重复|
  |comName|组件的原名称|
  |comType|组件的类型，common：通用型组件，dialog：弹窗类型组件，请根据组件用途谨慎选择|
  |comLangue|组件的技术栈，可以为vue、react、angular、jquery以及其他|
  |asName|组件的别名，同一组件复用可以用这个属性区分|
  |classId|组件的类ID，该属性由组件开发者提供，全局生态中唯一且不重复即可|
  |className|组件的类名，该属性由组件开发者提供，当前代码包内不重复即可，请注意格式|
  |iconClass|组件在开发工具中显示的图标，可以参考 [字体图标](../guide/developtool.md#字体图标)|
  |type|组件类型，目前可以为platform、project|
  |imgList|组件的效果图片数组集合|
  |src|图片的路径，会经过IDM提供的核心方法`IDM.url.getWebPath`进行地址转换，更多用法请参考： [标准API](../coreapi/api.md#getwebpath)
  |lastVersion|当前组件的最后一个版本|
  |versionList|当前组件的所有版本集合|
  |version|组件的版本编号|
  |projectNo|组件的版本所属哪个项目编号|
  |codeSrc|组件的当前版本加载组件代码的入口地址，此地址应该从代码包名开始|
  |datetime|版本上传的时间|

## PageVersionListData

用于模拟开发工具的左侧顶部版本号列表接口返回的数据结构

- 后端接口属性配置： [pageVersionListUrl](./config.md#pageversionlisturl)

- 模拟接口属性配置： [pageVersionListUrl](./config.md#pageversionlisturl-1)
```json
{
    "code": "200",
    "type": "success",
    "message": "操作成功",
    "metadata": null,
    "token": "",
    "data": [
        {
            "version": "1.0.0",
            "author": "作者",
            "remark": "版本备注",
            "datetime": "2021-02-23 12:50:14",
            "projectNo":"p1000"
        }
    ]
}
```
- 数据结构内相关key说明：

  |key|说明|
  |-|-|
  |version|组件的版本编号|
  |projectNo|组件的版本所属哪个项目编号|
  |datetime|版本上传的时间|

## pageSettingDataData

用于模拟开发工具获取当前打开的页面配置的数据结构

- 后端接口属性配置： [pageSettingDataUrl](./config.md#pagesettingdataurl)

- 模拟接口属性配置： [pageSettingDataUrl](./config.md#pagesettingdataurl-1)
```json
{
    "code": "200",
    "type": "success",
    "message": "操作成功",
    "metadata": null,
    "token": "",
    "data": {
        "id": "abc1234",
        "developInfo": {
            "guides": [
                {
                    "posX": 413,
                    "posY": -45,
                    "dimension": 1
                }
            ]
        },
        "pageBaseInfo": {
            "title": "页面标题",
            "version": "1.0.0"
        },
        "dragAreaSizeInfo": {
            "key": "1",
            "width": 346,
            "height": 802,
            "showText": "适应当前",
            "type": 1,
            "subKey": null
        },
        "page": {
            "componentsMap": [
                {
                    "id": "abc1234",
                    "packageid": "abc1234",
                    "comId": "0",
                    "comName": "页面",
                    "asName": "页面",
                    "classId": "idm.componet.root",
                    "iconClass": "idmicon idm-icon-rongqi",
                    "className": "root",
                    "comType": "vue",
                    "type": "platform",
                    "imgList": [
                        {
                            "src": "~/static/img/page_default.jpg",
                            "width": 370,
                            "height": 270,
                            "size": "187298"
                        }
                    ],
                    "currentVersion": {
                        "version": "1.0.0",
                        "codeSrc": "",
                        "datetime": "2021-03-23 12:50:14"
                    },
                    "props": {
                        "compositeAttr": {
                            "backgroundColor": "#fff",
                            "padding": "20px"
                        },
                        "dataAttr": {}
                    },
                    "globalId": "abc1234"
                },
                {
                    "comId": "1",
                    "comName": "容器",
                    "comType": "vue",
                    "asName": "容器",
                    "classId": "idm.componet.layout.container",
                    "className": "Container",
                    "iconClass": "idmicon idm-icon-rongqi4",
                    "type": "platform",
                    "imgList": [
                        {
                            "src": "~/static/img/demo/dbtablist.jpg",
                            "width": 1127,
                            "height": 673,
                            "size": "113664"
                        }
                    ],
                    "lastVersion": {
                        "version": "1.0.0",
                        "codeSrc": "layout/1.0.0/static/main.js",
                        "datetime": "2021-03-23 12:50:14"
                    },
                    "versionList": [
                        {
                            "version": "1.0.0",
                            "codeSrc": "layout/1.0.0/static/main.js",
                            "datetime": "2021-03-23 12:50:14"
                        },
                        {
                            "version": "1.1.0",
                            "codeSrc": "layout/v1_1_0/static/main.js",
                            "datetime": "2021-03-23 12:50:14"
                        }
                    ],
                    "packageid": "component_L67dhUY8Z3Q13kKB",
                    "id": "component_L67dhUY8Z3Q13kKB_inner",
                    "relationType": "bottom",
                    "relationId": "abc1234",
                    "env": "develop",
                    "props": {
                        "compositeAttr": {}
                    },
                    "currentVersion": {
                        "version": "1.0.0",
                        "codeSrc": "layout/1.0.0/static/main.js",
                        "datetime": "2021-03-23 12:50:14"
                    },
                    "globalId": "abc1234.component_L67dhUY8Z3Q13kKB",
                    "attrSetting": {
                        "compositeAttr": []
                    }
                }
            ],
            "layout": {
                "id": "abc1234",
                "packageid": "abc1234",
                "comId": "0",
                "comName": "页面",
                "asName": "页面",
                "classId": "idm.componet.root",
                "iconClass": "idmicon idm-icon-rongqi",
                "className": "root",
                "comType": "vue",
                "type": "platform",
                "imgList": [
                    {
                        "src": "~/static/img/page_default.jpg",
                        "width": 370,
                        "height": 270,
                        "size": "187298"
                    }
                ],
                "currentVersion": {
                    "version": "1.0.0",
                    "codeSrc": "",
                    "datetime": "2021-03-23 12:50:14"
                },
                "attrSetting": {
                    "compositeAttr": [],
                    "dataAttr": []
                },
                "props": {
                    "compositeAttr": {
                        "backgroundColor": "#fff",
                        "padding": "20px"
                    },
                    "dataAttr": {}
                },
                "children": [
                    {
                        "comId": "1",
                        "comName": "容器",
                        "comType": "vue",
                        "asName": "容器",
                        "classId": "idm.componet.layout.container",
                        "className": "Container",
                        "iconClass": "idmicon idm-icon-rongqi4",
                        "type": "platform",
                        "imgList": [
                            {
                                "src": "~/static/img/demo/dbtablist.jpg",
                                "width": 1127,
                                "height": 673,
                                "size": "113664"
                            }
                        ],
                        "lastVersion": {
                            "version": "1.0.0",
                            "codeSrc": "layout/1.0.0/static/main.js",
                            "datetime": "2021-03-23 12:50:14"
                        },
                        "versionList": [
                            {
                                "version": "1.0.0",
                                "codeSrc": "layout/1.0.0/static/main.js",
                                "datetime": "2021-03-23 12:50:14"
                            },
                            {
                                "version": "1.1.0",
                                "codeSrc": "layout/v1_1_0/static/main.js",
                                "datetime": "2021-03-23 12:50:14"
                            }
                        ],
                        "packageid": "component_L67dhUY8Z3Q13kKB",
                        "id": "component_L67dhUY8Z3Q13kKB_inner",
                        "relationType": "bottom",
                        "relationId": "abc1234",
                        "env": "develop",
                        "props": {
                            "compositeAttr": {}
                        },
                        "currentVersion": {
                            "version": "1.0.0",
                            "codeSrc": "layout/1.0.0/static/main.js",
                            "datetime": "2021-03-23 12:50:14"
                        },
                        "globalId": "abc1234.component_L67dhUY8Z3Q13kKB",
                        "attrSetting": {
                            "compositeAttr": []
                        }
                    }
                ],
                "globalId": "abc1234"
            }
        }
    }
}
```
- 数据结构内相关key说明：

  TODO
## customModuleSettingDataData

用于模拟开发工具获取当前打开的自定义业务（布局）组件的数据结构

- 后端接口属性配置： [customModuleSettingDataUrl](./config.md#custommodulesettingdataurl)

- 模拟接口属性配置： [customModuleSettingDataUrl](./config.md#custommodulesettingdataurl-1)

同 [pageSettingDataData](./mockdata.md#pagesettingdatadata) 的数据结构
## AllCodePackageListData

用于模拟获取文档管理的左上角代码包切换数据接口返回的数据结构

- 后端接口属性配置： [allCodepackageUrl](./config.md#allcodepackageurl)

- 模拟接口属性配置： [allCodepackageUrl](./config.md#allcodepackageurl-1)

```json
{
    "code": "200",
    "type": "success",
    "message": "操作成功",
    "metadata": null,
    "token": "",
    "data": [
        {
            "createUnitId": "180505162656YILYYOzw1FnE5OzzNxm",
            "versionCount": 1,
            "createDeptId": "180627211146kvt9gFekZIxpF5Gm6xh",
            "createUserId": "1806272111460YuoHeG49QtxcWmH568",
            "createUnitName": "江西省",
            "lastUpdateUnitName": "",
            "className": "forms",
            "currentCodeLanguage": "vue",
            "currentCodePath": "forms/1.0.0/",
            "versionList": [
                {
                    "configText": "",
                    "createUnitId": "180505162656YILYYOzw1FnE5OzzNxm",
                    "createDeptId": "180627211146kvt9gFekZIxpF5Gm6xh",
                    "createUserId": "1806272111460YuoHeG49QtxcWmH568",
                    "createUnitName": "江西省",
                    "lastUpdateUnitName": "",
                    "className": "forms",
                    "remark": "",
                    "zipPath": "/upload/idmconsole/b224be9c-c698-41b6-a2f3-b9b3c8fac9e0.zip",
                    "id": "211029004423iI5Ga83vE0WiV8agBrw",
                    "codeLanguage": "vue",
                    "lastUpdateDeptId": "",
                    "lastUpdateUnitId": "",
                    "createDeptName": "综合处",
                    "author": "申龙",
                    "lastUpdateUserId": "",
                    "version": "1.0.0",
                    "createUName": "申龙",
                    "lasttime": "2021年8月12日18:46:37",
                    "codePath": "forms/1.0.0/",
                    "lastUpdateUName": "",
                    "createTime": "2021-10-29 00:44:23",
                    "projectId": "p1001",
                    "lastUpdateDeptName": "",
                    "lastUpdateTime": "2021-10-29 00:44:22"
                }
            ],
            "id": "21102900442112k8aeCoGdyptmKfFG1",
            "currentZipPath": "/upload/idmconsole/b224be9c-c698-41b6-a2f3-b9b3c8fac9e0.zip",
            "currentLasttime": "2021年8月12日18:46:37",
            "lastUpdateDeptId": "",
            "lastUpdateUnitId": "",
            "createDeptName": "综合处",
            "lastUpdateUserId": "",
            "currentAuthor": "申龙",
            "currentVersion": "1.0.0",
            "createUName": "申龙",
            "currentRemark": "",
            "lastUpdateUName": "",
            "createTime": "2021-10-29 00:44:22",
            "currentConfigText": "",
            "projectId": "p1001",
            "lastUpdateDeptName": "",
            "lastUpdateTime": "2021-10-29 00:44:22"
        }
    ]
}
```
- 数据结构内相关key说明：

  |key|说明|
  |-|-|
  |versionCount|组件包内的所有版本数量|
  |className|组件包的类名|
  |currentCodeLanguage、codeLanguage|当前版本代码包的技术栈语言|
  |currentCodePath、codePath|当前版本代码包的部分路径|
  |currentConfigText、configText|当前版本代码包的组件注册的配置文件|
  |currentVersion、version|组件的版本编号|
  |versionList|组件的所有版本集合|