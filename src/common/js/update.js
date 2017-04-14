import {
    detectCollision
} from './detectCollision';
import {
    move,
    moveMap
} from './move.js';
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
            moveMap(ctx.status, ctx.curStatus.map, box, secondDetect.x, secondDetect.y); // 修改二维数组
            move(savedPeople.object, ctx.option.base, dir); // 移动人
            moveMap(ctx.status, ctx.curStatus.map, savedPeople, firstDetect.x, firstDetect.y);
            if (secondDetect.type === 4) {
                ctx.successBoxsObj.boxSet.add(`${secondDetect.x}-${secondDetect.y}`);
                box.object.style.backgroundImage = `url(${ctx._inImage})`;
            } else {
                box.object.style.backgroundImage = `url(${ctx._boxImage})`;  
            }
            removeSuccessBox(ctx.successBoxsObj, savedPeople.x, savedPeople.y);
            if (isGameOver(ctx.successBoxsObj)) {
                let gameTime = ~~((Date.now() - ctx.gameStartDate) / 1000);
                setTimeout(() => {
                    document.getElementById('time').innerHTML = gameTime + ' 秒';
                    document.querySelector('.swap').style.display = 'block';
                }, 500);
            }
        } else {
            // do nothing
        }
    }
}

function isGameOver(successBoxsObj) {
    return successBoxsObj.boxSet.size === successBoxsObj.len;
}

function removeSuccessBox(successBoxsObj, x, y) {
    successBoxsObj.boxSet.delete(`${x}-${y}`);
}