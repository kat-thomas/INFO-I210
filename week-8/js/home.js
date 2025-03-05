// Reference variables (referencing the DOM / html page)
const petsUlRef = document.querySelector("#pets")

// Data Variable
const pets = ["Cat", "Snake", "Snake", "Fish", "Fish", "Fox", "Mouse", "Bird"]

const images = ["https://picsum.photos/200","https://picsum.photos/210","https://picsum.photos/220","https://picsum.photos/230","https://picsum.photos/240","https://picsum.photos/250","https://picsum.photos/260","https://picsum.photos/270",]

console.table(pets)

// Loop through our list
for (let index = 0; index < pets.length; index++) {
    const pet = pets[index];
    console.log(pet);
    
    const image = images[index];
    console.log(image);

    const imageHtml = "<img src='" + image + "' alt='' />";

    petsUlRef.innerHTML += "<li>" + pet + imageHtml + "</li>";
}