const calcScreen = document.getElementById('screen');
const btnDel = document.getElementById('btn-del');
const btnClear = document.getElementById('btn-clear');
const btnMultiply = document.getElementById('btn-multiply');
const btnDivide = document.getElementById('btn-divide');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const btnDot = document.getElementById('btn-dot');
const btnEqual = document.getElementById('btn-equal');

let userNum = '';
let total = 0;
// total operator userNum
let mathString = '';

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
    if(userNum.length != 0) {
        userNum = userNum.slice(0, -1);
        mathString = mathString.slice(0, -1);
        updateScreen(userNum);
    }
};

function calcClear(){
    userNum = '';
    total = 0;
    mathString = '';
    updateScreen(userNum);
};

function calcOperator(operatorType) {
    // eval evaltaes the string math equation into a float answer
    mathString = eval(mathString) + operatorType;
    userNum = '';
    updateScreen(operatorType);
};

function calcDot(){
    mathString += '.';
    userNum += '.';
    updateScreen(userNum);
};

function calcEqual(){
    total = eval(mathString);
    userNum = '';
    updateScreen(total);
};

function calcNumber(num) {
    mathString += num.toString();
    userNum += num.toString();
    updateScreen(userNum);
};

function updateScreen(content) {
    calcScreen.innerHTML = content;
};