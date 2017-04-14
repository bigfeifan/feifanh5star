/**
 * 定义 重新开始本关卡，下一关卡
 */

import { level } from './level.js';
import {removeEvent} from './bindEvent.js';

export function rerender(ctx, curLevel) {
	removeEvent('body','keydown', ctx.keydownEvent);
	removeEvent('body','keyup', ctx.keyupEvent);
	removeEvent('body','click', ctx.clickEvent);
    ctx.init(curLevel % level().length);
}