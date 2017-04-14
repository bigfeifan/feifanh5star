/**
 * 定义 重新开始本关卡，下一关卡
 */

import { level } from './level.js';

export function rerender(ctx, curLevel) {
    if (curLevel >= level().length) {
        return false;
    }
    ctx.init(curLevel);
    return true;
}