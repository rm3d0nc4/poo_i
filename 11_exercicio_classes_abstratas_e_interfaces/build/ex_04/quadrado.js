"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figura_geometrica_1 = __importDefault(require("./figura_geometrica"));
class Quadrado extends figura_geometrica_1.default {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado ** 2;
    }
    calcularPerimetro() {
        return this.lado * 4;
    }
}
