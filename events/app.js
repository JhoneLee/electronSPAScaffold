/**
* @file: app模块事件
* @Author: liyunjiao
* @Date:   2018-05-14 13:00:38
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-05-14 13:33:05
*/

// 基本功能 https://electronjs.org/docs/api/app 查看更多
module.exports = {
    // 当 Electron 完成初始化时被触发
    ready(app,win,cb){
        cb();
    },
    // 当所有的窗口都被关闭时触发
    window_all_closed(app,win,cb){
        // mac平台需要调用app.quit关闭应用
        if (process.platform !== 'darwin') {
            app.quit();
        }
    },
    // mac os 当应用被激活时触发，常用于点击应用的 dock 图标的时候
    activate(app,win,cb){
        if (win === null) {
            cb();
        }
    }
};