class Conta {
    constructor(saldoCorrente, saldoPoupanca, juros) {
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.juros = juros;
    }
    deposito(valor){
        this.saldoCorrente += valor;
    }
    saque(valor){
        this.saldoCC -= valor;
    }
    transfCorrente(valor){
        this,this.saldoPoupanca -= valor;
        this,this.saldoCorrente += valor;
    }
    tranfPoupanca(valor){
        this,this.saldoCorrente -= valor;
        this,this.saldoPoupanca += valor;
    }
    jurosAniversario(){
        let juros = (this.saldoPoupanca * this.juros) / 100;
        this.saldoPoupanca += juros;
    }
}

class ContaEspecial extends Conta {
    constructor(saldoCorrente, saldoPoupanca, juros) {
        super (saldoCorrente, saldoPoupanca, juros*2);
    }
}

let conta = new Conta(100, 150, 2);
console.log(conta);
conta.saque(20);
console.log(conta);
conta.deposito(15);
console.log(conta);
conta.transfCorrente(80);
console.log(conta);
conta.jurosAniversario();
console.log(conta);

let conta2 = new Conta(1000, 1500, 1);
console.log(conta2);
conta2.saque(200);
console.log(conta2);
conta2.jurosAniversario();