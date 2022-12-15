const renderPlaceShipScreen = (player, shipObj) => {
  const main = document.createElement("main");
  document.body.appendChild(main);

  const title = document.createElement("h1");
  title.classList.add("smallTitle");
  title.textContent = "Battleship";
  main.appendChild(title);

  const subtitle = document.createElement("h2");
  subtitle.classList.add("subtitle");
  subtitle.textContent = `${player.name} place your ${shipObj.type}:`;
  main.appendChild(subtitle);

  const axisBtn = document.createElement("button");
  axisBtn.textContent = "Axis: X";
  axisBtn.value = "x";
  main.appendChild(axisBtn);
  axisBtn.addEventListener("click", () => {
    if (axisBtn.value == "x") {
      axisBtn.value = "y";
      axisBtn.textContent = "Axis: Y";
    } else {
      axisBtn.value = "x";
      axisBtn.textContent = "Axis: X";
    }
  });

  const gameboardContainer = document.createElement("div");
  gameboardContainer.classList.add("gameboard");
  main.appendChild(gameboardContainer);

  for (let i = 0; i < player.gameboard.gameboard.length; i++) {
    let cell = document.createElement("div");
    cell.id = i;
    cell.classList.add("cell");
    gameboardContainer.appendChild(cell);
  }

  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      let locations = player.gameboard.findLocations(
        parseInt(cell.id),
        axisBtn.value,
        shipObj.ship.length
      );
      if (player.gameboard.checkValidLocation(locations, axisBtn.value)) {
        for (let i = 0; i < locations.length; i++) {
          cells[locations[i]].classList.add("valid");
        }
      } else {
        for (let i = 0; i < locations.length; i++) {
          cells[locations[i]].classList.add("invalid");
        }
      }
    });
    cell.addEventListener("mouseout", () => {
      cells.forEach((cell) => {
        cell.classList.remove("valid", "invalid");
      });
    });
  });
};

export { renderPlaceShipScreen };
