export default class Gameboard {

  constructor() {
    this.board = Array(7);
    for(let i = 0; i < this.board.length; i++) {
      this.board[i] = Array(7).fill(0);
    }
  }
}