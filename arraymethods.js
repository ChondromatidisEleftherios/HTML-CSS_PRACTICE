let a = [];

for (let i = 0; i < 10; i++) {
	a.push(i * 3);
}
console.log(a);
a.pop(); //αφαιρεση τελευταιου στοιχειου
a.shift(); //αφαιρεση πρώτου στοιχεὶου
console.log(a);
let a2 = a.slice(3); //Ασε οπως ειναι απο τη 4η θεση και μετα
console.log(a2);
a2.length = 0;
a2 = a.slice(0, -1); //Ασε οπως ειναι από την αρχη μεχρι το προτελευταιο στοιχείο, δηλαδή κόψε το τελευταίο στοιχείο
console.log(a2);
a2.length = 0;
a2 = a.toSpliced(2, 1); //αφαιρεση στοιχειου απο συγκεκριμενη θεση
console.log("Start array", a, "modified array", a2);
a2.length = 0;
a2 = a.toSpliced(2, 1, 666); //αφαιρεση στοιχειου απο συγκεκριμενη θεση και αντικατασταση απο κατι αλλο
console.log("Start array", a, "modified array", a2);
a3 = [
	[1, 2, 3],
	[6, 7, 8],
];
console.log(a3);
let a4 = a3.flat(1); //ξεδιπλωνει τον πινακα (πχ 2d σε 1d)
console.log(a4);
a3.length = 0;
a4.length = 0;
a3 = [[[[5, 6, 7]]], [50, 100]];
a4 = a3.flat(3);
console.log(a4);
let as = a.join("+"); //Το κανει string αλλα με ενα συγκεκριμενο διαχωριστικο
console.log(as);
let as2 = a.join(""); //Ολοι οι αριθμοι θα ειναι κολλημενοι μαζι
let as3 = a.toString(); //Οι αριθμοι θα ειναι χωρισμενοι με ενα ,
console.log(as2, as3);
console.log(a.includes(3)); //Ελεγχος αν ενα στοιχειο υπαρχει στον πινακα
console.log(a.indexOf(3)); //Σε ποια θεση εμφανιζεται ενα στοιχειο
