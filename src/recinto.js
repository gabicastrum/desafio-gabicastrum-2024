import { Hipopotamo } from "./animais/hipopotamo";
import { Biomas } from "./constantes/biomas";
class Recinto {
    constructor(numero, biomas, tamanhoTotal, animaisExistentes) {
        this.numero = numero;
        this.biomas = biomas;
        this.tamanhoTotal = tamanhoTotal;
        this.animaisExistentes = animaisExistentes;
    }

    podeIncluirAnimais(animais) {
        this.#validarQuantidadeAnimais(animais);
        if (!this.#verificarSeBiomasAnimalCompativeis(animais)) {
            return false;
        }
        if (!this.#verificarEspacoSuficiente(animais)) {
            return false;
        }

        if (!this.#verificarAnimaisCarnivoros(animais)) {
            return false;
        }

        if (!this.#verificarHipopotamo(animais)) {
            return false;
        }

        if (!this.#verificarSePodeFicarSozinho(animais)) {
            return false;
        }

        return true;
    }

    #validarQuantidadeAnimais(animais) {
        if (animais.length === 0) {
            throw new Error("Quantidade inválida");
        }
    }
    #verificarSeBiomasAnimalCompativeis(animais) {
        const animal = animais[0];
        return (animal.biomas.some(bioma => this.biomas.includes(bioma)));
    }
    #verificarEspacoSuficiente(animais) {
        const espacoLivre = this.calcularEspacoLivre(animais);
        return espacoLivre >= 0;
    }
    #verificarAnimaisCarnivoros(animais) {
        const contemAnimaisCarnivoros = animais.some(animal => animal.carnivoro) || this.animaisExistentes.some(animal => animal.carnivoro);
        if (contemAnimaisCarnivoros) {
            const todosAnimaisSaoMesmaEspecie = this.#verificarSeTodosMesmaEspecie([...this.animaisExistentes, ...animais]);
            return todosAnimaisSaoMesmaEspecie;
        }
        return true;
    }
    #verificarHipopotamo(animais) {
        const contemHipopotamo = [...this.animaisExistentes, ...animais].some(animal => animal instanceof Hipopotamo);
        const contemEspeciesDiferentes = !this.#verificarSeTodosMesmaEspecie([...this.animaisExistentes, ...animais]);
        if (contemHipopotamo && contemEspeciesDiferentes) {
            return this.biomas.includes(Biomas.SAVANA) && this.biomas.includes(Biomas.RIO);
        }
        return true;
    }

    #verificarSeTodosMesmaEspecie(animais) {
        return animais.every(animal => animal.constructor === animais[0].constructor);

    }

    #verificarSePodeFicarSozinho(animais) {
        if (this.animaisExistentes.length === 0 && animais.length === 1 && !animais[0].podeFicarSozinho) {
            return false;
        }

        return true;
    }

    calcularEspacoLivre(animais) {
        let espacoOcupado = this.animaisExistentes.reduce((total, animal) => total + animal.tamanho, 0);
        let espacoNecessario = animais.reduce((total, animal) => total + animal.tamanho, 0);

        if (this.#precisaAdicionarEspacoExtra(animais)) {
            espacoNecessario += 1;
        }
        return this.tamanhoTotal - espacoOcupado - espacoNecessario;
    }

    #precisaAdicionarEspacoExtra(animais) {
        return (this.animaisExistentes.length > 0 && animais.length > 0 && new Set([...this.animaisExistentes, ...animais].map(animal => animal.nome)).size > 1);
    }

}

export { Recinto as Recinto };
