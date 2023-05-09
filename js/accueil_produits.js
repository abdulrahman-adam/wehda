let products = {
  data: [
    /** START SECTION OF PERFUMES*/

    {
      productName: "Hugo Boss",
      category: "Topwear",
      price: "13",
      image: "../images/parfums/boss.jpg",
      link: "../../index.html",
    },
    {
      productName: "Najoom Al Zahabi",
      category: "Topwear",
      price: "12",
      image: "../images/parfums/perfume_aldahbi.jpg",
      link: "../../index.html",
    },

    {
      productName: "Ameer Al Oudh",
      category: "Topwear",
      price: "11",
      image: "../images/parfums/perfume_ameer.jpg",
      link: "../../index.html",
    },
    {
      productName: "Pure Oudi",
      category: "Topwear",
      price: "11",
      image: "../images/parfums/perfume_audi.jpg",
      link: "../../index.html",
    },
    {
      productName: "Charlie GOLD",
      category: "Topwear",
      price: "11",
      image: "../images/parfums/perfume_golden.jpg",
      link: "../../index.html",
    },
    {
      productName: "Ameer Al Gloob",
      category: "Topwear",
      price: "22",
      image: "../images/parfums/perfume_heart.jpg",
      link: "../../index.html",
    },
    {
      productName: "Lord perfume",
      category: "Topwear",
      price: "11",
      image: "../images/parfums/perfume_loard.jpg",
      link: "../../index.html",
    },

    {
      productName: "M2 Man",
      category: "Topwear",
      price: "22",
      image: "../images/parfums/perfume_m2.jpg",
      link: "../../index.html",
    },

    {
      productName: "Royal Blue",
      category: "Topwear",
      price: "22",
      image: "../images/parfums/perfume_royal.jpg",
      link: "../../index.html",
    },

    {
      productName: "Sheikh Luxe",
      category: "Topwear",
      price: "22",
      image: "../images/parfums/perfume_sheikh.jpg",
      link: "../../index.html",
    },

    {
      productName: "Stong",
      category: "Topwear",
      price: "22",
      image: "../images/parfums/perfume_stong.jpg",
      link: "../../index.html",
    },

    {
      productName: "Alsultan",
      category: "Topwear",
      price: "22",
      image: "../images/parfums/perfume_sultan.jpg",
      link: "../../index.html",
    },

    {
      productName: "Alsultan",
      category: "Topwear",
      price: "22",
      image: "../images/parfums/perfume_sultan1.jpg",
      link: "../../index.html",
    },

    {
      productName: "Alsultan",
      category: "Topwear",
      price: "22",
      image: "../images/parfums/perfume3.jpg",
      link: "../../index.html",
    },

    /** END SECTION OF PERFUMES*/
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "12",
      image: "./images/accueil_produits/short-skirt.jfif",
      link: "./index.html",
    },
    /** START SECTION OF CREAMS*/
    {
      productName: "whitesecret",
      category: "Watch",
      price: "13",
      image: "./images/accueil_produits/whitesecret.jpg",
      link: "./index.html",
    },
    {
      productName: "max lady",
      category: "Watch",
      price: "13",
      image: "./images/accueil_produits/max_lady.jpg",
      link: "./index.html",
    },
    {
      productName: "vatica",
      category: "Watch",
      price: "13",
      image: "./images/accueil_produits/cream_vatica.jpg",
      link: "./index.html",
    },
    {
      productName: "baby lotion",
      category: "Watch",
      price: "13",
      image: "./images/accueil_produits/baby_lotion.jpg",
      link: "./index.html",
    },
    {
      productName: "cream vatika",
      category: "Watch",
      price: "13",
      image: "./images/accueil_produits/cream_vatika1.jpg",
      link: "./index.html",
    },
    /** END SECTION OF CREAMS*/

    /** START SECTION OF SUDANISE PRODUCT*/
    {
      productName: "Aricot Azuki",
      category: "Jacket",
      price: "11",
      image: "./images/produits-soudanais/adas.jpg",
      link: "./index.html",
    },

    {
      productName: "Dates",
      category: "Jacket",
      price: "5",
      image: "./images/produits-soudanais/date.jpg",
      link: "./index.html",
    },
    {
      productName: "Dates",
      category: "Jacket",
      price: "4",
      image: "./images/produits-soudanais/date1.jpg",
      link: "./index.html",
    },
    {
      productName: "Dates",
      category: "Jacket",
      price: "5",
      image: "./images/produits-soudanais/date2.jpg",
      link: "./index.html",
    },

    {
      productName: "Grine",
      category: "Jacket",
      price: "11",
      image: "./images/produits-soudanais/food.jpg",
      link: "./index.html",
    },
    {
      productName: "Tri_c",
      category: "Jacket",
      price: "11",
      image: "./images/produits-soudanais/juice.jpg",
      link: "./index.html",
    },

    {
      productName: "Loza",
      category: "Jacket",
      price: "11",
      image: "./images/produits-soudanais/looza.jpg",
      link: "./index.html",
    },
    {
      productName: "NIDO",
      category: "Jacket",
      price: "11",
      image: "./images/produits-soudanais/nido.jpg",
      link: "./index.html",
    },

    {
      productName: "Wahbi",
      category: "Jacket",
      price: "11",
      image: "./images/produits-soudanais/sweet.jpg",
      link: "./index.html",
    },
    /** END SECTION OF SUDANISE PRODUCT*/
    /** START SECTION OF PRODUCT GENERAL*/
    {
      productName: "Styleish Pink Trousers",
      category: "Bottomwear",
      price: "22",
      image: "./images/accueil_produits/pink-trousers.jfif",
      link: "./index.html",
    },

    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "22",
      image: "./images/accueil_produits/comfy-gray-pants.jpg",
      link: "./index.html",
    },
    /** END SECTION OF PRODUCT GENERAL*/
  ],
};

for (let i of products.data) {
  // create card
  let card = document.createElement("div");
  //   console.log(card);
  // card shold have category and should stay hidden initially

  card.classList.add("card11", i.category, "hide");
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
  price.innerText = "Prix : " + i.price + " €";
  container.appendChild(price);

  let lien = document.createElement("a");

  lien.setAttribute("href", i.link);

  lien.innerHTML = "Achats en magain retrait en magasin";

  container.appendChild(lien);

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
  let elements = document.querySelectorAll(".card11");
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
  let cards = document.querySelectorAll(".card11");
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
