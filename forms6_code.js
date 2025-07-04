let ch=document.querySelector("#cheese");
let tom=document.querySelector("#tomato");
let pepe=document.querySelector("#peperoni");
let pep=document.querySelector("#pepper");

function show() {
	if (ch.checked){
		console.log("Cheese");
	}
	else if (tom.checked){
		console.log("Tomato");

	}
	else if (pepe.checked){
		console.log("Peperoni");
	}
	else{
		console.log("Pepper");
	}
}