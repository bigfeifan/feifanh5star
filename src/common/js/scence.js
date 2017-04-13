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
        bindEvent('body', 'keydown', (e) => {
            this.check[e.keyCode] = true;
        });
        bindEvent('body', 'keyup', (e) => {
            this.check[e.keyCode] = false;
        });
        setInterval(() => {
          checkCode(this.check,this.status);
        }, 500);
    };
    this.init();
}

