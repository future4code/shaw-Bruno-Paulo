// Exercícios de interpretação de código

// 1- O que o código abaixo está fazendo? Qual o resultado impresso no console?
//O código está propondo um loop com for, começando com i=0 até chegar o valor de i < 5, a valor a ser impresso é 10

//2- 

// a) O que vai ser impresso no console?
//Vão ser impressos os numeros maiores que 18 no caso seriam:19, 21, 23, 25, 27, 30
// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, 
// o que poderia ser usado para fazer isso?
//Acredito que não seria a melhor opção, poderiamos usar o for comum, e colocar um incremento de i, com esse incremento
//poderiamos saber o indice de cada um com muito mais facilidade

// 3- Qual seria o resultado impresso no console, se o usuário digitasse o número 4?
//*
// **
// ***
// ****

//Exercícios de escrita de código

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
let quantidadeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
var arrayNomes = []
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
if (quantidadeBichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!");
} 
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses 
// nomes em um array
    else {
        for (let i = 1; i <= quantidadeBichinhos; i++) {
            arrayNomes[i-1] = prompt(`Digite o nome do ${i} bichinho`);
            
        }
    }  
// c) Por fim, imprima o array com os nomes dos bichinhos no console
console.log(arrayNomes);

// 2- Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números.
//  Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

//  a) Escreva um programa que **imprime** cada um dos valores do array original.
for (let i of arrayOriginal) {
    console.log(arrayOriginal[i])
    
}
// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
for (let i of arrayOriginal) {
    console.log(arrayOriginal[i] / 10)
    
}
// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
var novoArray[i]
for (let i of arrayOriginal) {
    let parDuvida = arrayOriginal % 2
    if (parDuvida === 0) {
        novoArray[i] = arrayOriginal[i]
    }
    console.log(novoArray);
}
// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
for (let i of arrayOriginal) {
    novoArray[i] = `O elemento do índex ${i} é: ${arrayOriginal}` 
}
console.log(novoArray);
// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
let maior = 0
for (let i of arrayOriginal) {
    if (a < arrayOriginal[i]){
        maior = arrayOriginal[i]
    }
}
let a = maior
for (let i of arrayOriginal) {
    if (a > arrayOriginal[i]){
        let menor = arrayOriginal[i]
    }
}
console.log(`O maior é:${maior}, e o menor é: ${menor}`);