import { Animal } from "./animais";
import { Biomas } from "../constantes/biomas";

class Hipopotamo extends Animal {
    constructor() {
        super('Hipopótamo', 4, [Biomas.SAVANA, Biomas.RIO], false, true);
    }
}

export { Hipopotamo as Hipopotamo };