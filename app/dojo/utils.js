// Example of expensive operation function
const expensiveOperation = (item) => {
  console.log(`Performing expensive operation for item: ${item}`);

  // Convert the string to an array of characters, sort them, and then join back to a string
  const result = item.split('').sort().join('');

  return result;
};

const generateRandomCharacter = () => {
  const minCharCode = 65; // ASCII code for 'A'
  const maxCharCode = 90; // ASCII code for 'Z'

  const randomCharCode =
    Math.floor(Math.random() * (maxCharCode - minCharCode + 1)) + minCharCode;
  const randomCharacter = String.fromCharCode(randomCharCode);

  return randomCharacter;
};

// Generate a long string with a specified length
const generateLongString = (length) => {
  let longString = '';
  for (let i = 0; i < length; i++) {
    longString += generateRandomCharacter();
  }
  return longString;
};

// Example: Generate a string with 1 million characters
const longString = generateLongString(1000000);

// Call the expensiveOperation function with the long string
const result = expensiveOperation(longString);

console.log(result);
