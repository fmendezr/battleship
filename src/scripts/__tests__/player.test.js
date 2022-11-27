import { gameboardFactory } from "../gamebaord";
import { playerFactory } from "../player";

describe("Player functions", () => {
  let player;
  beforeEach(() => {
    player = playerFactory("Felix");
  });

  test("should create a player that has name 'Felix' as a property", () => {
    expect(player.name).toBe("Felix");
  });

  test("should create a player that contains a generic gameboard", () => {
    expect(player.gameboard.gameboard).toEqual(gameboardFactory().gameboard);
  });

  test("should attack another gamebord", () => {
    const player2 = playerFactory("Marcus");
    player.attack(player2.gameboard, 0);
    expect(player2.gameboard.gameboard[0]).toEqual({
      containsShip: false,
      hasBeenHit: true,
    });
  });

  test("shoul attack another gameboard", () => {
    const player2 = playerFactory("Lucius");
    player.attackRandomly(player2.gameboard);
    expect(
      player2.gameboard.gameboard.some((element) => element.hasBeenHit == true)
    ).toBeTruthy();
  });
});
