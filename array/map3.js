Array.prototype.map2 = function(callback){
    const newArray = []
    for(i=0; i<this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
const carrinho = [
    '{"nome": "Borracha", "Preco": 3.45}',
    '{"nome": "Caderno", "Preco": 13.90}',
    '{"nome": "Kit de Lapis", "Preco": 41.22}',
    '{"nome": "Caneta", "Preco": 7.50}'
]

//Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const preco = produto => produto.Preco

const resultado = carrinho.map2(paraObjeto).map2(preco)
console.log(resultado)