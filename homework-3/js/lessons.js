const instrumentsUlRef = document.querySelector("#instruments")

const instruments = ["Piano", "Guitar", "Violin", "Drums", "Saxophone",]

for (let index = 0; index < instruments.length; index++) {
    const instrument = instruments[index];
    console.log(instrument);
    
    instrumentsUlRef.innerHTML += "<li>" + instrument + "</li>";
}