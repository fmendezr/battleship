import { shipFactory } from "../ship";

test("should ship factory build with correct length", () => {
  const ship = shipFactory(1);
  expect(ship.length).toBe(1);
});

test("should getHits method run return accurate ammount of hits", () => {
  const ship = shipFactory(1);
  expect(ship.getHits()).toBe(0);
});

test("should hit method run increase ammount of hits", () => {
  const ship = shipFactory(1);
  ship.hit();
  ship.hit();
  expect(ship.getHits()).toBe(2);
});

test("should isSunk and hits are less than length return false", () => {
  const ship = shipFactory(2);
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
});

test("should isSunk method run and hits are equal to length return true", () => {
  const ship = shipFactory(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});
