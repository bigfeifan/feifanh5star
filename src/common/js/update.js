import {
    detectCollision
} from './detectCollision';
import {
    move
} from './move.js';
/**
 * 用户更新游戏状态
 * @export
 */
export function update(ctx, dir) {
    const people = document.querySelector('.people'); // 获取人的节点
    let savedPeople = ctx.curStatus.people; // 人的当前状态
    let detectCollisionWith = detectCollision.bind(ctx, ctx.curStatus.map); // 为碰撞函数绑定默认参数
    let firstDetect = detectCollisionWith(savedPeople.x, savedPeople.y, dir); // 第一次检测人和周围物体碰撞
    console.log(firstDetect);
    if (!firstDetect ) {
        move(people, ctx.option.base, dir);
    } else if (firstDetect.type === 3) {
        let secondDetect = detectCollisionWith(firstDetect.x, firstDetect.y, dir);
        let box = ctx.curStatus.map[secondDetect.x][secondDetect.y].object;
        if (!secondDetect.type) {
            move(box,ctx.base,dir); // 移动箱子
            move(people, ctx.base, dir); // 移动人
        } else {
            // do nothing
        }
    }
}