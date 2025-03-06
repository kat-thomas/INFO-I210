console.log("pokemon");

function showAlert() {
  alert("Annoying Message");
}

const confirmBtnRef = document.querySelector("#confirm-btn");

function showConfirm() {
  const userConfirmed = confirm("You are a robot, right?");

  console.log(userConfirmed);
}

confirmBtnRef.onclick = showConfirm;

function showPrompt() {
  const userInput = prompt(
    "What's your favorite flavor of ice cream?",
    "vamilla"
  );

  console.log(userInput);
}

// Code for the Pokemon Journey

const journeyRef = document.querySelector("#journey");

function startJourney() {
  console.log("jello");
  journeyRef.innerHTML =
    "<p> You are so excited, today you get your first pokemon! Sitting in front of you are pokeballs for Bulbasaur, Charmader, Squirtle. Choose your pokemon:</p>";

  const starterPokemon = [
    {
      name: "Bulbasaur",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
    },
    {
      name: "Charmander",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
    },
    {
      name: "Squirtle",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
    },
  ];

  for (let index = 0; index < starterPokemon.length; index++) {
    const pokemon = starterPokemon[index];

    const newSection = document.createElement("section");
    newSection.innerHTML +=
      "<img height='100px' src='" +
      pokemon.img +
      "' alt='" +
      pokemon.name +
      "' />";

    newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";

    newSection.dataset.pokemonName = pokemon.name;
    newSection.dataset.pokemonImage = pokemon.img;
    newSection.onclick = choosePokemon;

    journeyRef.appendChild(newSection);
    console.log(pokemon);
  }
}

function choosePokemon(e) {
  console.log(e.currentTarget);
  const pokemonName = e.currentTarget.dataset.pokemonName;
  const pokemonImg = e.currentTarget.dataset.pokemonImage;

  const confirmChoice = confirm("You chose " + pokemonName);

  if (confirmChoice) {
    journeyRef.innerHTML +=
      "You chose " + pokemonName + " as your starter Pokemon!";

    myPokemon = { name: pokemonName, img: pokemonImg };
  }
}
