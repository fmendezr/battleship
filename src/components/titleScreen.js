const renderTitleScreen = () => {
  const main = document.createElement("main");
  document.body.appendChild(main);

  const title = document.createElement("h1");
  title.textContent = "BattleShip";
  title.classList.add("bigTitle");
  main.appendChild(title);

  const form = document.createElement("form");
  form.classList.add("nameForm");
  main.appendChild(form);

  const labelName = document.createElement("label");
  labelName.for = "playerName";
  labelName.classList.add("label");
  labelName.textContent = "Enter Player Name:";
  form.appendChild(labelName);

  const inputName = document.createElement("input");
  inputName.id = "playerName";
  inputName.classList.add("input");
  inputName.placeholder = "Ur Name ";
  form.appendChild(inputName);

  const btn = document.createElement("button");
  btn.id = "startGameBtn";
  btn.textContent = "Start Game";
};
