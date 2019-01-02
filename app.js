const main = document.querySelector('.main');
const calculator = document.querySelector('.calculator--keys');
const display = document.querySelector('.display--box');

calculator.addEventListener('click', e => {
    if(!e.target.classList.contains('calculator--key')){
        return 0;

    } else {
        const keyContent = e.target.textContent;
        const displayKey = display.textContent;
        if (displayKey === 0) {
            console.log(keyContent);
        } else {
            display.textContent = displayKey + keyContent;
        }
        if (e.target.classList.contains('decimal')) {
            display.textContent = displayKey + '.';
        }
        if (e.target.classList.contains('calculator--key')) {
            const keys = e.target
        }
         
    }

});
