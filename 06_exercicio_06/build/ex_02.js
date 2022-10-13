"use strict";
class Hora {
    constructor(hora, minutos, segundos) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    lerHora() {
        return this.hora;
    }
    lerMinutos() {
        return this.minutos;
    }
    lerSegundos() {
        return this.segundos;
    }
    lerHorario() {
        return `${this.hora}:${this.minutos}:${this.segundos}`;
    }
}
let horario1 = new Hora(12, 24, 35);
console.log(horario1.lerHora());
console.log(horario1.lerMinutos());
console.log(horario1.lerSegundos());
console.log(horario1.lerHorario());
