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
