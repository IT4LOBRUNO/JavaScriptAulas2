console.log("Com return:")
function verificaPalindromo(string){
    if(!string) return "string inválida"

    return string === string.split('').reverse().join('')
}

console.log(verificaPalindromo(''))


console.log("\nErro que acontece com o throw:")
function verificaPalindromo1(string){
    if(!string) throw "string inválida"

    return string === string.split('').reverse().join('')
}

console.log(verificaPalindromo1(''))