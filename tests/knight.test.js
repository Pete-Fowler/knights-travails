import Knight from "../src/knight.js";

let k = new Knight();

describe("Setup/Helpers", () => {
  describe("possibleMoves", () => {
    it("Returns valid moves only", () => {
      expect(k.moves([0, 0])).toEqual([
        [2, 1],
        [1, 2],
      ]);
      expect(k.moves([3, 0])).toEqual([
        [5, 1],
        [1, 1],
        [2, 2],
        [4, 2],
      ]);
      expect(k.moves([3, 3])).toEqual([
        [5, 4],
        [5, 2],
        [4, 1],
        [2, 1],
        [1, 2],
        [1, 4],
        [2, 5],
        [4, 5],
      ]);
      expect(k.moves([0, 7])).toEqual([
        [2, 6],
        [1, 5],
      ]);
      expect(k.moves([7, 7])).toEqual([
        [6, 5],
        [5, 6],
      ]);
    });
  });
});
describe("bestPath", () => {
  it("[1,0] to [3,1] has 1 move", () => {
    expect(k.bestPath([1, 0], [3, 1])).toEqual(
      expect.stringContaining("1 move(s)")
    );
    expect(k.bestPath([1, 0], [7, 7])).toEqual(
      expect.stringContaining("[1,0] => [3,1]")
    );
  });
  it("[6,0] to [3,7] has 4 moves", () => {
    expect(k.bestPath([6, 0], [3, 7])).toEqual(
      expect.stringContaining("4 move(s)")
    );
    expect(k.bestPath([6, 0], [3, 7])).toEqual(
      expect.stringContaining("[6,0] => [4,1] => [3,3] => [2,5] => [3,7]")
    );
  });
  it("[1,0] to [7,7] has 5 moves", () => {
    expect(k.bestPath([1, 0], [7, 7])).toEqual(
      expect.stringContaining("5 move(s)")
    );
    expect(k.bestPath([1, 0], [7, 7])).toEqual(
      expect.stringContaining(
        "[1,0] => [3,1] => [5,2] => [7,3] => [6,5] => [7,7]"
      )
    );
  });
  it("[7,0] to [0,7] has 6 moves", () => {
    expect(k.bestPath([7, 0], [0, 7])).toEqual(
      expect.stringContaining("6 move(s)")
    );
    expect(k.bestPath([7, 0], [0, 7])).toEqual(
      expect.stringContaining(
        "[7,0] => [5,1] => [7,2] => [5,3] => [3,4] => [1,5] => [0,7]"
      )
    );
  });
});
