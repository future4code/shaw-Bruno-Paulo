//Exercícios de interpretação de código

//1-

//a) O que vai ser impresso no console?
//10
//50

//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a 
//função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//Não aparecem mais numeros no console

//2-

//a. Explique o que essa função faz e qual é sua utilidade
// Ele pede um texto para o usuario, e com uma função ele verefica se o texto tem a palavra cenoura, retornando true ou false dependendo da resposta do usuario.

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//     i.   `Eu gosto de cenoura`
//True
//     ii.  `CENOURA é bom pra vista`
//True
//     iii. `Cenouras crescem na terra`
//True

//Exercícios de escrita de código

// 1. Escreva as funções explicadas abaixo:
var nome = prompt("Digite seu nome")
var idade = prompt("Digite sua idade")
var local = prompt("Digite onde você mora")
var trampo = prompt("Digite qual a sua ocupação")
//     a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
//     "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//     Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime 
//     essa mensagem.
function novaFuncao (){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${local} e sou ${trampo}.`);
}

novaFuncao()
    
//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
//o nome (`string`), a idade (`number`),
//a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as 
//nformações da pessoa em uma só mensagem com o template: ```
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
function velhaFuncao (a, b, c, d){
    console.log(`Eu sou ${a}, tenho ${b} anos, moro em ${c} e sou ${d}.`);
}

velhaFuncao(nome, idade, local, trampo)

// 2. Escreva as funções explicadas abaixo:
    
// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas 
// entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
let d = Number(prompt("Digite um número"))
let e = Number(prompt("Digite outro número"))
function terceiraFuncao (a, b) {
    let resultado = a + b
    console.log(resultado);
    return
}
terceiraFuncao(d, e)

// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou 
// igual** ao segundo.
let primeiron = Number(prompt("Digite um numero"))
let segundon = Number(prompt("Digite um numero"))
function quinetaFuncao (a, b){
    let resultado = a === b
    console.log(`É maior ou igual ao segundo? ${resultado}`);
    return
}

quinetaFuncao(primeiron, segundon)
// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
let par = Number(prompt("Digite um numero"))
function quartaFuncao (a){
    let conta = a % 2
    let resultado = conta > 0
    console.log(`é par? ${resultado}`);
    return
}
quartaFuncao(par)
// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
// juntamente com uma versão dela em letras maiúsculas.
let texto = prompt("digite um texto")
function sextaFuncao (a){
    var b = a.length
    var maiusculas = a.toLowerCase()
    console.log(b)
    console.log(maiusculas)
    return
}
sextaFuncao(texto)

// 4-Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados 
// pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
var first = Number(prompt("digite um numero"))
var secound = Number(prompt("digite um numero"))
function soma (a, b){
    var resultado = a + b
    console.log(resultado);
    return
}
soma(first, secound)
function menos(a, b){
    var resultado = a - b
    console.log(resultado);
    return
}
menos(first, secound)
function divisao(a, b){
    var resultado = a / b
    console.log(resultado);
    return
}
divisao(first, secound)
function multiplicar (a, b){
    var resultado = a * b
    console.log(resultado);
    return
}
multiplicar (first, secound)