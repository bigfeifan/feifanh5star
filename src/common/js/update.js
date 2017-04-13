import { detectCollision } from './detectCollision';
import { move } from './move.js';
/**
 * 用户更新游戏状态
 * @export
 */
export function update(dir,status) {
    const people = document.querySelector('.people'); // 获取人的节点
    // 如果没有发生碰撞
    let firstDetect = detectCollision(dir);
    if (!firstDetect) {
        move(people, 50, dir);
    } else {
        let secondDetect = detectCollision(status);
        if (!secondDetect) {
            move(people, 50, dir); // 移动人
            move(); // 移动箱子
        } else {
            // do nothing
        }
    }
}