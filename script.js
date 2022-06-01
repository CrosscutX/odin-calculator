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


let displayValue = '';
const viewPort = document.querySelector('.viewport');
const num1 = document.getElementById('1');

num1.addEventListener('click', () =>{
    displayValue += "1";
    viewPort.textContent = displayValue;
})

