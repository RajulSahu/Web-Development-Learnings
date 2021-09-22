// Generating a random error.
hello.toUpperCase(); // This statement will generate error because helo is not defined.

// But when we use try/catch the errors can be ignored or handled.
try {
  hello.toUpperCase();
} catch {
  console.log("ERROR!!!!....");
}

// Another example.
function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log("Please pass a string next time!");
  }
}
