/* global google */

let choose = document.getElementById("emprestimo");
function calcparcelas(value) {
    document.getElementById("valempresitmo").hidden = true;
    document.getElementById("parcempresitmo").hidden = false;
    document.getElementById("parc").innerHTML = "Em quantas vezes?";
    document.getElementById("escolhidos").innerHTML = "Você selecionou " + value;
}

function voltar() {
    document.getElementById("parcempresitmo").hidden = true;
    document.getElementById("valempresitmo").hidden = false;
    document.getElementById("parc").innerHTML = "Quanto você precisa?";
    document.getElementById("escolhidos").innerHTML = null;
}

function liberatermo() {
    if(document.getElementById("exampleCheck1").checked === true){
    document.getElementById("aceitocondições").disabled = false;
    } else {
    document.getElementById("aceitocondições").disabled = true;        
    }
}
