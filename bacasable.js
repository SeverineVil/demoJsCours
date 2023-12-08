// console.log("Hello World !");

// let note = 17;
// console.log(note);

// console.log("10"+1-1); // affiche une chaîne de caractères 10 "=", concaténation, 101 et -1

// let firstName = "Séverine";
// let lastName = "Villeneuve";
// let age = 50;

// console.log("Vous vous appelez " + firstName + "" + lastName +" et vous avez " + age +" ans"); // en java
// console.log(`Vous vous appelez ${firstName} ${lastName} et vous avez ${age} ans`); // en js

// let nb1 = 5;
// let nb2 = 10;
// function add(nb1, nb2) {
//     if (typeof nb1 === "number" && typeof nb2 === "number") /// en rajoutant cette conditions je l'empêche de concaténer coucou monde car je les défini number
//      { 
//         return nb1 + nb2;
// }
// }
   
// console.log(add(5,2));
// console.log(add("coucou","monde"));

console.log(Math.random()); //pseudo aléatoire entre 0 et 1, 1 non pris en compte
console.log(Math.random() * 100); // nbr entier entre 0 et 100


let min = 10;
let max = 20;
console.log(Math.random() * (max - min) + min); // nbr entre 10 et 20


const colors = ["red", "blue", "yellow"];
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];
console.log(randomColor);