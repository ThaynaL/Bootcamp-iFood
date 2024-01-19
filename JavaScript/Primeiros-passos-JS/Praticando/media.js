const nota1= 10, nota2= 0, nota3= 5;
const media = (nota1+nota2+nota3)/3;
console.log('Média: '+ media);
if (media < 5) {
    console.log('Reprovado');
} else if((media >= 5) && (media <= 7)){
    console.log('Recuperação');
}else { 
    console.log('Aprovado');
}