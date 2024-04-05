(function (d) {

    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.ipify.org?format=json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
        }
    };
    request.onerror = function () {
        console.error('Error occurred during the network request');
    };
    request.send();
})(document)

/*得到ip地址 stop */
