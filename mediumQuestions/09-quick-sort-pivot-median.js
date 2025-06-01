// Problem Give an array of integers, sort the array
// input[array] = [-6, 20, 8, -2, 4] output[array] = [-6, -2, 4, 8, 20]

// Quick sort idea
// identify the pivot elemnt in the array
//     pick median as pivot
const QuickSortMedian = (arr) => {
    if (arr.length < 2) {
        return arr
    } 
    let pivot = arr[Math.floor(arr.length / 2)] // = -2 = 8
    let pivotIndex = Math.floor(arr.length / 2) // 2 // 1
    let left = [] // [-6]  = [4]   
    let right = [] // [8, 20, 4]  = [20]         {return the arr [-6] b/c it's lessthan 2}
    arr.splice(pivotIndex, 1)      // {[...QuickSortMedian([4]), pivot(8), ...QuickSortMedian([20])]}
    // console.log(arr)               // {output = [4, 8, 20]}
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i])   // Final [...QuickSortMedian([-6]), pivot(-2), ...QuickSortMedian([4, 8, 20])]
        } else {                // output = [-6, -2, 4, 8, 20]
            right.push(arr[i])
        }
    } 
    // console.log(pivot)
    return [...QuickSortMedian(left), pivot, ...QuickSortMedian(right)]
}

const arrayToSort1 = [8, 20, -2, 4, -6];
const test = QuickSortMedian(arrayToSort1)
console.log(test)