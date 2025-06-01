// Problem Give an array of integers, sort the array
// input[array] = [-6, 20, 8, -2, 4] output[array] = [-6, -2, 4, 8, 20]

// Quick sort idea
// identify the pivot elemnt in the array
//     pick the the first element as pivot
//     pick last element as pivot (our approch)
//     pick random element as pivot
//     pick median as pivot

const QuickSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }   // base case recursive calling

    let pivot = arr[0]; // = 8 = recursive sup pivot = -2 
    let left = [] // [-2, 4, -6] = recursive supLeft = [-6]  {[...QuickSort([-6]), pivot(-2), ...QuickSort([4])]}  
    let right = [] // [20] = recursive supRight = [4]        {  = output [-6, -2, 4]}
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {                                //{[...QuickSort([-6, -2, 4]), pivot(8)), ...QuickSort([20])]}
            left.push(arr[i])                                //{ = [-6, -2, 4, 8, 20]}
        } else {
            right.push(arr[i])
        }
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)]
}
const arrayToSort = [8, 20, -2, 4, -6];
const isSorted = QuickSort(arrayToSort);
console.log(isSorted);