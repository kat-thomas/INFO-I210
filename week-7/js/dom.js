const titleRef = document.getElementById("title")

console.log(titleRef)

const itemRef = document.getElementsByClassName("item")

console.log(itemRef)

const ulRef = document.querySelector("body > ul");

console.log(ulRef.innerHTML)

const melons = ["Cantaloupe", "Watermelon", "Muskmelon", "Regular Melon", "Blind Melon", "Honeydew"];

for (let index = 0; index < melons.length; index++) {
    const melon = melons[index];
    ulRef.innerHTML += "<li class='item'>" + melon + "</li>"
}

titleRef.style.backgroundColor = "#990000"
titleRef.style.fontSize = "2em"

// em is based on the default text -> is 16px

document.querySelector("body > ul li").style.display = "none";
document.querySelector("body > ul li").style.display = "block";

document.querySelector("nav ul").style.display = "flex";

const firstARef = document.querySelector("a");

console.log("first a:", firstARef);

firstARef.href = "dom.html";
firstARef.setAttribute("target","_blank");