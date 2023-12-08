let countries = [ "France", "Japon", "Togo","Suède", "Brésil"];

let array = document.getElementById("my_countries");

for (let i = 0; i < countries.length; i++) {  
     //insert 1 ligne par loop dans un tableau
     // si mon tableau est vide le (i) ne fonctionnera pas, il faudra mettre (-1)
    let line = array.insertRow(i);    
    let cell = line.insertCell(0); // insert une cellule dans chaque ligne
    cell.innerHTML = countries[i];
}