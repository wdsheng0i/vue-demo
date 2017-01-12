环境搭建
====
####Code准备工作：

#####1.安装 [NodeJS](http://nodejs.cn/).

>我们只是需要NPM为我们管理JS库的依赖，所以选择4.4.4稳定版本即可。
>
>安装完成后通过终端输入或者命令行输入：`node -v`、`npm -v` 查看安装版本确认有无安装成功。
>倘若提示错误信息，命令不存在，则需要修改环境变量，将bin目录加入到path中，具体google一下。

#####2.通过Git拉取Vue-project代码.

#####3.安装依赖JS库和UI库.

>命令行进入项目所在文件夹 `cd /***/Vue-project`。
>
>执行命令：`npm install` 安装项目所需依赖的JS库。
>
>具体所安装的依赖库可查询项目根目录下的package.json中devDependencies中配置项，最后几条已经加入vue-router、vue-resource、vuex。
>
>因为当前VUE的版本为2.0，为2.0提供的UI组件库ElemeFE，
>
>安装ElemeFE：`npm install element-ui@next --save--dev`。

#####4.启动开发模式下的项目.

>`npm run dev`。

####IDE开发工具：
>推荐使用Sublime Text

#####1.安装 [Sublime](http://www.sublimetext.com/3).
#####2.插件配置说明
>依照[Sublime插件安装](https://www.talkingcoder.com/article/6280746799721152776)开启package control
>
>安装下面两个Vue插件
>
>Vuejs Snippets
>
>Vue Syntax Highlight

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

##目录结构

```
.
├── README.md           
├── dist                     // 项目build目录
├── logs                     // 生产环境日志目录
├── src                      // 生产目录
│   ├── api                  // API 请求
│   ├── assets               // css 和图片资源
│   ├── components           // 组件
│   ├── views                // 页面组件
│   └── vuex            	 // vuex相关文件
│ 		 ├── modules         // 按模块划分的action.getter.mutation
│   	 └── store.js        // store
│   ├── App.vue              // 单页入口模板
│   ├── routes.js            // 路由配置
│   └── main.js              // 入口文件
├── build                    // webpack构建配置目录，包括开发环境，生产环境
├── config                   // 环境启动配置目录
├── .babelrc                 // babel配置
├── .eslintrc.js             // eslint配置
├── index.html               // 入口Html文件
.
```

## 文档资料
1. [Vue-2.0](http://vuefe.cn/guide/).
2. [Vue-Router-2.0](http://vuefe.cn/vue-router/).
3. [Vue-Vuex-2.0](http://vuefe.cn/vuex/).
4. [UI-Element](http://element.eleme.io/#/).
5. [Vue-Resource](https://github.com/vuejs/vue-resource).


##10.21添加 vue-i18n 支持国际化配置
参考资料 [vue-i18n](https://kazupon.github.io/vue-i18n/).