"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figura_geometrica_1 = __importDefault(require("./figura_geometrica"));
class Triangulo extends figura_geometrica_1.default {
    constructor(base, altura, lado1, lado2) {
        super();
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
