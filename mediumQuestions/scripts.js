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