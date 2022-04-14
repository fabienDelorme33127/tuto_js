var a =10, b = 2;

a += b;
console.log(a);

var chips = prompt("combien avez vous de chips");
var tomate = prompt("combien avez vous de tomate");

var result = parseInt(chips) + parseInt(tomate);

console.log("vous avez au total : " + result + " chips et tomates");



var a =10, b = 2;
var result = a > b ? "A > B" : "B < A";
console.log(result);



var tab = ["truc", "chose", "bidule", "george"];
console.log(tab.slice(1,3));