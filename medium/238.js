// 238. Product of Array Except Self

/**
 * Given an integer array nums, return an array answer such that answer[i] is equal 
 * to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array 
  does not count as extra space for space complexity analysis.)
 */

/**
 * Hint
 * For any nums[i], calculate its left product and calculate its right product, without including nums[i].
Then multiply these left and right product, This will give product of array excluding nums[i].
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (result[i - 1] === undefined) {
      result[i] = nums[i];
    } else {
      result[i] = result[i - 1] * nums[i];
    }
  }

  let post = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (result[i + 1] === undefined) {
      result[i] = post * result[i - 1];
      post = post * nums[i];
    } else {
      result[i] = post * (result[i - 1] === undefined ? 1 : result[i - 1]);
      post = post * nums[i];
    }
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
