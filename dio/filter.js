//Retorna números pares
const nums = [1,2,3,4,5,6,7,8,9,10]
let resultado = nums.filter(function(e){
    return e %2==0
})
console.log(resultado)

//Outro método:
function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 ==0
}

console.log(filtraPares(nums))