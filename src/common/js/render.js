/**
 * 场景渲染
 */
import { drawObject } from './drawObject.js';

export async function render(container, status, option) {
    let canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 600;
    container.appendChild(canvas);
    let myctx = canvas.getContext('2d');

    let wall, floor, des;

    let wallPromise = new Promise((resolve, reject) => {
        let dom = document.createElement('img');

        dom.src = option.wallImage;
        dom.onload = () => {
            resolve(dom);
        };
    });

    let floorPromise = new Promise((resolve, reject) => {
        let dom = document.createElement('img');

        dom.src = option.floorImage;
        dom.onload = () => {
            resolve(dom);
        };
    });

    let desPromise = new Promise((resolve, reject) => {
        let dom = document.createElement('img');

        dom.src = option.desImage;
        dom.onload = () => {
            resolve(dom);
        };
    });

    return Promise.all([wallPromise, floorPromise, desPromise]).then((data) => {
        wall = data[0];
        floor = data[1];
        des = data[2];
        let current = Object.assign([], status);

        for (let i in status) {
            for (let j in status[i]) {
                switch (status[i][j]) {
                    case 0: // 默认颜色
                        myctx.fillStyle = '#000';
                        myctx.fillRect(j * 50, i * 50, 50, 50);
                        break;
                    case 1: // 墙
                        myctx.drawImage(wall, j * 50, i * 50, 50, 50);
                        break;
                    case 2: // 地板
                        myctx.drawImage(floor, j * 50, i * 50, 50, 50);
                        break;
                    case 3: // 箱子
                        myctx.drawImage(floor, j * 50, i * 50, 50, 50);
                        current[i][j] = {
                            name: 'box',
                            object: drawObject(j, i, 'box', option.base, container)
                        };
                        break;
                    case 4: // 终点
                        myctx.drawImage(floor, j * 50, i * 50, 50, 50);
                        myctx.drawImage(des, j * 50, i * 50, 50, 50);
                        break;
                    case 5: // 人
                        myctx.drawImage(floor, j * 50, i * 50, 50, 50);
                        current[i][j] = {
                            name: 'people',
                            object: drawObject(j, i, 'people', option.base, container)
                        };
                        break;
                    default:
                        myctx.drawImage(floor, j * 50, i * 50, 50, 50);
                        break;
                }
            }
        }

        return current;
    });
}