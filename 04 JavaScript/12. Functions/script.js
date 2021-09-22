// Very first javascript function.
function singSong() {
  console.log("SAA");
  console.log("RE");
  console.log("GAA");
}
// calling singSong function.
singSong();

// rollDie Function (Function with arguments).
function rollDie(n) {
  let roll = Math.floor(Math.random() * n) + 1;
  return roll;
}

// calling rollADie function.
let die1 = rollDie(5);
let die2 = rollDie(20);
console.log(`Die 1 Shows: ${die1}`);
console.log(`Die 2 Shows: ${die2}`);

// Define a function which accepts two numbers and print there sum.
function sum(x, y) {
  console.log(x + y);
}
// calling the sum function.
sum(2, 3);

// return Keyword.
// Define a function that accept a number and return whether the number is even or odd.
function evenOdd(num) {
  if (num % 2 == 0) {
    return `${num} is Even`;
  } else {
    return `${num} is  Odd`;
  }
}
// calling the evenOdd function.
let ans1 = evenOdd(4);
console.log(ans1);
let ans2 = evenOdd(5);
console.log(ans2);

// Function Scope
// The local_variable will not be accessable outside the function scope.
function scope() {
  let local_variable = 9;
}

// In javascript functions can be stored inside a variable.
const add = function (x, y) {
  return x + y;
};
add(1, 3);

// Higher order functions.
function callTwice(func) {
  func();
  func();
}

function greet() {
  console.log("Hello!");
}

callTwice(greet);

// Returning a function as a value from within a function.

function makeMystryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("CONGRATS, I AM A GOOD FUNCTION");
      console.log("YOU WIN 7 CRORE RUPEES");
    };
  } else {
    return function () {
      alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!");
      alert("DON'T TRY TO CLOSE THIS WINDOW!");
      alert("DON'T TRY TO CLOSE THIS WINDOW!");
      alert("DON'T TRY TO CLOSE THIS WINDOW!");
      alert("DON'T TRY TO CLOSE THIS WINDOW!");
      alert("DON'T TRY TO CLOSE THIS WINDOW!");
    };
  }
}
