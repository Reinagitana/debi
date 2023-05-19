// JavaScript source code
var riversArr;

function CreateRiversTableHeader() {
    var cell1 = document.createElement("th");
    cell1.setAttribute("width", "300");
    cell1.style.borderWidth = "thick";
    cell1.style.textAlign = "center";
    cell1.style.fontSize = "xx-large";
    cell1.style.color = "pink";
    cell1.style.fontWeight = "bold";
    cell1.innerHTML = "Title";

    var cell2 = document.createElement("th");
    cell2.setAttribute("width", "250");
    cell2.style.borderWidth = "thick";
    cell2.style.textAlign = "center";
    cell2.style.fontSize = "xx-large";
    cell2.style.color = "pink";
    cell2.style.fontWeight = "bold";
    cell2.innerHTML = "Picture";

    var cell3 = document.createElement("th");
    cell3.setAttribute("width", "250");
    cell3.style.borderWidth = "thick";
    cell3.style.textAlign = "center";
    cell3.style.fontSize = "xx-large";
    cell3.style.color = "pink";
    cell3.style.fontWeight = "bold";
    cell3.innerHTML = "Type";

    var cell4 = document.createElement("th");
    cell4.setAttribute("width", "300");
    cell4.style.borderWidth = "thick";
    cell4.style.textAlign = "center";
    cell4.style.fontSize = "xx-large";
    cell4.style.color = "pink";
    cell4.style.fontWeight = "bold";
    cell4.innerHTML = "Link";

    var headerRow = document.createElement("tr");
    headerRow.style.borderStyle = "none";
    headerRow.style.borderCollapse = "collapse";
    headerRow.appendChild(cell1);
    headerRow.appendChild(cell2);
    headerRow.appendChild(cell3);
    headerRow.appendChild(cell4);

    return headerRow;
}

function CreateRiversTableRow(row) {
    var cell1 = document.createElement("td");
    cell1.setAttribute("width", "200");
    cell1.style.borderWidth = "thick";
    cell1.style.textAlign = "center";
    cell1.style.fontSize = "xx-larg";
    cell1.style.color = "black";
    cell1.style.fontWeight = "bold";
    cell1.innerHTML = riversArr[row].Title;

    var cell2 = document.createElement("td");
    cell2.setAttribute("width", "250");
    cell2.style.borderWidth = "thick";
    cell2.style.textAlign = "center";
    cell2.style.fontSize = "xx-larg";
    cell2.style.color = "black";
    cell2.style.fontWeight = "bold";
    cell2.innerHTML = "<img src='" + riversArr[row].Picture + "'/>";


    var cell3 = document.createElement("td");
    cell3.setAttribute("width", "200");
    cell3.style.borderWidth = "thick";
    cell3.style.textAlign = "center";
    cell3.style.fontSize = "xx-larg";
    cell3.style.color = "black";
    cell3.style.fontWeight = "bold";
    cell3.innerHTML = riversArr[row].Type;

    var cell4 = document.createElement("td");
    cell4.setAttribute("width", "200");
    cell4.style.borderWidth = "thick";
    cell4.style.textAlign = "center";
    cell4.style.fontSize = "xx-larg";
    cell4.style.color = "black";
    cell4.style.fontWeight = "bold";
    cell4.innerHTML = riversArr[row].Link;

    var itemRow = document.createElement("tr");
    itemRow.style.borderStyle = "none";
    itemRow.style.borderCollapse = "collapse";
    itemRow.appendChild(cell1);
    itemRow.appendChild(cell2);
    itemRow.appendChild(cell3);
    itemRow.appendChild(cell4);

    return itemRow;
}


function BuildRiversTable(responseText) {
    riversArr = JSON.parse(responseText);
    var riversTable = document.getElementById("Tb1");
    if (!riversTable) {
        console.error("Cannot find riversTable element in the HTML page.");
        return;
    }
    riversTable.style.borderCollapse = "collapse";
    var headerRow = CreateRiversTableHeader();
    riversTable.appendChild(headerRow);

    for (var i = 0; i < riversArr.length; i++) {
        if (riversArr[i] !== null) {
            var itemRow = CreateRiversTableRow(i);
            riversTable.appendChild(itemRow);
        }
    }
}


CallHTTPHandler("../DataHandlers/SharedContent.ashx", BuildRiversTable);