import { detectCollision } from './detectCollision';
import { move } from './move.js';
/**
 * 用户更新游戏状态
 * @export
 */
export function update(e) {
    let dir = ''; // 用户移动的方向
    let status = this.status; // 初始状态数组
    const people = document.querySelector('.people'); // 获取人的节点
    switch (e.keyCode) {
        case 37:
            dir = 'left';
            break;
        case 40:
            dir = 'down';
            break;
        case 39:
            dir = 'right';
            break;
        case 38:
            dir = 'up';
            break;
        default:
            dir = ' ';
            break;
    };
    // console.log(dir);
    // 如果没有发生碰撞
    let firstDetect = detectCollision(dir);
    if (!firstDetect) {
        move(people,50,dir);
    } else {
        let secondDetect = detectCollision(status);
        if (!secondDetect) {      
            move();// 移动人
            move();// 移动箱子
        } else {
            // do nothing
        }
    }
}