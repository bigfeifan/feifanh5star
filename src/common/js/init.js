import { render } from './render.js';

export function init() {
    let canvas = document.querySelector('#canvas');
    let arr = [
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 2, 2, 2, 1, 1, 0, 0],
        [0, 1, 2, 2, 3, 4, 4, 1, 1, 0],
        [1, 1, 3, 2, 1, 4, 3, 4, 1, 0],
        [1, 2, 2, 2, 1, 4, 4, 4, 1, 0],
        [1, 2, 3, 1, 1, 1, 3, 2, 1, 0],
        [1, 2, 2, 3, 2, 3, 2, 1, 1, 0],
        [1, 1, 5, 2, 2, 2, 2, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0]
    ];
    window.onload = function() {
        render(canvas, arr);
    };
}