"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figura_geometrica_1 = __importDefault(require("./figura_geometrica"));
class Circulo extends figura_geometrica_1.default {
    constructor(raio) {
        super();
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
