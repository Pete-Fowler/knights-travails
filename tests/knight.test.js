import Knight from "../src/knight.js";

let k = new Knight();

describe("Setup/Helpers", () => {
  describe("possibleMoves", () => {
    it("Returns valid moves only", () => {
      expect(k.moves(0, 0)).toEqual([
        [2, 1],
        [1, 2],
      ]);
      expect(k.moves(3, 0)).toEqual([
        [5, 1],
        [1, 1],
        [2, 2],
        [4, 2],
      ]);
      expect(k.moves(3, 3)).toEqual([
        [5, 4],
        [5, 2],
        [4, 1],
        [2, 1],
        [1, 2],
        [1, 4],
        [2, 5],
        [4, 5],
      ]);
      expect(k.moves(0, 7)).toEqual([
        [2, 6],
        [1, 5],
      ]);
      expect(k.moves(7, 7)).toEqual([
        [6, 5],
        [5, 6],
      ]);
    });
  });
});
