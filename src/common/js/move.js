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
    //移动方向和数字的映
    const dir2num = {
        'up': 0,
        'down': 2,
        'right': 1,
        'left': 3
    }
    switch (dir2num[dir]) {
        case 0:
            target.style.top -= base
            break;
        case 1:
            target.style.left += base
            break;
        case 2:
            target.style.top += base
            break;
        case 3:
            target.style.left -= base
            break;
        default:
            //do nothing    
            break;
    }
    return target

}