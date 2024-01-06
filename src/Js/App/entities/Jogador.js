const Calculadora = require("../services/Calculadora")

const calculadora = new Calculadora();

class Jogador {

    #vitorias
    #derrotas
    #rank
    constructor(nome) {
        this.nome = nome
        this.#vitorias = 0;
        this.#derrotas = 0;
    }

    //#region Getters
    get getVitorias() {
        return this.#vitorias;
    }

    get getDerrotas() {
        return this.#derrotas;
    }
    //#endregion

    //#region Setters

    setDerrotas(value) {
        this.#derrotas = value;
    }

    setVitorias(valor) {
        this.#vitorias = valor;
    }

    //#endregion

    //#region Methods

    getRank(vitorias, derrotas) {
        this.#rank = calculadora.calcularRank(vitorias, derrotas);
    }

    toString() {
        console.log(`O Herói tem o saldo de ${this.#vitorias} vitórias está no rank ${this.#rank}.`)
    }

    //#endregion
}

module.exports = Jogador;