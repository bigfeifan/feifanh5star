import {render} from './render.js';
export function Scence(container, status, option) {
    this.option = option || {};
    this.status = status;
    this.container = container;
    this.newstatus = Object.assign([], status);
    this.option.base = this.option.base || 50;
    this.init = function() {
        render(this.container,this.status, this.option);
    };
    this.init();
}

