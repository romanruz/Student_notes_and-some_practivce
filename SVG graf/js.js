function createBarChart(data, width, height, color) {

    // создаем контейнер для диаграммы 
    // createElementNS первый параметр определяет пространство имен для элемента <svg xmlns="http://www.w3.org/2000/svg">
    var chart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    chart.style.width = width;
    chart.style.height = height;

    // находим максимальное значение в массиве данных
    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
    }

    var scale = width / max;

    var barHeight = Math.floor(width / data.length);

    // создаем отдельный элемент диаграммы
    for (var i = 0; i < data.length; i++) {
        var bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        var barWidth = data[i] * scale;
        bar.setAttribute("width", barWidth + "px");
        bar.setAttribute("height", barHeight - 4 + "px");
        bar.setAttribute("x", 0); // or width - barWidth
        bar.setAttribute("y", barHeight * i);
        bar.setAttribute("name", data[i]);
        bar.style.fill = color;
        text.textContent = 'это стобик №' + " " + data[i];
        text.style.position = 'absolute';
        text.style.opacity = 0;
        text.setAttribute('y', barHeight * i + 23);
        if (parseInt(bar.getAttribute('width')) > 150) {
            console.log('wew');
            text.setAttribute('x', barWidth - 120);
        } else {;
            text.setAttribute('x', barWidth);
        }
        bar.addEventListener("mouseover", onOver);
        bar.addEventListener("mouseout", onOut);
        chart.appendChild(bar);
        chart.appendChild(text);

    }

    function onOver() {
        this.style.fill = 'none';
        this.nextSibling.style.opacity = 1;

        return;
    }

    function onOut() {
        this.nextSibling.style.opacity = 0;
        this.style.fill = color;
    }

    return chart;
}