/**
 * 场景渲染
 */
import {
    drawObject
} from './drawObject.js';


/**
 * @description 实现对象的深拷贝
 * 
 * @param {object} obj 
 * @returns {object} 拷贝后的对象 
 */
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

function createPromise(name) {
    return new Promise((resolve, reject) => {
        let dom = document.createElement('img');

        dom.src = name;
        dom.onload = () => {
            resolve(dom);
        };
    });
}

export async function render(container, status, option, successBoxsObj) {
    let canvas = document.createElement('canvas');
    canvas.width = 550;
    canvas.height = 550;
    container.appendChild(canvas);
    let myctx = canvas.getContext('2d');

    let wall, floor, des;
    
    let wallPromise = createPromise(option.wallImage);
    let floorPromise = createPromise(option.floorImage);
    let desPromise = createPromise(option.desImage);
    /* eslint-disable no-unused-vars */
    let boxPromise = createPromise(option.boxImage);
    let peoplePromise = createPromise(option.peopleImage);
    let inPromise = createPromise(option.inImage);
    /* eslint-enable no-unused-vars */
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
                        myctx.fillStyle = 'transparent';
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
                        successBoxsObj.len ++;
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
        return { map, people };
        // return current;
    });
}