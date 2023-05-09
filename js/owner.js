//Splitting();

// Hover over the title to pause the CSS animation

let img_slider1199 = document.querySelectorAll(".wrapper11 div");
console.log(img_slider1199);
//  On récupère la première l'Image
let etape1199 = 0;
//  On récupère numbre de l'image
let nbr_img11 = img_slider1199.length;

//  Cette function permet enleave les class active sur toutes les images
function enleaverActiveImage199() {
  for (let q = 0; q < nbr_img11; q++) {
    // On récupère l'image inspecter par la boucle
    img_slider1199[q].classList.remove("active99");
  }
}

setInterval(function () {
  etape1199++;
  if (etape1199 >= nbr_img11) {
    etape1199 = 0;
  }
  enleaverActiveImage199();
  img_slider1199[etape1199].classList.add("active99");
}, 2000);
