/**
 * npm 下载模块的命令
 * express:nodejs中服务端框架
 * 1、npm install（i） express -g（全局安装）  安装到全局配置的node_global中、一般用于命令行工具
 * 
 * npm install -g 包名称
 * npm i -g es-checker (es6支持度)
 * 
 * 2、本地安装
 * npm install 包名称  =》安装在本地的用户文件node_modules
 * npm install jquery
 * 
 * 3.安装包安装到指定的版本
 * npm i 包名称@版本号
 * npm i jquery@3.5.1
 * npm i jquery@3.5.1 -g
 * 
 * 4.卸载
 * npm uninstall -g 包名
 * 
 * 5.更新
 * npm update -g 包名
 * 
 * 6.生成包的入口文件 npm init
 * npm i 包名 --save   安装到项目生产环境 在包的入口文件dependencies中有对应版本信息
 * npm i 包名 --save-dev 安装到开发环境 在包的入口文件devDependencies中有对应版本信息
 * 
 */