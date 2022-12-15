import { gameboardFactory } from "../gamebaord";
import { shipFactory } from "../ship";

describe("Gameboard functions", () => {
  let gameboard;
  beforeEach(() => {
    gameboard = gameboardFactory();
  });

  test("should first create a gameboard ", () => {
    expect(gameboard.gameboard.length).toBe(100);
  });

  test("should place ship in gameboard horizontaly ", () => {
    gameboard.placeShip(10, "x", { length: 2 });
    expect(gameboard.gameboard[11].containsShip).toEqual({
      length: 2,
    });
  });

  test("should try to palce ship in gameboard  but fail", () => {
    gameboard.placeShip(9, "x", { length: 2 });
    expect(gameboard.gameboard[9].containsShip).toBeFalsy();
  });

  test("should place a ship on the vertical axis", () => {
    gameboard.placeShip(0, "y", { length: 2 });
    expect(gameboard.gameboard[10].containsShip).toEqual({
      length: 2,
    });
  });

  test("should try to place ship on gameboard vertical but unable to", () => {
    gameboard.placeShip(80, "y", { length: 3 });
    expect(gameboard.gameboard[90].containsShip).toBeFalsy();
  });

  test("should try to place a ship where another ship is located", () => {
    gameboard.placeShip(80, "y", { length: 2 });
    expect(gameboard.placeShip(90, "x", { length: 3 })).toBeFalsy();
  });

  test("should atack an empty coordinate in the gameboard", () => {
    gameboard.receiveAttack(1);
    expect(gameboard.gameboard[1]).toEqual({
      containsShip: false,
      hasBeenHit: true,
    });
  });

  test("should attack an empty coordinate in the gameboard and return Missed", () => {
    expect(gameboard.receiveAttack(1)).toBe("Missed");
  });

  test("should attack a coordinate that contains a ship", () => {
    const ship = shipFactory(3);
    gameboard.placeShip(1, "x", ship);
    expect(gameboard.receiveAttack(1)).toBe("HIT");
  });

  test("should attack a coordinate that contains a ship", () => {
    const ship = shipFactory(2);
    gameboard.placeShip(1, "x", ship);
    gameboard.receiveAttack(1);
    expect(gameboard.gameboard[1].containsShip.getHits()).toBe(1);
  });

  test("should attack a coordinate the contains a ship and sinks its", () => {
    const ship = shipFactory(1);
    gameboard.placeShip(1, "x", ship);
    expect(gameboard.receiveAttack(1)).toBe("Ship has sunk");
  });

  test("should check whether allShipsAreSunk works when there are still ships in the gamebaord", () => {
    const ship = shipFactory(1);
    gameboard.placeShip(1, "x", ship);
    expect(gameboard.allShipsSunk()).toBeFalsy();
  });

  test("should check whether allShipAreSunk works when all ships have been sunk", () => {
    const ship = shipFactory(2);
    gameboard.placeShip(1, "x", ship);
    gameboard.receiveAttack(1);
    gameboard.receiveAttack(2);
    expect(gameboard.allShipsSunk()).toBeTruthy();
  });
});
