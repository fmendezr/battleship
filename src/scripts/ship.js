const shipFactory = (length) => {
  let hits = 0;
  const hit = () => {
    hits++;
  };
  const getHits = () => {
    return hits;
  };
  const isSunk = () => {
    return hits >= length;
  };
  return { length, hit, getHits, isSunk };
};

export { shipFactory };
