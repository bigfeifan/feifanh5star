/**
 * 场景渲染
 */
export function render(mycv, array) {
    let myctx = mycv.getContext("2d");

    let floor = new Image();
    floor.src = "./static/img/floor.png";

    let wall = new Image();
    wall.src = "./static/img/wall.png";

    wall.onload = function() {
        for (var i in array) {
            for (var j in array) {
                switch (array[i][j]) {
                    case 0:
                        myctx.fillStyle = "#000";
                        myctx.fillRect(j * 50, i * 50, 50, 50);
                        break;
                    case 1:
                        myctx.drawImage(wall, j * 50, i * 50, 50, 50);
                        break;
                    default:
                        myctx.drawImage(floor, j * 50, i * 50, 50, 50);
                        break;
                }
            }
        }

    };
}