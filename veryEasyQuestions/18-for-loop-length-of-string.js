const lengthOfStr = (str) => {
    let count = 0
    for (const string of str) {
        count++ 
    }
    return count
}

console.log(lengthOfStr("hello"))
console.log(lengthOfStr("animation"))
console.log(lengthOfStr("father and mother"))