import _ from "lodash";

export default class Knight {
  constructor() {
    this.graph = [];
    this.map = {};
  }

  bestPath(from, to, count = 0, queue = [], visited = []) {
    if (_.isEqual(from, to)) return count;

    const [x, y] = from;

    visited.push(from);

    let nextSquares = this.moves(x, y, visited);
    queue.push(...nextSquares);

    const square = nextSquares.shift();

    this.bestPath(square, to, count + 1, queue, visited);

    // this.graph.push(...nextSquares);

    // let [a, b] = square;
    // return this.bestPath(square, to, count + 1);
  }

  moves(x, y, visited) {
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

    const validUnvisitedMoves = _.difference(validMoves, ...visited);

    return validUnvisitedMoves;
  }

  makeGraph() {
    let k = 0;
    for (let i = 0; i <= 7; i++) {
      for (let j = 0; j <= 7; j++) {
        const square = [i, j];
        const moves = this.moves(i, j);
        this.map[k] = square;
        this.graph.push(moves);
        k++;
      }
    }
  }
}

/*
PROBLEM: Write a function bestPath that takes from and to chess board coords and returns the least number of moves it takes to get there and the actual moves it would take. Chess board is 8 x 8 = 64 squares.

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
