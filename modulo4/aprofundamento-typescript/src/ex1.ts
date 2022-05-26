var minhaString: string | number = "";
var meuNumero: number | string = 0;

type pessoa = {
    nome : string,
    idade : number,
    corFavorita: string;
}

enum cores {
    AZUL = "Azul",
    VERMELHO = "Vermelho",
    AMARELO = "Amarelo",
    ROXO = "Roxo",
    PRETO = "Preto",
    VERDE = "Verde"
}

var primeiro: pessoa = {
     nome: "Pedro",
     idade: 20, 
     corFavorita: cores.AZUL
};
var segundo: pessoa = {
    nome: "Paulo",
    idade: 18, 
    corFavorita: cores.VERMELHO
};
var terceiro: pessoa = {
    nome: "Bruno",
    idade: 25, 
    corFavorita: cores.AMARELO
};

var quarto: pessoa = {
    nome: "Fernando",
    idade: 45, 
    corFavorita: cores.ROXO
};

console.log("1")