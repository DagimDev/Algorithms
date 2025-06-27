//  Check Anagram
// 🧠 Problem:
// Are two strings anagrams?
// 🧩 Steps:
// •	Sort both

const anagram = (a, b) => {
  let string1 = "";
  let string2 = "";
  for (let i = a.length - 1; i >= 0; i--) {
    string1 += a[i];
  }
  for (let j = b.length - 1; j >= 0; j--) {
    string2 += b[j];
  }
  return string1 === string2
};
console.log(anagram("hello", "hello"));
console.log(anagram("natty", "natty"));
console.log(anagram("hello", "world"));

function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram("hello", "hello"))
