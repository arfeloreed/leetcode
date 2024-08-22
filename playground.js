/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const len = nums.length;
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

  return res;
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
