// let contenu = fetch("contenu.json")
// console.log(contenu); Ca ne fonctionne pas, c'est jsute une promesse mais il n'y a pas de then donc il ne renvoie rien


// le contenu du then de sera exécuté que quand la lecture du fichier sera finie
fetch("contenu.json")
    .then(res => res.json())
    // .then(data => console.log(data));
    // .then(data => console.log(data[2].nom));
    .then(data => {
        // Afficher les données dans la page HTML
        const jsonDataDiv = document.getElementById("jsonData");
        jsonDataDiv.innerHTML = JSON.stringify(data);
       
    });



    // console.log(res) ne pas le mettre en dehors de l'asynchrone car il sera lu avant res