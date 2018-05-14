/**
* @file: 事件汇总
* @Author: liyunjiao
* @Date:   2018-05-14 14:20:45
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-05-14 14:27:15
*/

// browserWindow 相关方法
const {
    setFullScreen,
    quitFullScreen,
    isFullScreen,
    setScreenSize,
    setResizable,
    toggleDevTools
} = require('./browserWindow.js');

// APP操作交互功能
const {
    quitApp,
    appInfo,
    alert,
    openBrowser
} = require('./app.js');

module.exports = {
    'SET_FULL_SCREEN': setFullScreen,
    'QUIT_FULL_SCREEN': quitFullScreen,
    'IS_FULL_SCREEN': isFullScreen,
    'SET_SCREEN_SIZE': setScreenSize,
    'SET_RESIZABLE': setResizable,
    'TOGGLE_DEVTOOLS': toggleDevTools,
    'QUIT_APP': quitApp,
    'APP_INFO': appInfo,
    'ALERT': alert,
    'OPEN_BROWSER': openBrowser
};