import {Scence} from './scence.js';

export function init() {
	let container = document.querySelector('.wrap');
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
	window.onload = function () {
		/* eslint-disable no-new */
		new Scence(container, arr,{
			wallImage: './static/img/floor.png',
			floorImage: './static/img/wall.png'
		});
	};
}