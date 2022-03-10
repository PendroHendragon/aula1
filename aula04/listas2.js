let lista = [1,2,3,4,5];

let lista2 = lista.map(somaTre);
function somaTre(value){
    return value+3
}
function imiprimiLista(lista,lista2){
    console.log(lista);
    console.log(lista2);
}
imiprimiLista(lista,lista2);