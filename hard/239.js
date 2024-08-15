/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let deque = []; // store indices
  let result = [];
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    // remove indices of elements not within the sliding window
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // remove elements from the rightmost of the deque if they are smaller
    // than the current element
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    // add the current element's index to the deque
    deque.push(i);

    // add the element in front of the dequeue as maximum in result array
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
