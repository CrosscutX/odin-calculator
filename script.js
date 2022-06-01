//Math Functions
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    if(operator == '+'){
       return add(num1, num2);
    }else if(operator == '-'){
        return subtract(num1, num2)
    }else if(operator == '*'){
        return multiply(num1, num2);
    }else if(operator == '/'){
        return divide(num1, num2);
    }else{
        return 'Invalid Operator'
    }
}

//Get id of calc buttons
let displayValue = '';
let calcValue = '';
const viewPort = document.querySelector('.viewport');
const clear = document.querySelector('.clear');
const num0 = document.getElementById('0');
const num1 = document.getElementById('1');
const num2 = document.getElementById('2');
const num3 = document.getElementById('3');
const num4 = document.getElementById('4');
const num5 = document.getElementById('5');
const num6 = document.getElementById('6');
const num7 = document.getElementById('7');
const num8 = document.getElementById('8');
const num9 = document.getElementById('9');
const addBtn = document.getElementById('+');
const subBtn = document.getElementById('-');
const multBtn = document.getElementById('*');
const divBtn = document.getElementById('/');



//Click events
clear.addEventListener('click', () =>{
    displayValue = '';
    viewPort.textContent = displayValue;
});

num0.addEventListener('click', () =>{
    displayValue += "0";
    viewPort.textContent = displayValue;
});

num1.addEventListener('click', () =>{
    displayValue += "1";
    viewPort.textContent = displayValue;
});

num2.addEventListener('click', () =>{
    displayValue += "2";
    viewPort.textContent = displayValue;
});

num3.addEventListener('click', () =>{
    displayValue += "3";
    viewPort.textContent = displayValue;
});

num4.addEventListener('click', () =>{
    displayValue += "4";
    viewPort.textContent = displayValue;
});

num5.addEventListener('click', () =>{
    displayValue += "5";
    viewPort.textContent = displayValue;
});

num6.addEventListener('click', () =>{
    displayValue += "6";
    viewPort.textContent = displayValue;
});

num7.addEventListener('click', () =>{
    displayValue += "7";
    viewPort.textContent = displayValue;
});

num8.addEventListener('click', () =>{
    displayValue += "8";
    viewPort.textContent = displayValue;
});

num9.addEventListener('click', () =>{
    displayValue += "9";
    viewPort.textContent = displayValue;
});

addBtn.addEventListener('click', ()=>{

});

subBtn.addEventListener('click', ()=>{
    
});

multBtn.addEventListener('click', ()=>{
    
});

divBtn.addEventListener('click', ()=>{
    
});
