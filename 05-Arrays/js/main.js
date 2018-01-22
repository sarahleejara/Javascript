var nombre = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = 0;
  for (let i=0; i < nombre.length; i++) {
    result = result + nombre[i];
  }
console.log(result);

document.getElementById("demo").innerHTML = result;

// Exercice 2

var actors = ["Jason Momoa", "Chris Hemsworth", "Chris Evans"];
num = 0;
// tant que l'élément est plus petit que la longeur de la var est va loop sinon elle s'arrete
for (var i = 0; i < actors.length; i++) {
  console.log("Number " + (i+1) + " is " + actors[i] + ".");
// je dois mettre i+1 puisque l'array commence tjrs par 0 et si je ne précise pas le premier chiffre qui va apparaitre sera 0.
}
var positions = ["first", "second", "third"];
for (var ii = 0; ii < actors.length; ii++) {
  console.log("The " + positions[ii] + " is " + actors[ii] + ".");
}
