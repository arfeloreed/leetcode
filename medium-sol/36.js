/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const hashset = new Set();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const subBox = Math.floor(i / 3) * 3 + Math.floor(j / 3); //formula to calculate 3X3 matrix
      const subBoxString = `${subBox}-${board[i][j]}`; // to store unique value in 3x3 matrix
      const rowString = `row-${i}-${board[i][j]}`; // to store unique value in row
      const columnString = `column-${j}-${board[i][j]}`; // to store unique value in column

      if (
        hashset.has(subBoxString) ||
        hashset.has(rowString) ||
        hashset.has(columnString)
      ) {
        return false; //if already present in hashset then return false
      }
      if (board[i][j] === ".") {
        // don't store "." in hashset
        continue;
      }
      // store value in the set
      hashset.add(subBoxString);
      hashset.add(rowString);
      hashset.add(columnString);
    }
  }
  // console.log(hashset);
  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board));
