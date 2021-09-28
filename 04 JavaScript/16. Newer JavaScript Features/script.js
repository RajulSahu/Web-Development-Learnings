// Default Parameters.
// Here numSize variable will have a default value set to 1.
function rollDie(numSize = 1) {
  return Math.floor(Math.random() * numSize) + 1;
}

// IMPORTANT PLACE ALL YOUR DEFAULT PARAMETERS AFTER ANY PARAMETERS THAT DON NOT HAVE ANY DEFAULT VALUE.
function greet(person, msg = "Hey There") {
  console.log(`${msg}, ${person}`);
}

// Spread --> This is Bacically used as a unpack operator sameas in python, and represented by three dots and can be used as:
const nums = [13, 4, 15, 14, 25, 3, 12, 32, 45, 123, 25, 1569, 1589, 9856, 45, 123, 1, 23, 0, 123, 5, 8];
Math.max(...nums);

const colors = ["red", "blue", "green", "yellow", "purple", "violet"];
const fruits = ["apple", "banana", "orange", "pineapple", "grapes", "watermellon", "pomegranate"];

const combinedArr = [...colors, ...fruits];

// Spreading a String into array of characters.
const singer = "Ariana";
const charArr = [...singer];

// Spread in objects.
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

// Makes copy of all the data inside feline object into copyObj object.
const copyObj = { ...feline };

// combines both the objects in to a single object conbinedObj.
const combinedObj = { ...feline, ...canine };

// REST
function sum() {
  // arguments is a inbuilt array like structure but not an array which can hold any number of arguments passed to a function even if it does not recieves any.
  console.log(arguments);
}

// Rest can be used to simplify this problem as we can store any number of arguments in an array using rest as:
function sum1(...nums) {
  return nums.reduce((target, element) => target + element);
}

// Another Implimentataion.
function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

// DESTRUCTURING.

// DESTRUCTURING FROM ARRAY.
const scores = ["Ram", "Shyam", "Radha", "Kirshna", "Gopi"];

const [gold, silver, bronze, ...everyoneElse] = scores;

console.log(`GOLD MEDAL GOES TO: ${gold}`);
console.log(`SILVER MEDAL GOES TO: ${silver}`);
console.log(`BRONZE MEDAL GOES TO: ${bronze}`);
console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);

// DESTRUCTURING FROM OBJECTS.
const user = {
  email: "user@gmail.com",
  password: "ScOt1948sMiTh",
  firstName: "Ariana",
  lastName: "Grande",
  born: 1993,
  bio: "Ariana Grande-Butera is an American singer, songwriter, and actress. She has received numerous accolades throughout her career, including two Grammy Awards, one Brit Award, two Billboard Music Awards, three American Music Awards, nine MTV Video Music Awards, and 27 Guinness World Records.",
  country: "USA",
  state: "California",
};

// These variable must have same name as inside the object.
const { email, firstName, lastName, country } = user;

// Give custom names to the variables as:
const { bio: about, email: mailTo } = user;
