/**
 * To solve this problem, we need to create a hash table, the characters in which will
 * correspond to a certain number. Passing along the line, we will check the current and
 * the next character at once, if the current one is greater than the next one, then
 * everything is fine, we add it to the result (it is initially equal to 0), otherwise,
 * we subtract the current value from the next value (for example, the current 10, and the
 * next 100 , we do 100 - 10, and we get 90), we also add to the result and additionally
 * increase the index by 1. As a result, at the end of the loop, we will get the result we need.
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];

    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += cur;
    }
  }

  return result;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("MMXXIV")); // 2024
