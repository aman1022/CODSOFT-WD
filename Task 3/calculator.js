document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = null;
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.getAttribute('data-value');

            if (!isNaN(value) || value === '.') {
                currentInput += value;
                display.textContent = currentInput;
            } else if (value === 'C') {
                currentInput = '';
                operator = null;
                firstOperand = null;
                display.textContent = '0';
            } else if (value === '=') {
                if (firstOperand !== null && operator !== null && currentInput !== '') {
                    currentInput = eval(`${firstOperand} ${operator} ${currentInput}`);
                    display.textContent = currentInput;
                    firstOperand = null;
                    operator = null;
                }
            } else {
                if (firstOperand === null) {
                    firstOperand = currentInput;
                    currentInput = '';
                    operator = value;
                } else if (currentInput !== '') {
                    firstOperand = eval(`${firstOperand} ${operator} ${currentInput}`);
                    currentInput = '';
                    operator = value;
                    display.textContent = firstOperand;
                }
            }
        });
    });
});
