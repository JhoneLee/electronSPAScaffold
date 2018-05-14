/**
* @file: 将主进程方法封装到桥接js对象中
* @Author: liyunjiao
* @Date:   2018-05-14 14:13:14
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-05-14 14:20:36
*/

const {ipcRenderer,webFrame} = require('electron');
const { OPEN_BROWSER,QUIT_APP,TOGGLE_DEVTOOLS,SET_FULL_SCREEN } = require('./eventName');
const env = require('../config/env');
let eventsMap = {};
for (const key in env) {
    window[key] = env[key];
}
//触发事件回调
ipcRenderer.on('fire-event', (event, arg) => {
    const cb = eventsMap[arg.stamp];
    if (cb) {
        if (arg.err) {
            cb(arg.err, arg.payload);
        } else {
            cb(false, arg.payload);
        }
        delete eventsMap[arg.stamp];
    }
});

//调用原生事件
function registEvent(eventName, params, cb) {
    //允许只传两个数据
    let efuc = function(){};
    cb = cb || efuc;
    //如果win还未ready
    if (!windowLoaded) {
        cb(new Error('window not ready'));
        return;
    }
    const stamp = String(new Date().getTime());
    const opts = Object.assign({eventName}, {params:params}, {stamp});
    eventsMap[stamp] = cb; //注册唯一函数
    ipcRenderer.send('regist-event', opts); //发送事件
}

// ---------具体方法定义--------------

//进入全屏
function setFullScreen(cb) {
    registEvent(SET_FULL_SCREEN,null,cb);
}
// 调用系统浏览器打开链接
function openUrlInBrowser(url,cb){
    registEvent(OPEN_BROWSER,url,cb);
}

//设置缩放比，只能在渲染进程中实现
function setZoomFactor(params, cb) {
    webFrame.setZoomFactor(params);
    cb && cb();
}
// 关闭app
function closeApp(cb){
    registEvent(QUIT_APP,null,cb)
}
// 打开OR关闭debug
function toggleDev(cb){
    registEvent(TOGGLE_DEVTOOLS,null,cb);
}

window.ElectronBridge = {
    setFullScreen,
    openUrlInBrowser,
    closeApp,
    toggleDev
};