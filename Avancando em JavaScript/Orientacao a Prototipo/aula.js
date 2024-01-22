//ORIENTAÇÃO A PROTÓTIPO
const pessoa = {
    genero: 'Nao informado'
}

const joao = {
    nome: 'Joao',
    idade: 23,
    _pronto_: pessoa
}

console.log(joao._pronto_);

const bia = Object.create(pessoa)
bia.nome = 'Bia'
console.log(bia.genero);

const texto = 'este é um pequeno texto';
console.log(texto._pronto_);
/*chamada
console.log(joao._pronto_);
console.log(joao.genero);*/

/*
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome} tenho ${this.idade} anos`);
}
const lia = new Pessoa('Lia', 30);
lia.falar();
Acima é equivale ao que está abaixo*/
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    falar(){
        console.log(`Meu nome é ${this.nome} tenho ${this.idade} anos`);
    }
}
const lia = new Pessoa('Lia', 30);
lia.falar();

//Como funciona o New
function Filme(nome, ano) {
    this.nome = nome;
    this.ano = ano;
}
Filme.prototype.apresentar = function () {
    console.log(`Sou o filme ${this.nome} lançado em ${this.ano}`);
}
const TTLMT = {
    genero: 'Ficção científica/Ação'
}
Filme.call(TTLMT,'Tudo em Todo o Lugar ao Mesmo Tempo', 2022);
console.log(TTLMT);

String.prototype.toPLang = function () {
    return `P ${this}`
}
console.log('teste'.toPLang());