// A reusable solution.

function isNotNull<T>(value: T | null): value is T {
  return value !== null;
}

const maybeNumbers = [1, null, 2, null, 3];

export const total = maybeNumbers.filter(isNotNull).reduce((a, b) => a + b, 0);
