// longest common prefix

/**
 * Write a function to find the longest common prefix string amongst an array of 
 * strings.
If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */
/**
 * @param {string[]} strs
 * @return {string}
 *
 * The thing is with js we can sort strings and when we sort an array of different
 * strings they will be sorted alphabetically, which means all we left to do is find
 * the common part between the first and the last values in the sorted array. As simple as this:
 */
var longestCommonPrefix = function (strs) {
  strs.sort();
  for (let i = 0; i < strs[0].length; i++) {
    // if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].slice(0, i);
  }
  return strs[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["ape", "apple", "apply"])); // ap
