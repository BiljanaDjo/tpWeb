let xSpan = document.getElementById("x");
let ySpan = document.getElementById("y");
let curseur = document.getElementById("curseur");
let div2 = document.getElementById("div2");

document.getElementById("madiv").addEventListener("click", () => {
    document.getElementById("madiv").style.backgroundColor = "red";
});


div2.addEventListener("mousemove", function(event) {
    let rect = div2.getBoundingClientRect(); 

    let posX = event.clientX - rect.left;
    let posY = event.clientY - rect.top;

    xSpan.textContent = Math.round(posX);
    ySpan.textContent = Math.round(posY);

    curseur.style.left = (posX - curseur.offsetWidth / 2) + "px";
    curseur.style.top  = (posY - curseur.offsetHeight / 2) + "px";
});

let head = document.getElementById("head");
let scroll = document.getElementById("scroll");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY; 
    if(scrollY > 200) {
        head.style.backgroundColor = "tomato";
    } else {
        head.style.backgroundColor = "lightblue";
    }
    scroll.textContent = `Niveau de scroll : ${Math.round(scrollY)}px`;
});

let formulaire = document.getElementById("formulaire");
let input = document.getElementById("inp");
let messageErreur = document.getElementById("erreurMessage");
let result = document.getElementById("result");

formulaire.addEventListener("submit",(event) => {
    event.preventDefault();x
    let valeur = input.value.trim();
    if(valeur == "") {
        messageErreur.textContent = "Le champs est vide";
        result.textContent = "";
    } else {
        messageErreur.textContent = "";
        result.textContent = `Valeur entrée : ${valeur}`;
        input.value="";
    }
});