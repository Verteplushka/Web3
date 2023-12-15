$("#clear").on("click", clear);

function clear() {
    $.ajax({
        url: "Controller",
        type: "POST",
        cache: false,
        dataType: "html",
        beforeSend: function () {
            event.preventDefault();
            $("#clear").prop("disabled", true);
        },
        success: function () {
            document.getElementById("tbody").innerHTML = "";
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawGraph();
            $("#clear").prop("disabled", false);
        },
    });
}