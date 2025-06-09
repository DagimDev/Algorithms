// Sort by String Length
// Create a function that returns an array of strings sorted by length in ascending order.

// Examples
// sortByLength(["a", "ccc", "dddd", "bb"]) // ➞ ["a", "bb", "ccc", "dddd"]

// sortByLength(["apple", "pie", "shortcake"]) // ➞ ["pie", "apple", "shortcake"]

// sortByLength(["may", "april", "september", "august"]) // ➞ ["may", "april", "august", "september"]

// sortByLength([]) // ➞ []
// Notes
// Strings will have unique lengths, so don't worry about comparing two strings with identical length.
// Return an empty array if the input array is empty (see example #4).

const sortByLength = (arr) => {
    if (arr.length === 0) return arr;
    
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].length > arr[i + 1].length) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    
    return arr;
};
// const sortByLength = (arr) => {
//     if (arr.length === 0) return arr
//   let cheker = true;
//   while (cheker)
//     for (let i = 0; i < arr.length - 1; i++) {
//       cheker = false;
//       if (arr[i].length > arr[i + 1].length) {
//         cheker = true;
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//   return arr;
// };
// console.log(
//   sortByLength(["may", "april", "decetybersd", "september", "august"])
// );
// console.log(sortByLength([]))
