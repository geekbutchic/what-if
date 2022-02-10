const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a class size: "));

if (num % 3 === 0) {
  console.log(`Your group size is ${num}`);
} else if (num % 3 === 1) {
    console.log(``);
}
