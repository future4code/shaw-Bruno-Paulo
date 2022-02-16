//Exercícios de interpretação de código
// 1- a-false, b -false, c-true, d- boolean
// 2- O que precisava ser alterado era colocar o Number() para poder converter a String em Number, e assim fazer a conta
//Exercícios de escrita de código
//


let primeiroNumero = (Number)(prompt("Digite um numero!"))
let segundoNumero = (Number)(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

//a) Pergunte a idade do usuário
let idadeUsuario = (Number)(prompt("Qual é a sua idade?"))
//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
let idadeAmigo = (Number)(prompt("Qual é a idade do seu melhor amigo ou da sua melhor amiga?"))
//c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
let respostaIdade = idadeUsuario > idadeAmigo;
console.log ("Sua idade é maior do que a do seu melhor amigo?", respostaIdade)
//d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
let diferencaIdade = idadeUsuario - idadeAmigo
console.log ("A diferença de idade é de ", diferencaIdade)

//a) Peça ao usuário que insira um número **par**
let numeroPar = (Number)(prompt("Insira um número par"))
//b) Imprima na console **o resto da divisão** desse número por 2.
console.log (numeroPar % 2)
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Quando o número é par ele sempre dá 0 de resultado
//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// Quando é impar ele foge desse padrão

//3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
let idadeAnos = (Number)(prompt("Qual sua idade?"))
    //a) A idade do usuário em meses
    console.log (idadeAnos * 12)
   // b) A idade do usuário em dias
    console.log (idadeAnos * 365)
 //   c) A idade do usuário em horas
    console.log (numeroPar * 8760)

    //4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
    let numeroFirst = (Number)(prompt("Digite o primeiro numero"))
    let nuemeroSecound = (Number)(prompt("Digite o segundo numero"))
//O primeiro numero é maior que segundo? true
 let rFirst = numeroFirst > nuemeroSecound
console.log ("O primeiro numero é maior que segundo? ",rFirst)
//O primeiro numero é igual ao segundo? false
let rTwo = numeroFirst === nuemeroSecound
console.log ("O primeiro numero é igual ao segundo? ",rTwo)
//O primeiro numero é divisível pelo segundo? true
let rThree = (numeroFirst % nuemeroSecound) === 0
console.log ("O primeiro numero é divisível pelo segundo? ",rThree)
//O segundo numero é divisível pelo primeiro? true
let rFour = (nuemeroSecound % numeroFirst) === 0
console.log ("O primeiro numero é maior que segundo? ",rFour)
//obs: O true ou false vai depender dos números inseridos e do resultado das operações.