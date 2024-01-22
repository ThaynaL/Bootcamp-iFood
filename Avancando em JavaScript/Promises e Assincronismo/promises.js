//Funcionamento das Promises
/*
new Promise((resolve, reject) => {
    //...
    resolve()
    //...
    reject()
});
*/

const promessaNumQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100);
        resolve(numero);
    }, 300);//Simular assincronismo
});

console.log('Vai');

promessaNumQualquer
    .then((value) => {
        console.log(value);
        return value + 5;
    })
    .then((value) => {
        console.log('+ 5 = ' + value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Finalizou!');
    });

//Manipulando Arquivos através de Promises
const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, 'tarefas.txt');

const promessaLeituraArquivo = fs.promises.readFile(filePath, 'utf8');

promessaLeituraArquivo
    .then((textoArquivo) => textoArquivo.split('\n').slice(1))
    .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
        const [nome, feito] = linha.split(':');
        return {
            nome: nome.trim(),
            feito: feito.trim().toLowerCase() === 'true'
        };
    }))
    .then((listaTarefas) => console.log(listaTarefas))
    .catch((error) => console.log('Deu ruim', error));
