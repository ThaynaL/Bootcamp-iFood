const entradas = [5, 50, 10, 98, 23];
let contador = 0;

function gets() {
    const entradaAtual = entradas[contador];
    contador++;
    return entradaAtual;
}

function print( texto ) {
    console.log(texto);
}

module.exports = {gets, print};