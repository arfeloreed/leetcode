/**
Given an integer x, return true if x is a 
palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. 
Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:

-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?
 */

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (x < 0 || (x !== 0 && !(x % 10))) return false;

  let word = x.toString();
  let reversedWord = [...word].reverse().join("");

  return word === reversedWord;

  /*
  // by not converting x into string
  if (x < 0) return false;
  if (x !== 0 && !(x % 10)) return false;

  let n = x;
  let arr = [];

  while (n > 0) {
    arr.unshift(n % 10);
    n = (n / 10) | 0;
  }

  let reverseArr = [...arr].reverse();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== reverseArr[i]) return false;
  }

  return true;
  */
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(0)); // true
console.log(isPalindrome(123)); // true
