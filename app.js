const calculator = document.querySelector('.calculator--keys');
const display = document.querySelector('.display--box');
let previousValue, operator;


calculator.addEventListener('click', e => {

    Array.from(calculator.children).forEach(e => e.classList.remove('is-pressed'));

    if(e.target.classList.contains('calculator--key')){
        const displayKey = display.textContent;

        if (e.target.classList.contains('num')) {
            if (display.textContent === "0" ) {
                display.textContent = e.target.textContent;
            } else {
                display.textContent = displayKey + e.target.textContent;
            }
        }
        if (e.target.classList.contains('decimal')) {
            display.textContent = displayKey + "."
            console.log('decimal key!')
        }
        if (e.target.classList.contains('add') ||
            e.target.classList.contains('subtract') ||
            e.target.classList.contains('divide') ||
            e.target.classList.contains('multiply')
            ) {
                console.log('operator key!')
                e.target.classList.add('is-pressed');

                previousValue = display.textContent;
                operator = e.target.classList.item(1);
                display.textContent = '0';

                console.log(operator)
        }
        if (e.target.classList.contains('equal')) {
            console.log('equal key!')
            firstValue = previousValue;
            operator = operator;
            secondValue = display.textContent

            display.textContent = calculate(firstValue, operator, secondValue);
        }
        if (e.target.classList.contains('clear')) {
            display.textContent = '0';
        } 
        if (e.target.classList.contains('back')) {
            display.textContent = display.textContent.slice(0, display.textContent.length-1)
            if(display.textContent.length === 0) {
                display.textContent = "0"
            }
        }     
    }
});

function calculate(firstValue, operator, secondValue) {
    let result = '';

    if(operator === 'add') {
        result = parseFloat(firstValue) + parseFloat(secondValue)
    } else
    if (operator === 'subtract') {
        result = parseFloat(firstValue) - parseFloat(secondValue)
    } else
    if (operator === 'multiply') {
        result = parseFloat(firstValue) * parseFloat(secondValue)
    } else
    if (operator === 'divide') {
        result = parseFloat(firstValue) / parseFloat(secondValue)
    }
    return result
}