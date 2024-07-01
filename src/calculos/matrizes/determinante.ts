export class Determinante3Por3 {
	constructor(
		public matriz: number[][] = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		],
	) {
		this.calcMatrizAumentada();
	}

	private matrizAumentada: number[][] = [];

	calcMatrizAumentada() {
		// Matriz aumentada fica igual a matriz
		this.matrizAumentada = [...this.matriz];

		// Vai adicionar duas colunas com os valores da primeira e da segunda
		for (let i = 0; i < this.matrizAumentada.length; i++) {
			this.matrizAumentada[i].push(this.matrizAumentada[i][0]);
			this.matrizAumentada[i].push(this.matrizAumentada[i][1]);
		}
	}

	diagonaisPrimarias(): number {
		let somaDasDiagonais = 0;

		for (let i = 0; i < this.matriz.length; i++) {
			let multiplicacao = 1;
			multiplicacao *= this.matrizAumentada[i][i];
			multiplicacao *= this.matrizAumentada[i + 1][i + 1];
			multiplicacao *= this.matrizAumentada[i + 2][i + 2];

			somaDasDiagonais += multiplicacao;
		}

		return somaDasDiagonais;
	}

	diagonaisSecundarias(): number {
		let somaDasDiagonais = 0;

		for (let i = 0; i < this.matriz.length; i++) {
			let multiplicacao = 1;
			multiplicacao *= this.matrizAumentada[i][i];
			multiplicacao *= this.matrizAumentada[i + 1][i + 1];
			multiplicacao *= this.matrizAumentada[i + 2][i + 2];

			somaDasDiagonais += multiplicacao;
		}

		return somaDasDiagonais;
	}
}
