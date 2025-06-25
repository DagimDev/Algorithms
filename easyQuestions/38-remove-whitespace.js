// Remove All Whitespace from a String
// Input: " a b c " → Output: "abc"

const RemoveWhitespace = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
};

const RemovedWhiteSpace = RemoveWhitespace(" da gi m ");
console.log(RemovedWhiteSpace);