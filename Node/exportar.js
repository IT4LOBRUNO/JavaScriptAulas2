console.log(module.exports ===this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

/*Não funciona*/exports = null
console.log(module.exports)

/*Não funciona*/exports = {
    nome: 'Teste'
}

console.log(module.exports)

/*Esse funciona*/module.exports = {publico: true}