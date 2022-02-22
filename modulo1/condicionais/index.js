// Exercícios de interpretação de código

// 1-

// a) Explique o que o código faz. Qual o teste que ele realiza? 
//Ele pede um numero ao usuario, depois converte em número, e passa por um if else para ver se o número tem resto de divisão com 0
//se tiver imprime uma mensagem de que passou no teste, se não imprime que não passou
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// em geral para números pares
// c) Para que tipos de números a mensagem é "Não passou no teste"?
//para números impares

// 2-

// a) Para que serve o código acima?
//Para receber um nome de uma fruta do usuario, e testar em uma lista de preços definidos
// // b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// //"O preço da fruta maçã é R$ 2.25"
// // c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos
// //  o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// // O preço da fruta  Perâ  é  R$  5

// // 3-

// // a) O que a primeira linha está fazendo?
// //Está recebendo um número via prompt do usuário
// // b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// // se digitar o 10 apareceria Esse número passou no teste, se digitasse -10 aparecia erro pois a mensagem não foi declarada
// // c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// // Exercícios de escrita de código

// // 1-Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
// // (apenas maiores de idade).

// // a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// let idade = Number(prompt("Digite sua idade"))
// // b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// // c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no 
// // console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
// if (idade >= 18) {
//     console.log("Você pode dirigir");
// } else{
//     console.log("Você não pode dirigir.");
// }

// // 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) 
// // ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou 
// //"Boa Noite!".  Utilize o bloco `if/else`
// let periodo = prompt("Digite o período que você estuda sendo M (matutino), V (Vespertino), N (Noturno)")

// if (periodo === "M") {
//     console.log("Bom Dia!")
// } else if (periodo === V) {
//     console.log("Vespertino")
// } else if (periodo === N) {
//     console.log("Noturno")
// }

// // 3- Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
// let periodo = prompt("Digite o período que você estuda sendo M (matutino), V (Vespertino), N (Noturno)")

// switch (periodo) {
//     case "M":
//         console.log("Bom Dia!");
//         break;

//     case "V":
//         console.log("Vespertino");
//         break;

//     case "N":
//         console.log("Noturno");
//         break;        
// }

// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você 
// se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário 
// qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu 
// amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso 
// contrário, imprima "Escolha outro filme :("
let genero = prompt("Qual o gênero de filme que vai assistir?")
let valorIngresso = Number(prompt("Qual o valor do ingresso?"))
var respostas = {
    generoB: genero.toLowerCase() , 
    valorIngressoB: valorIngresso
}
if (respostas.generoB === "fantasia") {
    respostas.generoB = true
} else {
    respostas.generoB = false
}

if (valorIngresso < 15) {
    respostas.valorIngressoB = true
} else {
    respostas.valorIngressoB = false
}
switch (respostas) {
    case respostas.generoB && respostas.valorIngressoB === true:
        console.log("Bom filme!");
        break;

    default:
        console.log("Escolha outro filme :(");
        break;
}

console.log(respostas.generoB);
console.log(respostas.valorIngressoB);
