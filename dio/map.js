const multiplica2 = {value: 2}
const multiplica3 = {value: 3}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
      return  item * this.value
    }, thisArg)
}

const nums = [1,2,3,4,5]

console.log(mapComThis(nums, multiplica2))