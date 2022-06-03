function validaArray(arr, num){
    try{
    if(!arr && !num) throw new ReferenceError("Envie os parametros")

    if(typeof arr !== 'object')
        throw new TypeError("Array precisa ser do tipo Object") 
    if(typeof num !== 'number')
        throw new TypeError("num precisa ser do tipo number")
    if(arr.length !== num) throw new RangeError("Tamanho inválido");
        return arr
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este é um Erro de referencia")
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Este é um erro de tamanho")
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Este é um Erro de Tipo")
            console.log(e.message);
        }else{
            console.log("Erro inesperado" + e)
        }
    
    }
}
console.log(validaArray([1,2 ,3 ,4 ,5], 5))