import { Animal } from "./animais";
import { Biomas } from "../constantes/biomas";

class Macaco extends Animal {
    constructor() {
        super('Macaco', 1, [Biomas.SAVANA, Biomas.FLORESTA], false, false);
    }
}

export { Macaco as Macaco };