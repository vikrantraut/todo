var app = Built.App('blt711390b01b82014c');
var PersonClass = app.Class('task'); 



var array = [];

var addtask = function(){

var task = document.getElementById("addtask").value;

var data = document.getElementById("table");
var tr = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var edit = document.createElement("button");
var td3 = document.createElement("td");
var del = document.createElement("button");
var text = document.createTextNode(task);

edit.setAttribute("class","btn btn-primary glyphicon glyphicon-edit td11");
del.setAttribute("class","btn btn-danger glyphicon glyphicon-trash");

td1.appendChild(text);
td2.appendChild(edit);
td3.appendChild(del);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
data.appendChild(tr);

//edit

edit.setAttribute("onclick","edit(this)");
del.setAttribute("onclick","del(this)");

}
var editrow;
var edit = function(a){
editrow = a
 var x= a.parentNode.previousSibling.innerHTML; 
 document.getElementById("update").value =x;
 var z = document.getElementById("update")
}

//Delete

var del = function(b){

 var y = b.parentNode
 y.parentNode.remove();

}

// update
var update = function(){
  var x = document.getElementById("update").value
  editrow.parentNode.previousSibling.innerHTML = x;
}