let cname=document.querySelector(".Cname");
let cdob=document.querySelector(".Cdob");

function show() 
{
	console.log("Cat Name: ", cname.value);
	console.log("Cat's Birthday: ", cdob.value);
	cname.value="";
	cdob.value="";
}