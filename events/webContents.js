/**
* @webContents: webContents对象事件
* @Author: liyunjiao
* @Date:   2018-05-14 13:00:51
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-05-14 13:50:09
*/
const env = require('../config/env');
// 更多内容参考 https://electronjs.org/docs/api/web-contents
module.exports = {
    // web页面加载完成时触发
    did_finish_load(wc){
        // 主要用于配置渲染进程的js环境变量
        wc.send('set-env',env);
    }
};