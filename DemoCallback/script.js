// let operation = taille
// console.log(operation("Salut tout le monde !"));

displayOp(taille, "Hello World !");
displayOp(firstChar, "Toto");
displayOp((str) => str.toUpperCase(), "bonjour");

function taille(chaine) {
    return chaine.length;
}


function firstChar(chaine) {
    return chaine[0];
}

function displayOp(operation, chaine) {
    console.log(operation(chaine));
}