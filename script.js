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
    if(num2 == 0){
        return 'You wanna mess with the beast huh?';
    }
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
let operator = '';

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
const eqlBtn = document.getElementById('=');



//Click events
clear.addEventListener('click', () =>{
    displayValue = '';
    calcValue = '';
    operator = '';
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
    displayValue = "2";
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
   //this allows the code to exit if it doesn't have data to play with
    if(displayValue == '' && calcValue == ''){
        return;
   }
   //set the operator to the matching button, need to assign calcValue the displayValue
   //so we can free up displayValue to accept new input
    if(operator == ''){
        operator = '+';
        viewPort.textContent = operator;
        calcValue = displayValue;
        displayValue = '';
    //Tricky, math needs to be done so we need to reassign numbers, then we call the function
    //to do said math and store it to calcValue for later use.
    //Need to set displayValue to an empty string ot accept new input.
    }else if(operator == '+'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = add(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '+';
    
    }else if(operator == '-'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = subtract(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '+';
   
    }else if(operator == '*'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = multiply(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '+';
    
    }else if(operator == '/'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = divide(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '+';
    }
});

subBtn.addEventListener('click', ()=>{
    if(displayValue == ''){
        return;
   }
    if(operator == ''){
        operator = '-';
        viewPort.textContent = operator;
        calcValue = displayValue;
        displayValue = '';
    }else if(operator == '+'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = add(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '-';
    
    }else if(operator == '-'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = subtract(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '-';
   
    }else if(operator == '*'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = multiply(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '-';
    
    }else if(operator == '/'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = divide(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '-';
    }
});

multBtn.addEventListener('click', ()=>{
    if(displayValue == ''){
        return;
   }
    if(operator == ''){
        operator = '*';
        viewPort.textContent = operator;
        calcValue = displayValue;
        displayValue = '';
    }else if(operator == '+'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = add(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '*';
    
    }else if(operator == '-'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = subtract(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '*';
   
    }else if(operator == '*'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = multiply(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '*';
    
    }else if(operator == '/'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = divide(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '*';
    }
});

divBtn.addEventListener('click', ()=>{
    if(displayValue == ''){
        return;
   }
    if(operator == ''){
        operator = '/';
        viewPort.textContent = operator;
        calcValue = displayValue;
        displayValue = '';
    }else if(operator == '+'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = add(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '/';
    
    }else if(operator == '-'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = subtract(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '/';
   
    }else if(operator == '*'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        calcValue = multiply(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '/';
    
    }else if(operator == '/'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);

        calcValue = divide(calcValue, displayValue);
        calcValue = calcValue.toString();
        viewPort.textContent = calcValue;
        
        displayValue = '';
        operator = '/';
    }
});

eqlBtn.addEventListener('click', ()=>{
    if(displayValue == ''|| calcValue == ''|| operator == ''){
        return;
    }
    // Same idea as the code above, accept I store into the displayValue so that that the user
    // can hit plus/minus ect again and the code can actually run.
    if(operator == '+'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        displayValue = add(calcValue, displayValue);
        displayValue = displayValue.toString();
        viewPort.textContent = displayValue;
        
        calcValue = '';
        operator = '';
    }else if(operator == '-'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        displayValue = subtract(calcValue, displayValue);
        displayValue = displayValue.toString();
        viewPort.textContent = displayValue;
        
        calcValue = '';
        operator = '';
    }else if(operator == '*'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        displayValue = multiply(calcValue, displayValue);
        displayValue = displayValue.toString();
        viewPort.textContent = displayValue;
        
        calcValue = '';
        operator = '';
    }else if(operator == '/'){
        displayValue = Number(displayValue);
        calcValue = Number(calcValue);
        
        displayValue = divide(calcValue, displayValue);
        displayValue = displayValue.toString();
        viewPort.textContent = displayValue;
        
        calcValue = '';
        operator = '';
    }

});
