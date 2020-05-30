var url = baseURL + '?apicall=skills';

getJSON(url, function(status, data) {
    if (status != 200) {
        console.error(status);
    } else {
        var text = `URL: ${data.api_url}<br>` +
            `Status: ${data.status}<br>` +
            `Skills: ${data.skills}`


        $(".mypanel").html(text);
    }
});