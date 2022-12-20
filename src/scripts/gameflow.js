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
      renderCombatScreen(this.playerOne, this.playerTwo);
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
    if (this.turns % 2 == 0) {
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

  checkWinner(player) {
    if (player.ships.length == 0) {
      return true;
    }
  },

  userTurn(coordinate, player) {
    if (
      player.attack(this.getOpposingPlayer().gameboard, coordinate) != false
    ) {
      this.turns += 1;
    } else return false;
  },

  aiTurn(player = this.playerTwo) {
    this.turns += 1;
    player.attackRandomly(this.playerOne.gameboard);
  },

  play(coordinate) {
    if (this.userTurn(coordinate, this.getActivePlayer()) != false) {
      this.aiTurn();
      renderCombatScreen(this.getActivePlayer(), this.getOpposingPlayer());
      console.log(this.playerTwo.gameboard.ships);
    }
  },
};

export { game };
