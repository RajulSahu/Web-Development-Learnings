console.log("BEFORE CONDITIONALS");

// If Statement
if (1 + 1 === 2) {
  console.log("JavaScript Knows Math!");
}

// Multiple If Statement
let randomNumber1 = Math.floor(Math.random() * 100) + 1;
if (randomNumber1 <= 50) {
  console.log(`The number --> ${randomNumber1} is less than or equal to 50`);
}
if (randomNumber1 > 50) {
  console.log(`The number --> ${randomNumber1} is greater than 50`);
}

// Else-If
let randomNumber2 = Math.floor(Math.random() * 100) + 1;
if (randomNumber2 < 50) {
  console.log(`The number --> ${randomNumber2} is less than 50`);
} else if (randomNumber2 > 50) {
  console.log(`The number --> ${randomNumber2} is greater than 50`);
} else {
  console.log(`The number --> ${randomNumber2} is equal to 50`);
}

console.log("AFTER CONDITIONALS");
