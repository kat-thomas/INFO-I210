// arrays use square brackets, arrays are a list of things

const favoriteReptiles = ["Gecko", "Komodo Dragon", "Bearded Dragon"];

console.log(favoriteReptiles);
console.table(favoriteReptiles);

console.log("First Thing:", favoriteReptiles[0]);

console.log("Idk:", favoriteReptiles[9]);

console.log("# of favorite reptiles that are all just lizards rn:", favoriteReptiles.length);

// i is commonly used as an abbreviation of index

for (let index = 0; index < favoriteReptiles.length; index++) {
    const reptile = favoriteReptiles[index];
    console.log(reptile);
}

// variables in the for loop only exist in the for loop