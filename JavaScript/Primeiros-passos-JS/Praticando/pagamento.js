const valorProduto= 100;
const condicaoPagamento = 4;
let juros, desconto, vlPago;
if (condicaoPagamento === 1) {
    desconto = valorProduto * 10/100;
    vlPago = valorProduto - desconto;
    console.log(vlPago);
} else if(condicaoPagamento === 2){
    desconto = valorProduto * 15/100;
    vlPago = valorProduto - desconto;
    console.log(vlPago);
}else if(condicaoPagamento === 3){
    console.log(valorProduto);
}else{ 
    juros = valorProduto * 0.1;
    vlPago = valorProduto + juros;
    console.log(vlPago);
}