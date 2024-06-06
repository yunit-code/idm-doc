# 脚手架优化
本章节主要介绍`idm-module-vue`脚手架优化方式。最新版脚手架已经修改[点此进入](https://github.com/yunit-code/idm-module-vue)

## 优化涉及相关文件

package.json
```js
"scripts": {
    "serve": "npm run serve:dynamic",
    "serve:static": "cross-env FILE_MODE=static  vue-cli-service serve",
    "serve:dynamic": "cross-env FILE_MODE=dynamic  vue-cli-service serve",
    "build": "npm run build:all",
    "build:static": "cross-env FILE_MODE=static vue-cli-service build",
    "build:dynamic": "cross-env FILE_MODE=dynamic vue-cli-service build",
    "build:static:no-clean": "cross-env FILE_MODE=static vue-cli-service build --no-clean",
    "build:dynamic:no-clean": "cross-env FILE_MODE=dynamic vue-cli-service build --no-clean",
    "build:all": "npm run clean && npm run build:dynamic:no-clean && npm run build:static:no-clean && npm run zip",
    "lint": "vue-cli-service lint",
    "zip": "idm zip",
    "clean": "node ./webpack/clean.js",
    "gen": "idm-generate vue"
},
"devDependencies": {
    "cross-env": "^7.0.3",
    "chalk": "^4.1.2"
}
```

vue.config.js
```js
const path = require('path')
const chalk = require('chalk')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development'
function resolve(dir) {
    return path.join(__dirname, dir)
}
const fileMode = process.env.FILE_MODE || 'dynamic'
let indexName = 'index';
if(fileMode== 'static') {
  indexName = 'index2'
}
console.log(`${chalk.blue('Current file mode')}   ------ >  ${chalk.yellow(fileMode)}`)
console.log(`${chalk.blue('Current file index')}  ------ >  ${chalk.yellow(indexName)}`)
console.log(`${chalk.green('Start building .....')}`)
const entryFileMap = {
  dynamic: 'src/main.js',
  static: 'src/mainStatic.js'
}
let assetsDir = "./static";
let getAssetsDir = function(filename) {
  return path.posix.join(assetsDir, filename);
};
let uuidCharts = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
let getGUID = function(len, radix) {
  var chars = uuidCharts,
      uuid = [],
      i;
  radix = radix || chars.length;
  len = len || 16;
  if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "";
      uuid[14] = "4";
      for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
              r = 0 | (Math.random() * 16);
              uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
          }
      }
  }

  return uuid.join("");
}
const splitChunks = {
  chunks: 'async',
  minSize: 2000000,
  minChunks: 1,
  maxAsyncRequests: 30,
  maxInitialRequests: 30,
  enforceSizeThreshold: 50000,
  cacheGroups: {
    vendors: {
      name: 'chunk-vendors2',
      test: /[\\/]node_modules[\\/]/,
      enforce: true,
      reuseExistingChunk: true,
      priority: 0
    }
  },
}
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  // axios: 'axios',
  jquery: '$'
}
module.exports = {
    publicPath:"./",
    assetsDir:assetsDir,
    productionSourceMap: false,
    pages:{
      [indexName]: {
        entry: entryFileMap[fileMode],
        template: 'public/index.html',
        filename: 'index.html',
        title: '',
        includeScripts: [
           "./lib/vue.min.js",
           "./lib/jquery.min.js",
            "./lib/axios.min.js",
            "./lib/qs.js",
            "./lib/lodash.min.js",
            "./lib/idm.core.js"
        ],
        includeCss:[
          "./lib/idm.base.css"
        ]
      },
    },
    chainWebpack(config) {
      config.externals(externals)
      config
      .plugin('define')
      .tap(args => { 
          args[0]['process.env.CodeVar'] = JSON.stringify("CodeVar_"+getGUID()+"_"+new Date().getTime());
          return args
      })
      config.module
        .rule('svg')
        .exclude.add(resolve('src/icons'))
        .end()
      config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
    },
    configureWebpack: {
      optimization: fileMode == 'dynamic' ?  undefined : { splitChunks },
      plugins: [
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
      ],
      output: {
        filename: `${assetsDir}/js/[name].js`,
        chunkFilename: `${assetsDir}/js/[name].js`,
        jsonpFunction:JSON.stringify("webpackJsonp_"+getGUID()+"_"+new Date().getTime())
      },
      resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@ant-design/icons/lib/dist$': resolve('src/plugins/antdicons.js')
        }
      }
    },
    css: {
        extract: isDev ? false : {
          filename: `${assetsDir}/css/[name].css`,
          chunkFilename: `${assetsDir}/css/[name].css`
        },
        sourceMap: isDev,
        requireModuleExtension: true,
        loaderOptions: {
          sass: {
          }
        }
    },
    devServer: {
        proxy: {
            '^/DreamWeb/*': {
                target: "http://localhost:8080",
                changeOrigin: true,
                secure: false
            }
        }
    }

}
```

webpack/clean.js
```js
const fs = require('fs');
const chalk = require('chalk')
function removeDirectory(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file) => {
      const curPath = path + '/' + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        removeDirectory(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    });
    fs.rmdirSync(path)
  }
}
removeDirectory('dist')
console.log(chalk.green('Clean dist success!'))
```

src/mainStatic.js
```js
import Vue from 'vue'
import './core/regModule';
import config from '../public/static/config.json';
import '@/icons' // icon
import "@/plugins/ant-design-vue"

config && config.module.forEach(item => {
  const _cp = () => import(/* webpackChunkName: "[request]" */ `./components/${item.className}.vue`)
  Vue.component(item.className+"@"+config.className+"-" +config.version, _cp)
})

Vue.config.productionTip = false
Vue.config.devtools = true

```
src/Main.vue
```vue
<template>
    <component :is="`${componentName}`" @hook:mounted="handleComponentMounted" :ref="`${componentName}`"/>
</template>

<script>

export default {
  name: 'Main',
  data(){
    return {
      componentName: this.$root.componentName
    }
  },
  methods: {
    handleComponentMounted(){
      const that = this;
      this.$refs[this.componentName].$nextTick(()=>{
        that.$root.moduleObject.mountComplete && that.$root.moduleObject.mountComplete(that.$root.moduleObject);
      })
    }
  }
}
</script>
```

src/regModule.js
```js
mounted() {
    //加载完成回调
    // this.$nextTick(function () {
    //     moduleObject.mountComplete && moduleObject.mountComplete(moduleObject);
    // })
}
```

