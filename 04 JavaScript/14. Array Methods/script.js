// Array Methods

// FOR EACH
const nums = [9, 8, 5, 8, 5, 6, 9, 7, 1, 2, 3, 6, 6, 9, 8, 7];

function print(element) {
  console.log(element);
}

// This statement will call print function for each element inside th array.
nums.forEach(print);

// MAP METHOD
const doubles = nums.map(function (n) {
  return n * 2;
});
console.log(doubles);

// ARROW FUNCTIONS
const add = (x, y) => {
  return x + y;
};

const square = (x) => {
  return x * x;
};

const greet = () => {
  console.log("Hello!");
};

// FILTER METHOD
const even = nums.filter((n) => {
  return n % 2 == 0;
});
console.log(even);

// EVERY
const exams = [80, 90, 99, 89, 77, 78, 65, 56, 86, 84, 81, 69];

exams.every((score) => score >= 75);

// SOME

exams.some((score) => score >= 75);

// REDUCE
const arr = [3, 5, 7, 9, 11];

const result = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(result);
