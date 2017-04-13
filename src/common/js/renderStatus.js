export function renderIn(dom) {
    dom.classList.remove('out');
    dom.classList.add('in');
}

export function renderOut(dom) {
    dom.classList.remove('in');
    dom.classList.add('out');
}
