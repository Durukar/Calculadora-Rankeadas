const Jogador = require("./entities/Jogador")

const jogador = new Jogador("Panteranegra");

class App {
    constructor() {
    }

    iniciar() {

        // Adicionar vitorias e derrotas
        jogador.setVitorias(101);
        jogador.setDerrotas(40);

        // Calcular o Rank
        jogador.getRank(jogador.getVitorias, jogador.getDerrotas)

        // Imprimir o status do jogador
        jogador.toString();
    }


}

module.exports = App;