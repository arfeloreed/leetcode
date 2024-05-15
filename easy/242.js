// 242. valid anagram

/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or 
phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your 
solution to such a case?
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sMap = {};
  for (const char of s) {
    if (sMap[char]) ++sMap[char];
    else sMap[char] = 1;
  }
  for (const char of t) {
    if (sMap[char] === undefined || sMap[char] === 0) return false;
    else --sMap[char];
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("anagram", "nagaraa")); // false
console.log(isAnagram("car", "rat")); // false
console.log(isAnagram("rar", "ra")); // false
