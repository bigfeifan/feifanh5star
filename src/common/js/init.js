import {
    Scence
} from './scence.js';

export function init() {
    let container = document.querySelector('#player1');
    let container2 = document.querySelector('#player2');
    window.onload = function() {
        /* eslint-disable no-new */
        const player1 = 1;// 用户编号
        const player2 = 2;
        new Scence(container, {
            wallImage: './static/img/wall.png',
            floorImage: './static/img/floor.png',
            desImage: './static/img/box-out.png',
            boxImage: './static/img/box.png',
            peopleImage: './static/img/people.png',
            inImage: './static/img/box-in.png',
            id: player1
        });
        new Scence(container2, {
            wallImage: './static/img/wall.png',
            floorImage: './static/img/floor.png',
            desImage: './static/img/box-out.png',
            boxImage: './static/img/box.png',
            peopleImage: './static/img/people.png',
            inImage: './static/img/box-in.png',
            id: player2
        });
    };
}