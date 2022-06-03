function getAdmins(map){
    const admins = []
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins
}

const usuarios = new Map()

usuarios.set('Italo', 'Admin')
usuarios.set('Joao', 'Admin')
usuarios.set('Lucas', 'User')
usuarios.set('Natalia', 'Admin')

console.log(getAdmins(usuarios))