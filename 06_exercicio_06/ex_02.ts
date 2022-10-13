class Hora {
    private hora: number;
    private minutos: number;
    private segundos: number;

    constructor(hora: number, minutos: number, segundos: number) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    lerHora() : number {
        return this.hora;
    }
    
    
    lerMinutos() : number {
        return this.minutos;
    }
    
    lerSegundos() : number {
        return this.segundos;
    }

    lerHorario() : string {
        return `${this.hora}:${this.minutos}:${this.segundos}`;
    }
}

let horario1: Hora = new Hora(12, 24, 35);
console.log(horario1.lerHora());
console.log(horario1.lerMinutos());
console.log(horario1.lerSegundos());
console.log(horario1.lerHorario());