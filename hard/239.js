// time: O(n) | space: O(n)
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

  /*
   * const len = nums.length;
  const res = [];
  const deq = [];
  let l = 0;

  for (let r = 0; r < len; r++) {
    while (deq.length > 0 && nums[r] >= nums[deq[deq.length - 1]]) {
      deq.pop();
    }
    deq.push(r);

    if (l > deq[0]) deq.shift();

    if (r + 1 >= k) {
      res.push(nums[deq[0]]);
      l++;
    }
  }

  return res;*/
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
