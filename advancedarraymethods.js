let a = [1, 2, 3, 4, 5, 6, 7, 8];
let filtered = [];
//filter
//Το χρησιμοποιω για να κοψω στοιχεια απο ενα array μεσω μιας συναρτησης, χωρις να χρειαστω for, και φτιαχνει νεο πινακα με τις αλλαγες

filtered = a.filter(function (i) {
	return i > 5; //θα επιστρεψει μονο οσα ειναι true
});
console.log(filtered);

filtered.length = 0;
filtered = a.filter(function (i) {
	if (i < 4) {
		return false;
	}
	return i % 2 == 0;
});
console.log(filtered);

//map
//Πειραζει τις τιμες των στοιχειων, οχι το πληθος τους μεσω μιας συναρτησης, και φτιαχνει νεο πινακα με τις αλλαγες

let mapped = [];

mapped = a.map(function (i) {
	if (i < 5) {
		return i * 2; //Διπλασιασε τις τιμες
	} else {
		return i * i; //Υψωσε σε δυναμη τις τιμες
	}
});
console.log(mapped);

//forEach
//Ειναι σαν το map απλα με τη διαφορα οτι εδω το χρησιμοποιεις ΜΟΝΟ για console.log. ΔΕΝ ΑΛΛΑΖΕΙ τον πινακα!!!

let foreached = [];
foreached = a.forEach(function (i) {
	console.log(i * 10);
	//ΔΕΝ ΚΑΝΕΙΣ return
});

//reduce
//Μεσω μια συναρτησης, επιστρεφει μια τελικη τιμη. Ειναι καλο για οταν θες sum ή κατι σχετικο

let grades = [2.0, 5.0, 6.5, 9.5, 8.5, 1.0, 6.0, 5.0]; //Επεστρεψε το μεγαλυτερο βαθμο
let reduced;
reduced = grades.reduce(function (currentmax, value) {
	return Math.max(currentmax, value); //currentmax ειναι η τελευταια τιμη που κράτησε η συναρτηση, και το value ειναι η τρεχων τιμη που εξεταζεται
});
console.log(reduced);
