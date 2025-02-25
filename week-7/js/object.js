console.log("Objects are us");

const myObj = {}

const person = {
    // properties
    name: "Peter Parker",
    age: 29,
    vision: "fixed",
    canDevourSould: false,

    // methods - things objects can do
    sayHello() {
        console.log("hey.");
    },

};

console.log(person.name);

person.sayHello();

function whatDoesTheFoxSay() {
    console.log("Hatee-hatee-hatee-ho!");
}

whatDoesTheFoxSay();