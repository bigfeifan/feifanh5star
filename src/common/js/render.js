/**
 * 场景渲染
 */
import {
    drawObject
} from './drawObject.js';


function cloneObj(obj) {
    var str;
    var newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        str = JSON.stringify(obj);
        newobj = JSON.parse(str);
    } else {
        for (var i in obj) {
            newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
};

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

    function drawImage(image, x, y) {
        myctx.drawImage(image, option.base * x, option.base * y, option.base, option.base);
    }

    return Promise.all([wallPromise, floorPromise, desPromise]).then((data) => {
        wall = data[0];
        floor = data[1];
        des = data[2];

        let map = cloneObj(status);
        let people = null;

        for (let i in status) {
            for (let j in status[i]) {
                switch (status[i][j]) {
                    case 0: // 默认颜色
                        myctx.fillStyle = '#000';
                        myctx.fillRect(j * option.base, i * option.base, option.base, option.base);
                        break;
                    case 1: // 墙
                        drawImage(wall, j, i);
                        break;
                    case 2: // 地板
                        drawImage(floor, j, i);
                        break;
                    case 3: // 箱子
                        drawImage(floor, j, i);
                        map[i][j] = {
                            name: 'box',
                            x: i,
                            y: j,
                            object: drawObject(j, i, 'box', option.base, container)
                        };
                        break;
                    case 4: // 终点
                        drawImage(floor, j, i);
                        drawImage(des, j, i);
                        break;
                    case 5: // 人
                        drawImage(floor, j, i);
                        map[i][j] = {
                            name: 'people',
                            x: i,
                            y: j,
                            object: drawObject(j, i, 'people', option.base, container)
                        };
                        people = {
                            x: i,
                            y: j,
                            object: map[i][j].object
                        };
                        break;
                    default:
                        drawImage(floor, j, i);
                        break;
                }
            }
        }
        console.log(status, map);
        return {
            map,
            people
        };
        // return current;
    });
}