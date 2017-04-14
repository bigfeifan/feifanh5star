import {render} from './render.js';
import {bindEvent,keydownEvent,keyupEvent,clickEvent} from './bindEvent.js';
import {level} from './level.js';
import {backChanged} from './backChanged.js';
// 把option中的属性作为scence的私有属性保存
Scence.prototype._proxy = function (data) {
    for (var i in data) {
        this[`_${i}`] = data[i];
    };
};
/**
 * @description 
 * 
 * @export
 * @param {any} container 
 * @param {any} status 
 * @param {any} option 
 */
export function Scence(container, option) {
    this.option = option || {};
    this.container = container;
    this.curStatus = null; // json 保存当前状态的{map//当前状态的二维数组 people//包含x,y和{dom}obj}的对象}
    this.option.base = this.option.base || 50;
    
    this.init = async function(curLevel) {
        this.successBoxsObj = {
            len: 0,
            boxSet: new Set() 
        };
        this.check = {};
        this.curLevel = curLevel || 0;
        this.container.innerHTML = '';
        this.status = level()[this.curLevel];
        this.curStatus = await render(this.container, this.status, this.option, this.successBoxsObj);
        backChanged('.box',this.option.boxImage);
        backChanged('.people',this.option.peopleImage);
        this.flag = false; // 是否已经开始执行
        this.timer = 0; // 时间戳
        this.gameStartDate = Date.now();
        this._proxy(this.option);
        this.keydownEvent = keydownEvent.bind(this);
        this.keyupEvent = keyupEvent.bind(this);
        this.clickEvent = clickEvent.bind(this);
        bindEvent('body', 'keydown',this.keydownEvent);
        bindEvent('body','keyup',this.keyupEvent);
        bindEvent('body','click',this.clickEvent);
    };
    this.init();
}