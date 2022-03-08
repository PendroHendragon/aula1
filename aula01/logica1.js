let anoAtt = 2022;
let nasc = 1984;

let idade = anoAtt - nasc;

function veriIdade(idade){
    if(idade>=18){
        console.log('é de maior'+` sua idade:${idade}`);
    }else{
        console.log('é de menor' +` sua idade:${idade}`);
    }
}

veriIdade(idade);
