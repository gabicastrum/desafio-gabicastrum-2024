import { Animal } from "./animais";
import { Biomas } from "../constantes/biomas";

class Gazela extends Animal {
    constructor() {
        super('Gazela', 2, [Biomas.SAVANA], false, true);
    }
}

export { Gazela as Gazela };