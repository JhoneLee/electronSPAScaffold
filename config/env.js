/**
* @file: 渲染进程环境变量配置
* @Author: liyunjiao
* @Date:   2018-05-14 13:47:30
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-05-14 13:49:35
*/

module.exports = {
    __ELECTRON__: true,  // 是否为electron环境
    __PRO__: true,  // 是否为生产环境
    windowLoaded: true // 主进程是否加载完毕
};