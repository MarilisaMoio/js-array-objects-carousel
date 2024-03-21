//get the buttons
const arrowUp = document.querySelector("#arrow-up");
const arrowDown = document.querySelector("#arrow-down");

//starting aray
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//counter per identificare di volta in volta la coppia di elementi da rendere attivi
let counter = 0

arrowUp.addEventListener("click", previousImg)

arrowDown.addEventListener("click", nextImg)

let activeImage = images[counter];
createImgTemplate(activeImage.image, activeImage.title, activeImage.text)

//funzione per generare l'elemento che mostra l'immagine attiva e la relativa descrizione
function createImgTemplate(path, game, paragr){
    const imgShownContainer = document.querySelector("#shown-img");
    console.log(imgShownContainer)

    imgShownContainer.innerHTML = `
    <img src="${path}" alt="">
    <div id="description">
        <h3>${game}</h3>
        <p>${paragr}</p>
    </div>
    `
    console.log(imgShownContainer)
}

//funzioni per far scorrere il counter
function previousImg(){
    console.log(counter)
    if (counter > 0){
    counter--
    } else {
        counter = images.length
    }
    console.log(counter)
}

function nextImg(){
    console.log(counter)
    if (counter < images.length){
    counter++
    } else {
        counter = 0
    }
    console.log(counter)
}