import Gameboard from "../src/gameboard.js";

const gameboard = new Gameboard();
const exampleBoard = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

describe("Gameboard", () => {
  describe("Creation", () => {
    it("Creates a 7x7 board filled with 0s", () => {
      expect(gameboard.board).toEqual(exampleBoard);
    });
  });
});
