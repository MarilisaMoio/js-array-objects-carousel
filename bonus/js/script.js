//get the buttons
const arrowUp = document.querySelector("#arrow-up");
const arrowDown = document.querySelector("#arrow-down");
const fowardBtn = document.querySelector("#autoplay-foward")
const backwardBtn = document.querySelector("#autoplay-backward")

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

//popola dinamicamente la thumbnail
images.forEach((game) => {
    let thumbnailContainer = document.querySelector("#thumbnail")
    let newImgInThumbnail = document.createElement("img")
    newImgInThumbnail.setAttribute("src", `${game.image}`)
    thumbnailContainer.append(newImgInThumbnail);
});

//counter per identificare di volta in volta la coppia di elementi da rendere attivi
let counter = 0

//strutturazione del punto di partenza
let activeImage = images[counter];
createImgTemplate(activeImage.image, activeImage.title, activeImage.text)
whatsTheActiveImg()


const allImgs = document.querySelectorAll("#thumbnail>img");
//eventi al click
arrowUp.addEventListener("click", function(){
    previousImg();

    whatsTheActiveImg();

    let activeImage = images[counter];
    createImgTemplate(activeImage.image, activeImage.title, activeImage.text)
})

arrowDown.addEventListener("click", function(){
    nextImg();

    whatsTheActiveImg();

    let activeImage = images[counter];
    createImgTemplate(activeImage.image, activeImage.title, activeImage.text)
})


allImgs.forEach((img, index) => {
    img.addEventListener("click", function(){
        counter = index
        whatsTheActiveImg();

        activeImage = images[counter];
        createImgTemplate(activeImage.image, activeImage.title, activeImage.text)
    })
})

fowardBtn.addEventListener("click", function(){
    if(typeof backwardInterval !== 'undefined'){
        clearInterval(backwardInterval)
    }
    if(typeof fowardInterval !== 'undefined'){
        clearInterval(fowardInterval)
    } 

    fowardInterval = setInterval(function(){
        nextImg();
        console.log("io sono foward!" + counter)
        whatsTheActiveImg();

        let activeImage = images[counter];
        createImgTemplate(activeImage.image, activeImage.title, activeImage.text)
    }, 3000)
})

backwardBtn.addEventListener("click", function(){
    if(typeof fowardInterval !== 'undefined'){
        clearInterval(fowardInterval)
    } 
    if(typeof backwardInterval !== 'undefined'){
        clearInterval(backwardInterval)
    }

    backwardInterval = setInterval(function(){
        previousImg();
        console.log("io sono backward!" + counter)
        whatsTheActiveImg();

        let activeImage = images[counter];
        createImgTemplate(activeImage.image, activeImage.title, activeImage.text)
    }, 3000)
})



//funzione per generare l'elemento che mostra l'immagine attiva e la relativa descrizione
function createImgTemplate(path, game, paragr){
    const imgShownContainer = document.querySelector("#shown-img");
    console.log(imgShownContainer)

    imgShownContainer.innerHTML = `
    <img src="${path}" alt="${game.toLowerCase()}">
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
        counter = images.length - 1;
    }
    console.log(counter)
}

function nextImg(){
    console.log(counter)
    if (counter < images.length - 1){
    counter++
    } else {
        counter = 0
    }
    console.log(counter)
}

//funzione per definire qual'è l'immagine visualizzata nella thumbnail e attribuire la classe, rimuovendola all'immagine precedente
function whatsTheActiveImg(){
    const allImgs = document.querySelectorAll("#thumbnail>img");
    const nowActive = document.querySelector(".active");
    
    //condizione per farla funzionare anche al primo richiamo
    if(nowActive !== null){
        nowActive.classList.remove("active");
    }

    allImgs[counter].classList.add("active");
}