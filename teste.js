function Adicionar(){
	var receive = getElementsById("lista").innerHTML;
	var ing = getElementsByTagName("campo").value;
	getElementsById(lista).innerHTML = receive+"<li>"+ing+"</li>"
}