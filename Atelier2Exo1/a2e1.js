document.addEventListener("DOMContentLoaded", function () {
    const titleInput = document.getElementById("title");
    const textArea = document.getElementById("text");
    const colorButton = document.getElementById("btn1");
    const saveButton = document.getElementById("btn2");
    const postContainer = document.getElementById("post_container");

    let newColor;

    colorButton.addEventListener("click", function () {
        const couleur = colorButton.value;
        postContainer.style.backgroundColor = couleur;
    });

    saveButton.addEventListener("click", function () {
        const title = titleInput.value;
        const text = textArea.value;
        

        if (title !== "" && text !== "") {
            const note = document.createElement("div");
            note.className = "note";
            note.style.backgroundColor = postContainer.style.backgroundColor;

            const titleElement = document.createElement("h3");
            titleElement.textContent = title;

            const textElement = document.createElement("p");
            textElement.textContent = text;

            // fonction pour supprimer la note
            const close = document.createElement("span");
            close.textContent = "X";
            close.className = "close-button";
            close.addEventListener("click", function () {
                document.body.removeChild(note);
            });

            note.appendChild(titleElement);
            note.appendChild(textElement);
            note.appendChild(close);
            

          
            note.addEventListener("click", function () {
              note.style.backgroundColor = newColor;
            });

            document.body.appendChild(note);

            titleInput.value = "";
            textArea.value = "";
            postContainer.style.backgroundColor = "";
        } else {
            alert("Please enter a note !");
        }
    });
});
