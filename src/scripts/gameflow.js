import { playerFactory } from "./player";

const game = {
  playerOne,
  playerTwo,

  createPlayers(p1Name, p2Name) {
    this.playerOne = playerFactory(p1Name);
    this.playerTwo = playerFactory(p2Name);
  },
};

export default game;
