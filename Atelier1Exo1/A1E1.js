document.addEventListener("DOMContentLoaded", function () {
    const nb1_elem = document.getElementById("nb1");
    const nb2_elem = document.getElementById("nb2");
    const result_elem = document.getElementById("result");
    //donne accès aux balises, pas aux valeurs

    nb1.addEventListener("input", calculate);
    nb2.addEventListener("input", calculate);

    calculate();
      

    function calculate() {
        console.log(nb1); // ne renvoie que l'input balise
        console.log(nb1.valueAsNumber); // ici renvoie bien la valeur taper
        const nombre1 = nb1_elem.valueAsNumber; //ici je récupère la valeur
        const nombre2 = nb2_elem.valueAsNumber;
        if (isNaN(nombre1) || isNaN(nombre2)){
            result.textContent = "= 0"
        } else {
            const sum = nombre1 + nombre2;
            result_elem.textContent = "= " + sum;
        }       
    }

});
