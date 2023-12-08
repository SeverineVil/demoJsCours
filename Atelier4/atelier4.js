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

        tableBody.appendChild(clone);
    }

    // Ajoute les utilisateurs initiaux au chargement de la page
    users.forEach(function (user) {
        createRow(user.nom, user.prénom, user.camp);
    });


     //array.sort(etudiant1, etudiant2) => etudiant1.nom.localcompare(etdiant2.nom)