const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//drawGraph();

function drawGraph() {
    let r = $("#r").val() * 20;
    // Рисование оси X с стрелкой на конце
    ctx.beginPath();
    ctx.moveTo(20, canvas.height / 2);
    ctx.lineTo(canvas.width - 20, canvas.height / 2);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width - 20, canvas.height / 2);
    ctx.lineTo(canvas.width - 30, canvas.height / 2 - 5);
    ctx.lineTo(canvas.width - 30, canvas.height / 2 + 5);
    ctx.fillStyle = "black";
    ctx.fill();

    // Рисование делений на оси X
    for (var x = 30; x < canvas.width - 30; x += 20) {
        ctx.moveTo(x, canvas.height / 2 - 3);
        ctx.lineTo(x, canvas.height / 2 + 3);
        ctx.stroke();
    }

    // Рисование оси Y с стрелкой на конце
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 20);
    ctx.lineTo(canvas.width / 2, canvas.height - 20);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 20);
    ctx.lineTo(canvas.width / 2 - 5, 30);
    ctx.lineTo(canvas.width / 2 + 5, 30);
    ctx.fillStyle = "black";
    ctx.fill();

    // Рисование делений на оси Y
    for (var y = 30; y < canvas.height - 30; y += 20) {
        ctx.moveTo(canvas.width / 2 - 3, y);
        ctx.lineTo(canvas.width / 2 + 3, y);
        ctx.stroke();
    }

    // Добавление меток
    ctx.fillStyle = "black";
    ctx.fillText("X", canvas.width - 10, canvas.height / 2 - 10);
    ctx.fillText("Y", canvas.width / 2 + 10, 10);
    ctx.fillText("R", canvas.width / 2 + 60, canvas.height / 2 + 20);


    ctx.fillStyle = "rgba(20, 60, 200, 0.5)"; // Голубой с прозрачностью 0.5

    ctx.fillRect(canvas.width / 2 - r, canvas.height / 2, r, r); // Координаты (50, 50) и размеры (200x100)

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2); // Перемещение в точку (200, 50)
    ctx.lineTo(canvas.width / 2, canvas.height / 2 - r); // Линия к точке (100, 200)
    ctx.lineTo(canvas.width / 2 + r / 2, canvas.height / 2);// Линия к точке (200, 200)
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.closePath(); // Замкнуть треугольник
    ctx.fill();


    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, r, Math.PI, 3 * Math.PI / 2); // Координаты (200, 200), радиус 100, угол от 0 до Pi/2 (четверть круга)
    ctx.lineTo(canvas.width / 2, canvas.height / 2); // Соединить с центром для закрытия фигуры
    ctx.closePath(); // Завершить четверть круга
    ctx.fill();
}


canvas.addEventListener("click", function (event) {
    var x = event.offsetX;
    var y = event.offsetY;
    setFields(x, y);
    checkAllFields();
});

function setFields(x, y) {
    x = (x - canvas.height / 2) / 20;
    y = (canvas.width / 2 - y) / 20;
    x = Math.round(x);
    if (x > 4) {
        x = 4;
    } else if (x < -4) {
        x = -4;
    }
    if (y > 5) {
        y = 4.999999999999999;
    } else if (y < -5) {
        y = -4.999999999999999;
    }
    localStorage.setItem("x", x);
    let xElements = document.getElementsByName("x");
    for (let i = 0; i < xElements.length; i++) {
        if (i - 4 == x) {
            xElements[i].classList.add('pressed-but');
        } else {
            xElements[i].classList.remove('pressed-but');
            xElements[i].classList.add('default-but');
        }
    }
    this.document.getElementById("y").value = y;
    localStorage.setItem("y", y);
}

function drawDot(x, y,  result) {
    x = 20 * x + canvas.height / 2;
    y = canvas.width / 2 - 20 * y;
    console.log(result, result == 'hit');
    if(result == 'hit'){
        ctx.fillStyle = "green"; // Цвет точки
    }
    else{
        ctx.fillStyle = "red"; // Цвет точки
    }
    ctx.fillRect(x, y, 3, 3); // Рисование точки
}