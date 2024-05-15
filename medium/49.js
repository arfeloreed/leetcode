// 49. group anagrams

/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // var list for the final output
  let result = [];
  if (strs.length < 2) {
    // if length < 2, return strs as the result inside a list
    result.push(strs);
  } else {
    // var that will as a pattern, start from the first index
    let compare = [strs[0].split("").sort().join("")];
    // add the first string as a list itself into the final result
    result.push([strs[0]]);

    // loop through the next string upto the end
    for (let i = 1; i < strs.length; ++i) {
      // check if the current string exists in the compare pattern, if not, add it
      let str = strs[i].split("").sort().join("");
      if (compare.indexOf(str) === -1) compare.push(str);

      // by using the index in the pattern, add the strings in the result via the corresponding index
      if (result[compare.indexOf(str)]) result[compare.indexOf(str)].push(strs[i]);
      else result.push([strs[i]]);
    }
  }

  return result;
};

console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
