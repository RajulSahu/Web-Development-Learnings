// FOR LOOP
// Print first 10 numbers on the console using For loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Print all even numbers from 1 to 20.
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Print numbers from 10 to 1.
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// Looping over Arrays.
const arr = [1, 2, 56, 4, 33, 21, 34];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Nested loops.
const arr = [];
let temp = [];
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    temp.push("*");
  }
  arr.add(temp);
  temp = [];
}

// WHILE LOOP
// Print numbers from 1 to 10 using while loop.
let num = 1;
while (num >= 10) {
  console.log(num);
  num++;
}

// Print numbers from 10 to 1 using while loop.
let num = 10;
while (num >= 0) {
  console.log(num);
  num--;
}

// FOR..OF LOOP
const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];
for (let sub of subreddits) {
  console.log(sub);
}

// FOR..IN LOOP
// This loop is speacially used to iterrate over the objects.
const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};
for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}.`);
}
// For Objects we can also use the for..of loop.

// Accessing the keys out of the object.
for (let person in Object.keys(testScores)) {
  console.log(person);
}

// Accessing the values out of the object.
for (let score in Object.values(testScores)) {
  console.log(score);
}
