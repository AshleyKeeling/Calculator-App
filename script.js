let userNum = '';
let total = 0;
// total operator userNum
let mathString = '';

const calcScreen = document.getElementById('screen');

const btnDel = document.getElementById('btn-del');
const btnClear = document.getElementById('btn-clear');
const btnMultiply = document.getElementById('btn-multiply');
const btnDivide = document.getElementById('btn-divide');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const btnDot = document.getElementById('btn-dot');
const btnEqual = document.getElementById('btn-equal');

btnDel.addEventListener('click', calcDelete);
btnClear.addEventListener('click', calcClear);
btnMultiply.addEventListener('click', function(){
    calcOperator('*');
});
btnDivide.addEventListener('click', function(){
    calcOperator('/');
});
btnPlus.addEventListener('click', function(){
    calcOperator('+');
});
btnMinus.addEventListener('click', function(){
    calcOperator('-');
});
btnDot.addEventListener('click', calcDot);
btnEqual.addEventListener('click', calcEqual);

// adds event listners for btn 0-9
for (let i = 0; i < 10; i++) {
  let btn = document.getElementById('btn-' + i);
  btn.addEventListener('click', function() {
    calcNumber(i);
  });
}

function calcDelete(){
    console.log('del');
}

function calcClear(){
    console.log('clear');
    userNum = '';
    total = 0;
    mathString = '';
    updateScreen(userNum);
}

function calcOperator(operatorType) {
    mathString = eval(mathString) + operatorType;
    userNum = '';
    updateScreen(operator);
}

function calcDot(){
    console.log('.');
    mathString += '.';
    userNum += '.';
    updateScreen(userNum);
}

function calcEqual(){
    console.log('=');
    total = eval(mathString);
    userNum = '';
    updateScreen(total);
    console.log('math-' + mathString);
}

function calcNumber(num) {
    console.log(num);
    mathString += num.toString();
    userNum += num.toString();
    console.log(userNum);
    updateScreen(userNum);
    console.log('math-' + mathString);
}

function updateScreen(content) {
    console.log('screen updated');
    console.log('TOTAL: ' + total);
    console.log('USER NUM: ' + userNum);
    calcScreen.innerHTML = content;
}
