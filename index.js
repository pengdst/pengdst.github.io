import {
    baseURL
} from './assets/js/helpers/network_helper.js';
import {
    getJSON
} from './assets/js/helpers/request_helper.js';


var url = baseURL + '?apicall=skills';

getJSON(url, function(status, data) {
    if (status != 200) {
        console.error(status);
    } else {
        var text =
            `Status: ${data.status}<br>` +
            `Skills: ${data.skills}`


        $(".mypanel").html(text);
    }
});