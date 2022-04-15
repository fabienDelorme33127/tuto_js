/* var a =10, b = 2;

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


function operation(a, b){
        var somme = a + b;
        var difference = a - b;

        return {addition: somme, soustraction: difference};
}
var resultat = operation(10, 5);
console.log("addition : " + resultat.addition);
console.log("soustraction : " + resultat.soustraction); 


var personne = {
        nom_complet: "fab del",
        age: 19,
        affichage_tout: function(){
                console.log("coucou " + personne.nom_complet + ", age: " + personne.age);
        }
}

personne.affichage_tout(); 


var personne = {
        nom_complet: "fab del",
        age: 19,
        ville: "bordeaux"
}

for(var key in personne){
        console.log("key: " + key + ", valeur: " + personne[key]);
}  */

window.onload = function(){

        var compteur = 0;
        var interval = setInterval(function(){
                if(compteur >= 5){
                        clearInterval(interval);
                }
                console.log(compteur);
                compteur++;
        }, 1000); //en ms
}

function changeColor(){
        document.querySelector("h1").style.color = "red";
        document.querySelector("p").style.color = "blue";
}