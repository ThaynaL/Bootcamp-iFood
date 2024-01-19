const peso = 56, altura = 1.54;
const IMC = peso / Math.pow(altura, 2);
console.log('Valor do IMC: '+ IMC);
if (IMC < 18.5) {
    console.log('Abaixo do peso');
} else if((IMC >= 18.5) && (IMC <= 25)){
    console.log('Peso normal');
} else if((IMC > 25) && (IMC <= 30)){
    console.log('Acima do peso');
} else if((IMC > 30) && (IMC <= 40)){
    console.log('Obeso');
} else{
    console.log('Obesidade Grave');
}