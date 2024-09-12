import { Recinto } from "./recinto";
import { Leao } from "./animais/leao";
import { Gazela } from "./animais/gazela";
import { Macaco } from "./animais/macaco";
import { AnimaisFabrica } from "./animais/animais-fabrica";
import { Biomas } from "./constantes/biomas";

class RecintosZoo {
    #animaisFabrica;
    constructor() {
        this.#animaisFabrica = new AnimaisFabrica();
    }

    analisaRecintos(animal, quantidade) {
        try {
            const animais = this.#criarObjetosAnimais(animal, quantidade);
            const recintosViaveis = this.#getRecintosViaveis(animais);
            this.#validarRecintosViaveis(recintosViaveis);
            return { recintosViaveis };
        } catch (error) {
            return {
                erro: error.message
            }
        }
    }

    #getRecintos() {
        return [
            new Recinto(1, [Biomas.SAVANA], 10, [new Macaco(), new Macaco(), new Macaco()]),
            new Recinto(2, [Biomas.FLORESTA], 5, []),
            new Recinto(3, [Biomas.SAVANA, Biomas.RIO], 7, [new Gazela()]),
            new Recinto(4, [Biomas.RIO], 8, []),
            new Recinto(5, [Biomas.SAVANA], 9, [new Leao()]),
        ];
    }

    #criarObjetosAnimais(animal, quantidade) {
        const animais = [];
        for (let i = 0; i < quantidade; i++) {
            animais.push(this.#animaisFabrica.criarInstanciaAnimal(animal));
        }
        return animais;
    }

    #getRecintosViaveis(animais) {
        const recintosViaveis = [];
        const recintos = this.#getRecintos();
        recintos.forEach(recinto => {
            if (recinto.podeIncluirAnimais(animais)) {
                const recintoViavel = {
                    numero: recinto.numero,
                    espacoLivre: recinto.calcularEspacoLivre(animais),
                    tamanhoTotal: recinto.tamanhoTotal
                }
                recintosViaveis.push(this.#criarMensagemRecintoViavel(recintoViavel));
            }
        });
        return recintosViaveis;
    }

    #validarRecintosViaveis(recintosViaveis) {
        if (recintosViaveis.length === 0) {
            throw new Error("Não há recinto viável");
        }
    }

    #criarMensagemRecintoViavel({ numero, espacoLivre, tamanhoTotal }) {
        return `Recinto ${numero} (espaço livre: ${espacoLivre} total: ${tamanhoTotal})`;
    }
}

export { RecintosZoo as RecintosZoo };
