/**
* @file: app对象相关方法
* @Author: liyunjiao
* @Date:   2018-05-14 14:15:27
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-05-14 14:16:29
*/

const electron = require('electron');
const info = require('../config').info;
const {dialog} = electron;

// 退出app
function quitApp(app) {
    // mac系统不支持直接退出
    if(process.platform !== 'darwin'){
        app.quit();
    }
}

//获取app相关信息
function appInfo() {
    const {platform, arch} = process;
    return {
        platform,
        arch,
        info
    };
}

// alert弹窗
function alert(app, win, {title = '', message = ''}) {
  return new Promise((resolve, reject) => {
    try {
        dialog.showMessageBox(win, {
            type: 'none',
            title,
            message
        }, () => {
            resolve();
        });
    } catch (e) {
        reject(e);
    }
  });
}

//打开系统浏览器
function openBrowser(app,win,params,shell){
    return shell.openExternal(params);
}

module.exports = {
    quitApp,
    appInfo,
    alert,
    openBrowser
};