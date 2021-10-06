const maybeNumbers = [1, null, 2, null, 3];

export const total = maybeNumbers
  .filter((num) => num !== null)
  .reduce((a, b) => a + b, 0);

// How can filter in such a way that the compiler will know the
// narrowed type of the filtered values?
