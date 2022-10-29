"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empregado_1 = __importDefault(require("./empregado"));
class Diarista extends empregado_1.default {
    calcularSalario() {
        return this.salario / 30;
    }
}
exports.default = Diarista;
