let listaCarros = [
    {   modelo: "Monza",
        valor: 2000
    },
    {
        modelo: "Fusca",
        valor: 10500
    },
    {
        modelo: "Lamborguini",
        valor: 500000
    },
    {
        modelo: "Chevete",
        valor: 2000
    }
]


//list
function filtroCarros(item){
    return item.valor > 10000;

}
let lista2 = listaCarros.filter(filtroCarros);
console.log(listaCarros);
console.log(lista2);

//list map
let soma = 0;
function totalValor(value){
    soma += value.valor;
    return soma;
}
total = listaCarros.map(totalValor)[listaCarros.length-1];
console.log(total);

// list reduce
let totalLista = listaCarros.reduce(function(valorAnterior, valorAtual){
    if(valorAnterior.valor){
        return valorAnterior.valor+valorAtual.valor;
    }

    return valorAnterior+valorAtual.valor;
});
console.log(totalLista)