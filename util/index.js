/**
* @file: 工具函数
* @Author: liyunjiao
* @Date:   2018-05-14 14:12:23
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-05-14 14:12:36
*/

module.exports = {
    // 对象是否为promise对象
    isPromise(e) {
        return !!e && typeof e.then === 'function';
    }
};