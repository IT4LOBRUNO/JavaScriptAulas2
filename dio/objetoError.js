// new Error(message, fileName, lineNumber)
//parametros opcionais

const meuErro = new Error('Mensagem inválida')
meuErro.name = 'InvalidMessage'

throw meuErro