/**
* @file: 入口主文件
* @Author: jhoneLee
* @Date:   2018-05-14 11:36:30
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-05-14 14:11:53
*/

/*eslint-disable*/
const electron = require('electron');
const path = require('path');
const {windowConf} = require('../config'); // 应用配置文件
const {winEvents,wcEvents,appEvents} = require('../events'); // 应用事件集合
const eventsList = require('../bridge/events'); // 桥接文件事件
/**
 app:控制应用生命周期的模块。
 ipc:渲染进程模块
 Tray:系统托盘模块
 BrowserWindow:内置浏览器对象
*/
const {app,ipc,Tray,BrowserWindow,ipcMain, shell} = electron;

// 建立一个window对象的全局引用，如果你不这样做，当js对象被垃圾回收,窗口会被自动地关闭
let mainWindow;

// 窗口初始化函数，生成mainWindow
function createWindow() {
    let {entryFile,winOptions} = windowConf;
    // 创建浏览器窗口。
    let opt = Object.assign({},winOptions,{
        webPreferences: {
            preload: path.join(__dirname, '../bridge/index.js'),
            plugins: true
        }
    });
    // 创建浏览器窗口 更多参考https://electronjs.org/docs/api/browser-window
    mainWindow = new BrowserWindow(opt);

    // 加载应用的入口文件
    mainWindow.loadURL(`file://${path.join(__dirname,entryFile)}`);

    // 启用开发工具。
    // mainWindow.webContents.openDevTools();

    for(let item in winEvents){
        let eName = item.replace(/_/g,'-');
        mainWindow.on(eName,()=>{
            mainWindow = winEvents[item](mainWindow);
        });
    }

    // 获取创建好的window对象发送消息
    // 通过 did-finish-load 设置web环境变量

    let wContent = mainWindow.webContents;
    for(let item in wcEvents){
        let eName = item.replace(/_/g,'-');
        wContent.on(eName,()=>{
            wContent = wcEvents[item](wContent);
        });
    }
}

// app事件对象绑定,其中在ready事件中调用createWindow，实现窗口创建
for(let item in appEvents){
    let eName = item.replace(/_/g,'-');
    app.on(eName,()=>{
        appEvents[item](app,mainWindow,createWindow);
    });
}

// 从主进程到渲染进程的异步通信的事件注册
ipcMain.on('regist-event', (event, arg) => {
    try{
        const nativeEvent = eventsList[arg.eventName];
        if (nativeEvent) {
            const result =  nativeEvent(app, mainWindow, arg.params, shell);
            if (isPromise(result)) {
                result.then(res => {
                    event.sender.send('fire-event', {
                        stamp: arg.stamp,
                        payload: res
                    });
                }).catch(err => {
                    event.sender.send('fire-event', {
                        stamp: arg.stamp,
                        err
                    });
                });
            } else {
                event.sender.send('fire-event', {
                    stamp: arg.stamp,
                    payload: result
                });
            }
        } else {
            event.sender.send('fire-event', {
                stamp: arg.stamp,
                err: new Error('event not support')
            });
        }
    }catch(e){
        // nothing
    }
});
