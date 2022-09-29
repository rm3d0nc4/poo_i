/* 
Respota: 
    Ocorrerá um erro devido ao método construtor da classe não ter recebido
    nenhum argumento; */

// Solução:

class Radio {
    volume : number;
    
    constructor(volume : number = 0) { // definir um valor padrão no método construtor
        this.volume = volume;
    }
}
    let r : Radio = new Radio();
    r.volume = 10;
    console.log(r.volume)