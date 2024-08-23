/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const len = strs.length;
  if (len === 1) return [strs];
  const res = [];
  const map = {};
  let sortedWord;

  for (const i of strs) {
    sortedWord = i.split("").sort().join("");
    if (map[sortedWord] === undefined) {
      map[sortedWord] = res.length;
      res.push([i]);
    } else {
      res[map[sortedWord]].push(i);
    }
  }

  return res;
};
