export  interface Tributavel {
    calculaTributos(): number;
}

export class Conta {
    private _nome: string;
    private _saldo: number;

    constructor(nome: string, saldo: number) {
        this._nome = nome;
        this._saldo = saldo;
    }

    getNome() {
        return this._nome;
    }

    setNome(nome: string) {
        this._nome = nome;
    }

    getSaldo() {
        return this._saldo;
    }

    setSaldo(saldo: number) {
        this._saldo = saldo;
    }
}

export class ContaCorrente extends Conta implements Tributavel {
    
    constructor(nome: string, saldo: number) {
        super(nome, saldo);
    }

    calculaTributos(): number {
        return this.getSaldo() * .1;
    }
}

export class SeguroDeVida implements Tributavel {
    calculaTributos(): number {
        return 50;
    }
}