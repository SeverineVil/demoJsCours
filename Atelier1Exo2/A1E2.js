   // bien penser à mettre position: absolute dans le css
   
   let button = document.getElementById("my_button");
   button.addEventListener("mouseover", fly );


    function fly() {
        let w = window.innerWidth - button.offsetWidth; //clientWidth ne vas pas tenir compte de la bordure et du padding du bouton
        let h = window.innerHeight - button.offsetHeight;
       // de fait avec offset il n'ira jamaais s'écrabouiller dans la fenêtre
        let randomW = Math.random() * w;
        let randomH = Math.random() * h;
        button.style.left = randomW + "px"; // ici je peux utiliser le css left car j'ai défini sa position absolute dans le css
        button.style.top = randomH + "px";
    }



