// calculator.js
import {evaluate} from 'mathjs';

document.addEventListener("DOMContentLoaded", function() {
    const calculatorInput = document.getElementById('calculatorInput');
    const buttons = document.querySelectorAll('.buttonContainer button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonValue = button.getAttribute('data-value');
            
            // Handle different button actions
            switch(buttonValue) {
                case '=':
                    // Example: Perform calculation
                    performCalculation();
                    break;
                case 'AC':
                    // Example: Clear input
                    clearInput();
                    break;
                case 'DEL':
                    // Example: Delete last character
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
        // Example: Implement your calculation logic here
        // For demonstration, let's just alert the current input value
        const result = evaluate(calculatorInput.value)
        clearInput();
        alert(`Performing calculation with input: ${result}`);
        


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
