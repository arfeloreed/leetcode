/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// time: O(26*n) | space: O(26)
// var characterReplacement = function (s, k) {
//   let res = 0,
//     l = 0;
//   const map = {},
//     len = s.length;
//   for (let r = 0; r < len; r++) {
//     map[s[r]] = 1 + (map[s[r]] || 0);
//
//     while (r - l + 1 - Math.max(...Object.values(map)) > k) {
//       --map[s[l]];
//       ++l;
//     }
//
//     res = Math.max(res, r - l + 1);
//   }
//   return res;
// };

// time: O(n) | space: O(26)
var characterReplacement = function (s, k) {
  let res = 0,
    l = 0,
    maxF = 0;
  const map = {},
    len = s.length;
  for (let r = 0; r < len; r++) {
    map[s[r]] = 1 + (map[s[r]] || 0);
    maxF = Math.max(maxF, map[s[r]]);

    while (r - l + 1 - maxF > k) {
      --map[s[l]];
      ++l;
    }

    res = Math.max(res, r - l + 1);
  }
  return res;
};
console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("ABAB", 2));
