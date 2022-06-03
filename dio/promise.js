async function resolvePromise(){
    const myPromise = new Promise((resolve, reject)=>{
        window.setTimeout(()=>{
            resolve('Resolvida ')
        }, 3000)
    })
    const resolved = await myPromise
    .then((result)=>result+'passando pelo then')
    .then((result)=>result+' agora acabou!')
    .catch((err)=>console.log(err.message))
    return resolved
}

resolvePromise()

//Tem que passar o 'await resolvePromisse()' para retornar a promise