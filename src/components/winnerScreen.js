const renderWinnerScreen = (player) => {
  const main = document.createElement("main");
  main.id = "main";
  document.body.appendChild(main);

  const title = document.createElement("h1");
  title.classList.add("smallTitle");
  title.textContent = "Battleship";
  main.appendChild(title);

  const winner = document.createElement("h1");
  winner.classList.add("bigTitle");
  winner.textContent = `${player.name}`;
};

export { renderWinnerScreen };
