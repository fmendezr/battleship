import { gameboardFactory } from "../gamebaord";

test("should first create a gameboard ", () => {
  const gameboard = gameboardFactory();
  expect(gameboard.gamebaord.length).toBe(100);
});

test("should place ship in gameboard ", () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(1, "x", { length: 1 });
  expect(gameboard.gamebaord[0].containsShip).toBeTruthy();
});

test("should try to palce ship in gameboard  but fail", () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(9, "x", { length: 2 });
  expect(gameboard.gamebaord[9].containsShip).toBeFalsy();
});

test("should place a ship on the vertical axis", () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(0, "y", { length: 2 });
  expect(gameboard.gamebaord[10].containsShip).toBeTruthy();
});

test("should try to place ship on gameboard vertical but unable to", () => {
  const gamebaord = gameboardFactory();
  gamebaord.placeShip(80, "y", { length: 3 });
  expect(gamebaord.gamebaord[80].containsShip).toBeFalsy;
});
