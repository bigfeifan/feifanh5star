import { render } from './render.js';
import { bindEvent } from './bindEvent.js';
import { update } from './update.js';
export function Scence(container, status, option) {
    this.option = option || {};
    this.status = status;
    this.container = container;
    this.current = Object.assign([], status);
    this.option.base = this.option.base || 50;
    this.init = async function () {
        this.current = await render(this.container, this.status, this.option, this.current);
        bindEvent('body', 'keydown', update.bind(this));
    };
    this.init();
}

