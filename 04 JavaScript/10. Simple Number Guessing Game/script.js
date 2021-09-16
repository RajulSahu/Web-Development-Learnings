// Number Guessing Game code starts here.

let limit = parseInt(prompt("Enter Your Maximum limit!"));
while (!limit) {
  limit = parseInt(prompt("Enter a valid Number!"));
}

let targetNum = Math.floor(Math.random() * limit) + 1;
let guess = parseInt(prompt("Enter your guess!"));
while (!guess) {
  guess = parseInt(prompt(`You can only guess a number upto ${limit}!`));
}

console.log(targetNum);

let lives = 5;
let tries = 1;
while (true) {
  if (guess == targetNum || tries >= lives) {
    break;
  } else if (guess > targetNum) {
    guess = parseInt(prompt("Guess again, the number you guessed was too high!"));
    tries++;
  } else {
    guess = parseInt(prompt("Guess again, the number you guessed was too less!"));
    tries++;
  }
}

if (guess == targetNum) {
  console.log("CONGRATS YOU WIN!");
  console.log(`YOU GOT IT, IT TOOK YOU ${tries} ATTEMPTS.`);
} else if (tries >= lives) {
  console.log("YOU LOOSE, YOU LOST ALL THE LIVES!");
}
