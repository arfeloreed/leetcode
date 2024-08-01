// time: O(n) | space: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0,
    l = 0;
  const charSet = new Set();
  for (const r of s) {
    while (charSet.has(r)) {
      charSet.delete(s[l]);
      l++;
    }
    charSet.add(r);
    max = Math.max(max, charSet.size);
  }
  return max;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));
