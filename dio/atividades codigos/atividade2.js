let anos, meses
let dias = 30
anos = parseInt(dias/365)
meses = parseInt((dias % 365)/30)
dias = parseInt(((dias % 365)%30))
console.log(anos, meses, dias)