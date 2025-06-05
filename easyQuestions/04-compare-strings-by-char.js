// Compare Strings by Count of CharactersPublished byinLanguages

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

// Examples
// comp("AB", "CD") ➞ true

// comp("ABC", "DE") ➞ false

// comp("hello", "edabit") ➞ false

const comp = (str1, str2) => {
    return str1.length === str2.length ? true : false 
}

const string1 = "ab"
const string2 = "cd"
console.log(comp(string1, string2))