# React Calculator Application Documentation

## Overview
This documentation provides an overview of the Calculator application built using React. The application allows users to perform basic arithmetic operations and displays the result of the calculations. The application includes buttons for digits, operators, a clear function, and an equals function to compute the result.

## Features
- **Input Display:** Shows the current expression being entered.
- **Digit Buttons (0-9):** Allow users to input numbers.
- ***Operator Buttons (+, -, , /):*** Allow users to perform arithmetic operations.
- **Equals Button (=):** Calculates and displays the result of the entered expression.
- **Clear Button:** Clears the current input.

## File Structure
- **App.js:** Contains the main logic and structure of the Calculator application.
- **App.css**: Contains the styling for the Calculator application.

## Components

### App Component
The App component is the main component of the Calculator application. It manages the state and handles the logic for input, calculations, and clearing the input.

### State
- **input:** A string that holds the current input expression.

### Functions
- **appendValue(val):** Appends the provided value (val) to the current input.
- **clearInput():** Clears the input by setting it to an empty string.
- **calculateResult():** Evaluates the current input expression and sets the result as the new input. If there is an error during evaluation, it sets the input to "Error".

### Rendered Elements
- **Input Display:** An **`<input>`** element that shows the current input value and allows direct editing.
- **Buttons:**
- **Digit buttons:** 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
- **Operator buttons:** +, -, *, /
- **Equals button:** =
- **Clear button:** Clear

## Usage

1. Starting the Application:
 - Ensure you have Node.js installed.
 - Run npm install to install the necessary dependencies.
 - Run npm start to start the application.
2. Using the Calculator:
 - Click on the digit buttons to enter numbers.
 - Click on the operator buttons to perform arithmetic operations.
 - Click the = button to calculate the result.
 - Click the Clear button to reset the input.

## Example Usage
1. Performing an Addition:

 - Click 2, then +, then 3.
 - Click the = button.
 - The display will show 5.

2. Clearing the Input:

 - Click the Clear button.
 - The display will be cleared, showing an empty input.

## Error Handling
If the input expression is invalid (e.g., 2++3), clicking the = button will display "Error".
