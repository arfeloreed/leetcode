// 347. Top K Frequent Elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  const bucket = [];
  const res = [];

  for (const i of nums) {
    map[i] = 1 + (map[i] || 0);
  }

  for (const [key, idx] of Object.entries(map)) {
    if (bucket[idx] === undefined) bucket[idx] = [key];
    else bucket[idx].push(key);
  }

  const bucketLen = bucket.length;
  for (let i = bucketLen - 1; i > 0; i--) {
    if (bucket[i] !== undefined) res.push(...bucket[i]);
    if (res.length === k) return res;
  }
};
console.log(topKFrequent([1, 1, 1, 1, 2, 2, 3], 2));
