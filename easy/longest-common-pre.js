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
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs.length === 0) return prefix;
  if (strs.length === 1) return strs[0];
  const word = strs[0];

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    for (let j = 1; j < strs.length; j++) {
      if (char !== strs[j][i]) return prefix;
    }
    prefix += char;
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["ape", "apple", "apply"])); // ap
