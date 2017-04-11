/**
 * 场景主对象，用于保存场景信息和操作
 * @params base 坐标转换的比例 container 父节点
 */
function SCENCE(base, container) {
    this.base = base || 50 //默认值是50像素宽的格子
    this.container = container
    this.people = null // 人的节点
    this.boxes = []//保存的箱子
}

/*
 * 绘制人的位置
 * @params absolute position 坐标 
 */
SCENCE.prototype.drawPeople = function (x, y) {
    if (!this.people) {
        this.people = document.createElement('div')
        this.people.setAttribute('class', 'people')
        this.people.style.width = this.base + 'px'
        this.people.style.height = this.base + 'px'
        this.container.appendChild(this.people)
    }
    this.people.style.top = y + 'px'
    this.people.style.left = x + 'px'
}

/*
 * 绘制箱子的位置
 * @params absolute position 坐标 
 */

SCENCE.prototype.drawbox = function (x, y) {
    if (!this.people) {
        this.people = document.createElement('div')
        this.people.setAttribute('class', 'people')
        this.people.style.width = this.base + 'px'
        this.people.style.height = this.base + 'px'
        this.container.appendChild(this.people)
    }
    this.people.style.top = y + 'px'
    this.people.style.left = x + 'px'
    
}
/*
 * 把数组中的坐标转化为绝对坐标
 * @params 数组坐标
 * @return 绝对坐标
 */
SCENCE.prototype.getPosition = function (x, y) {
    var base = this.base
    return {
        x: base * x,
        y: base * y
    }
}