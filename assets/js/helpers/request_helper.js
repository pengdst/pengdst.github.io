import {
    createCORSRequest
} from './network_helper.js';

export var getJSON = function(url, callback) {

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
        callback(xhr.status, xhr.response);
    };

    xhr.send();
};

var postJSON = function(url, callback) {

    var xhr = createCORSRequest('POST', url, true);
    xhttp.open("POST", "demo_post2.asp", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("fname=Henry&lname=Ford");
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
    };

    //examples
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var name = "name=" + $_POST['name'];
    var skills = "skills=" + $_POST['skills'];
    xhr.send("?" + name + "&" + skills);
};