// 128. Longest Consecutive Sequence

/**
Given an unsorted array of integers nums, return the length of the longest consecutive 
elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  // track the max sequence length
  let max = 0;
  // convert nums array to set to remove duplicates
  const numsSet = new Set(nums);

  for (const num of numsSet) {
    // get the prev num of the current num and check if it exists in the set
    const prev = num - 1;
    // if prev doesn't exist, it means it is the start of the sequence
    if (!numsSet.has(prev)) {
      // initialize a length to track the length of the current sequence
      let length = 1;
      // using while loop add length to current num and check if it exists in the set
      // if exists add length by 1
      while (numsSet.has(num + length)) {
        length++;
      }
      // set max to the max of length and max
      max = Math.max(max, length);
    }
  }

  return max;
};

console.log(longestConsecutive([])); // 0
console.log(longestConsecutive([1, 2, 0, 1])); // 3
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); // 7
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
