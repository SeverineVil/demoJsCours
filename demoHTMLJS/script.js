document.body.onload = init;
// je charge toutes les balises du DOM avant de leur affecter un comportement

    // Demo 1
    function init() {
        let button = document.getElementById("mon_beau_bouton");
        button = addEventListener("click", changeText);

    // Demo 2
        let mes_boutons = document.querySelectorAll(".button_container > button") // récupère tous les boutons du html et appliqque à chaque l'event
        for (let curent_button of mes_boutons) { // boucle "for of"
            curent_button.addEventListener("click", afficherClic);
            }
    
     // Demo 3
        let saisie = document.getElementById("ma_saisie");
        saisie.addEventListener("change", ajouterAuTableau);
}
   
    function afficherClic(e) {
        console.log(e);
        alert(e.target.innerText);
    }

    function changeText() {
    // alert("Ceci est un message important !");
    let paragraph = document.getElementById("textToChange");
    paragraph.innerText = "Le texte a été changé";    
    }

    function ajouterAuTableau(e) {
    // Objectif : créer un td et un tr dans la table et associé le texte saisie. Commencer par le plus petit 
        let mon_td = document.createElement("td");
        mon_td.innerText = e.target.value;

        let mon_tr = document.createElement("tr");
        // je mets la balise td nouvellement créée dans le tr
        mon_tr.appendChild(mon_td);

        let ma_table = document.getElementById("my_array");
        ma_table.appendChild(mon_tr);
}