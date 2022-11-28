const renderTitleScreen = () => {
  const main = document.createElement("main");
  document.body.appendChild(main);

  const title = document.createElement("h1");
  title.textContent = "Battleship";
  title.classList.add("bigTitle");
  main.appendChild(title);

  const ammountOfPlayers = document.createElement("button");
  ammountOfPlayers.type = "button";
  ammountOfPlayers.value = "P v Ai";
  ammountOfPlayers.textContent = "P vs Ai";
  ammountOfPlayers.classList.add("toggleBtn");
  ammountOfPlayers.addEventListener("click", () => {
    if (ammountOfPlayers.value == "P v Ai") {
      ammountOfPlayers.value = "P v P";
      ammountOfPlayers.textContent = "P vs P";
    } else if (ammountOfPlayers.value == "P v P") {
      ammountOfPlayers.value = "P v Ai";
      ammountOfPlayers.textContent = "P vs Ai";
    }
  });
  main.appendChild(ammountOfPlayers);

  const playerNamesForm = document.createElement("form");
  playerNamesForm.classList.add("playerNamesForm");
  main.appendChild(playerNamesForm);

  const firstPlayerContainer = document.createElement("div");
  firstPlayerContainer.classList.add("playerOneContainer");
  playerNamesForm.appendChild(firstPlayerContainer);

  const secondPlayerContainer = document.createElement("div");
  secondPlayerContainer.classList.add("playerTwoContainer");
  playerNamesForm.appendChild(secondPlayerContainer);

  const playerOneLabel = document.createElement("label");
  playerOneLabel.classList.add("playerInputLabel");
  playerOneLabel.textContent = "Player One Name:";
  playerOneLabel.for = "playerOneName";
  firstPlayerContainer.appendChild(playerOneLabel);

  const playerOneInput = document.createElement("input");
  playerOneInput.classList.add("playerNameInput");
  playerOneInput.id = "playerOneInput";
  firstPlayerContainer.appendChild(playerOneInput);

  const playerTwoLabel = document.createElement("label");
  playerTwoLabel.classList.add("playerInputLabel");
  playerTwoLabel.textContent = "Player Two Name:";
  playerTwoLabel.for = "playerTwoInput";
  secondPlayerContainer.appendChild(playerTwoLabel);

  const playerTwoInput = document.createElement("input");
  playerTwoInput.classList.add("PlayerNameInput");
  playerTwoInput.id = "playerTwoInput";
  secondPlayerContainer.appendChild(playerTwoInput);

  const startGameBtn = document.createElement("button");
  startGameBtn.type = "button";
  startGameBtn.classList.add("startGameBtn");
  startGameBtn.textContent = "Start Game";
  playerNamesForm.appendChild(startGameBtn);
};

export { renderTitleScreen };
