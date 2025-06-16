// Video Length in Seconds
// You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.

// Examples
// minutesToSeconds("01:00") ➞ 60

// minutesToSeconds("13:56") ➞ 836

// minutesToSeconds("10:60") ➞ false
// Notes
// The video length is given as a string.
// If the number of seconds is 60 or over, return false (see example #3).
// You may get a number of minutes over 99 (e.g. "121:49" is perfectly valid).

const minutesToSeconds = (str) => {
  let min = [];
  let sec = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ":") {
      break;
    } else {
      min.push(str[i]);
    }
  }
  for (let j = str.length - 1; j > 0; j--) {
    if (str[j] === ":") {
      break;
    } else {
        sec.push(str[j])
    }
  }
  let dekika = Number(min.join(""));
  let second = Number(sec.reverse().join(""))
  if (second >= 60) return false 
  console.log(dekika)
  console.log(second)

  return dekika * 60 + second;
};

console.log(minutesToSeconds("01:00"));
console.log(minutesToSeconds("13:56"));
console.log(minutesToSeconds("10:60"));
console.log(minutesToSeconds("121:49"));