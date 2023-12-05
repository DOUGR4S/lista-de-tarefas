var elementoBody = document.getElementById("body");
var div = document.createElement("div");
div.innerHTML = `
<div>
<h1>Tarefas</h1>

<ul id="listaDeTarefas">

</ul>
<div class="formulario">
    <input type="text" placeholder="Insira sua tarefa" id="input">
    <button onclick="add()">Adicionar</button>
</div>

</div>
`
elementoBody.appendChild(div)
var input = document.getElementById("input");
var listaDeTarefas = document.getElementById("listaDeTarefas");
document.addEventListener("keypress", function(event){
    
    if (event.code == "Enter"){
        add();
    }  
});

document.addEventListener("click", function(event){
    var alvo = event.target;
    if (alvo.nodeName == "LI"){
        alvo.remove();
    }

});


function add() {
    var tarefaDigitada = input.value;
    var li = document.createElement("li");
    listaDeTarefas.appendChild(li);
    li.innerText = tarefaDigitada;
    input.value = "";
    input.focus();

}




