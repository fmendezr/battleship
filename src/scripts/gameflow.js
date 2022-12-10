import { playerFactory } from "./player";
import { shipFactory } from "./ship";

const game = {
  playerOne,
  playerTwo,
  turn: 0,

  typesOfShips: [
    { type: "Carrier", length: 5 },
    { type: "Battleship", length: 4 },
    { type: "Destroyer", length: 3 },
    { type: "Submarine", length: 3 },
    { type: "Patrol Boat", length: 2 },
  ],

  createPlayers(p1Name, p2Name) {
    this.playerOne = playerFactory(p1Name);
    this.playerTwo = playerFactory(p2Name);
  },

  checkTurn() {
    if (this.turn % 2 == 0) {
      return this.playerTwo;
    } else {
      return this.playerOne;
    }
  },
};

export default game;
