import { gameboardFactory } from "../gamebaord";

test("should first create a gameboard ", () => {
  const gameboard = gameboardFactory();
  expect(gameboard.gameboard.length).toBe(100);
});

test("should place ship in gameboard horizontaly ", () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(10, "x", { length: 2 });
  expect(gameboard.gameboard[11].containsShip).toEqual({
    length: 2,
  });
});

test("should try to palce ship in gameboard  but fail", () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(9, "x", { length: 2 });
  expect(gameboard.gameboard[9].containsShip).toBeFalsy();
});

test("should place a ship on the vertical axis", () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(0, "y", { length: 2 });
  expect(gameboard.gameboard[10].containsShip).toEqual({
    length: 2,
  });
});

test("should try to place ship on gameboard vertical but unable to", () => {
  const gamebaord = gameboardFactory();
  gamebaord.placeShip(80, "y", { length: 3 });
  expect(gamebaord.gameboard[90].containsShip).toBeFalsy();
});
