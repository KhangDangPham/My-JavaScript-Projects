// Reference to the display
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.math');
const clearButton = document.getElementById('clear');
const enterButton = document.getElementById('enter');

// Function to calculate the result
function calculateResult(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
        display.value = "Error: Cannot divide 0 by 0";
        setTimeout(() => {
            display.value = "";
        }, 1500);
    } else {
        display.value = calculatedValue;
    }
}

// Function to update the display
function updateDisplay(inputValue) {
    if (!display.value) {
        display.value = "";
    }

    display.value += inputValue;
}

// Function to handle number and decimal button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value === '÷') {
            value = '/';
        } else if (value === 'x') {
            value = '*';
        }

        updateDisplay(value);
    });
});

// Function to handle clear button
clearButton.addEventListener('click', () => {
    display.value = "";
});

// Function to handle enter button
enterButton.addEventListener('click', () => {
    calculateResult(display.value)
});

// Adding event handler on document for keyboard inputs
document.addEventListener('keydown', keyboardHandler);

// Function to handle keyboard inputs
function keyboardHandler(e) {
    e.preventDefault();

    // integers
    if (e.key === "0") {
        display.value += "0";
    } else if (e.key === "1") {
        display.value += "1";
    } else if (e.key === "2") {
        display.value += "2";
    } else if (e.key === "3") {
        display.value += "3";
    } else if (e.key === "4") {
        display.value += "4";
    } else if (e.key === "5") {
        display.value += "5";
    } else if (e.key === "6") {
        display.value += "6";
    } else if (e.key === "7") {
        display.value += "7";
    } else if (e.key === "8") {
        display.value += "8";
    } else if (e.key === "9") {
        display.value += "9";
    }

    // operators
    if (e.key === "/") {
        display.value += "/";
    } else if (e.key === "*") {
        display.value += "*";
    } else if (e.key === "-") {
        display.value += "-";
    } else if (e.key === "+") {
        display.value += "+";
    }

    // decimal
    if (e.key === ".") {
        display.value += ".";
    }

    // enter
    if (e.key === "Enter") {
        calculateResult(display.value);
    }

    // backspace
    if (e.key === "Backspace") {
        const currentInput = display.value;
        display.value = currentInput.substring(0, display.value.length - 1);
    }
}