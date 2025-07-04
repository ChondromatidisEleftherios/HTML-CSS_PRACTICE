let name = document.querySelector(".name");
let orDate= document.querySelector(".arrival");
let gkot = document.querySelector(".gkotopoulo");
let gxoir = document.querySelector(".gxoirino");
let mar= document.querySelector(".marouli");
let ntom= document.querySelector(".ntomata");
let krem= document.querySelector(".kremmydi");
let com= document.querySelector(".comments");

function show (){
	console.log("Customer Name:", name.value);
	console.log("Selected arrival date:", orDate.value);
	console.log("Souvlaki Ingredients: ");
	if (gkot.checked){
		console.log("- Chicken Gyro");
	}
	else{
		console.log("- Pork Gyro");
	}
	if (mar.checked){
		console.log("- Lettuce");
	}
	if (ntom.checked){
		console.log("- Tomato");
	}
	if (krem.checked){
		console.log("- Onion");
	}
	console.log("Comments: ", com.value);
	gkot.checked=false;
	gxoir.checked=false;
	mar.checked=false;
	ntom.checked=false;
	krem.checked=false;
	name.value="";
	orDate.value=null;
	com.value="";
}