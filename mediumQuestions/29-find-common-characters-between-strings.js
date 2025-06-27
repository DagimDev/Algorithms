// Find Common Characters Between Strings

const commonChars = (str1, str2) => {
    const string1 = new Set(str1)
    const string2 = new Set(str2)
    return [...string1].filter(char => string2.has(char))
}

console.log(commonChars("hello", "world"))
console.log(commonChars("dagim", "sime"))
console.log(commonChars("natty", "tedi"))
console.log(commonChars("john", "doe"))