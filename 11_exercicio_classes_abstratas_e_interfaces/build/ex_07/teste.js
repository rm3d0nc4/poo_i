"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
class TesteFigurasGeometricas {
    constructor() {
        this.quadrado1 = new classes_1.Quadrado(4);
        this.triangulo1 = new classes_1.Triangulo(4, 6, 8, 6);
        this.circulo1 = new classes_1.Circulo(4.5);
    }
    testarMetodos() {
        console.log(`Quadrado{area: ${this.quadrado1.calcularArea()}, perimetro: ${this.quadrado1.calcularPerimetro()}}`);
        console.log(`Triangulo{area: ${this.triangulo1.calcularArea()}, perimetro: ${this.triangulo1.calcularPerimetro()}}`);
        console.log(`Circulo{area: ${this.circulo1.calcularArea().toFixed(2)}, perimetro: ${this.circulo1.calcularPerimetro().toFixed(2)}}`);
    }
}
let teste = new TesteFigurasGeometricas();
teste.testarMetodos();
