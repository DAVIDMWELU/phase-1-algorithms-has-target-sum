const chai = require("chai");
global.expect = chai.expect;

function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (let num of array) {
    let complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

/* 
  Big O Time Complexity:
  - Time: O(n) -> We iterate through the array once, checking and adding to a set.
  - Space: O(n) -> In the worst case, we store all elements in the set.
*/

/* 
  Pseudocode:
  1. Create an empty set called `seenNumbers`
  2. Loop through each number in the array:
     a. Calculate the complement (target - current number)
     b. If the complement exists in `seenNumbers`, return `true`
     c. Otherwise, add the current number to `seenNumbers`
  3. If the loop finishes without finding a pair, return `false`
*/

/* 
  Explanation:
  - We use a set to store numbers we've seen so far.
  - If at any point, `target - currentNumber` exists in the set, it means we found two numbers that sum to `target`.
  - This approach avoids nested loops and makes the solution efficient.
*/

// Run test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
