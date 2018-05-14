# electron 脚手架
------

## 1.安装依赖

1.全局安装electron

  npm install -g electron

2.安装electron 打包工具

  npm install -g electron-packager

## 2.存放源文件

  将打包好的web项目文件放到项目根目录的 dist 文件夹下

  入口页面名称必须为 index.html

## 3.配置打包环境（必须检查）

  根目录下config.js

 > *  __PRO__  是否为生产环境
 > *  __ELECTRON__  是否为electron环境

## 4.执行打包命令

  64位：npm run win
  32位：npm run win32
  mac： npm run mac

