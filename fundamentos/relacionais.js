console.log('01)', '1' == 1) // == É igual?
console.log('02)', '1' === 1)// === É estritamente igual?
console.log('03)', '3' != 3)// != É diferente?
console.log('04)', '3' !== 3)// != É estritamente diferente?

console.log('05)', '3' > 2) // maior que?
console.log('06)', '3' < 2)// menor que?
console.log('07)', '3' >= 2)// maior igual?
console.log('08)', '3' <= 2)// menor igual?

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() == d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)