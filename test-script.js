const { execSync } = require("child_process");
const readline = require("readline");

const testPath = {
  UseMemo_01: "./app/dojo/useMemo/useMemo_01/useMemo_01.test.tsx",
  UseMemo_02: "./app/dojo/useMemo/useMemo_02/useMemo_02.test.tsx",
  UseMemo_03: "./app/dojo/useMemo/useMemo_03/useMemo_03.test.tsx",
};

// Define a list of React component names
const components = Object.keys(testPath);

// Function to run the test based on the selected component
const runTest = (testName) => {
  try {
    const output = execSync(`npm run vitest ${testPath[testName]}`, {
      stdio: "inherit",
    });
    console.log(output.toString());
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

// Display a list of components to choose from
console.log("Select a React component to test:");
components.forEach((component, index) => {
  console.log(`${index + 1}. ${component}`);
});

// Create an interface for reading from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Get user input for component selection
rl.question(
  "Enter the name of the component you want to test: ",
  (userInput) => {
    const selectedNumber = parseInt(userInput, 10);
    if (
      !isNaN(selectedNumber) &&
      selectedNumber > 0 &&
      selectedNumber <= components.length
    ) {
      const selectedComponent = components[selectedNumber - 1];
      console.log(`Running test for ${selectedComponent}...`);
      runTest(selectedComponent);
    } else {
      console.log(
        "Invalid input. Please enter a valid number corresponding to a component."
      );
    }
    rl.close();
  }
);
