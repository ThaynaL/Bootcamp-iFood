const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, 'tarefas.txt');

async function buscarArquivo() {
    try {
      const arquivo = await fs.promises.readFile(filePath, 'utf8'); 
        const textoArquivo = arquivo.toString('utf8');
        console.log(textoArquivo);  
    } catch (error) {
        console.log(error);
    } finally{
        console.log('Finalizou');
    }
}

buscarArquivo();
