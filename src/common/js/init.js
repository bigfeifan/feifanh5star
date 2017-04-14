import { Scence } from './scence.js';

export function init() {
    let container = document.querySelector('.wrap');
    // arr 参数
    // 0 默认黑色背景
    // 1 墙
    // 2 地板
    // 3 箱子
    // 4 终点
    let arr = [
		[0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
		[0, 0, 0, 1, 4, 1, 0, 0, 0, 0],
		[0, 0, 0, 1, 2, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 3, 2, 3, 4, 1, 0],
		[0, 1, 4, 2, 3, 5, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 3, 1, 0, 0, 0],
		[0, 0, 0, 0, 1, 4, 1, 0, 0, 0],
		[0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	];
    window.onload = function() {
        /* eslint-disable no-new */
        new Scence(container, arr, {
            wallImage: './static/img/wall.png',
            floorImage: './static/img/floor.png',
            desImage: './static/img/box-out.png'
        });
    };
}