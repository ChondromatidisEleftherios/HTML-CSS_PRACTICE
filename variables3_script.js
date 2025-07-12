function toggle (){
let html = document.documentElement; //Κοιταει τι περιεχει το html
let theme;
if (html.className==="darktheme"){ //Το className επιστρεφει το ονομα της κλασης
theme="lighttheme";
}
else{
theme="darktheme";
}
html.className = theme;
}