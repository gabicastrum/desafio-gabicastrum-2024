import { Animal } from "./animais";
import { Biomas } from "../constantes/biomas";

class Leopardo extends Animal {
    constructor() {
        super('Leopardo', 2, [Biomas.SAVANA], true, true);
    }
}

export { Leopardo as Leopardo };