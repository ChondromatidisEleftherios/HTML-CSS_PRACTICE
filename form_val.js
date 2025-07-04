let uName= document.querySelector(".name");
let pass= document.querySelector(".pass");
let pin= document.querySelector(".pin");

async function show (){
	console.log(uName.value);
	console.log(pass.value);
	if (!uName.value){
		uName.value="";
	}
	pass.value="";
}

async function showPin (){
    console.log(pin);
}