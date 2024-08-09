/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1Len = s1.length,
    s2Len = s2.length;

  if (s1Len > s2Len) return false;

  function createFreqMap(str, len) {
    const map = new Array(26).fill(0);
    for (let i = 0; i < len; i++) {
      map[str.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    }
    return map;
  }

  function isMatch(map1, map2) {
    for (let i = 0; i < 26; i++) {
      if (map1[i] !== map2[i]) return false;
    }
    return true;
  }

  const s1map = createFreqMap(s1, s1Len);
  const s2map = createFreqMap(s2, s1Len);

  for (let i = 0; i < s2Len - s1Len; i++) {
    if (isMatch(s1map, s2map)) return true;

    if (i + s1Len < s2Len) {
      s2map[s2.charCodeAt(i + s1Len) - "a".charCodeAt(0)] += 1;
      s2map[s2.charCodeAt(i) - "a".charCodeAt(0)] -= 1;
    }
  }

  return isMatch(s1map, s2map);
};
console.log(checkInclusion("ab", "eidbaooo")); // true
