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
  // if (x < 0) return false;
  // if (x !== 0 && !(x % 10)) return false;
  if (x < 0 || (x !== 0 && !(x % 10))) return false;

  let copy = x;
  let reverseCopy = 0;

  while (copy > 0) {
    const digit = copy % 10;
    reverseCopy = reverseCopy * 10 + digit;
    copy = ~~(copy / 10);
  }

  return x === reverseCopy;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(0)); // true
console.log(isPalindrome(123)); // false

/*
Explanation!!!

original number: 543
reverse number: 0

//Get the last digit of the original number
original % 10 = 543 % 10 = 3
//Put this digit as the last one in the reverse number
reverse * 10 + digit = 0 * 10 + 3 = 0 + 3 = 3
reverse: 3
//Remove this digit from the original number
original / 10 = 543 / 10 = 54.3
~~54.3 = 54
original: 54

//Repeat
original % 10 = 54 % 10 = 4
reverse * 10 + digit = 3 * 10 + 4 = 30 + 4 = 34
reverse: 34
original / 10 = 54 / 10 = 5.4
~~5.4 = 5
original: 5

//Repeat
original % 10 = 5 % 10 = 5
reverse * 10 + digit = 34 * 10 + 5 = 340 + 5 = 345
reverse: 345
original / 10 = 5 / 10 = 0.5
~~0.5 = 0
original: 0

input: 543
output: 345
 */
