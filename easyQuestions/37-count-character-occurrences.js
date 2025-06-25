// Count Character Occurrences
function countChar(str, target) {
  let count = 0;
  for (let char = 0; char < str.length; char++) {
    if (str[char] === target) {
      count++
    } 
  }
  return count;
}

console.log(countChar("hello world", "l")); // 3