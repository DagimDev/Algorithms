const LinearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}
// big-O O(n) time complexity
const arry = [-5, 2, 10, 4, 6];
const linearSearchIndex = LinearSearch(arry, 4)
console.log(LinearSearch(arry, 10))
console.log(LinearSearch(arry, 6))
console.log(LinearSearch(arry, 20))