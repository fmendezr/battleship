import { game } from "../scripts/gameflow";

const renderCombatScreen = (player, opp) => {
  const main = document.createElement("main");
  main.id = "main";
  document.body.appendChild(main);

  const title = document.createElement("h1");
  title.classList.add("smallTitle");
  title.textContent = "Battleship";
  main.appendChild(title);

  const gameboardsContainer = document.createElement("div");
  gameboardsContainer.classList.add("gameboardsContainer");
  main.appendChild(gameboardsContainer);

  const playerGameBoard = document.createElement("div");
  playerGameBoard.classList.add("gameboard");
  gameboardsContainer.appendChild(playerGameBoard);

  for (let i = 0; i < player.gameboard.gameboard.length; i++) {
    let cell = document.createElement("div");
    cell.id = i;
    cell.classList.add("cell");
    playerGameBoard.appendChild(cell);
    if (player.gameboard.gameboard[i].containsShip != false) {
      cell.classList.add("containsShip");
    }
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.id = `dot${i}`;
    cell.appendChild(dot);

    if (player.gameboard.gameboard[i].hasBeenHit == true) {
      dot.classList.add("miss");
    }
    if (player.gameboard.gameboard[i].containsShip != false) {
      if (player.gameboard.gameboard[i].hasBeenHit) {
        dot.classList.add("hit");
      }
    }
  }

  const oppGameboard = document.createElement("div");
  oppGameboard.classList.add("gameboard");
  gameboardsContainer.appendChild(oppGameboard);

  for (let i = 0; i < player.gameboard.gameboard.length; i++) {
    let cell = document.createElement("div");
    cell.id = i;
    cell.classList.add("cell");
    oppGameboard.appendChild(cell);

    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.id = `dot${i}`;
    cell.appendChild(dot);

    if (opp.gameboard.gameboard[i].hasBeenHit == true) {
      dot.classList.add("miss");
    }

    if (opp.gameboard.gameboard[i].containsShip != false) {
      if (opp.gameboard.gameboard[i].hasBeenHit) {
        dot.classList.add("hit");
      }
      if (opp.gameboard.gameboard[i].containsShip.isSunk()) {
        cell.classList.add("containsShip");
      }
    }

    cell.addEventListener("click", () => {
      game.play(parseInt(cell.id));
    });
  }
};

export { renderCombatScreen };
