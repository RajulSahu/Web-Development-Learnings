// JavaScript objects are just like python dictionaries.
// JavaScript objects have key and value pairs.

const persons = { firstName: "Tom", lastName: "Cruise" };
console.log(persons);

const kitchenSink = {
  favNum: 56232145,
  isFunny: true,
  colors: ["red", "orange"],
};

console.log(kitchenSink);

// Accessing data from the object.
console.log("Accessing the firstname from the persons object.");
console.log(persons["firstName"]);
// or
console.log(persons.firstName);
// or
const required = "firstName";
console.log(persons[required]);

// JavaScript objects are mutable, i.e, values inside the objects can be modified or added.
const marks = {
  danielle: 96,
  thomas: 78,
};
console.log(marks);
marks.tom = 84;
console.log(marks);
marks["harry"] = 68;
console.log(marks);

// Array of objects.

const comments = [
  { username: "tommy", text: "hey its great!", votes: 10 },
  { username: "harry", text: "hey!", votes: 56 },
  { username: "rachel", text: "loved it!", votes: 8 },
  { username: "drake", text: "nothing new!", votes: 5 },
  { username: "ariana", text: "yupp its awesome", votes: 100 },
  { username: "edward", text: "awwwwwww!", votes: 25 },
];
