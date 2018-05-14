/**
* @file: BrowserWindow相关配置
* @Author: liyunjiao
* @Date:   2018-05-14 13:58:46
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-05-14 14:01:00
*/


const path = require('path');
module.exports = {
    // 键值和配置文档一致
    winOptions:{
        // 更多配置内容参考 https://electronjs.org/docs/api/browser-window
        width: 1280,  // 窗口宽度
        height: 768, // 窗口高度
        icon: path.join(__dirname,'../icon/icon.png')
    },
    entryFile: '../dist/index.html' // 入口html文件
}