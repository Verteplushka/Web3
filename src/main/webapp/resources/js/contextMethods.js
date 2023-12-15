function getDots() {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject("error");
                }
            }
        };
        xhr.open("GET", "Controller", true);
        xhr.send();
    });
}

getDots()
    .then(function (response) {
        console.log(response); // Вывод результата запроса
    })
    .catch(function (error) {
        console.error(error); // Вывод ошибки, если запрос завершился неудачно
    })