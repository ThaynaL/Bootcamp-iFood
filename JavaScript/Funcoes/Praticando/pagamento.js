function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)))
}
function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros/100)))
}

const valorProduto = 1029, condicaoPagamento = 1;

if (condicaoPagamento === 1) {
    console.log(aplicarDesconto(valorProduto, 10));
}else if(condicaoPagamento === 2){
    console.log(aplicarDesconto(valorProduto, 15));
}else if(condicaoPagamento === 3){
    console.log(valorProduto);
}else{ 
    console.log(aplicarJuros(valorProduto, 10));
}