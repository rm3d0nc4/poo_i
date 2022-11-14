import { ContaCorrente, SeguroDeVida } from "./ex_10";
import AuditoriaInterna from "./ex_11";

class TesteTributaveis {
    constructor() {
        let auditoria: AuditoriaInterna = new AuditoriaInterna();

        let conta1: ContaCorrente = new ContaCorrente('Romero', 150000);
        let conta2: ContaCorrente = new ContaCorrente('Antonio', 4000000);
        let conta3: ContaCorrente = new ContaCorrente('Ramos', 45000);
        let conta4: ContaCorrente = new ContaCorrente('Mendonça', 2500000);

        let seguro1: SeguroDeVida = new SeguroDeVida();
        let seguro2: SeguroDeVida = new SeguroDeVida();
        let seguro3: SeguroDeVida = new SeguroDeVida();
        let seguro4: SeguroDeVida = new SeguroDeVida();
        let seguro5: SeguroDeVida = new SeguroDeVida();

        auditoria.adicionar(conta1, conta2, conta3, conta4);
        auditoria.adicionar(seguro1, seguro2, seguro3, seguro4, seguro5);
        
        console.log(auditoria.calcularTributos());
    }
}

let teste: TesteTributaveis = new TesteTributaveis();