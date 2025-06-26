// First Non-Repeating Character

// My Solution
const nonRepet = (str) => {
  for (let i = 0; i < str.length - 1; i += 2) {
    if (str[i] !== str[i + 1]) {
      return str[i];
    }
  }
  return "Every character is the same!";
};

console.log(nonRepet("aabbcdd"));

// Obtimized solution
function firstNonRepeatingChar(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char of str) {
    if (count[char] === 1) return char;
  }
  return null;
}
console.log(firstNonRepeatingChar("aabbcdd"))