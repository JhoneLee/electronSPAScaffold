/**
* @file: 应用窗口事件
* @Author: liyunjiao
* @Date:   2018-05-14 13:00:32
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-05-14 13:32:42
*/
// https://electronjs.org/docs/api/browser-window  查看更多
module.exports = {
    //窗口已经关闭时触发。当你接收到这个事件的时候, 你应当删除对已经关闭的窗口的引用对象和避免再次使用它
    closed(mainWindow){
        return null;
    },
    // 文档更改标题时触发，可调用event.preventDefault()将阻止更改标题
    page_title_updated(win){
        return win;
    }
}; 
