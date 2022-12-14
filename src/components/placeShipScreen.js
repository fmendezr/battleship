const renderPlaceShipScreen = (player) => {
  const main = document.createElement("main");
  document.body.appendChild(main);

  const title = document.createElement("h1");
  title.classList.add("smallTitle");
  title.textContent = "Battleship";
  main.appendChild(title);

  const subtitle = document.createElement("h2");
  subtitle.classList.add("subtitle");
  subtitle.textContent = `${player.name} place your ship:`;
  main.appendChild(subtitle);

  const gameboardContainer = document.createElement("div");
  gameboardContainer.classList.add("gameboard");
  main.appendChild();

  for (let i = 0; i < player.gameboard.gameboard.length; i++) {
    let cell = document.createElement("div");
    cell.id = i;
    cell.classList.add("cell");
    gameboardContainer.appendChild(cell);
  }
};
