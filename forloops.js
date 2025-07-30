let a = [];
a.push(1);
a.push(2);
a.pop();
a.push(2);
a.push(3);
a.shift();
console.log(a);

for (let i = 0; i < 20; i++) {
	a.push(i + 5);
}

for (let i of a) {
	//of οταν εχω array και map
	console.log("Number is:", i);
}

let b = { Terry: 2, Eleni: 5 };

for (let i in b) {
	// in μονο οταν εχω object
	console.log("obj val:", i);
}

for (let i in b) {
	console.log("obj key:", i, "obj val:", b[i]);
}

for (let i in b) {
	console.log("obj key:", i, "obj val:", b[i]);
}

let m = new Map();

m.set("key", "apple");
m.set("key2", "banana");
m.set("key3", "orange");

for (let [i, j] of m) {
	console.log(i, j);
}
