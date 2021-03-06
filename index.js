function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b 
}

function divide (a, b) {
    return a / b 
}

function operate (operator, a, b) {
    let result = operator(a, b)
    return result
}

function makeFloat () {
    if (calculatorDisplay.textContent.includes('.')) {

    }else {
        let previousContent = calculatorDisplay.textContent
        calculatorDisplay.textContent = previousContent + '.'
    }
}

function populate () {
    if(clearDisplay){
        calculatorDisplay.textContent = ''
        let previousContent = calculatorDisplay.textContent
        calculatorDisplay.textContent = previousContent + this.textContent
        displayValue = Number(calculatorDisplay.textContent)
        clearDisplay = false
    }else {
        let previousContent = calculatorDisplay.textContent
        calculatorDisplay.textContent = previousContent + this.textContent
        displayValue = Number(calculatorDisplay.textContent)
    }
}

let calculatorDisplay = document.getElementById("display")

let displayValue 
let firstValue
let equalsValue
let selectedOperator
let clearDisplay = false

let numButtons = document.querySelectorAll('.numBtn')

numButtons.forEach((btn) => {
    btn.addEventListener('click', populate)
})

let addBtn = document.getElementById("addBtn")
addBtn.addEventListener('click', () => {
    if(selectedOperator === undefined) {
        firstValue = displayValue
        calculatorDisplay.textContent = ''
        selectedOperator = add
    }else{
        calculatorDisplay.textContent = operate(selectedOperator, firstValue, displayValue)
        firstValue = Number(calculatorDisplay.textContent)
        selectedOperator = add
        clearDisplay = true
    }
})

let subtractBtn = document.getElementById("subtractBtn")
subtractBtn.addEventListener('click', () => {
    if(selectedOperator === undefined) {
        firstValue = displayValue
        calculatorDisplay.textContent = ''
        selectedOperator = subtract
    }else{
        calculatorDisplay.textContent = operate(selectedOperator, firstValue, displayValue)
        firstValue = Number(calculatorDisplay.textContent)
        selectedOperator = subtract
        clearDisplay = true
    }
})

let multiplyBtn = document.getElementById("multiplyBtn")
multiplyBtn.addEventListener('click', () => {
    if(selectedOperator === undefined) {
        firstValue = displayValue
        calculatorDisplay.textContent = ''
        selectedOperator = multiply
    }else{
        calculatorDisplay.textContent = operate(selectedOperator, firstValue, displayValue)
        firstValue = Number(calculatorDisplay.textContent)
        selectedOperator = multiply
        clearDisplay = true
    }
})

let divideBtn = document.getElementById("divideBtn")
divideBtn.addEventListener('click', () => {
    if(selectedOperator === undefined) {
        firstValue = displayValue
        calculatorDisplay.textContent = ''
        selectedOperator = divide
    }else{
        calculatorDisplay.textContent = operate(selectedOperator, firstValue, displayValue)
        firstValue = Number(calculatorDisplay.textContent)
        selectedOperator = divide
        clearDisplay = true
    }
})

let equalsBtn = document.getElementById("equalsBtn")
equalsBtn.addEventListener('click', () => {
    if(selectedOperator === undefined || firstValue === undefined){
        
    }else if(equalsValue === undefined) {
        calculatorDisplay.textContent = operate(selectedOperator, firstValue, displayValue)
        equalsValue = Number(calculatorDisplay.textContent)
    }else {
        calculatorDisplay.textContent = operate(selectedOperator, equalsValue, displayValue)
        equalsValue = Number(calculatorDisplay.textContent)
    }
})

let clearBtn = document.getElementById("clearBtn")
clearBtn.addEventListener('click', () => {
    firstValue = undefined
    calculatorDisplay.textContent = ''
    selectedOperator = undefined
    equalsValue = undefined
    displayValue = undefined
})

let dotBtn = document.getElementById("dotBtn")
dotBtn.addEventListener('click', makeFloat)