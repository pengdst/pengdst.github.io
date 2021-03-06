export var baseURL = "https://morizen-world.000webhostapp.com/profile-api/";

export function createCORSRequest(method, url) {
    var corsHeader = "https://cors-anywhere.herokuapp.com/";
    var url = corsHeader + url;
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        return xhr = false;
    }
    return xhr;
}