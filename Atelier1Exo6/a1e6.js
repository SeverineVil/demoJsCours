// Lorsque les touches sont utilisées
//Z=haut Q=gauche S=bas D=droite

let cercle = document.getElementById("circle");
let topPosition = 0;
let leftPosition = 0;

window.addEventListener("keydown", (e) => {
  console.log(e); //permet de voir dans la console que la clé est "key" ou "keyCode"
  switch (e.key) {
    case "q":
      leftPosition -= 10;
      break;
    case "d":
      leftPosition += 10;
      break;
    case "s":
      topPosition += 10;
      break;
    case "z":
      topPosition -= 10;
      break;
  }
  cercle.style.top = `${topPosition}px`;
  cercle.style.left = `${leftPosition}px`;
});
