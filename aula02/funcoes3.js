function soma(number1, number2){
    return number1+number2;
}

function sub(number1, number2){
    return soma(number1,-number2);
}

function multi(numero1, numero2){
    return numero1*numero2;
}

function div(number1, number2){
    return multi(number1,1/number2);
}

console.log(soma(1,2));
console.log(sub(1,2));
console.log(multi(1,2));
console.log(div(1,2));