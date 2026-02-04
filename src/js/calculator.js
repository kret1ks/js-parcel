export function calculator (a, b){
    return a + b
}

export function subtract (a, b){
    return a - b;
}

export function multiply (a, b){
    return a * b;
}

export function divide (a, b) {
 if(b === 0) return "на 0 ділити не можна!"
 return a / b;
}