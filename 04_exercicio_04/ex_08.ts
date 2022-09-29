class Conta {
    numero: String;
    saldo: number;
    
    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }
    
    sacar(valor: number): boolean {
        if( this.saldo >= valor) {
            this.saldo = this.saldo - valor;

            return true;
        } else {
            return false;
        }
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if(this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        } else {
            return false;
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

let c1 = new Conta("1", 100);
console.log(c1.sacar(110));
console.log(c1.sacar(20));

let c2 = new Conta("2", 100);

console.log(c1.transferir(c2, 100))
console.log(c1.transferir(c2, 20))