class Jogador {
    forca: number;
    nivel: number;
    pontosAtuais: number;

    constructor(forca: number, nivel: number, pontosAtuais: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    atacar(jogadorAtacado: Jogador): void {
        if(jogadorAtacado.estaVivo()) {
            jogadorAtacado.pontosAtuais -= this.calcularAtaque();
        }
    }

    estaVivo(): boolean {
        return this.pontosAtuais > 0;
    }

    toString(): string {
        return `Jogador -> força: ${this.forca}, nivel: ${this.nivel}, pontos Atuais: ${this.pontosAtuais}`;
    }
}

let j1: Jogador = new Jogador(4, 2, 100);
let j2: Jogador = new Jogador(3, 2, 90);

console.log(j1.calcularAtaque());
console.log(j2.calcularAtaque());

j2.atacar(j1);
j1.atacar(j2);
j2.atacar(j1);
j2.atacar(j1);
j2.atacar(j1);
j2.atacar(j1);

console.log(j1.toString());
console.log(j2.toString());