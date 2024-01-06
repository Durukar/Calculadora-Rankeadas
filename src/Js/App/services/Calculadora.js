class Calculadora {
    constructor() {
    }

    calcularRank(vitorias, derrotas) {
        const total = vitorias - derrotas;
        let rank;

        //#region Logica calculo de rank
        if (total <= 10) {
            rank = "Ferro"
            return rank;
        } else if (total >= 11 && total <= 20) {
            rank = "Bronze"
            return rank;
        } else if (total >= 21 && total <= 50) {
            rank = "Prata"
            return rank;
        } else if (total >= 51 && total <= 80) {
            rank = "Ouro"
            return rank;
        } else if (total >= 81 && total <= 90) {
            rank = "Diamante"
            return rank;
        } else if (total >= 91 && total <= 100) {
            rank = "Lendário"
            return rank;
        } else {
            rank = "Imortal"
            return rank;
        }
        //#endregion
    }
}

module.exports = Calculadora;