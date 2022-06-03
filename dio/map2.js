const nums = [1,2,3,4,5]
let resultado = nums.map(function(e){
    return e *2
})
console.log(resultado)

//Outro método:

function Multiplica2(arr){
    return arr.map(function(item){
        return item * 2
    })
}
const numeros = [2,4,6,8,10]
console.log(Multiplica2(numeros))