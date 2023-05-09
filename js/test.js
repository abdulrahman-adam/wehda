let products = {
  data: [
    {
      productName: "Regular White T-shirt",
      category: "Topwear",
      price: "30",
      image: "white-tshirt.png",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "short-skirt.png",
    },

    {
      productName: "Sporty Smartwatch",
      category: "Watch",
      price: "30",
      image: "sporty-smartwatch.png",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "knitted-top.png",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "130",
      image: "black-leather-jacket.png",
    },
    {
      productName: "Styleish Pink Trousers",
      category: "Bottomwear",
      price: "230",
      image: "pink-trousers.png",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "130",
      image: "brown-jacket.png",
    },

    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "99",
      image: "comfy-gray-pants.png",
    },
  ],
};

for (let i of products.data) {
  // create card
  let card = document.createElement("div");
  //   console.log(card);
  // card shold have category and should stay hidden initially

  card.classList.add("card", i.category, "hide");
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
  container.appendChild(name);
  card.appendChild(container);
  // Price
  let price = document.createElement("h6");
  price.innerText = i.price + " €";
  container.appendChild(price);

  document.getElementById("products").appendChild(card);
}

// Parameter passed from button (Parameter same as category)
function filterProduct(value) {
  // Button class code
  let buttons = document.querySelectorAll(".button-value");

  buttons.forEach((button) => {
    // click if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Select all cards
  let elements = document.querySelectorAll(".card");
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
  let cards = document.querySelectorAll(".card");
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
filterProduct("all");
