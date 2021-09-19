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
