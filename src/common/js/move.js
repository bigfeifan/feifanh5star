/**
 * 移动物体函数
 * 
 * @export
 * @param {dom} target //操控的节点 
 * @param {int} base //地图缩放倍数
 * @param {string} dir //移动方向
 * @return {dom} target //操控的节点
 * 
 */
export function move(target, base, dir) {
    let top = target.style.top.slice(0, -2);
    let left = target.style.left.slice(0, -2);
    // 移动方向和数字的映射
    const dir2num = {
        'up': 0,
        'down': 2,
        'right': 1,
        'left': 3
    };

    switch (dir2num[dir]) {
        case 0:
            target.style.top = `${top - base}px`;
            break;
        case 1:
            target.style.left = `${+left + base}px`;
            break;
        case 2:
            target.style.top = `${+top + base}px`;
            break;
        case 3:
            target.style.left = `${+left - base}px`;
            break;
        default:
            // do nothing    
            break;
    };
    return target;
}

export function moveMap(status,map, obj, curX, curY) {
    if (status[obj.x][obj.y] === 4) {
        map[obj.x][obj.y] = 4;
    } else { 
        map[obj.x][obj.y] = 2;
    }
    obj.x = curX;
    obj.y = curY;
    map[curX][curY] = obj;
}