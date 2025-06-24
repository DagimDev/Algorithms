// Create a function that takes a number as an argument. Add up all the numbers from 1 to the
// number you passed to the function. For example, if the input is 4 then your function should
// return 10 because 1 + 2 + 3 + 4 = 10.

const addUp = (num) => {
    let added = 0
    
    for (let i = 0; i <= num; i++) {
        added += i
    }
    return added
}
console.log(addUp(4))
console.log(addUp(10))
console.log(addUp(6))