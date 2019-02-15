# Xrewin
## 项目主要架构
|—— scr 源码根目录<br/>
&emsp;&emsp;||—— app 代码编写目录<br/>
&emsp;&emsp;&emsp;|||—— animate 全局动画目录<br/>
&emsp;&emsp;&emsp;|||—— component 组件目录<br/>
&emsp;&emsp;&emsp;&emsp;||||—— intelligent-chart 智能报表组件目录<br/>
&emsp;&emsp;&emsp;&emsp;||||—— media-center 媒体中心组件目录<br/>
&emsp;&emsp;&emsp;&emsp;||||—— member 智能分组目录<br/>
&emsp;&emsp;&emsp;&emsp;||||—— report-management 报表管理目录<br/>
&emsp;&emsp;&emsp;&emsp;||||—— system-setting 系统设置目录<br/>
&emsp;&emsp;&emsp;&emsp;||||—— task-center 任务中心目录<br/>
&emsp;&emsp;&emsp;&emsp;||||—— wechat-marketing 微信营销目录<br/>
&emsp;&emsp;&emsp;&emsp;||||—— workflow 工作流目录<br/>
&emsp;&emsp;&emsp;|||—— core 提供核心业务逻辑处理目录<br/>
&emsp;&emsp;&emsp;&emsp;||||—— common 全局常用模块目录<br/>
&emsp;&emsp;&emsp;&emsp;||||—— dao 各组件请求方法封装目录<br/>
&emsp;&emsp;&emsp;&emsp;||||—— directive 全局指令目录<br/>
&emsp;&emsp;&emsp;&emsp;||||—— model 全局类模型目录<br/>
&emsp;&emsp;&emsp;&emsp;||||—— service 全局服务目录<br/>
&emsp;&emsp;&emsp;|||—— demo 测试代码目录<br/>
&emsp;&emsp;&emsp;|||—— plugins 第三方以及公用插件目录<br/>
&emsp;&emsp;&emsp;|||—— app-routing.module.ts 配置路由文件<br/>
&emsp;&emsp;&emsp;|||—— app.component.css 根组件样式<br/>
&emsp;&emsp;&emsp;|||—— app.component.html 根组件页面<br/>
&emsp;&emsp;&emsp;|||—— app.component.spec.ts 根组件编译文件<br/>
&emsp;&emsp;&emsp;|||—— app.component.ts 根组件逻辑处理文件<br/>
&emsp;&emsp;&emsp;|||—— app.module.ts 根模块<br/>
&emsp;&emsp;||—— assets<br/>
&emsp;&emsp;&emsp;|||—— css 样式目录<br/>
&emsp;&emsp;&emsp;|||—— fonts 字体图标库目录<br/>
&emsp;&emsp;&emsp;|||—— js js文件目录<br/>
&emsp;&emsp;&emsp;|||—— json 数据目录<br/>
&emsp;&emsp;||—— environments 全局环境变量目录<br/>
&emsp;&emsp;||—— browserslist 目标浏览器配置表<br/>
&emsp;&emsp;||—— favicon.ico 商标图<br/>
&emsp;&emsp;||—— index.html 页面入口文件<br/>
&emsp;&emsp;||—— karma.conf.js 单元测试配置文件运行ng test时会用到<br/>
&emsp;&emsp;||—— main.ts 负责引导整个angular应用的起点文件<br/>
&emsp;&emsp;||—— polyfills.ts 浏览器对Web不同点进行标准化文件<br/>
&emsp;&emsp;||—— styles.css 全局样式<br/>
&emsp;&emsp;||—— test.ts 单元测试的主要入口点<br/>
&emsp;&emsp;||—— tsconfig.app.json TypeScript 编译器的配置文件<br/>
&emsp;&emsp;||—— tsconfig.spec.json TypeScript 编译器文件<br/>
|_ .angulardoc.json<br/>
|—— .editorconfig 定义项目的编码规范配置文件<br/>
|—— .gitignore git上传配置文件<br/>
|—— angular.json Angular命令行工具的配置文件<br/>
|—— package-lock.json 记录当前状态下实际安装的各个npm package的具体来源和版本号文件<br/>
|—— package.json 一个标准的npm工具的配置文件，这个文件里面列出了该应用程序所使用的第三方依赖包<br/>
|—— README.md 项目说明文件<br/>
|—— tsconfig.json 项目编译配置文件<br/>
|—— tslint.json 定义TypeScript代码质量检查的规则配置文件<br/>


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
