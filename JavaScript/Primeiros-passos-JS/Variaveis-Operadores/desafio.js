const precoCombustivel = 5.80 ;
const mediaConsumoCarro = 9;
const KM_trajeto = 500;
const consumoKm = KM_trajeto/mediaConsumoCarro;
const valorViagem = consumoKm*precoCombustivel;
console.log("Para fazer essa viagem será gasto: " + (valorViagem.toFixed(2)) + " reais");