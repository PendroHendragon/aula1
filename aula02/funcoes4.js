function soma(number1, number2){
    return number1+number2;
}


function multi(numero1, numero2){
    return numero1*numero2;
}

function calc(num1,num2,func){
    return func(num1,num2);
}

console.log(calc(1,2,function(){
    return soma(1,2)
}));