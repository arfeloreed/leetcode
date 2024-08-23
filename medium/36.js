/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const map = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const char = board[i][j];
      if (char !== ".") {
        const row = `row-${i}-${char}`;
        const col = `col-${j}-${char}`;
        const box = `${~~(i / 3)}-${~~(j / 3)}-${char}`;

        if (
          map[row] !== undefined ||
          map[col] !== undefined ||
          map[box] !== undefined
        )
          return false;

        map[row] = true;
        map[col] = true;
        map[box] = true;
      }
    }
  }

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
