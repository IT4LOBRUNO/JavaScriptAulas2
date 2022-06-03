const lista = [
    {nome: 'sabao', preco: 30},
    {nome: 'cereal', preco: 12},
    {nome: 'toalha', preco: 30}
]

const saldo = 100
function calculaCompra(saldo, lista){
    return lista.reduce(function(prev, current){
        return prev - current.preco
    }, saldo)
}

console.log(calculaCompra(saldo, lista))

let array = [1, 2, 3, 4];

array.filter((item) => item % 2 === 0);