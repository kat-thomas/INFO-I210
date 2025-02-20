console.log("Umm... where are we?")

const birthYear = 1963

let myName = "Spider-Man"

console.log(myName, "was born", birthYear)

myName = "Peter Parker";

// constant variables can't change their value
// birthYear = 1776

console.log(myName, "is a totally different guy!")

console.log("My name is", myName.length, "characters long.")

console.log("myName includes Pete:", myName.toUpperCase().includes("PETE"))

console.log("myName has uppercase", myName !== myName.toLowerCase())
console.log("myName has lowercase", myName !== myName.toUpperCase())

const PI = 3.1415926535

console.log(PI.toFixed(2))

const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("random number:", randomNumber)

console.log(Math.PI - PI, PI.toString().length)

console.log(PI, PI.toString())

console.log("loose check", PI == PI.toString())
console.log("strict check", PI === Number(PI.toString()))

console.log("PI type:", typeof PI)

console.log("myName type:", typeof myName)