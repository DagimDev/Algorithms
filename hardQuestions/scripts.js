console.log("Hard Questions")

// 1. Initial Implementation (Two-Number Sum)
// twoSum.js
function hasTwoSum(nums, target) {
  const seen = new Set();
  for (const num of nums) {
    const complement = target - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

module.exports = hasTwoSum;

// 2. Extended Implementation (All Combinations)
// sumToTarget.js
function sumToTarget(nums, target) {
  function backtrack(start, currentSum) {
    if (currentSum === target) return true;
    if (currentSum > target || start >= nums.length) return false;
    
    return backtrack(start + 1, currentSum + nums[start]) || 
           backtrack(start + 1, currentSum);
  }
  
  return backtrack(0, 0);
}

module.exports = sumToTarget;

// 3. Dynamic Programming Solution
// dpSumToTarget.js
function dpSumToTarget(nums, target) {
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  
  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      if (dp[i - num]) {
        dp[i] = true;
        if (i === target) return true;
      }
    }
  }
  
  return dp[target];
}

module.exports = dpSumToTarget;

// 4. Tests
// test.js
const hasTwoSum = require('./twoSum');
const sumToTarget = require('./sumToTarget');
const dpSumToTarget = require('./dpSumToTarget');

const nums = [3, 5, 2, 8, 11];
const target = 10;

console.log('Two Sum:', hasTwoSum(nums, target));
console.log('Subset Sum:', sumToTarget(nums, target));
console.log('DP Subset Sum:', dpSumToTarget(nums, target));


// 5. Documentation
// javascript
// README.md
// # Sum Checker Algorithms
// Three implementations to check if numbers sum to target:

1. `hasTwoSum` - //Checks if any two numbers sum to target (O(n) time)
2. `sumToTarget` //- Checks if any subset sums to target (recursive)
3. `dpSumToTarget` //- Dynamic programming version (O(n*T) time)