// Ici la section arrière-plan movement dans page d'accuiel
//  On récupère toute l'image dans le parent de la balaise

// console.log("good morning");
let right = document.getElementById("right");
let left = document.getElementById("left");
console.log(left);
let img_slider1 = document.querySelectorAll(".productChild");
console.log(img_slider1);
//  On récupère la première l'Image
let etape1 = 0;
//  On récupère numbre de l'image
let nbr_img1 = img_slider1.length;

//  Cette function permet enleave les class active sur toutes les images
function enleaverActiveImage() {
  for (let z = 0; z < nbr_img1; z++) {
    // On récupère l'image inspecter par la boucle
    img_slider1[z].classList.remove("active");
  }
}

right.addEventListener("click", function () {
  etape1++;
  if (etape1 >= nbr_img1) {
    etape1 = 0;
  }
  enleaverActiveImage();
  img_slider1[etape1].classList.add("active");
});

left.addEventListener("click", function () {
  etape1--;
  if (etape1 < 0) {
    etape1 = nbr_img1 - 1;
  }
  enleaverActiveImage();
  img_slider1[etape1].classList.add("active");
});

setInterval(function () {
  etape1++;
  if (etape1 >= nbr_img1) {
    etape1 = 0;
  }
  enleaverActiveImage();
  img_slider1[etape1].classList.add("active");
}, 2000);
