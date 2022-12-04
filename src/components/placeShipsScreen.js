const renderPlaceShipsScreen = (player) => {
  const main = document.createElement("main");
  document.body.appendChild(main);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "BattleShip";
  main.appendChild(title);

  const subtitle = document.createElement("p");
  subtitle.textContent = `Place your ships ${player.name}`;
  subtitle.classList.add("subtitle");
  main.appendChild(subtitle);

  const axisBtn = document.createElement("button");
  axisBtn.classList.add("axisBtn");
  axisBtn.value = "Axis: x";
  axisBtn.textContent = axisBtn.value;
  axisBtn.addEventListener("click", () => {
    if (axisBtn.value == "Axis: x") {
      axisBtn.value = "Axis: y";
      axisBtn.textContent = axisBtn.value;
    } else {
      axisBtn.value = "Axis: x";
      axisBtn.textContent = axisBtn.value;
    }
  });
  main.appendChild(axisBtn);

  const gameBoard = document.createElement("div");
};

export default renderPlaceShipsScreen;
