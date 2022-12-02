export default class Knight {
  constructor() {}

  knightMoves(from, to, next = []) {
    [x, y] = from;
    [i, j] = to;

    let a = x;
    let b = y;
  }

  possibleMoves(x, y) {
    const moves = [
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x + 1, y - 2],
      [x - 1, y - 2],
      [x - 2, y - 1],
      [x - 2, y + 1],
      [x - 1, y + 2],
      [x + 1, y + 2],
    ];

    const validMoves = moves.filter(
      (arr) => arr[0] >= 0 && arr[0] <= 7 && arr[1] >= 0 && arr[1] <= 7
    );
    return validMoves;
  }
}
