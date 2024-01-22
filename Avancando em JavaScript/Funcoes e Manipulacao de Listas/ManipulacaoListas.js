const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const cb = (value, i, listRef) => {
    console.log(value + i);
};
lista.forEach(cb);

// //Equivale com loop
for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    cb(element, i, lista);
}

//Uso normal do forEach
lista.forEach((value) => {
    console.log(value);
});

//filter
const listaNumPares = lista.filter((elemento) => {
    return (elemento % 2 === 0)
});
console.log(listaNumPares);

//map
class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}
const listaPessoas = [new Pessoa('Sol'), new Pessoa('Eduardo'), new Pessoa('Cristina'), new Pessoa('Natali'), new Pessoa('Isabela') ];
const listaNomes = listaPessoas.map((element) =>{
    return element.nome;
});
console.log(listaNomes);

//reduce
const somaTodosNum = lista.reduce((previous, current) =>{
    console.log(previous, current);
    return previous + current;
}, 0) 
console.log(somaTodosNum);

//Join e Combinação de Funções de Manipulação
console.log(lista.join('; '));

var listarPers = [{ name: 'Alice' }, { name: 'Bela' }, { name: 'Ana' }];

console.log(
    listarPers
        .map(e => e.name)
        .filter((e) => e.startsWith('A'))
        .join(', ')
);