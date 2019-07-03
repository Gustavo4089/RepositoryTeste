var ing = [];
function Adicionar(){
	ing.push(document.getElementById("campo").value.toUpperCase());
	Mostrar();
	document.getElementById("campo").value = "";
}

function Remover(){
	ing.pop();
	Mostrar();
	document.getElementById("campo").value = "";
}

function Mostrar(){
	document.getElementById("lista").innerHTML = "<li>"+ing[0]+"</li>";
	for(var i = 1;i < ing.length && ing.length > 0;i++){
		document.getElementById("lista").innerHTML += "<li>"+ing[i]+"</li>";
	}
alert("Fim Do Game");
}
