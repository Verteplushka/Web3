document.getElementById("y").addEventListener("input", function () {
    console.log("hui");
    let response = "";
    let y = $("#y").val();

    if (isNaN(y)) {
        response = "Y must be a number";
    } else if (y != "") {
        let bigY = new Big(y);
        if (!(bigY.plus(new Big(-5)) < 0 && bigY.plus(new Big(5)) > 0)) {
            response = "Y must be in (-5; 5)";
        }
    }

    if (response != "") {
        document.getElementById("error").innerHTML = response;
        $("#submit").prop("disabled", true);
    } else {
        $("#submit").prop("disabled", false);
        document.getElementById("error").innerHTML = "";
    }
    localStorage.setItem("y", this.value);
});

document.getElementById("r").addEventListener("input", validateR);

function validateR(){
    let response = "";
    let r = $("#r").val();

    if (isNaN(r)) {
        response = "R must be a number";
    } else if (r != "") {
        let bigR = new Big(r);
        if (!(bigR.plus(new Big(-1)) > 0 && bigR.plus(new Big(-4)) < 0)) {
            response = "R must be in (1; 4)";
        }
    }

    if (response != "") {
        document.getElementById("error").innerHTML = response;
        $("#submit").prop("disabled", true);
    } else {
        $("#submit").prop("disabled", false);
        document.getElementById("error").innerHTML = "";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGraph();
        drawAllDots();
    }
    localStorage.setItem("r", this.value);
}

$('input[name="x"]').click(function () {
    let xElements = document.getElementsByName("x");
    for (let i = 0; i < xElements.length; i++) {
        xElements[i].style.backgroundColor = "#3399ff";
    }
    this.style.backgroundColor = "red";
    localStorage.setItem("x", this.value);
});


window.addEventListener("load", function () {
    let xElements = document.getElementsByName("x");
    for (let i = 0; i < xElements.length; i++) {
        if (i - 4 == localStorage.getItem("x")) {
            xElements[i].classList.add('pressed-but');
        } else {
            xElements[i].classList.add('default-but');
        }
    }
    let y = localStorage.getItem("y");
    if (y !== null) {
        this.document.getElementById("y").value = y;
    }
    let r = localStorage.getItem("r");
    if (r !== null) {
        this.document.getElementById("r").value = r;
    }
    drawGraph();
    drawAllDots();
});