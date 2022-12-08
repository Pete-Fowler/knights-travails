import { iteratee } from "lodash";
import Node from "../src/node";

describe("Node", () => {
  it("Creates a Node with appropriate content", () => {
    expect(new Node([1, 0])).toEqual({ coords: [1, 0], path: [[1, 0]] });
    expect(
      new Node(
        [0, 1],
        [
          [0, 0],
          [0, 1],
        ]
      )
    ).toEqual({
      coords: [0, 1],
      path: [
        [0, 0],
        [0, 1],
      ],
    });
  });
});
