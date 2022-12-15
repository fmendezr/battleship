const gameboardFactory = () => {
  let gameboard = [];
  const missedShots = [];
  let ships = [];

  for (let i = 0; i < 100; i++) {
    gameboard.push({
      containsShip: false,
      hasBeenHit: false,
    });
  }

  const placeShip = (coordinate, axis, ship) => {
    let locationArr = findLocations(coordinate, axis, ship.length);
    if (checkValidLocation(locationArr, axis)) {
      for (let i = 0; i < locationArr.length; i++) {
        gameboard[locationArr[i]].containsShip = ship;
      }
      ships.push(ship);
      return true;
    } else {
      return false;
    }
  };

  const receiveAttack = (coordinate) => {
    const location = gameboard[coordinate];
    location.hasBeenHit = true;
    if (location.containsShip != false) {
      location.containsShip.hit();
      if (location.containsShip.isSunk()) {
        ships = ships.filter((ship) => ship != location.containsShip);
        return "Ship has sunk";
      }
      return "HIT";
    }
    missedShots.push(coordinate);
    return "Missed";
  };

  const allShipsSunk = () => {
    return ships.length == 0;
  };

  const findLocations = (coordinate, axis, length) => {
    let locations = [];
    for (let i = 0; i < length; i++) {
      axis == "x"
        ? locations.push(coordinate + i)
        : locations.push(coordinate + 10 * i);
    }
    return locations;
  };

  const checkValidLocation = (locations, axis) => {
    const lineBreaks = [9, 19, 29, 39, 49, 59, 69, 79, 89];
    const lineBreak = lineBreaks.filter((element) =>
      locations.includes(element)
    );

    if (locations.some((index) => index >= 100)) return false;
    else if (locations.some((index) => gameboard[index].containsShip != false))
      return false;
    else if (
      lineBreak.length > 0 &&
      axis == "x" &&
      lineBreak[0] != locations[locations.length - 1]
    )
      return false;
    else return true;
  };

  return {
    gameboard,
    placeShip,
    receiveAttack,
    allShipsSunk,
    ships,
    findLocations,
    checkValidLocation,
  };
};

export { gameboardFactory };
