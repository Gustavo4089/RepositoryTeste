function Adicionar(){
	var receive = document.getElementById("lista").innerHTML;
	var ing = document.getElementById("campo").value;
	console.log(ing);
	document.getElementById("lista").innerHTML = receive+"<li>"+ing+"</li>";
	document.getElementById("campo").value = '';
}