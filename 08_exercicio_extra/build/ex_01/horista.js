"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diarista_1 = __importDefault(require("./diarista"));
class Horista extends diarista_1.default {
    calcularSalario() {
        return super.calcularSalario() / 24;
    }
}
exports.default = Horista;
