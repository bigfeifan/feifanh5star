export function backChanged(selector,url) {
	let domList = document.querySelectorAll(selector);
	for (let i = 0; i < domList.length; i++) {
		domList[i].style.backgroundImage = `url(${url})`;
	}
}