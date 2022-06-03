function verificaPalindromo(string){
    if(!string) throw "string inválida"

    return string === string.split('').reverse().join('')
}

function tryCatchExemplo(string){
    try{
        verificaPalindromo(string)
    }
    catch(e){
        console.log(e)
    }
    finally{
        console.log('A string foi: ' + string)
    }
}

tryCatchExemplo('ovo')
/*Retorna o erro como uma mensagem predefinida no sistema "String inválida"
não é uma string, mas um log do sistema*/