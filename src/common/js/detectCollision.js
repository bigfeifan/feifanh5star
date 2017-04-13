/**
 * 检测物体移动后的碰撞情况
 * 
 * @export
 * @param {array} 地图的二维数组
 * @param {int} x 发生移动物体的数组行坐标 
 * @param {int} y 发生移动物体的数组列坐标
 * @param {string} dir 物体移动的方向 //up down left right
 * @return {any} 返回碰撞状态 // false 未发生碰撞 0墙 1箱子 如果发生碰撞返回状态和碰撞物的位置
 */
export function detectCollision(status, x, y, dir) {
    x = +x;
    y = +y;
    // 移动方向和数字的映射
    const dir2num = {
        'up': 0,
        'down': 2,
        'right': 1,
        'left': 3
    };
    // 目的地
    let nextBlock = {
        type: -1, // 目的地类型
        x: null, // 目的横坐标
        y: null // 目的地纵坐标
    };
    switch (dir2num[dir]) {
        case 0:
            nextBlock.type = status[x - 1][y];
            nextBlock.x = x - 1;
            nextBlock.y = y;
            break;
        case 1:
            nextBlock.type = status[x][y + 1];
            nextBlock.x = x;
            nextBlock.y = y + 1;
            break;
        case 2:
            nextBlock.type = status[x + 1][y];
            nextBlock.x = x + 1;
            nextBlock.y = y;
            break;
        case 3:
            nextBlock.type = status[x][y - 1];
            nextBlock.x = x;
            nextBlock.y = y - 1;
            break;
        default:
            nextBlock.type = -1;
            break;
    }
    
    return nextBlock;
}