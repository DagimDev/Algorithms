// Count the Syllables
// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

// Examples
// countSyllables("Hehehehehehe") ➞ 6

// countSyllables("bobobobobobobobo") ➞ 8

// countSyllables("NANANA") ➞ 3
// Notes
// For simplicity, please note that each syllable will consist of two letters only.
// Your code should accept strings of any case (upper, lower and mixed case).

const countSyllables = (str) => {
  const lowerStr = str.toLowerCase(); // Normalize case
  if (lowerStr.length < 2) return 0; // Edge case
  const syllable = lowerStr.slice(0, 2); // Get the repeating pattern
  let count = 0;
  
  // Count occurrences of the 2-letter pattern
  for (let i = 0; i < lowerStr.length; i += 2) {
    if (lowerStr.substr(i, 2) === syllable) {
      count++;
    }
  }
  
  return count;
};
console.log(countSyllables("bobobobobobobobo"))