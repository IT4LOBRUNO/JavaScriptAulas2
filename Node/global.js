//console.log(global)

global.meuApp = {
    saudacao(){
        return "Estou em todos os lugares"
    },
    nome: 'Global'
}

require('./globalCliente')
console.log(meuApp.nome)