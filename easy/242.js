/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const smap = {};

  for (const i of s) {
    smap[i] = 1 + (smap[i] || 0);
  }
  for (const i of t) {
    if (smap[i] <= 0 || smap[i] === undefined) return false;
    smap[i] -= 1;
  }

  return true;
};
