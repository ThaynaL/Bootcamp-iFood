var var1 = 10;
var var2 = 'Teste';
var var3 = '10';
console.log(var1 + var3);
console.log(var2 + var1);
console.log(var3 - var1);

//Hoisting
teste();
function teste() {
    console.log('Teste Hoisting');
}

var teste1 = function() {
    console.log('Teste1');
}
teste1();//Não funciona como o acima

const Pessoa = {
    nome: 'Sol',
    idade: 40,
    falar: function() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

Pessoa.falar();
