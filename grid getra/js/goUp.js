var scrollElem = document.getElementById('scrollTop');

window.onscroll = () => {
    if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
        scrollElem.style.opacity = '1';
    } else {
        scrollElem.style.opacity = '0';
    }

};
var timeOut;
let goUp = () => {
    let top = Math.max(document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100);
        timeOut = setTimeout('goUp()', 20);
    } else {
        clearTimeout(timeOut);
    }

}
scrollElem.addEventListener('click', goUp)