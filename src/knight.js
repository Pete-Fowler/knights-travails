export default class Knight {
  bestPath(from, to, count = 0) {
    if (JSON.stringify(from) === JSON.stringify(to)) return count;
    const [x, y] = from;
    const [i, j] = to;

    let nextSquares = this.moves(x, y);

    // if (!JSON.stringify(nextSquares).includes(JSON.stringify(to))) {
    for (const square of nextSquares) {
      let [a, b] = square;
      return this.bestPath(square, to, count + 1);
    }
    // }
    // return count
  }

  moves(x, y) {
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

/*
PROBLEM: Write a function bestPath that takes from and to chess board coords and returns the least number of moves it takes to get there and the actual moves it would take.

APPROACH: Will use a graph, with squares [0, 5] being the vertexes, and edges connecting them if a knight could move between them. The graph can be represented by an edge list:
[
  [[x, y], [x, y]],   // going from one square to the next is a valid knight move and these are neighbors
  [[x, y], [x, y]]    // may have longer search time to find an edge?
]

Or an adjacency list:
Where a chess square is represented by an array index, and then at that index is an array of all the squares it is linked to through edges.

It could also be where every vertex is a node object, with reference to an array or linked list which contains all of its neighbors
{
  data: [x, y],
  nbrs: [[x, y], [x, y], ..., [x, y]] or set or linked list
}


*/
