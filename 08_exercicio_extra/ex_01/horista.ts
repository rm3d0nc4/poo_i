import Diarista from "./diarista";

export default class Horista extends Diarista {

    calcularSalario(): number {
        return super.calcularSalario() / 24; 
    }
}