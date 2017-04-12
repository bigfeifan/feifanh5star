/**
 * 用户更新游戏状态
 * 
 * @export
 */
export function update(e) {
    let dir = '' //用户移动的方向

    //如果没有发生碰撞
    let firstDetect = detectCollision(status,people.x,people.y,dir)
    if (!firstDetect) {
        move(dir)
    } else {
        let secondDetect = detectCollision(status, )
        if (!secondDetect) {
            move()//移动箱子    
            move()//移动人
        } else {
            //do nothing
        }
    }
}

