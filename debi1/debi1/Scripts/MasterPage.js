
function CallHTTPHandler(handlerFile, funcToRun, formData)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.withCredentials = true;

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            if(funcToRun != null)
                funcToRun(xmlhttp.responseText);
    };

    if (formData == null) {
        xmlhttp.open("GET", handlerFile);
        xmlhttp.send();
    }
    else {
        xmlhttp.open("POST", handlerFile);
        xmlhttp.send(formData);
    }
}

/*
this function sends a form data to the server
when the server response returns, funcToRun is launched
*/
function SubmitForm(formElement, funcToRun)
{
    var fd = new FormData(formElement);
    CallHTTPHandler(formElement.action, funcToRun, fd);
}

