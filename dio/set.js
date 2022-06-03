const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(x){
    const mySet = new Set(x)
    return[...mySet]
    
}

console.log(valoresUnicos(meuArray))