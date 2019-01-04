const calculator = document.querySelector('.calculator--keys');
const display = document.querySelector('.display--box');

calculator.addEventListener('click', e => {
    if(e.target.classList.contains('calculator--key')){
        if (e.target.classList.contains('num')) {
           console.log('number key!') 
        }
        if (e.target.classList.contains('decimal')) {
            console.log('decimal key!')
        }
        if (e.target.classList.contains('add') ||
            e.target.classList.contains('subtract') ||
            e.target.classList.contains('divide') ||
            e.target.classList.contains('multiply')
            ) {
                console.log('operator key!')
        }
        if (e.target.classList.contains('equal')) {
            console.log('equal key!')
        }
        if (e.target.classList.contains('clear')) {
            console.log('clear key!')
        } 
        if (e.target.classList.contains('back')) {
            console.log('back key!')
        }     
    }
});