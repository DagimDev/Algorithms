// Rock, Paper, Scissors
// Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

// Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:

// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock
// If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw".

// Examples
// rps("Rock", "Paper") ➞ "The winner is p2"

// rps("Scissors", "Paper") ➞ "The winner is p1"

// rps("Paper", "Paper") ➞ "It's a draw"
// Notes
// All inputs will be valid strings.

// const rps = (p1, p2) => {
//   const r = "Rock";
//   const p = "Paper";
//   const s = "Scissors";
//   if (p1 === p2) {
//     console.log(`${p1} and ${p2} : It's a draw`);
//   } else if (p1 === r && p2 === s) {
//     console.log(`${p1} and ${p2} : The winner is p1 `);
//   } else if (p1 === s && p2 === r) {
//     console.log(`${p1} and ${p2} : The winner is p2`);
//   } else if (p1 === s && p2 === p) {
//     console.log(`${p1} and ${p2} : The winner is p1`);
//   } else if (p1 === p && p2 === s) {
//     console.log(`${p1} and ${p2} : The winner is p2`);
//   } else if (p1 === p && p2 === r) {
//     console.log(`${p1} and ${p2} : The winner is p1`);
//   } else if (p1 === r && p2 === p) {
//     console.log(`${p1} and ${p2} : The winner is p2`);
//   }
// };
const rps = (p1, p2) => {
  if (p1 === p2) return "It's a draw";
  
  const rules = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock"
  };
  
  return rules[p1] === p2 
    ? "The winner is p1" 
    : "The winner is p2";
};

rps("Rock", "Scissors");
rps("Scissors", "Rock");
rps("Scissors", "Paper");
rps("Paper", "Scissors");
rps("Paper", "Paper");
rps("Paper", "Rock");
rps("Rock", "Paper");
