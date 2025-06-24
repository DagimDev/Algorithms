// Coin Flip Game with Guess & Ternary Operator
// Generate a random number using Math.random() and save it in a variable.
// Determine "heads" or "tails":
// If the number is less than 0.5, save 'heads' in a variable result.
// Otherwise, save 'tails'.
// Make a guess: Create a variable guess and set it to either 'heads' or 'tails'.
// Check the guess:
// If guess matches result, log 'You win!'.
// Otherwise, log 'You lose!'.
// (Challenge) Replace all if-else statements with ternary operators (condition ? A : B).
const random = Math.random()
const result = random <= 0.5 ? "heads" : "tails"
const guess = "heads";
const coinFlip = guess === result ? "You win!" : "You Lose!" 
console.log(coinFlip)