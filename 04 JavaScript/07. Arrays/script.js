let colors = ["rad", "blue", "green", "yallow"];

console.log(colors);

// Arrays can be changed :-
colors[0] = "red";
colors[3] = "yellow";
console.log(colors);

// JavaScript Arrays can contain elements of different types :-
let diverse_array = ["Hello", "a", 1, 0, true, false, 5.25, -1];

console.log(diverse_array);

// JavaScript Arrays are of dynamic size, Elements can be added even after the end index :-
console.log("Before Adding Element!");
console.log(colors.length);
colors[10] = "purple";
console.log("After Adding Element at 10th index while the initial length was 4!");
console.log(colors.length);
console.log(colors);

// JavaScript Arrays supports many inbuilt methods some of them are- push, pop, shift, unshift, etc. :-

// Push Pop :-
// Push - Add to End.
// Pop - Remove from End.
let movieLine = ["tom", "nancy"];
console.log(movieLine);
console.log("Push eva and harry");
movieLine.push("eva");
movieLine.push("harry");
console.log(movieLine);
console.log("Pop");
movieLine.pop();
console.log("Item popped!");
console.log(movieLine);

// Shift Unshift :-
// Shift - Remove from Start.
// Unshift - Add to Start.

console.log("shifting tom");
movieLine.shift("tom");
console.log("After shifting:");
console.log(movieLine);
console.log("unshifting alvis");
movieLine.unshift("alvis");
console.log("After Unshift");
console.log(movieLine);

// concat - combines the arrays it the order as specified.
console.log("arr1");
let arr1 = [1, 2, 3];
console.log("arr2");
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log("combined array:");
console.log(combined);

// includes - returns true if the element is present in the array otherwise it returns false.
console.log("Does arr1 includes 2:");
console.log(arr1.includes(2));

// indexOf - Gives the first index of occurence.
console.log("Index of 4 in combined array is:");
console.log(combined.indexOf(4));

// reverse - reverse the array in place.
console.log("Reversed combined array:");
let reversed = combined.reverse();
console.log(reversed);

// slice - silces the array using the start index and end index.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num);
console.log("Slicing the num array from index 3 to 7");
console.log(num.slice(3, 7));

// splice - used to add or insert a element/elements in an array by providing: start, deleteCount, item1, item2, itemN.
// splice can be used to detete an element/elements or insert.
console.log("2 will be deleted from the array num.");
num.splice(1, 1);
console.log(num);
console.log("Adding 2 again on its place.");
num.splice(1, 0, 2);
console.log(num);

// sort - used to sort any array using the utf-16 codes of each elements.
let unsorted = [7, 4, 8, 330, -2, 100, 0, 4, 6];
console.log(unsorted.sort());
