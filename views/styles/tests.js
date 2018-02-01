
var cantPermeados = 0;
var primerdiv;



function initURL(){
  sidegifs();
  primerdiv = document.getElementById("maindiv");

}

function alternate() {
    if (document.getElementById("button1").value == "Transform this Duck!"){
    	document.getElementById("button1").value = "Transforma este Pato!";
        document.getElementById("demo").innerHTML = "<a href='/logon' > <img class='img' src='http://www.pliniocorreadeoliveira.info/pato.jpg' alt='no pato'> </a>";}
    else {document.getElementById("button1").value = "Transform this Duck!";
    document.getElementById("demo").innerHTML = "Duck";}
}

function sidegifs() {
var shark= //"<img class='img' src='https://media.giphy.com/media/E6em2Y0TBtkWs/source.gif'>"; 
"<img class='img' src='https://i.imgur.com/rMsGafK.gif'>";
	document.getElementById("sidegif").innerHTML = shark.repeat(40);
    document.getElementById("sidegif2").innerHTML = shark.repeat(40);
}

function modifauto(valor){
if (valor != ""){
var parrafo= document.getElementById("automod").innerHTML;
document.getElementById("automod").innerHTML = parrafo + " " + valor + ".<br />";
document.getElementById("autodemowrite").value = "";
}
}

function detectarenter(e) {
    var tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 13){
        modifauto(autodemowrite.value);
        }
}

function borramod(veler){
  if (veler == "automod"){
    document.getElementById(veler).innerHTML = "";
  }else{
  var elem = document.getElementById(veler);
  elem.parentNode.removeChild(elem);
}
}

function permeador(){
agregarBotonBorrado();

var autoM = document.getElementById("automod");

var data = {name: autoM.innerHTML};

fetch('/api/test', {
  headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json'},
  method: 'POST',
  body: JSON.stringify({data})
})
.then(function(res) {
  return res.json();
}).then(function(data){
  console.log(data);
})
;

autoM.id = "perm" + cantPermeados;
cantPermeados++;
var nuevoElem = document.createElement("div");
nuevoElem.innerHTML= "";
nuevoElem.id= "automod";
primerdiv.appendChild(nuevoElem);
}

function agregarBotonBorrado(){
botonA = "<button onclick='borramod("+'"perm'+ cantPermeados + '"'+")'>Borrar Post</button>";
modifauto(botonA);
}
