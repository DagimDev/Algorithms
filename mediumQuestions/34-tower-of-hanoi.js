// # Tower of Hanoi Explanation

// The Tower of Hanoi is a classic mathematical puzzle that demonstrates recursion beautifully. Here's how the code works:

// ## Basic Concept
// - There are 3 rods (A, B, C) and `n` disks of different sizes stacked on rod A in decreasing order of size (smallest on top).
// - Goal: Move all disks from rod A to rod C following these rules:
//   1. Only one disk can be moved at a time
//   2. A larger disk can never be placed on top of a smaller disk
//   3. You can use the auxiliary rod (B) for temporary storage

// ## How the Recursive Function Works

// For `towerOfHanoi(3, "A", "C", "B")`:

// 1. **Base Case**: When `n === 1`, simply move the single disk from the source rod to the destination rod.

// 2. **Recursive Case** (for n > 1):
//    - Move `n-1` disks from the source rod to the auxiliary rod (using the destination rod as temporary storage)
//    - Move the remaining largest disk from the source rod to the destination rod
//    - Move the `n-1` disks from the auxiliary rod to the destination rod (using the source rod as temporary storage)

// ## Step-by-Step Execution for n=3

// 1. Move top 2 disks from A to B (using C as auxiliary):
//    - Move top 1 disk from A to C
//    - Move disk 2 from A to B
//    - Move disk 1 from C to B

// 2. Move disk 3 from A to C

// 3. Move the 2 disks from B to C (using A as auxiliary):
//    - Move disk 1 from B to A
//    - Move disk 2 from B to C
//    - Move disk 1 from A to C

// ## Output Explanation
// The code will print:
// ```
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C
// ```

const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
};

towerOfHanoi(3, "A", "C", "b");
