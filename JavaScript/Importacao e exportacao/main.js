/*const pessoa = { nome: 'Bruna' };

const { nome } = pessoa; //ou const nome = pessoa.nome; */
const { gets, print } = require('./funcoes-auxiliares.js');
let maiorNum = 0;
const quantidadeLista = gets();

for (let i = 0; i < quantidadeLista; i++) {
    const numSorteado = gets();
    if (numSorteado > maiorNum) {
        maiorNum = numSorteado;
    }
}
console.log(maiorNum);
