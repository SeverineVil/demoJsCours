document.addEventListener("DOMContentLoaded", function () {
    let text = document.getElementById("contenu");
    let template = document.getElementById("saverows-template");
    let saverowsContainer = document.getElementById("container");

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
