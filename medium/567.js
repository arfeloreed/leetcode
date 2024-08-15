/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// time: O(n1+26*(n2-n1)) space: O(1) for 26 keys
var checkInclusion = function (s1, s2) {
  const s1Len = s1.length,
    s2Len = s2.length;
  if (s1Len > s2Len) return false;

  function makeMap(str, len) {
    const map = new Array(26).fill(0);
    for (let i = 0; i < len; i++) {
      map[str.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    }
    return map;
  }

  s1map = makeMap(s1, s1Len);
  s2map = makeMap(s2, s1Len);

  function isMatch(map1, map2) {
    for (let i = 0; i < 26; i++) {
      if (map1[i] !== map2[i]) return false;
    }
    return true;
  }

  for (let i = 0; i < s2Len - s1Len; i++) {
    if (isMatch(s1map, s2map)) return true;
    // move the window for s2map
    s2map[s2.charCodeAt(i + s1Len) - "a".charCodeAt(0)] += 1;
    s2map[s2.charCodeAt(i) - "a".charCodeAt(0)] -= 1;
  }

  return isMatch(s1map, s2map);
};

/**
// time: O(n1+26*n1*(n2-n1)) space: O(1) for 26 keys
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  // Function to create a frequency map
  const createFrequencyMap = (str) => {
    const map = new Array(26).fill(0);
    for (const char of str) {
      map[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    return map;
  };

  // Function to compare two frequency maps
  const matches = (map1, map2) => {
    for (let i = 0; i < 26; i++) {
      if (map1[i] !== map2[i]) return false;
    }
    return true;
  };

  // Create frequency maps for s1 and the first window of s2
  const s1map = createFrequencyMap(s1);
  const s2map = createFrequencyMap(s2.slice(0, s1.length));

  // Slide the window over s2
  for (let i = 0; i <= s2.length - s1.length; i++) {
    if (matches(s1map, s2map)) return true;

    // Move the window to the right by adjusting the frequency map
    if (i + s1.length < s2.length) {
      s2map[s2[i + s1.length].charCodeAt(0) - "a".charCodeAt(0)] += 1;
      s2map[s2[i].charCodeAt(0) - "a".charCodeAt(0)] -= 1;
    }
  }

  return matches(s1map, s2map);
};
*/

console.log(checkInclusion("ab", "eidbaooo")); // true
