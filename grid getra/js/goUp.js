var scrollElem = document.getElementById('scrollTop');
scrollElem.addEventListener('click', goUp)
window.onscroll = function() {
    if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
        scrollElem.style.opacity = '1';
    } else {
        scrollElem.style.opacity = '0';
    }

};
var timeOut;
function goUp() {
    let top = Math.max(document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100);
        timeOut = setTimeout('goUp()', 20);
    } else {
        clearTimeout(timeOut);
    }

}