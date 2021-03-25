const numberButtons = document.querySelectorAll('[number]');
const operationButtons = document.querySelectorAll('[operations]');
const equalsButton = document.querySelector('[equals]');
const allClearButton = document.querySelector('[all-clear]');
const deleteButton = document.querySelector('[delete-button]');
const previousOperand = document.querySelector('[previous-operand]');
const currentOperand = document.querySelector('[current-operand]');
const calculator = new Calculator(previousOperand,currentOperand)

class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear()
    }

    delete() {

    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }


};