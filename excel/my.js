var cellsAndRows = new Array();
var cellStart = new String('<td bordercolor="white" id="');
var cellEnd = new String('" contenteditable="false" style="height: 20px" ondblclick="writeMe(this)"></td>');
function newTable(){
    id1.innerHTML += '<h1> Таблица' + (cellsAndRows.length+1) + '</h1>'
    id1.innerHTML += '<table id ="t' + cellsAndRows.length + '"border="1" bordercolor="green" width = "100%"></table>'
    id1.innerHTML += '<button onclick="newRow('+ cellsAndRows.length + ')">Добавить строку</button>';
    id1.innerHTML += '<button onclick="newColumn('+ cellsAndRows.length +')">Добавить колонку</button>';
    cellsAndRows[cellsAndRows.length] = new Array(1,0);
}
function newRow(a){
    var i,table,string;
    var table = document.getElementById("t" + a);
    string = new String("<tr>");
    for(i = 0; i < cellsAndRows[a][0]; i++){
        string += cellStart + cellsAndRows[a][1] + cellEnd;
        cellsAndRows[a][1]++;
    }
    string += "</tr>";
    table.innerHTML += string;
}
function newColumn(a){
    var i;
    var rows = document.getElementById("t" + a).getElementsByTagName('TR');
    for(i = 0; i < rows.length;i++){
        rows[i].innerHTML += cellStart + cellsAndRows[a][1] + cellEnd;
        cellsAndRows[a][1]++;
    }
    cellsAndRows[a][0]++;
    var tds = document.getElementById("t" + a).getElementsByTagName('TD');
    for(i = 0; i < tds.length; i++){
        tds[i].setAttribute("width", 100/cellsAndRows[a][0]);
    }
}
function writeMe(a){
    a.setAttribute('contenteditable', 'true');
    a.setAttribute('autofocus');
    a.setAttribute('onblur','oRead(this)');
}
function oRead(a){
    a.setAttribute('contenteditable', 'false');
    a.removeAttribute('onblur');
    a.removeAttribute('autofocus');
}

