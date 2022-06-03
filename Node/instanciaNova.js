//Uma Factory retorna uma nova Instancia
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}