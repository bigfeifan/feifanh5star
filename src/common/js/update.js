import {
    detectCollision
} from './detectCollision';
import {
    move,
    moveMap
} from './move.js';
import {
    renderIn,
    renderOut
} from './renderStatus.js';
/**
 * 用户更新游戏状态
 * @export
 */
export function update(ctx, dir) {
    let savedPeople = ctx.curStatus.people; // 人的当前状态
    let detectCollisionWith = detectCollision.bind(ctx, ctx.curStatus.map); // 为碰撞函数绑定默认参数
    let firstDetect = detectCollisionWith(savedPeople.x, savedPeople.y, dir); // 第一次检测人和周围物体碰撞
    if (firstDetect.type === 2 || firstDetect.type === 4) {
        move(savedPeople.object, ctx.option.base, dir);
        moveMap(ctx.status, ctx.curStatus.map, savedPeople, firstDetect.x, firstDetect.y);
    } else if (typeof firstDetect.type === 'object' && firstDetect.type.name === 'box') {
        let secondDetect = detectCollisionWith(firstDetect.x, firstDetect.y, dir);
        let box = ctx.curStatus.map[firstDetect.x][firstDetect.y];
        if (secondDetect.type === 2 || secondDetect.type === 4) {
            move(box.object, ctx.option.base, dir); // 移动箱子
            console.log(box, secondDetect,ctx.curStatus);
            if (secondDetect.type === 4) {
                renderIn(box.object);
            } else {
                renderOut(box.object);
            };
            moveMap(ctx.status, ctx.curStatus.map, box, secondDetect.x, secondDetect.y); // 修改二维数组
            move(savedPeople.object, ctx.option.base, dir); // 移动人
            moveMap(ctx.status, ctx.curStatus.map, savedPeople, firstDetect.x, firstDetect.y); // 修改二维数组
        } else {
            // do nothing
        }
    }
}