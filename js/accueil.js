// after every second timer

function randomRgb() {
  // create the rgb string
  var col =
    "rgb(" +
    randomColor(255) +
    "," +
    randomColor(255) +
    "," +
    randomColor(255) +
    ")";

  //change the text color with the new random color
  document.getElementById("divone").style.color = col;
}

function randomColor(num) {
  return Math.floor(Math.random() * num);
}

setInterval(randomRgb, 1000);

// La section du titre Bienvenue chez AYAMULTIPEDIA

function randomRgb1() {
  // create the rgb string
  var col =
    "rgb(" +
    randomColor(255) +
    "," +
    randomColor(255) +
    "," +
    randomColor(255) +
    ")";

  //change the text color with the new random color
  document.getElementById("divone1").style.backgroundColor = col;
}

function randomColor1(num) {
  return Math.floor(Math.random() * num);
}

setInterval(randomRgb1, 1000);

// Ici la section arrière-plan movement dans page d'accuiel
//  On récupère toute l'image dans le parent de la balaise
let img_slider = document.querySelectorAll(".imgbackground");
console.log(img_slider);
//  On récupère la première l'Image
let etape = 0;
//  On récupère numbre de l'image
let nbr_img = img_slider.length;

//  Cette function permet enleave les class active sur toutes les images
function enleaverActiveImage() {
  for (let z = 0; z < nbr_img; z++) {
    // On récupère l'image inspecter par la boucle
    img_slider[z].classList.remove("active1");
  }
}

setInterval(function () {
  etape++;
  if (etape >= nbr_img) {
    etape = 0;
  }
  enleaverActiveImage();
  img_slider[etape].classList.add("active1");
}, 2000);
