const InsertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
};

// [8, 20, -2, 4, -6]
// [8, 20, -2, 4, -6]
// [8, 20, 20, 4, -6]
// [8, 8, 20, 4, -6]
// [-2, 8, 20, 4, -6]
// [-2, 8, 20, 20, -6]
// [-2, 8, 8, 20, -6]
// [-2, 4, 8, 20, -6]
// [-2, 4, 8, 20, 20]
// [-2, 4, 8, 8, 20]
// [-2, 4, 4, 8, 20]
// [-2, -2, 4, 8, 20]
// [-6, -2, 4, 8, 20]

const insert = [8, 20, -2, 4, -6];
InsertionSort(insert);
console.log(insert);

// Key Observations
// Time Complexity:

// Worst Case (Reverse Sorted): O(n²) (Slow for large arrays).

// Best Case (Already Sorted): O(n) (Only comparisons, no shifts).

// Space Complexity: O(1) (Sorts in-place, no extra memory needed).

// Use Cases:

// Efficient for small datasets or nearly sorted arrays.

// Used in practice for small arrays (e.g., in Array.sort() for small subarrays in some engines).


// How Insertion Sort Works (Visual Example)
// Initial Array: [8, 20, -2, 4, -6]
// Pass 1 (i=1, numberToInsert=20):
// j = 0, arr[j] = 8 (since 8 < 20, no shift needed).

// Array remains: [8, 20, -2, 4, -6]

// Pass 2 (i=2, numberToInsert=-2):
// Compare 20 (j=1) → Shift → [8, 20, 20, 4, -6] (j-- → j=0).

// Compare 8 (j=0) → Shift → [8, 8, 20, 4, -6] (j-- → j=-1).

// Insert -2 at j + 1 = 0 → [-2, 8, 20, 4, -6].

// Pass 3 (i=3, numberToInsert=4):
// Compare 20 (j=2) → Shift → [-2, 8, 20, 20, -6] (j-- → j=1).

// Compare 8 (j=1) → Shift → [-2, 8, 8, 20, -6] (j-- → j=0).

// Compare -2 (j=0) → No shift (-2 < 4).

// Insert 4 at j + 1 = 1 → [-2, 4, 8, 20, -6].

// Pass 4 (i=4, numberToInsert=-6):
// Compare 20 (j=3) → Shift → [-2, 4, 8, 20, 20] (j-- → j=2).

// Compare 8 (j=2) → Shift → [-2, 4, 8, 8, 20] (j-- → j=1).

// Compare 4 (j=1) → Shift → [-2, 4, 4, 8, 20] (j-- → j=0).

// Compare -2 (j=0) → Shift → [-2, -2, 4, 8, 20] (j-- → j=-1).

// Insert -6 at j + 1 = 0 → [-6, -2, 4, 8, 20].

// Final Sorted Array: [-6, -2, 4, 8, 20]