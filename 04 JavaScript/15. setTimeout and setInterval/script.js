// setTimeout and setInterval

// setTimeout
console.log("HELLO!!...");

setTimeout(() => {
  console.log("ARE YOU STILL THERE ???.....");
}, 3000);

console.log("GOODBYE!!...");

// Another way of using setTimeout
function greet() {
  console.log("HELLO!!");
}
console.log("WAIT FOR 3 SEC...");
setTimeout(greet, 3000);

//setInterval
function random() {
  console.log(Math.random());
}

// setInterval method returns an id which is used to stop the repeating setInterval method.
const id = setInterval(random, 2000);
// The setInterval method can be stopped by using clearInterval method by passing the id returned by the setInterval method.
clearInterval(id);
