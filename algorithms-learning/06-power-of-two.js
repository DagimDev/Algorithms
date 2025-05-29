// const poweroftwo = (n) => {
//    if (n < 1) {
//     return false;
//    } 
//    for (let i = n; i > 1; i = i / 2) {
//     if (i % 2 !== 0) {
//         return false
//     }
//    }
//    return true
// }

// const poweroftwo = (n) => {
//    if (n < 1) {
//     return false;
//    } 
//   while (n > 1) {                //Time complexity 
//     if (n % 2 !== 0){            //big-O in this case it is O(logn) logartimatic
//         return false             //Space complexity
//     }                            //big-O(1) constant
//     n = n / 2
//   }
//    return true
// }

const isPowerOfTwo = (n) => {
    return n > 0 && (n & (n - 1)) === 0
}
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(8))