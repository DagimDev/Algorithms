// Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

// Examples
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

const objectToArray = (obj) => {
  let array = [];
  for (const index in obj) {
    array.push([index, obj[index]]);
  }
  return array;
};

console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3,
  })
);

console.log(
  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10,
  })
);
