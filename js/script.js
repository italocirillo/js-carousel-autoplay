// INIZIALIZZAZIONE
const arrayNomeImmagini = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];

const contenitoreImmagineGrande = document.querySelector(".contenitore-immagine-grande");
const contenitoreImmagine = document.querySelector(".contenitore-immagine");

// LOGICA
// Ciclo for che crea le varie immagini grandi
for(let i=0;i<arrayNomeImmagini.length;i++){
    const Immagine = ` <img class="elemento-immagine" src="${arrayNomeImmagini[i]}" alt="img1"> `;
    contenitoreImmagineGrande.innerHTML += Immagine;
}
// Ciclo for che crea le varie immagini piccole
for(let i=0;i<arrayNomeImmagini.length;i++){
    const Immagine = ` <img class="elemento-immagine-a-lato" src="${arrayNomeImmagini[i]}" alt="img1"> `;
    contenitoreImmagine.innerHTML += Immagine;
}
// Inizializzo array di tutti i tag image
const arrayImmaginiGrandi = document.getElementsByClassName("elemento-immagine");
const arrayImmagini = document.getElementsByClassName("elemento-immagine-a-lato");
// Inizializzo la prima immagine
let indiceAttuale=0;
arrayImmaginiGrandi[indiceAttuale].classList.add("active");
arrayImmagini[indiceAttuale].classList.add("elemento-immagine-lato-attivo");

// Gestione bottoni
const bottonePrecedente=document.querySelector(".precedente");
const bottoneSuccessivo=document.querySelector(".successiva");
// Bottone Successivo premuto
bottoneSuccessivo.addEventListener("click", function(){
    arrayImmaginiGrandi[indiceAttuale].classList.remove("active");
    arrayImmagini[indiceAttuale].classList.remove("elemento-immagine-lato-attivo");
    // Controllo bottoni
    if(indiceAttuale === (arrayImmaginiGrandi.length-1)){
        indiceAttuale=0;
    }else{
        indiceAttuale++;
    }
    arrayImmaginiGrandi[indiceAttuale].classList.add("active");
    arrayImmagini[indiceAttuale].classList.add("elemento-immagine-lato-attivo");
});

 //Bottone precedente premuto
 bottonePrecedente.addEventListener("click", function(){
    arrayImmaginiGrandi[indiceAttuale].classList.remove("active");
    arrayImmagini[indiceAttuale].classList.remove("elemento-immagine-lato-attivo");
    // Controllo bottoni
    if(indiceAttuale === 0){
        indiceAttuale=arrayImmaginiGrandi.length-1;
    }else{
        indiceAttuale--;
    }
    arrayImmaginiGrandi[indiceAttuale].classList.add("active");
    arrayImmagini[indiceAttuale].classList.add("elemento-immagine-lato-attivo");
 });

