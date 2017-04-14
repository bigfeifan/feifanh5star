import {
    Scence
} from './scence.js';
import {
    level
} from './level.js';
export function init() {
    let container = document.querySelector('#player1');
    let container2 = document.querySelector('#player2');
    let arr = level()[0];
    window.onload = function() {
        /* eslint-disable no-new */
        const player1 = 1;// 用户编号
        const player2 = 2;
        new Scence(container, arr, {
            wallImage: './static/img/wall.png',
            floorImage: './static/img/floor.png',
            desImage: './static/img/box-out.png',
            id: player1
        });
        new Scence(container2, arr, {
            wallImage: './static/img/wall.png',
            floorImage: './static/img/floor.png',
            desImage: './static/img/box-out.png',
            id: player2
        });
    };
}