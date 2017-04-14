import {
    Scence
} from './scence.js';
import {
    level
} from './level.js';
export function init() {
    let container = document.querySelector('.wrap');
    let container2 = document.querySelector('.wrap2');
    let arr = level().level1;
    window.onload = function () {
        /* eslint-disable no-new */
        let player = 1;
        new Scence(container, arr, {
            wallImage: './static/img/wall.png',
            floorImage: './static/img/floor.png',
            desImage: './static/img/box-out.png',
            id: player++
        });
        new Scence(container2, arr, {
            wallImage: './static/img/wall.png',
            floorImage: './static/img/floor.png',
            desImage: './static/img/box-out.png',
            id: player++
        });
    };
}