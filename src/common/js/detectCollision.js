/**
 * 检测物体移动后的碰撞情况
 * 
 * @export
 * @param {array} 地图的二维数组
 * @param {int} x 发生移动物体的数组行坐标 
 * @param {int} y 发生移动物体的数组列坐标
 * @param {string} dir 物体移动的方向 //up down left right
 * @return {any} 返回碰撞状态 // false 未发生碰撞 0墙 1箱子
 */
export function detectCollision(status, x, y, dir) {
    //移动方向和数字的映射
    const dir2num = {
        'up': 0,
        'down': 2,
        'right': 1,
        'left': 3
    }
    switch (dir2num[dir]) {
        case 0:
            return status[x-1][y] ?     
            break;    
    }
    return
}