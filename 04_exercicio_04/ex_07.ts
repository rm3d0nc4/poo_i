class Equipamento {
    ligado: boolean;

    constructor(ligado: boolean = false) {
        this.ligado = ligado;
    }

    liga() :void {
        this.ligado = true;
    }
    
    desliga() :void {
        this.ligado = false;
    }

    inverte(): void {
        this.ligado = !this.ligado;
    }

    estaLigado(): boolean {
        return this.ligado;
    }
}

let e1: Equipamento = new Equipamento();
console.log(e1.estaLigado());
e1.liga()
console.log(e1.estaLigado());
e1.desliga()
console.log(e1.estaLigado());
e1.inverte();
console.log(e1.estaLigado());

