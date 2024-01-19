function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(IMC){
    if (IMC < 18.5) {
        return 'Abaixo do peso';
    } else if((IMC >= 18.5) && (IMC <= 25)){
        return 'Peso normal';
    } else if((IMC > 25) && (IMC <= 30)){
        return 'Acima do peso';
    } else if((IMC > 30) && (IMC <= 40)){
        return 'Obeso';
    } else{
        return 'Obesidade Grave';
    }
}

{function () {
    const peso = 56, altura = 1.54;

    const IMC =  calcularIMC(peso, altura);
    console.log('Valor do IMC: '+ IMC);

    const classificacao = classificarIMC(IMC);
    console.log('Classificação: ' + classificacao);
}}{}; //Função imediatamente evocada

