// 347. Top K Frequent Elements

/**
 * Given an integer array nums and an integer k, return the k most frequent elements. 
 * You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // base case
  if (nums.length === 1 && k === 1) return nums;
  let result = [];
  const table = {};
  // loop through the array, check if element is in table
  for (const num of nums) {
    // if not, add element to table for ref and add element to result
    if (table[num] === undefined) table[num] = 1;
    else ++table[num];
  }
  // find the key with highest freq it occured
  let largest = 0;
  let largestKey;
  for (let i = 0; i < k; i++) {
    for (const key in table) {
      if (table[key] > largest) {
        largest = table[key];
        largestKey = key;
      }
    }
    result.push(largestKey);
    table[largestKey] = 0;
    largest = 0;
  }

  // return result
  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([3, 0, 1, 0, 1, 1], 1)); // [1]
