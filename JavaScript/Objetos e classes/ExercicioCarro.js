class Carro{
    marca;
    cor;
    ano;
    gastoMedioPorKM;

    constructor (marca, cor, ano, gastoMedioPorKM){
        this.marca = marca;
        this.cor = cor;
        this.ano = ano;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularValorDoPercurso(distanciaKm, valorCombustivel){
        return distanciaKm * this.gastoMedioPorKM * valorCombustivel;
    }
}

const uno = new Carro('Fiat', 'Preto', 2004, 1/10);
console.log(uno.calcularValorDoPercurso(70, 6.90));

const mobi  = new Carro('Fiat', 'Cinza', 2018, 1/14);
console.log(mobi.calcularValorDoPercurso(100, 5.7));
