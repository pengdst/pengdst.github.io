function createCORSRequest(method, url) {
    var corsHeader = "https://cors-anywhere.herokuapp.com/";
    var url = corsHeader + url;
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // Otherwise, CORS is not supported by the browser.
        xhr = false;
        return;
    }
    return xhr;
}

// Helper method to parse the title tag from the response.
var baseURL = "https://morizen-world.000webhostapp.com/profile-api/";

var getJSON = function(url, callback) {

    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }
    xhr.responseType = 'json';

    xhr.onload = function() {
        var status = xhr.status;

        if (status == 200) {
            callback(xhr.status, xhr.response);
        } else {
            callback(status);
        }
    };

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
        console.log(xhr);
        callback(xhr.status, xhr.response);
    };

    xhr.send();
};

var url = baseURL + '?apicall=skills';
getJSON(url, function(err, data) {

    if (err != 200) {
        console.error(err);
    } else {
        var text = `URL: ${data.api_url} <br>
                        Status: ${data.status} <br>
                        Skills: ${data.skills}`

        console.log(text);

        $(".mypanel").html(text);
    }
});