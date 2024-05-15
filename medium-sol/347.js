// 347. Top K Frequent Elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // by using bucket sort with freq counter
  let table = {};
  let bucket = [];
  let result = [];

  for (const num of nums) {
    if (!table[num]) table[num] = 1;
    else table[num]++;
  }

  for (const [key, val] of Object.entries(table)) {
    if (!bucket[val]) bucket[val] = new Set().add(key);
    else bucket[val].add(key);
  }

  for (let i = bucket.length - 1; i > 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 1, 2, 2, 3, 4], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([3, 0, 1, 0, 1, 1], 1)); // [1]
