import { Scence } from './scence.js';
import { level } from './level.js';
export function init() {
    let container = document.querySelector('.wrap');
    let arr = level()[0];
    window.onload = function() {
        /* eslint-disable no-new */
        new Scence(container, arr, {
            wallImage: './static/img/wall.png',
            floorImage: './static/img/floor.png',
            desImage: './static/img/box-out.png',
            boxImage: './static/img/box.png',
            peopleImage: './static/img/people.png',
            inImage: './static/img/box-in.png'
        });
    };
}