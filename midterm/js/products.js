const productRef = document.querySelector("#products");

const products = [
  {
    image: "images/i210-midterm-product1.webp",
    name: "My First Fire",
  },
  {
    image: "images/i210-midterm-product2.webp",
    name: "NapSack",
  },
  {
    image: "images/i210-midterm-product3.webp",
    name: "Hot Tub Wildlife Feeder",
  },
  {
    image: "images/i210-midterm-product4.webp",
    name: "Toilet Meadow",
  },
  {
    image: "images/i210-midterm-product5.webp",
    name: "Pudding Pouch",
  },
  {
    image: "images/i210-midterm-product6.webp",
    name: "Handy Hand",
  },
];

for (let index = 0; index < products.length; index++) {
  const product = products[index];

  const newArticle = document.createElement("article");
  newArticle.innerHTML +=
    "<img height='200px' src='" +
    product.image +
    "' alt='" +
    product.name +
    "' />";
  const newP = "<p>" + product.name + "</p>";

  newArticle.innerHTML += newP;

  productRef.appendChild(newArticle);
}
