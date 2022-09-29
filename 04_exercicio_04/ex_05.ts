class Saudacao {
    texto: string;
    destinatario: string;

    constructor(texto: string, destinatario: string) {
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao(): string {
        return `${this.texto}, ${this.destinatario}`;   
    }
}

let saudacao1 = new Saudacao('Olá', 'Maria');
console.log(saudacao1.obterSaudacao());