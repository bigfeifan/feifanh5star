/**
 * 场景渲染
 */
function render(mycv, array) {
    var myctx = mycv.getContext("2d");

    var floor = new Image();
    floor.src = "./img/floor.png";

    var wall = new Image();
    wall.src = "./img/wall.png";

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
var canvas = document.querySelector("#canvas");
var arr = [
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 2, 2, 2, 1, 1, 0, 0],
    [0, 1, 2, 2, 3, 4, 4, 1, 1, 0],
    [1, 1, 3, 2, 1, 4, 3, 4, 1, 0],
    [1, 2, 2, 2, 1, 4, 4, 4, 1, 0],
    [1, 2, 3, 1, 1, 1, 3, 2, 1, 0],
    [1, 2, 2, 3, 2, 3, 2, 1, 1, 0],
    [1, 1, 5, 2, 2, 2, 2, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0]
]
render(canvas, arr);