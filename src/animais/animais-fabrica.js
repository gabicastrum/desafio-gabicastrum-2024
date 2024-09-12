import { Leao } from "./leao";
import { Gazela } from "./gazela";
import { Macaco } from "./macaco";
import { Leopardo } from "./leopardo";
import { Crocodilo } from "./crocodilo";
import { Hipopotamo } from "./hipopotamo";

class AnimaisFabrica {
    criarInstanciaAnimal(nomeEspecie) {
        switch (nomeEspecie) {
            case "LEAO":
                return new Leao();
            case "LEOPARDO":
                return new Leopardo();
            case "CROCODILO":
                return new Crocodilo();
            case "MACACO":
                return new Macaco();
            case "GAZELA":
                return new Gazela();
            case "HIPOPOTAMO":
                return new Hipopotamo();
            default:
                throw new Error("Animal inválido");
        }
    }
}
export { AnimaisFabrica as AnimaisFabrica };