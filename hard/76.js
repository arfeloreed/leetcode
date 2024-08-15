/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return "";
  const slen = s.length;
  const tmap = {};
  const smap = {};
  let l = 0,
    need = 0,
    have = 0,
    char,
    res = [], // will hold the left and right pointer
    resLen = Infinity;
  // update tmap
  for (const i of t) {
    tmap[i] = 1 + (tmap[i] || 0);
  }
  need = Object.keys(tmap).length;

  // update smap
  for (let r = 0; r < slen; r++) {
    char = s[r];
    smap[char] = 1 + (smap[char] || 0);
    // update the have for the current window
    if (char in tmap && smap[char] === tmap[char]) have++;
    // update res and resLen
    while (need === have) {
      // r-l+1 is current window length
      if (r - l + 1 < resLen) {
        res = [l, r];
        resLen = r - l + 1;
      }
      // update current window
      smap[s[l]] -= 1;
      // decrease have if necessary chars are no longer in the current window
      if (s[l] in tmap && smap[s[l]] < tmap[s[l]]) have--;
      l++;
    }
  }
  // get the pointers
  const [left, right] = res;
  return resLen !== Infinity ? s.slice(left, right + 1) : "";
};
console.log(minWindow("ADOBECODEBANC", "ABC"));
