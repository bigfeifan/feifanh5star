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
    let savedPeople = ctx.curStatus.people // 人的当前状态
    let detectCollisionWith = detectCollision.bind(ctx, ctx.curStatus.map); // 为碰撞函数绑定默认参数
    let firstDetect = detectCollisionWith(savedPeople.x, savedPeople.y, dir); //第一次检测人和周围物体碰撞
    if (!firstDetect) {
        move(people, this.option.base, dir);
    } else if (firstDetect === 3) {
        let secondDetect = detectCollisionWith(savedPeople.x, savedPeople.y, dir);
        if (secondDetect) {
            move(people, ctx.base, dir); // 移动人
            move(); // 移动箱子
        } else {
            // do nothing
        }
    }
}