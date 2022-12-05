import Node from "./node.js";
import _ from "lodash";

export default class Knight {
  bestPath(from, to, distance = 0, queue = [], visited = []) {
    if (_.isEqual(from.coords || from, to)) {
      console.log(from.path);
      return `The knight made it in ${
        from.path.length
      } move(s)! \n ${from.path.map((v) => {
        return `[${v}]\n`;
      })}`;
    }

    visited.push(new Node(from.coords || from));

    const next = this.moves(from.coords || from, visited);
    queue.push(
      ...next.map((move) => new Node(move, [move].push(from.path || from)))
    );

    if (queue.length < 1) return;

    return this.bestPath(queue.shift(), to, distance + 1, queue, visited);
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

    const validUnvisitedMoves = _.difference(validMoves, visited);

    return validUnvisitedMoves;
  }
}

/*
This problem can be seen as the shortest path in an unweighted graph. Therefore we use BFS to solve this problem. 

We try all 8 possible positions where a Knight can reach from its position. If the reachable position is not already visited and is inside the board, we push this state into the queue with a distance 1 more than its parent state. Finally, we return the distance of the target position, when it gets pop out from the queue
*/
