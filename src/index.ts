let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

// ex 1 : Crie um array de números e imprima a soma dos valores.
console.log("Exercício 1");
let valores : number[] = [1, 2, 3, 4, 5];
let soma : number = valores.reduce((acc, valor) => acc + valor, 0);
console.log(soma);

//ex 2: Crie uma função que recebe um nome e retorna uma mensagem personalizada.
console.log("Exercício 2");

let nome: string = "João";

function saudacao (nome:string): string{
    return `Olá, ${nome}!`;
}
console.log(saudacao(nome));

//ex3 : Crie uma classe Carro com atributos marca, modelo e ano. Instancie um objeto e exiba suas informações.
console.log("Exercício 3");

class Carro{
    private marca: string;
    private modelo: string;
    private ano: number;

    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    getMarca(): string{
        return this.marca;
    }
    getModelo(): string{
        return this.modelo;
    }
    getAno(): number{
        return this.ano;
    }
    retornaParametros(carro: Carro): string {
            return `Marca: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}`;
    
    }
}

const carro = new Carro("Toyota", "Corolla", 2022);
console.log(carro.retornaParametros(carro));



