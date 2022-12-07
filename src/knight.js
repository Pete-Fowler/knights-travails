import Node from "./node.js";
import _ from "lodash";

export default class Knight {
  bestPath(from, to, queue = [], visited = []) {
    if (_.isEqual(from.coords || from, to)) {
      return `The knight made it in ${
        from.path.length
      } move(s)! \n ${from.path.map((move) => {
        return `[${move}]\n`;
      })}`;
    }

    visited.push(new Node(from.coords || from));

    const next = this.moves(from.coords || from, visited);

    queue.push(
      ...next.map((move) => {
        const n = new Node(move, (from.path || [from]).concat([move]));
        return n;
      })
    );

    if (queue.length < 1) return;

    return this.bestPath(queue.shift(), to, queue, visited);
  }

  moves(from, visited) {
    const [x, y] = from.coords || from;
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

    const visitedCoords = visited.map((v) => v.coords);

    const validUnvisitedMoves = _.difference(
      validMoves,
      visitedCoords,
      _.isEqual
    );

    return validMoves;
  }
}
