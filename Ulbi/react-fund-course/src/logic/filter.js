const includeString = (strBeFound, ...texts) =>
  texts.some(text => text.toLowerCase().includes(strBeFound.toLowerCase()));

const compare = (a, b) => (checkForNumbers(a, b) ? compareNumbers(a, b) : compareStrings(a, b));

const checkForNumbers = (...items) => items.every(item => typeof item === 'number');

const compareNumbers = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const compareStrings = (a, b) => a.localeCompare(b);

export { compare, includeString };
