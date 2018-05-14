/**
* @file: browserWindow相关方法
* @Author: liyunjiao
* @Date:   2018-05-14 14:18:27
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-05-14 14:18:59
*/

// 进入全屏
function setFullScreen(app, win) {
    return win.setFullScreen(true);
}

// 退出全屏
function quitFullScreen(app, win) {
    return win.setFullScreen(false);
}

// 是否是全屏
function isFullScreen(app, win) {
    return win.isFullScreen();
}

// 设置屏幕大小
function setScreenSize(app, win, params) {
    return win.setSize(params.width, params.height, false);
}

// 屏幕大小能否被改变
function setResizable(app, win, params) {
    return win.setResizable(params);
}

// 开启/关闭开发工具
function toggleDevTools(app, win) {
    return win.webContents.toggleDevTools();
}


module.exports = {
    setFullScreen,
    quitFullScreen,
    isFullScreen,
    setScreenSize,
    toggleDevTools,
    setResizable
};