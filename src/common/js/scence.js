import {
    render
} from './render.js';
import {
    bindEvent
} from './bindEvent.js';
import {
    checkCode
} from './checkCode.js';
import {
    level
} from './level.js';
import {
    isEmpty
} from './isEmpty.js';
const downKeys = {}; // 摁下的键
let timer = null; // 定时器

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
export function Scence(container, status, option) {
    this.option = option || {};
    this.container = container;
    this.curStatus = null; // json 保存当前状态的{map//当前状态的二维数组 people//包含x,y和{dom}obj}的对象}
    this.option.base = this.option.base || 50;
    this.check = {};
    this.init = async function (curLevel) {
        this.curLevel = curLevel || 0;
        this.container.innerHTML = '';
        this.status = level()[this.curLevel];
        this.curStatus = await render(this.container, this.status, this.option, this.current);
        this.flag = false; // 是否已经开始执行
        this.timer = 0; // 时间戳
        this._proxy(this.option);
        bindEvent('body', 'keydown', (e) => {
            e.preventDefault();
            if (!downKeys[e.keyCode]) {
                downKeys[e.keyCode] = true;
            };
            if (!timer) {
                timer = setInterval(() => {
                    for (var i in downKeys) {
                        checkCode(this, i);
                    };
                }, 500);
            };

            // if (!this.flag) {
            //     this.flag = true;
            //     this.check[e.keyCode] = true;
            //     this.timer = new Date().getTime();
            //     checkCode(this);
            // } else {
            //     var curTime = new Date().getTime();
            //     if (curTime - this.timer < 100) {
            //         return;
            //     }
            //     checkCode(this);
            //     this.timer = curTime;
            // }
        });
        bindEvent('body', 'keyup', (e) => {
            // if (this.check[e.keyCode] === true) {
            //     this.check[e.keyCode] = false;
            //     this.flag = false;
            // }
            delete downKeys[e.keyCode];
            if (isEmpty(downKeys)) {
                clearInterval(timer);
                timer = null;
            };
        });
    };
    this.init();
}