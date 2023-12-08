let names = ["Thomas", "Séverine", "Julien", "Sidney", "Joe" ];

names [4] = "Marwa";
console.log(names[2]);

console.log(names);

names.push("Florian"); // ajoute florian à la fin
console.log(names);


// console.log(names.pop()); // retire le dernier élément d'un tableau
// console.log(names);
// console.log(names.length); // taille du tableau

names[15] = "Pierre-Olivier";
console.log(names); // PO sera ajouté en 15ème index, et il comblera avec des vides
console.log(names.length);

console.log(names.slice(2, 4));
names.sort(); // trier par ordre alphabétique
console.log(names);

names.sort((el1, el2) => el1.length - el2.length); // quels sont les 2 éléments à comparer ?
console.log(names); // classés par nbr de caractères

let namesPairs = names.filter((el) => el.length % 2 == 0);
console.log(namesPairs);

let namesS = names.filter((el) => el.charAt(0) === "S");
console.log(namesS); // affiche les noms commençant par "S"