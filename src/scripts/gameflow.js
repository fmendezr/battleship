import { renderPlaceShipScreen } from "../components/placeShipScreen";
import { renderCombatScreen } from "../components/combatScreen";
import { playerFactory } from "./player";
import { shipFactory } from "./ship";

const game = {
  playerOne: null,
  playerTwo: null,
  turns: 0,

  typesOfShips: [
    { type: "Carrier", ship: shipFactory(5) },
    { type: "Battleship", ship: shipFactory(4) },
    { type: "Destroyer", ship: shipFactory(3) },
    { type: "Submarine", ship: shipFactory(3) },
    { type: "Patrol Boat", ship: shipFactory(2) },
  ],

  createPlayers(p1Name, p2Name = "AI") {
    this.playerOne = playerFactory(p1Name);
    this.playerTwo = playerFactory(p2Name);
  },

  playerPlaceShips(player) {
    if (player.gameboard.ships.length >= 5) {
      document.getElementById("main").remove();
      this.aiPlaceShips();
      renderCombatScreen(this.playerOne);
    } else {
      document.getElementById("main").remove();
      renderPlaceShipScreen(
        player,
        this.typesOfShips[player.gameboard.ships.length]
      );
    }
  },

  aiPlaceShips(player = this.playerTwo) {
    for (let i = 0; i < 5; i++) {
      let coordinate = parseInt(Math.random() * 100);
      while (
        !player.gameboard.placeShip(
          coordinate,
          this.getRandomAxis(),
          this.typesOfShips[i].ship
        )
      ) {
        coordinate = parseInt(Math.random() * 100);
      }
    }
  },

  getRandomAxis() {
    let axis = Math.random();
    return axis < 0.5 ? "y" : "x";
  },

  getActivePlayer() {
    if (turns % 2 == 0) {
      return this.playerOne;
    } else {
      return this.playerTwo;
    }
  },

  getOpposingPlayer() {
    if (this.getActivePlayer() == this.playerOne) {
      return this.playerTwo;
    } else {
      return this.playerOne;
    }
  },
};

export { game };
