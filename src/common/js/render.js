/**
 * 场景渲染
 */
import { drawObject } from './drawObject.js';

export function render(container, status, option) {
    let canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 600;
    container.appendChild(canvas);
    let myctx = canvas.getContext('2d');

    let floor = document.createElement('img');
    floor.src = option.wallImage;

    let wall = document.createElement('img');
    wall.src = option.floorImage;
    wall.onload = function() {
        for (let i in status) {
            for (let j in status) {
                switch (status[i][j]) {
                    case 0:
                        myctx.fillStyle = '#000';
                        myctx.fillRect(j * 50, i * 50, 50, 50);
                        break;
                    case 1:
                        myctx.drawImage(wall, j * 50, i * 50, 50, 50);
                        break;
                    case 2: // 地板
                        myctx.drawImage(floor, j * 50, i * 50, 50, 50);
                        break;
                    case 3: // 箱子
                        myctx.drawImage(floor, j * 50, i * 50, 50, 50);
                        drawObject(j, i, 'box', option.base, container);
                        break;
                    case 4: // 终点
                        myctx.drawImage(floor, j * 50, i * 50, 50, 50);
                        drawObject(j, i, 'box out', option.base, container);
                        break;
                    case 5: // 人
                        myctx.drawImage(floor, j * 50, i * 50, 50, 50);
                        drawObject(j, i, 'people', option.base, container);
                        break;
                    default:
                        myctx.drawImage(floor, j * 50, i * 50, 50, 50);
                        break;
                }
            }
        }
    };
}