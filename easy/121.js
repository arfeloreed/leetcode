// time: O(n) | space: O(1)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  let profit = 0,
    left = 0,
    right = left + 1;
  while (right < len) {
    if (prices[left] < prices[right])
      profit = Math.max(profit, prices[right] - prices[left]);
    else left = right;

    right++;
  }
  return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
