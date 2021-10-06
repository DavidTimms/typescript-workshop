// Use a type predicate!

const maybeNumbers = [1, null, 2, null, 3];

export const total = maybeNumbers
  .filter((num): num is number => num !== null)
  .reduce((a, b) => a + b, 0);

// Beware - type predicates are not sound.
