let products = {
  data: [
    {
      productName: "Baby Lotion",
      category: "Topwear",
      price: "11",
      image: "../images/produits-cosmetique/baby_lotion.jpg",
      link: "../../index.html",
    },
    {
      productName: "Bkhoor Al Arab",
      category: "Jacket",
      price: "11",
      image: "../images/produits-cosmetique/bkhoor.jpg",
      link: "../../index.html",
    },
    {
      productName: "Cream",
      category: "Bottomwear",
      price: "22",
      image: "../images/produits-cosmetique/bkhoor1.jpg",
      link: "../../index.html",
    },
    {
      productName: "Snake Oil",
      category: "Jacket",
      price: "11",
      image: "../images/produits-cosmetique/bkhoor11.jpg",
      link: "../../index.html",
    },

    {
      productName: "Vatica",
      category: "Bottomwear",
      price: "22",
      image: "../images/produits-cosmetique/cream_vatica.jpg",
      link: "../../index.html",
    },

    {
      productName: "Vatica",
      category: "Bottomwear",
      price: "22",
      image: "../images/produits-cosmetique/cream_vatiKa1.jpg",
      link: "../../index.html",
    },
    {
      productName: "Max Lady",
      category: "Bottomwear",
      price: "7",
      image: "../images/produits-cosmetique/max_lady.jpg",
      link: "../../index.html",
    },

    {
      productName: "Tameem",
      category: "Bottomwear",
      price: "22",
      image: "../images/produits-cosmetique/perfume_tameem.jpg",
      link: "../../index.html",
    },

    {
      productName: "White Secret",
      category: "Bottomwear",
      price: "13",
      image: "../images/produits-cosmetique/whitesecret.jpg",
      link: "../../index.html",
    },
  ],
};

for (let i of products.data) {
  // create card
  let card = document.createElement("div");
  //   console.log(card);
  // card shold have category and should stay hidden initially

  card.classList.add("card88", i.category, "hide");
  // image div
  let imageContainer = document.createElement("div");
  //   console.log(imageContainer);
  imageContainer.classList.add("image-container");
  // image tag

  let image = document.createElement("img");
  //   console.log(image);
  image.setAttribute("src", i.image);
  imageContainer.appendChild(image);
  card.appendChild(imageContainer);
  // container
  let container = document.createElement("div");
  container.classList.add("container");
  // product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerHTML = i.productName.toUpperCase();
  name.innerText = "Nom : " + i.productName;
  container.appendChild(name);
  card.appendChild(container);
  // Price
  let price = document.createElement("h6");
  //price.innerText = i.price + " €";
  price.innerText = "Prix : " + i.price + " €";
  container.appendChild(price);

  let lien = document.createElement("a");

  lien.setAttribute("href", i.link);

  lien.innerHTML = "Achats en magain retrait en magasin";

  container.appendChild(lien);

  // let lien = document.createElement("a");
  // lien.setAttribute("href", i.link);
  // lien.innerHTML = "Lire plus";
  // container.appendChild(lien);
  // lien.innerHTML = "Lire plus";
  // container.appendChild(lien);

  // let lien22 = document.createElement("p");
  // lien22.innerHTML = `Lire plus Lorem ipsum dolor sit amet, <span id='ok'> consectetur adipisicing elit. Architecto soluta dolore obcaecati eius, aliquam modi voluptatibus nesciunt in. Cumque, commodi maxime sunt officia veritatis deleniti fuga dolor repellendus enim earum.</span>`;
  // container.appendChild(lien22);
  // container.appendChild(lien22);
  // let ok = document.getElementById("ok");
  // console.log(ok);
  document.getElementById("products").appendChild(card);
}

// Parameter passed from button (Parameter same as category)
function filterProduct(value) {
  // Button class code
  let buttons = document.querySelectorAll(".button-value");

  buttons.forEach((button) => {
    // click if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active33");
    } else {
      button.classList.remove("active33");
    }
  });

  // Select all cards
  let elements = document.querySelectorAll(".card88");
  console.log(elements);
  // Loop through all cards
  elements.forEach((element) => {
    // display all cards on "all" button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      // Check if element contains category class
      if (element.classList.contains(value)) {
        // display element based on category
        element.classList.remove("hide");
      } else {
        // hide other elements
        element.classList.add("hide");
      }
    }
  });
}

// Search button click
document.getElementById("search").addEventListener("click", (e) => {
  // initilization
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card88");
  // Loop throught all elements
  elements.forEach((element, index) => {
    // check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      // display matching card
      cards[index].classList.remove("hide");
    } else {
      // hide others
      cards[index].classList.add("hide");
    }
  });
});
// Initially display all products

window.onload = () => {
  filterProduct("all");
};
// filterProduct("all");
