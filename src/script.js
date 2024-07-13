// src/script.js
import { create, all } from 'mathjs';

const math = create(all);

document.addEventListener("DOMContentLoaded", function() {
  const calculatorInput = document.getElementById('calculatorInput');
  const buttons = document.querySelectorAll('.buttonContainer button');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonValue = button.getAttribute('data-value');

      // Handle different button actions
      switch(buttonValue) {
        case '=':
          // Perform calculation
          performCalculation();
          break;
        case 'AC':
          // Clear input
          clearInput();
          break;
        case 'DEL':
          // Delete last character
          deleteLastCharacter();
          break;
        default:
          // Append the button's value to the input
          appendToInput(buttonValue);
      }
    });
  });

  function appendToInput(value) {
    // Append the value to the input field
    calculatorInput.value += value;
  }

  function performCalculation() {
    try {
      const result = math.evaluate(calculatorInput.value);
      console.log
      clearInput();
      calculatorInput.value = result;
      // alert(`Result: ${result}`);
    } catch (e) {
    calculatorInput.value = "Syntax Error";
    }
  }

  function clearInput() {
    // Clear the input field
    calculatorInput.value = '';
  }

  function deleteLastCharacter() {
    // Delete the last character from the input field
    calculatorInput.value = calculatorInput.value.slice(0, -1);
  }
});
