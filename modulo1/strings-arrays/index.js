//Exercícios de interpretação de código
//1-
//a- a.  undefined
//b- b.  null
//c- c.  11
//d- d.  3
//e- e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//f- f.  9
//2-
//SUBI NUM ÔNIBUS EM MIRROCOS 27


//Exercícios de escrita de código

//1-
//Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
var usuario = prompt("Qual é seu usuário?")
var email = prompt("Qual é seu e-mail?")
//Em seguida imprima no console a seguinte mensagem:O e-mail `emailDoUsuario` foi cadastrado com sucesso.
//Seja bem-vinda(o), `nomeDoUsuario`!
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${usuario}!`)

//2-
//Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
var comidas = ['lasanha','pizza','hamburguer','arroz','tomate']
//a) Imprima no console o array completo
console.log(comidas)
//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
console.log(`Essas são as minhas comidas preferidas: ${comidas[0]}, ${comidas[1]}, ${comidas[2]}, ${comidas[3]}, ${comidas[4]}`)
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida
//da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
var novaComida = prompt("Qual sua comida favorita?")
comidas [1] = novaComida
console.log(comidas)

//3-

//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
let listaDeTarefas = []
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
listaDeTarefas[0] = prompt("Diga uma coisa que você precisa realizar")
listaDeTarefas[1] = prompt("Diga outra coisa que você precisa realizar")
listaDeTarefas[2] = prompt("Diga outra coisa que você precisa realizar")
//c) Imprima o array no console
console.log(listaDeTarefas)
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
let tarefaRealizada = prompt("Digite o número da tarefa realizada:")
tarefaRealizada = tarefaRealizada - 1
//e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(tarefaRealizada, 1)
//f) Imprima o array no console
console.log(listaDeTarefas)