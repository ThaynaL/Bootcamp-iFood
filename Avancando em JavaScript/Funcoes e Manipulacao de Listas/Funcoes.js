function falarMeuNome() {
    console.log('Meu nome é Thayná');
}
const referenciaNova = falarMeuNome;
referenciaNova();
function falarMeuSobrenome(falarMeuNome) {
    falarMeuNome();
    console.log('Lima');
}
falarMeuSobrenome(falarMeuNome);

//Declaração Explícita e Arrow Function
function funcaoExplicita() {
    console.log(this);
}
const funcaoAnonima = () => {
    console.log(this); // 'Le' o contexto
}
const joao = {
    nome: 'Joao',
    funcaoExplicita,
    funcaoAnonima
}
joao.funcaoExplicita();
joao.funcaoAnonima();

//Closures ou Fechamentos
function soma(x) {
    return function (y) {
        return x + y;
    }
}
const somaParcial = soma(10);
console.log(soma(20)(40));
console.log(somaParcial(30));
console.log(somaParcial(40));

//Invocação Direta, Call, Apply e Operador New
const pessoa = {
    nome: 'Felipe',
    idade: 40
}
function gritar(prefixo) {
    console.log(prefixo, this.nome);
}
gritar('Olaaaaaa');
gritar.apply(pessoa, ['OLAAAAAA']);
gritar.call(pessoa, 'OLAAAAAA');

//Menção Honrosa aos Callbacks
function adicao(x, y) {
    return x + y;
}
function multiplicacao(x, y) {
    return x * y;
}
function calcular(x, operacao, y) {
    console.log(operacao(x, y));
}
calcular(10, adicao, 9);
calcular(10, adicao, 39);

/*
document.getElementByle('btn1').addEventListener('click', {} => {
    console.log('clicou!')
})
*/