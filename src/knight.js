import Node from "./node.js";
import _ from "lodash";

export default class Knight {
  bestPath(from, to, distance = 0, queue = [], visited = []) {
    queue.push(new Node(from, distance));

    while (queue.length >= 0) {
      const node = queue.shift();
      if (_.isEqual(node.coords, to)) {
        const str = visited.reduce((a, b, i) => {
          if (i === 0) return a + `[${b}]`;
          else return a + ` => [${b}]`;
        });
      } else {
        distance++;
        visited.push(node.coords);
        const next = this.moves(node.coords, visited);
        const nextNodes = next.map((move) => new Node(move, distance));
        for (const node of nextNodes) {
          queue.push(node);
        }
      }
    }
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
