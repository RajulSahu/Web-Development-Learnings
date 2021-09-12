const password = prompt("ENTER A NEW PASSWORD!");

// LOGICAL AND -->
// Password must be 6+ characters and must not include space.
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("VALID PASSWORD");
} else {
  console.log("NOT AVALID PASSWORD");
}

// LOGICAL OR -->
const age = 90;
if (age < 0) {
  console.log("INCORRECT AGE, AGE CANNOT BE NEGATIVE!");
} else if (age < 5 || age >= 65) {
  console.log("NO NEED TO PAY MONEY!");
} else {
  console.log("PLEASE PAY ₹50 FOR ENTRY!");
}

// LOGICAL OR
if (!false) {
  console.log("CONVERTED INTO TRUE VALUE");
}
