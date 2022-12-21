import { gameboardFactory } from "./gamebaord";

const playerFactory = (name) => {
  const gameboard = gameboardFactory();

  const attack = (oppGameboard, coordinate) => {
    if (oppGameboard.gameboard[coordinate].hasBeenHit == false) {
      oppGameboard.receiveAttack(coordinate);
    } else return false;
  };

  const attackRandomly = (oppGameboard) => {
    let coordinate = createRandomCoordinate();
    while (oppGameboard.gameboard[coordinate].hasBeenHit == true) {
      coordinate = createRandomCoordinate();
    }
    oppGameboard.receiveAttack(coordinate);
  };

  const createRandomCoordinate = () => {
    return Math.floor(Math.random() * 100);
  };

  return { name, gameboard, attackRandomly, attack };
};

export { playerFactory };
