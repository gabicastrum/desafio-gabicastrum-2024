import { Animal } from "./animais";
import { Biomas } from "../constantes/biomas";

class Leao extends Animal {
    constructor() {
        super('Leão', 3, [Biomas.SAVANA], true, true);
    }
}

export { Leao as Leao }; 