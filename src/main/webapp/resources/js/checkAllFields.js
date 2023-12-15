$("#submit").on("click", checkAllFields);

function checkAllFields() {
    let x = localStorage.getItem("x");
    let y = $("#y").val();
    let r = $("#r").val();
    let response = "";

    if (x === null) {
        response = "X must be chosen"
    } else if (isNaN(y)) {
        response = "Y must be a number";
    } else if (y === "") {
        response = "Y must be chosen";
    } else if (isNaN(r)) {
        response = "R must be a number";
    } else if (r === "") {
        response = "R must be chosen";
    } else {
        let bigY = new Big(y);
        if (!(bigY.plus(new Big(-5)) < 0 && bigY.plus(new Big(5)) > 0)) {
            response = "Y must be in (-5; 5)";
        }

        let bigR = new Big(r);
        if (!(bigR.plus(new Big(-1)) > 0 && bigR.plus(new Big(-4)) < 0)) {
            response = "R must be in (1; 4)";
        }
    }

    if (response != "") {
        document.getElementById("error").innerHTML = response;
        event.preventDefault();
        return;
    }
    document.getElementById("error").innerHTML = "";
    $.ajax({
        url: "Controller",
        type: "POST",
        cache: false,
        data: {'x': x, 'y': y, 'r': r},
        dataType: "html",
        beforeSend: function () {
            event.preventDefault();
            $("#submit").prop("disabled", true);
        },
        success: function (data) {
            $("#tbody").append(data);
            //addDot(x, y, false);
            $("#submit").prop("disabled", false);
            window.location.href = "index.jsp";
        },
    });
}