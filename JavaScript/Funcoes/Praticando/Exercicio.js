function escreverNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarMaioridade(nome , idade) {
    if (idade >= 18) {
        console.log(escreverNome(nome) + ', sou maior de idade!');
    } else {
        console.log(escreverNome(nome) + ', sou menor de idade!');
    }
}
verificarMaioridade( 'Aline', 19);
