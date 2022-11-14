"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = exports.Triangulo = exports.Quadrado = void 0;
class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }
    calcularArea() {
        return this.lado ** 2;
    }
    calcularPerimetro() {
        return this.lado * 4;
    }
}
exports.Quadrado = Quadrado;
class Triangulo {
    constructor(base, altura, lado1, lado2) {
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
    calcularPerimetro() {
        return this.base + this.lado1 + this.lado2;
    }
}
exports.Triangulo = Triangulo;
class Circulo {
    constructor(raio) {
        this.raio = raio;
        ;
    }
    calcularArea() {
        return (Math.PI * this.raio) ** 2;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}
exports.Circulo = Circulo;
