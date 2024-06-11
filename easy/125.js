// 125. valid palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  const len = s.length;

  for (let i = 0, j = len - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
