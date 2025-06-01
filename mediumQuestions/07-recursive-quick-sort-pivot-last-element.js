// const QuickSort1 = (arr) => {
//     if (arr.length < 2) {
//         return arr
//     } // base case of recursive calling
// // [], -6, [8, 20, -2, 4] = [-2], 4, [8], [20], [] = 
//     let pivot1 = arr[arr.length - 1]//-6 = 4 = 20
//     let left = []// = [-2] = [8]
//     let rigth = [] //[8, 20, -2, 4] = [8, 20] = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot1) {
//             left.push(arr[i])
//         } else {
//             rigth.push(arr[i])
//         }
//     }
//     return (QuickSort1(left).concat(pivot1, QuickSort1(rigth)))
// }

// const qs = [8, 20, -2, 4, -6]
// const isSorted = QuickSort1(qs)
// console.log(isSorted)


const QuickSort1 = (arr) => {
    if (arr.length < 2) {
        return arr
    } // base case of recursive calling

    let pivot1 = arr[arr.length - 1] 
    let left = []
    let rigth = [] 
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot1) {
            left.push(arr[i])
        } else {
            rigth.push(arr[i])
        }
    }
    return (QuickSort1(left).concat(pivot1, QuickSort1(rigth)))
}

const qs = [8, 20, -2, 4, 33, 2, 3, 12, 6]
const isSorted = QuickSort1(qs)
console.log(isSorted)


// Line-by-Line Execution of QuickSort
// Let's go through each step of the QuickSort execution with your array [8, 20, -2, 4, 33, 2, 3, 12, 6].

// Initial Call: QuickSort1([8, 20, -2, 4, 33, 2, 3, 12, 6])
// Base Case Check (arr.length < 2)?

// 9 < 2 → False → Continue.

// Pivot Selection:

// let pivot1 = arr[arr.length - 1] // pivot1 = 6 (last element)
// Partitioning (left = elements < 6, right = elements ≥ 6):

// let left = []
// let right = []
// Loop through elements (excluding pivot = 6):

// Element	    Comparison	    Action	                left	            right
// 8	        8 < 6? No	    right.push(8)	        []	                [8]
// 20	        20 < 6? No	    right.push(20)	        []	                [8, 20]
// -2	        -2 < 6? Yes	    left.push(-2)	        [-2]	            [8, 20]
// 4	        4 < 6? Yes	    left.push(4)	        [-2, 4]	            [8, 20]
// 33	        33 < 6? No	    right.push(33)	        [-2, 4]	            [8, 20, 33]
// 2	        2 < 6? Yes	    left.push(2)	        [-2, 4, 2]	        [8, 20, 33]
// 3	        3 < 6? Yes	    left.push(3)	        [-2, 4, 2, 3]	    [8, 20, 33]
// 12	        12 < 6? No	    right.push(12)	        [-2, 4, 2, 3]	    [8, 20, 33, 12]
// Recursive Calls:


// return QuickSort1(left).concat(pivot1, QuickSort1(right))
// QuickSort1([-2, 4, 2, 3]) → Sorts left

// QuickSort1([8, 20, 33, 12]) → Sorts right

// Recursive Call 1: QuickSort1([-2, 4, 2, 3])
// Base Case Check (4 < 2)? False → Continue.

// Pivot Selection: pivot1 = 3 (last element).

// Partitioning:

// Element	Comparison	    Action	        left	    right
// -2	    -2 < 3? Yes	    left.push(-2)	[-2]	    []
// 4	    4 < 3? No	    right.push(4)	[-2]	    [4]
// 2	    2 < 3? Yes	    left.push(2)	[-2, 2]	    [4]
// Recursive Calls:

// QuickSort1([-2, 2]) → Sorts left

// QuickSort1([4]) → Sorts right

// Sub-Call 1.1: QuickSort1([-2, 2])
// Base Case Check (2 < 2)? False → Continue.

// Pivot Selection: pivot1 = 2.

// Partitioning:

// -2 < 2 → left = [-2], right = [].

// Recursive Calls:

// QuickSort1([-2]) → Base case → returns [-2]

// QuickSort1([]) → Base case → returns []

// Result: [-2, 2].

// Sub-Call 1.2: QuickSort1([4])
// Base case → returns [4].

// Final Result for Call 1:
// [-2, 2].concat(3, [4]) → [-2, 2, 3, 4]
// Recursive Call 2: QuickSort1([8, 20, 33, 12])
// Base Case Check (4 < 2)? False → Continue.

// Pivot Selection: pivot1 = 12.

// Partitioning:

// Element	Comparison	    Action	        left	right
// 8	    8 < 12? Yes	    left.push(8)	[8]	    []
// 20	    20 < 12? No	    right.push(20)	[8]	    [20]
// 33	    33 < 12? No	    right.push(33)	[8]	    [20, 33]
// Recursive Calls:

// QuickSort1([8]) → Base case → returns [8]

// QuickSort1([20, 33]) → Sorts right

// Sub-Call 2.1: QuickSort1([20, 33])
// Base Case Check (2 < 2)? False → Continue.

// Pivot Selection: pivot1 = 33.

// Partitioning:

// 20 < 33 → left = [20], right = [].

// Recursive Calls:

// QuickSort1([20]) → Base case → returns [20]

// QuickSort1([]) → Base case → returns []

// Result: [20, 33].

// Final Result for Call 2:

// [8].concat(12, [20, 33]) → [8, 12, 20, 33]
// Final Concatenation
// Now, combine all sorted parts:

// [-2, 2, 3, 4].concat(6, [8, 12, 20, 33]) → [-2, 2, 3, 4, 6, 8, 12, 20, 33]
// Final Output

// console.log(isSorted); // [-2, 2, 3, 4, 6, 8, 12, 20, 33]
// Key Takeaways
// The algorithm recursively partitions the array around a pivot.

// Base case stops recursion when subarrays have ≤ 1 element.

// Concatenation combines sorted left + pivot + sorted right.