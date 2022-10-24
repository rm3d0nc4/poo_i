class Veiculo {
    private _placa: string;
    private _ano: number;

    constructor(placa: string, ano: number) {
        this._placa = placa;
        this._ano = ano;
    }

    get placa(): string {
        return this._placa;
    }

    get ano(): number {
        return this._ano;
    }
}

class Carro extends Veiculo {
    private _modelo: string;

    constructor(placa: string, ano: number, modelo: string) {
        super(placa, ano);
        this._modelo = modelo;
    }

    get modelo(): string {
        return this._modelo;
    }
}

class CarroEletrico extends Carro {

    private _autonomiaBateria: number;

    constructor(placa: string, ano: number, modelo: string, autonomiaBateria: number) {
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }

    get autonomiaBateria(): number {
        return this._autonomiaBateria;
    }

}

let veiculo1: Veiculo = new Veiculo('FMV-3452', 2004);
let carro1: Carro = new Carro('ODY-3445', 2019, 'Hilux');
let carroEletrico1: CarroEletrico = new CarroEletrico('FGJ-3434', 2022, 'I3', 25);