class Hotel {
    quantReservas : number;

    constructor(qtdReservas: number = 0) {
        this.quantReservas = qtdReservas;
    }
    
    adicionarReserva() : void {
        this.quantReservas++;
    }
}

let hotel2 = new Hotel(2);
console.log(hotel2.quantReservas);