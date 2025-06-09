// The 3 Programmers Problem

// You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wages of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.

// Examples
// programmers(147, 33, 526) ➞ 493

// programmers(33, 72, 74) ➞ 41

// programmers(1, 5, 9) ➞ 8

const programmers = (a, b, c) => {
    // if (a > b && a > c && b > c){
    //     return a - c
    // } else if (a > b && a > c && b < c) {
    //     return a - b
    // } else if (b > a && b > c && a < c) {
    //     return b - a
    // } else if (b > a && b > c && a > c) {
    //     return b - c
    // } else if (c > a && c > b && a < b) {
    //     return c - a
    // } else if (c > a && c > b && a > b) {
    //     return c - b
    // }

    // more efficient code to solve this problem
    const max = Math.max(a, b, c);
    const min = Math.min(a, b, c);
    return max - min
    
}
// alterative solution
// const programmers = (a, b, c) => Math.max(a, b, c) - Math.min(a, b, c);

console.log(programmers(147, 33, 526))
console.log(programmers(33, 72, 74))
console.log(programmers(1, 5, 9))