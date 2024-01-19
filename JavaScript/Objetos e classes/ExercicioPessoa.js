class Pessoa {
    nome;
    altura;
    peso;

    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC() {
        const IMC = this.calcularIMC();
        if (IMC < 18.5) {
            console.log('Abaixo do peso');
        } else if ((IMC >= 18.5) && (IMC <= 25)) {
            console.log('Peso normal');
        } else if ((IMC > 25) && (IMC <= 30)) {
            console.log('Acima do peso');
        } else if ((IMC > 30) && (IMC <= 40)) {
            console.log('Obeso');
        } else {
            console.log('Obesidade Grave');
        }
    }
}

const Jose = new Pessoa('José', 1.78, 80);
console.log(Jose.calcularIMC());
Jose.classificarIMC();

const Ana = new Pessoa('Ana', 1.58, 90);
console.log(Ana.calcularIMC());
Ana.classificarIMC();