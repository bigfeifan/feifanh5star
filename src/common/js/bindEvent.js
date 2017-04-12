/**
 * 绑定事件到元素
 * @export
 * @param {string} Selector css 选择器
 * @param {string} eventName 事件名字
 * @param {function} func 回调函数
 */
export function bindEvent(Selector, eventName, func) {
    let element = document.querySelector(Selector);
    element['on' + eventName] = func;
}