console.log("Medium Algortithm Questions")

// Question
// #3. FizzBuzz Problem: Write a function that prints the numbers from 1 to 100. But for
// multiples of three, print "Fizz" instead of the number, and for the multiples of five,
// print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

    const Fizzbuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        let value = i;
        if (value % 3 === 0 && value % 5 === 0) {
            console.log(value + ' FizzBuzz');
        } else if (value % 3 === 0) {
            console.log(value + ' Fizz');
        } else if (value % 5 === 0) {
            console.log(value + ' Buzz');
        } else {
            console.log(value);
        }
    }
}
Fizzbuzz(100);


const BubbleSort = (a) => {
  let numbers = a;
  let checker = true;

  while (checker) {
    checker = false
    for (i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        checker = true
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
      }
    }
  }
  return numbers;
};

const bubble = BubbleSort([12, 9, 5, 33, 89]);
console.log(bubble);

const ReverseString = (s) => {
    let reversed = "";
    // i add this codition "r = a.length - 1; b/c the idex of strings start counting from zero" so -1 is 
    // for decrease the last index 

    for (r = s.length - 1; r >= 0; r--) {
        reversed += s[r]
    }

    return reversed;
}

const revstr = ReverseString("Hello");
console.log(revstr)



// Count Vowels 

// const CountVowels = (c) => {
//     let sum = 0;
//     let store = "";
//         for (v = 0; v < c.length; v++) {
//             if (c[v] === 'a' || c[v] === 'e' || c[v] === 'i' || c[v] === 'o' || c[v] === 'u') {
//                 store += c[v]
//             }
//         }
//         for (f = 0; f < store.length; f++){
//             sum += store[f]
//         }

//     return sum;
// }

// const vowel = CountVowels("hoalelodfghsu");
// console.log(vowel)


// 4. Count Vowels in a String
// 🧠 Problem:
// Count number of vowels in a string.
// 🧩 Steps:
// •	Loop through each character and check if it’s a vowel.


const CountVowels = (s) => {
  let vowel = "";
  let cc = 0
  const toLower = s.toLowerCase()
  console.log(toLower)
  for (i = 0; i < s.length; i++) {
    if (s[i] == 'a') {
      vowel += s[i]
      cc += i
    } 
    else if (s[i] == 'e') {
      vowel += s[i]
    }
    else if (s[i] == 'i') {
      vowel += s[i]
    }
    else if (s[i] == 'o') {
      vowel += s[i]
    }
    else if (s[i] == 'u') {
      vowel += s[i]
    }
  }

  let calc = vowel.length
  return calc
}

const variable = "PalinDaroMRei";
const count = CountVowels(variable);
console.log(count)


function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

console.log(countVowels("palindrome"))


// 12. Find the Longest Word in a Sentence this works only to see in numbers
// in this senario i give initial value for howlong 0 so the datatype is number so return the 
// number the length of an array index 
const LongestWordInnum = (w) => {
  // const word = w;
  let howLong = 0;
  for (s = 0; s < w.length; s++) {
    if (howLong < w[s].length) {
      howLong = w[s].length
    }
  }
  return howLong;
}

const sentence = ["", "hello", "dog", "numbers", "nathan tedi"];
console.log(LongestWordInnum(sentence))

// 12. Find the Longest Word in a Sentence this works only to see in numbers
const LongestWordInWords = (w) => {
   const word = w;
  let howLong = "";
  for (s = 0; s < word.length; s++) {
    if (howLong.length < word[s].length) {
      howLong = word[s]
    }
  }
  return howLong;
}

console.log(LongestWordInWords(sentence));

// Capitalize First Letter of Each Word
const CapitalizeFirstLatter = (l) => {
  let latter = l
  let sums = ""
    for (f = 0; f < latter.length; f++) {
      let dec = latter[f]
      for (g = 0; g < dec.length; g++) {
        if (dec[g] === dec[0]) {
          sums += dec[0].toUpperCase()
        } else {
          sums += dec[g]
        }
      }
    }
    // console.log(sums)
  return sums
}

const Word = ["cat", "hello", "dog", "numbers", "sori"];
console.log(CapitalizeFirstLatter(Word))

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Check if Array is Sorted

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  console.log(arr[i - 1])
  return true;
}

const intiger = [2, 6, 8, 7, 5, 3]
console.log(isSorted(intiger))

// 11. Check Anagram
// 🧠 Problem:
// Are two strings anagrams?
// 🧩 Steps:
// •	Sort both 

function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram("hello", "hello"))

// Find Intersection of Two Arrays
function intersection(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(item => set2.has(item));
}

const array1 = [1, 2, 3, 5, 6, 9]
const array2 = [4, 20, 30, 15, 16, 7]
console.log(intersection(array1, array2))

// Move Zeroes to End
function moveZeroes(arr) {
    let result = arr.filter(num => num !== 0);
    while (result.length < arr.length) {
        result.push(0);
    }
    return result;
}

const mz = [1, 2, 3, 5, 6, 9]
console.log(moveZeroes(mz))


// Find Common Characters Between Strings

function commonChars(str1, str2) {
    const set1 = new Set(str1);
    const set2 = new Set(str2);
    return [...set1].filter(char => set2.has(char));
}

const string1 = "hello";
const string2 = "world"
console.log(commonChars(string1, string2))


// Find Second Largest in Array
// 🧠 Steps:
// •	Track both max and second max in a loop.

function secondLargest(arr) {
    let max = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > max) {
            second = max;
            max = num;
        } else if (num > second && num !== max) {
            second = num;
        }
    }
    return second;
}

// 6. Find Missing Number (1 to n)
// 🧠 Problem:
// One number from 1 to n is missing in an array.
// 🧩 Steps:
// •	Use sum formula: n*(n+1)/2

function findMissing(arr) {
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}

// 5. Find Duplicate in Array
// 🧠 Problem:
// Return the first duplicate element found.
// 🧩 Steps:
// •	Use a Set to store seen numbers.

function findDuplicate(arr) {
    const seen = new Set();
    for (let num of arr) {
        if (seen.has(num)) return num;
        seen.add(num);
    }
    return null;
}



// Generate Fibonacci Sequence up to n Terms
// Input: 5 → Output: [0, 1, 1, 2, 3]


function Fibonacci(x) {
  let ressult = [0, 1];
  for (c = 2; c < x; c++) {
    ressult[c] = ressult[c - 1] + ressult[c - 2];
  }
  return ressult;
}
console.log(Fibonacci(5));


// First Non-Repeating Character
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

console.log(firstNonRepeatingChar("aabbcdde")); // "c"

// 27. Roman to Integer
function romanToInt(s) {
  const map = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = map[s[i]], next = map[s[i+1]];
    total += (next > curr) ? -curr : curr;
  }
  return total;
}

console.log(romanToInt("XIV")); // 14

// 28. GCD (Greatest Common Divisor)
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

console.log(gcd(18, 24)); // 6


// 26. Find All Pairs That Sum to Target
function pairSum(arr, target) {
  const seen = new Set();
  const result = [];
  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      result.push([complement, num]);
    }
    seen.add(num);
  }
  return result;
}

console.log(pairSum([1, 2, 3, 4, 5], 6));



// Rotate an Array by k Positions
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // In case k > length
  return arr.slice(-k).concat(arr.slice(0, n - k));
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
// 💡 Explanation:
// •	slice(-k) gets the last k elements.
// •	slice(0, n - k) gets the first part.
// •	concat() merges them.

// 24. Group Anagrams
function groupAnagrams(words) {
  const map = {};
  for (let word of words) {
    const key = word.split('').sort().join('');
    map[key] = map[key] || [];
    map[key].push(word);
  }
  return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// 💡 Explanation:
// •	Sort letters in each word to get a common key.
// •	Group words by this key in a map.
