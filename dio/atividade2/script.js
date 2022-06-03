class contaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this.saldo = 0
    }
    get saldo(){
        return this._saldo
    } set saldo(valor){
        this._saldo = valor 
    }
    sacar(valor){
        if(valor>this._saldo){
        return 'Operação Inválida'
    }
    this._saldo = this._saldo - valor
    return this._saldo
    }

    depositar(valor){
        this._saldo = this._saldo + valor
        return this._saldo
    }
}

class ContaCorrente extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero)
        this.tipo = 'Conta Corrente'
        this._cartaoCredito = cartaoCredito
    }
    get cartaoCredito(){
        return this._cartaoCredito
    }
    set cartaoCredito(valor){
        this.cartaoCredito =valor
    }

    
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero,)
        this.tipo = 'Conta Poupanca'
        this._cartaoCredito = cartaoCredito
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero)
        this.tipo = 'Conta Universitária'
        this._cartaoCredito = cartaoCredito
    }
    sacar(valor){
        if(valor<500){
            return 'Operação Negada'
        }
        this._saldo = this._saldo - valor
    }
}