import { Determinante3Por3 } from "./calculos/matrizes/determinante";

export class App {
	constructor() {
		const determinante = new Determinante3Por3();
		determinante.value();
	}
}

const app = new App();
