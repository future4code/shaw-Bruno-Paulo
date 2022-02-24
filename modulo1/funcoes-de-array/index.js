//Exercícios de interpretação de código

//1.  Leia o código abaixo
// a) O que vai ser impresso no console?
//Vai imprimir cada objeto seguido cada um por uma lista completa de arrays

// 2. Leia o código abaixo
// a) O que vai ser impresso no console?
//Ele vai imprimir todos os arrays de usuario

// 3. Leia o código abaixo
// a) O que vai ser impresso no console?
// Ele imprime todos os arrays que não tem Chijo no array

// Exercícios de escrita de código

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as 
// operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
// a) Crie um novo array que contenha apenas o nome dos doguinhos
const petsNomes = pets.map((pet, index, array) => {
    return pet.nome
})
// console.log(petsNomes);
// b) Crie um novo array apenas com os cachorros salsicha
const petsSalsichas = pets.filter((pet, index, array) => {
    return pet.raca === "Salsicha"
})
// console.log(petsSalsichas);
// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const petsPoodles = pets.filter((pet, index, array) => {
    if (pet.raca === "Poodle"){
        // console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`)
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
    }
    return pet.raca === "Poodle"
})
// console.log(petsPoodles);

// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de
// array map e filter:
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]
// a) Crie um novo array que contenha apenas o nome de cada item
const produtosNomes = produtos.map((produto, index, array) => {
    return produto.nome
})
// console.log(produtosNomes);
// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em 
// todos eles
const produtosPrecos = produtos.map((valor, index, array) => {
    valor.preco = (valor.preco - (valor.preco * 0.05))
    return [valor.nome,  valor.preco]
})

// console.log(produtosPrecos);
// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const produtosBebidas = produtos.filter((produto, index, array) => {
    return produto.categoria === "Bebidas"
})
// console.log(produtosBebidas);
// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
let produtosYpe = produtos.filter(produtos => produtos.includes("Ypê"));

console.log(produtosYpe);
// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases
//  apenas dos itens cujo nome contenha a palavra "Ypê"
