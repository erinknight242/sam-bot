/**
 * Returns a random integer (zero-indexed)
 * @param  {Number} range Random number will be generated between 0 and range - 1. Defaults to 10.
 * @return {Number}       The random number
 */
export const random = (range = 10) => {
  return Math.floor(Math.random() * range);
};
