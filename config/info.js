/**
* @file: 应用信息配置
* @Author: liyunjiao
* @Date:   2018-05-14 13:55:47
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-05-14 13:57:54
*/

module.exports = {
    title: 'electron 脚手架',
    appName: 'electron 脚手架',
    ifOpenDevtool: true, //是否打开开发者工具
    ifSingleAppInstance: true, //app是否是单例模式
    ifOpenUrlInBrowser: true, //打开url的时候是否使用本地浏览器
    default_win_size: {
        width: 1024,
        height: 768
    },
    plugins: {
        flashplayer: {
            'darwin': {
                'x64': '23.0.0.205'
            },
            'win32': {
                'x64': '25.0.0.171',
                'ia32': '23.0.0.205'
            }
        }
    }
};