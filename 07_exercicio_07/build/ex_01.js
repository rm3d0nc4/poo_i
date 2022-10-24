"use strict";
class Veiculo {
    constructor(placa, ano) {
        this._placa = placa;
        this._ano = ano;
    }
    get placa() {
        return this._placa;
    }
    get ano() {
        return this._ano;
    }
}
class Carro extends Veiculo {
    constructor(placa, ano, modelo) {
        super(placa, ano);
        this._modelo = modelo;
    }
    get modelo() {
        return this._modelo;
    }
}
class CarroEletrico extends Carro {
    constructor(placa, ano, modelo, autonomiaBateria) {
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }
    get autonomiaBateria() {
        return this._autonomiaBateria;
    }
}
let veiculo1 = new Veiculo('FMV-3452', 2004);
let carro1 = new Carro('ODY-3445', 2019, 'Hilux');
let carroEletrico1 = new CarroEletrico('FGJ-3434', 2022, 'I3', 25);
