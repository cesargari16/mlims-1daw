"use strict";

function main() {
    let buttonMultiply = document.querySelector('#button-multiply');
    let buttonDivide = document.querySelector('#button-divide');
    let buttonSum = document.querySelector('#button-sum');

    let inputFirstNumber = document.querySelector("#first-number");
    let inputSecondNumber = document.querySelector("#second-number");

    let operationsList = document.createElement('ul');
    document.body.append(operationsList);

    function multiply() {
        let firstNumber = Number(inputFirstNumber.value);
        let secondNumber = Number(inputSecondNumber.value);

        let listItem = document.createElement('li');
        listItem.innerHTML = `${firstNumber} * ${secondNumber} = ${firstNumber*secondNumber}`;        
        operationsList.append(listItem);                  
    }

    function divide() {

    }

    function sum() {
        let firstNumber = Number(inputFirstNumber.value);
        let secondNumber = Number(inputSecondNumber.value);
        if(num1==0 && num1 !== '0.'){
            num1 = numero;0
        }else{
            num1 += numero;
        }
        refrescar();
        let paragraph = document.createElement('p');
        paragraph.innerHTML = "Result: " + (firstNumber + secondNumber);        
        divResult.append(paragraph);        
    }

    

    buttonMultiply.addEventListener('click', multiply);
    buttonDivide.addEventListener('click', divide);
    buttonSum.addEventListener('click', sum);

//buttonMultiply.onclick = multiply;
//buttonDivide.onclick = divide;

//alert(inputFirstNumber.value);
//alert(inputSecondNumber.value);
}

document.addEventListener('DOMContentLoaded', main);