document.addEventListener("DOMContentLoaded", function () {
    let text = document.getElementById("contenu");
    let template = document.getElementById("saverows-template");
    let saverowsContainer = document.getElementById("container"); //récupération de la balise table dans laquelle s'inscrira le texte en dessous

    text.addEventListener("change",autoSave);
   

    function autoSave() {
        let area = text.value;
        console.log(area);

        if (area !== "") {           
            let clone = document.importNode(template.content, true);
            clone.querySelector("td").textContent = area;        
            saverowsContainer.appendChild(clone);

            setInterval(() => {
                autoSave()
                    }, 10000);
        }
       
    }
});
 // Correction :
// let nbCaracteresOld = 0; // Je pars de 0 caractères
// let p_elem = document.querySelector("p");
// let saisie_elem = document.getElementById("saisie");
// let conteneur = document.getElementById("conteneur");
// let template = document.querySelector("template");

// setInterval(() => {
//     let copie = document.importNode(template.content, true);
//     copie.querySelector("td").innerHTML = saisie_elem.value;
//     conteneur.appendChild(copie);

//     let nbCaracteresNew = saisie_elem.value.length; // Je calcul les nouveaux caractères tapés
//     let nbCaracteresEcrits = nbCaracteresNew - nbCaracteresOld; Je fais de 0 à nouveaux caractères
//     let nbCaracteresParMinute = nbCaracteresEcrits * 6; // Mon setinterval est à 10 secondes donc pour 1 mn je * 6
//     p_elem.innerText = `Vous écrivez ${nbCaracteresParMinute} caractères par minute !`;

//     nbCaracteresOld = nbCaracteresNew; //pour la deuxième sauvegarde,je repars de la valeur d'avant de caractères
// }, 10000);