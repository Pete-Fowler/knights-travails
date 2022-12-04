import Node from "./node.js";
import _ from "lodash";

export default class Knight {
  bestPath(from, to, distance = 0, queue = [], visited = []) {
    visited.push(from);

    if (_.isEqual(from, to)) {
      const str = visited.reduce((a, b, i) => {
        if (i === 0) return a + `[${b}]`;
        else return a + ` => [${b}]`;
      });
      return `The knight made it in ${distance} move(s): \n${str}`;
    }

    const nextMoves = this.moves(from, visited);

    for (const move of nextMoves) {
      const node = new Node(move, distance + 1);
      queue.push(node);
    }

    const node = queue.shift();

    return this.bestPath(node.coords, to, distance + 1, queue, visited);
  }

  moves(coords, visited) {
    const [x, y] = coords;
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

    const validUnvisitedMoves = _.difference(validMoves, visited);

    return validUnvisitedMoves;
  }
}

/*
This problem can be seen as the shortest path in an unweighted graph. Therefore we use BFS to solve this problem. 

We try all 8 possible positions where a Knight can reach from its position. If the reachable position is not already visited and is inside the board, we push this state into the queue with a distance 1 more than its parent state. Finally, we return the distance of the target position, when it gets pop out from the queue
*/
