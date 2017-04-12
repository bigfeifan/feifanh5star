export function drawObject(x, y, className,base,container) {
    var object = document.createElement('div');
    object.setAttribute('class', className);
    object.style.left = x * base + 'px';
    object.style.top = y * base + 'px';
    // this.newstatus[x]
    container.appendChild(object);

    return object;
}