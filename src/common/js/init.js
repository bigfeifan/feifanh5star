import {
    Scence
} from './scence.js';
import {
    level
} from './level.js';
import {
    bindEvent
} from './bindEvent.js';

export function init() {
    let arr = level()[0];
    const player1 = 1; // 用户编号
    const player2 = 2;
    bindEvent('#singleModel', 'click', () => {
        let container = document.querySelector('#player1');
        new Scence(container, arr, {
            wallImage: './static/img/wall.png',
            floorImage: './static/img/floor.png',
            desImage: './static/img/box-out.png',
            boxImage: './static/img/box.png',
            peopleImage: './static/img/people.png',
            inImage: './static/img/box-in.png',
            id: player1
        });
        document.querySelector('#index').style.top = '-100%';
    });
    bindEvent('#cooperateModel', 'click', () => {
        let container = document.querySelector('#player1');
        let container2 = document.querySelector('#player2');
        new Scence(container, arr, {
            wallImage: './static/img/wall.png',
            floorImage: './static/img/floor.png',
            desImage: './static/img/box-out.png',
            boxImage: './static/img/box.png',
            peopleImage: './static/img/people.png',
            inImage: './static/img/box-in.png',
            id: player1
        });

        new Scence(container2, arr, {
            wallImage: './static/img/wall.png',
            floorImage: './static/img/floor.png',
            desImage: './static/img/box-out.png',
            boxImage: './static/img/box.png',
            peopleImage: './static/img/people.png',
            inImage: './static/img/box-in.png',
            id: player2
        });
        document.querySelector('#index').style.top = '-100%';
    });
    window.onload = function () {
        /* eslint-disable no-new */
         document.querySelector('#index').style.cssText = 'top:0px';
    };
}