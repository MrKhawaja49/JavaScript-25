// Primitive Datatypes

// 7 types: String, Number, Boolean, Null, Undefined, Symbol,, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// Reference Type (Non-Primitive)

// Array, Objects, Functions

const heroes = ["Spiderman", "Iron-Man", "Thor", "Hulk", "Daredevil"];
let myObj = {
    name: "Hassan",
    age: 22,
}

const myFunction = function()
{
    console.log("Hello World");
    
}

// console.log(typeof);

// *****************************************************************************

// Stack (Primitive), Heap(Non-Primmitve)

let myYoutubeName = "MrBeast"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"


console.log(myYoutubeName);
console.log(anotherName);
let userOne = {
    email: "user@gmail.com",
    password: "user1"}

