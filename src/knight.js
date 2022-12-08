import Node from "./node.js";
import _ from "lodash";

export default class Knight {
  bestPath(from, to) {
    const q = [new Node(from)];
    const visited = [];

    while (q.length > 0) {
      const node = q.shift();

      if (_.isEqual(node.coords, to)) {
        return `The knight made it in ${
          node.path.length - 1
        } move(s): \n ${node.path
          .map((move, i) => {
            if (i === 0) {
              return `[${move}]`;
            } else {
              return ` => [${move}]`;
            }
          })
          .join("")}`;
      }

      visited.push(node);

      const nextMoves = this.moves(node, visited);
      const nextNodes = nextMoves.map(
        (move) => new Node(move, [...node.path, move])
      );
      q.push(...nextNodes);
    }
  }

  moves(node, visited) {
    const [x, y] = node.coords;
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

    const validUnvisitedMoves = _.differenceWith(
      validMoves,
      visitedCoords,
      _.isEqual
    );

    return validUnvisitedMoves;
  }
}
