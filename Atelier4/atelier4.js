let users = [
    {"nom" : "Skywalker", "prénom" : "Luke", "camp" : "Jedi"},
    {"nom" : "Skywalker", "prénom" : "Anakin", "camp" : "Jedi (?)"},
    {"nom" : "Jin", "prénom" : "Qui Gon", "camp" : "Jedi"},
    {"nom" : "Palpatine", "prénom" : "Chancelier", "camp" : "Sith"},
    {"nom" : "Dark", "prénom" : "Maul", "camp" : "Sith"},
    {"nom" : "Tano", "prénom" : "Ahsoka", "camp" : "Gris"},    
   
] 
  
    let tableBody = document.getElementById("users");  
    let template = document.getElementById("usersrow");
    let heroForm = document.getElementById("form");
   
    
    heroForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addHero();
    });  

    function addHero(){
        let name_elem = document.getElementById("name");
        let firstname_elem = document.getElementById("firstname");
        let crew_elem = document.getElementById("crew");

        let grandNom = name_elem.value;    
        let petitNom = firstname_elem.value; 
        let crew = crew_elem.value;
        
        createRow(grandNom, petitNom, crew);

        heroForm.reset();
    }
  
    function createRow(nom, prénom, camp) {
        let clone = document.importNode(template.content, true);
        let td = clone.querySelectorAll("td");
        td[0].textContent = nom;
        td[1].textContent = prénom;
        td[2].textContent = camp;

        tableBody.appendChild(clone); // ajoute chaque ligne tapée
    }

    // Ajoute les utilisateurs initiaux au chargement de la page
    users.forEach(function (user) {
        createRow(user.nom, user.prénom, user.camp);
    });


    
    // Correction avec le bonus de tri :
    // // Etape 1
    // let table = document.querySelector("tbody");
    // let template = document.querySelector("template");
    // let input_elems = document.querySelectorAll("input"); //permet de récupérer tous les inputs
    // let btn_elem = document.querySelector("button");
    // let sort_btn_elems = document.querySelectorAll(".sorter");
    
    // // Etape 2
    // btn_elem.addEventListener("click", addForceWielder);
    // displayForceWielders();
    // sort_btn_elems[0].addEventListener("click", () => sortBy("nom"));
    // sort_btn_elems[1].addEventListener("click", () => sortBy("prenom"));
    // sort_btn_elems[2].addEventListener("click", () => sortBy("camp"));
    
    // // Etape 3
    // function addForceWielder() {
    //     utilisateurs.push({"nom" : input_elems[0].value, "prenom" : input_elems[1].value, "camp" : input_elems[2].value});
    //     displayForceWielders(); "je rappelle la fonction qui affiche et donc je rajoute la nouvelle saisie"
    // }
    
    // function displayForceWielders() {
    //     table.innerHTML = ""; "permet de remettre le tableau à 0, sinon il renverra à chaque fois le tableau entier, on part d'un tableau propre"
    //     for (let u of utilisateurs) {
    //         let ligne = document.importNode(template.content, true);
    //         let td_elems = ligne.querySelectorAll("td");
    
    //         td_elems[0].innerHTML = u.nom;
    //         td_elems[1].innerHTML = u.prenom;
    //         td_elems[2].innerHTML = u.camp;
    
    //         table.appendChild(ligne);
    //     }
    // }
    
    // function sortBy(criteria) {
    //     utilisateurs.sort((u1, u2) => u1[criteria].localeCompare(u2[criteria]));
    //     displayForceWielders();
    // }
    
    