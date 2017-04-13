import { render } from './render.js';
import { bindEvent } from './bindEvent.js';
import { checkCode } from './checkCode.js';
export function Scence(container, status, option) {
    this.option = option || {};
    this.status = status;
    this.container = container;
    this.current = Object.assign([], status);
    this.option.base = this.option.base || 50;
    this.check = {};
    this.init = async function () {
        this.current = await render(this.container, this.status, this.option, this.current);
        this.flag = false;  // 是否已经开始执行
        this.timer = 0;   // 时间戳
        bindEvent('body', 'keydown', (e) => {
            if (!this.flag) {
                this.flag = true;
                this.check[e.keyCode] = true;
                this.timer = new Date().getTime();
                checkCode(this.check,this.status);
            } else {
                var curTime = new Date().getTime();
                if (curTime - this.timer < 100) {
                    return;
                }
                checkCode(this.check,this.status);
                this.timer = curTime;
            }
        });
        bindEvent('body', 'keyup', (e) => {
             this.check[e.keyCode] = false;
             this.flag = false;
        });
    };
    this.init();
}

