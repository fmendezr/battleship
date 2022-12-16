import { renderPlaceShipScreen } from "../components/placeShipScreen";
import { renderCombatScreen } from "../components/combatScreen";
import { playerFactory } from "./player";
import { shipFactory } from "./ship";

const game = {
  playerOne: null,
  playerTwo: null,

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
      renderCombatScreen();
    } else {
      document.getElementById("main").remove();
      renderPlaceShipScreen(
        player,
        this.typesOfShips[player.gameboard.ships.length]
      );
    }
  },
};

export { game };
