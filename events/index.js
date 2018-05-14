/**
* @file: 各类事件汇总
* @Author: liyunjiao
* @Date:   2018-05-14 13:00:59
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-05-14 13:29:53
*/

const winEvents = require('./window');
const wcEvents = require('./webContents');
const appEvents = require('./app');

module.exports = {
    winEvents,
    wcEvents,
    appEvents
};