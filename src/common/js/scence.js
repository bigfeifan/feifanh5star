import {render} from './render.js';
import {bindEvent} from './bindEvent.js';
import {checkCode} from './checkCode.js';
import {level} from './level.js';
import {backChanged} from './backChanged.js';
import {keyJuge} from './keyJuge.js';
import { rerender } from './rerender.js';
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
    this.init = async function(curLevel) {
        this.successBoxsObj = {
            len: 0,
            boxSet: new Set() 
        };
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
        bindEvent('body', 'keydown', (e) => {
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
        });
        bindEvent('body', 'keyup', (e) => {
            this.check[e.keyCode] = false;
            if (keyJuge(e.keyCode,this.option.id)) {
                this.flag = false;
            }
        });
        bindEvent('.tips-btn', 'click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                if (e.target.id === 'btn-next') {
                    rerender(this, this.curLevel + 1);
                }
                if (e.target.id === 'btn-again') {
                    rerender(this, this.curLevel);
                }
                document.querySelector('.swap').style.display = 'none';
            }
        });
    };
    this.init();
}