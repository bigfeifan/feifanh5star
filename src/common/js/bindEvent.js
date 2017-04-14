/**
 * 绑定事件到元素
 * @export
 * @param {string} Selector css 选择器
 * @param {string} eventName 事件名字
 * @param {function} func 回调函数
 */
import {checkCode} from './checkCode.js';
import {keyJuge} from './keyJuge.js';
import { rerender } from './rerender.js';

export function bindEvent(Selector, eventName, func) {
    let element = document.querySelector(Selector);
    element.addEventListener(eventName, func);
}

export function removeEvent(Selector, eventName, func) {
    let element = document.querySelector(Selector);
    element.removeEventListener(eventName, func);
}

export function keydownEvent(e) {
	e.preventDefault();
	if (!this.flag && !keyJuge(e.keyCode,this.option.id)) {
		return;
	}
	if (!this.flag) {
		this.flag = true;
		this.check[e.keyCode] = true;
		this.timer = new Date().getTime();
		checkCode(this);
	} else {
		var curTime = new Date().getTime();
		if (curTime - this.timer < 100) {
			return;
		}
		checkCode(this);
		this.timer = curTime;
	}
}

export function keyupEvent(e) {
	e.preventDefault();
	this.check[e.keyCode] = false;
	if (keyJuge(e.keyCode,this.option.id)) {
		this.flag = false;
   }
}

export function clickEvent(e) {
	if (e.target.tagName === 'BUTTON') {
		if (e.target.id === 'btn-next') {
			rerender(this, this.curLevel + 1);
		}
		if (e.target.id === 'btn-again') {
			rerender(this, this.curLevel);
		}
		document.querySelector('.swap').style.display = 'none';
	}
}