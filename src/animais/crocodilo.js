import { Biomas } from "../constantes/biomas";
import { Animal } from "./animais";

class Crocodilo extends Animal {
    constructor() {
        super('Crocodilo', 3, [Biomas.RIO], true, true);
    }
}

export { Crocodilo as Crocodilo };