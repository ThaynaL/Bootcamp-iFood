const precoGasolina = 6.72 ;
const precoEtanol = 5.80 ;
const mediaConsumoCarro = 9;
const KM_trajeto = 500;
const consumoKm = KM_trajeto/mediaConsumoCarro;
const tipoConbustivel = 'Etanol';
let valorViagem;
if (tipoConbustivel == 'Etanol') {
    valorViagem = consumoKm * precoEtanol;
} else {
    valorViagem = consumoKm * precoGasolina;   
}

console.log("Para fazer essa viagem será gasto: " + (valorViagem.toFixed(2)) + " reais");