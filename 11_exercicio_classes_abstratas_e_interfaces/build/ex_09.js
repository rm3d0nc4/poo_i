"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./ex_08/classes");
class TesteFigurasGeometricas2 {
    constructor() {
        this.quadrado1 = new classes_1.Quadrado(4);
        this.triangulo1 = new classes_1.Triangulo(4, 6, 8, 6);
        this.circulo1 = new classes_1.Circulo(4.5);
        this.circulo2 = new classes_1.Circulo(4.5);
    }
    testarMetodos() {
        console.log(this.quadrado1.comparar(this.triangulo1));
        console.log(this.triangulo1.comparar(this.circulo1));
        console.log(this.circulo1.comparar(this.quadrado1));
        console.log(this.circulo1.comparar(this.circulo2));
    }
}
let teste = new TesteFigurasGeometricas2();
teste.testarMetodos();
