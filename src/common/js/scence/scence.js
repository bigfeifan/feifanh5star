/**
 * 数组下标转为屏幕坐标  
 * 
 * @param {int} x 数组行数
 * @param {int} y 数组列数
 * @param {int} base 放大倍数
 * @return {obj} 屏幕坐标
 */
function getPosition(x, y, base) {

    return {
        x: base * x,
        y: bae * y
    }
}



/**
 *  测试是否发生碰撞 
 * @param {int} x 移动主体的数组行下标
 * @param {int} y 移动主体的数组列下标
 * @return {int} null 未发生碰撞 | 0砖块 | 1箱子
 */
function decteCollision(x, y, dir) {

    return
}


/**
 * 
 * 
 */
function isInPoint(x, ) {

}

function isFinish() {

}



function update() {
    detectCollision()

}

function drawObject(x, y, className) {
    var object = document.createElement('div')
    object.setAttribute('class', className)
    object.style.left = x * this.base + 'px'
    object.style.top = y * this.base + 'px'
    // this.newstatus[x]
    this.container.appendChild(object)
}

function render() {
    for (let i = 0; i < this.status.length; i++) {
        for (let j = 0; j < this.status[i].length; j++) {
            switch (this.status[i][j]) {
                case 0:
                    break // 背景
                case 1:
                    break // 墙
                case 2:
                    break // 地板
                case 3:
                    { // 箱子
                        this.drawObject(j, i, 'box')
                        break
                    }
                case 4:
                    break; // 终点
                case 5:
                    { // 人
                        this.drawObject(j, i, 'people')
                        break
                    }
                default:
            }
        }
    }

}

function init(container, status) {
    this.render()

}

Scence.prototype.render = render
Scence.prototype.init = init
Scence.prototype.drawObject = drawObject

export function Scence(container, status) {
    this.container = container
    this.status = status
    this.newstatus = Object.assign([], status)
    this.base = 50
}
