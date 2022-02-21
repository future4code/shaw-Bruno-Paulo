// // EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// // EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// // EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Digite a altura"))
  let largura = Number(prompt("Digite a largura"))
  let area = altura * largura
  console.log(area);
}

// // EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual:"))
  let anoNascimento = Number(prompt("Digite o ano que nasceu:"))
  let resultado = anoAtual - anoNascimento
  console.log(resultado)
}

// EXERCÍCIO 03
let a
let b
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  var peso = Number(prompt("Digite seu peso atual em Kg:"))
  var altura = Number(prompt("Digite seu tamanho atual em metros:"))
  let IMC = peso / (altura * altura)
  console.log(IMC)
  return IMC
}
calculaIMC(a, b);
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  var nome = prompt("Digite seu nome:")
  var idade = prompt("Digite sua idade:")
  var email = prompt("Digite seu email:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}
imprimeInformacoesUsuario()
// // EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let array = []
  array[0] = prompt("Digite uma cor")
  array[1] = prompt("Digite uma cor")
  array[2] = prompt("Digite uma cor")
  console.log(array);
}
imprimeTresCoresFavoritas()
// // EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  var string = prompt("Digite um texto")
  console.log(string.toUpperCase())
  return string.toUpperCase()
}
retornaStringEmMaiuscula(a)
// // EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  var custo = Number(prompt("Custo do teatro"))
  var valorIngresso = Number(prompt("Custo do ingresso"))
  let nescessidade = custo / valorIngresso
  console.log(nescessidade);
  return nescessidade

}
// calculaIngressosEspetaculo(a, b)
// // EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  var string1 = prompt("Digite uma palavra")
  var string2 = prompt("Digite uma palavra")
  var length1 = string1.length
  var length2 = string2.lengths
  var boolean = length1 === length2
  console.log(boolean);
  return boolean
}
checaStringsMesmoTamanho(a, b)
// // EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  var array = []
  array[0] = prompt("Digite um nome")
  array[1] = prompt("Digite um nome")
  array[2] = prompt("Digite um nome")
  console.log(array[0]);
  return array[0]
 }
retornaPrimeiroElemento(a)
// // EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  var array = []
  array[0] = prompt("Digite um nome")
  array[1] = prompt("Digite um nome")
  array[2] = prompt("Digite um nome")
  console.log(array[2]);
  return array[2]
}
retornaUltimoElemento(a)

// // // EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  var array = []
  array[0] = prompt("Digite um nome")
  array[1] = prompt("Digite um nome")
  array[2] = prompt("Digite um nome")
  var a = array[0]
  array[0] = array[2]
  array[2] = a
  console.log(array);
  return array
}
trocaPrimeiroEUltimo(a)

// // EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  var string1 = prompt("Digite uma palavra")
  var string2 = prompt("Digite uma palavra")
  let boolean = string1.lower == string2.lower
  console.log(boolean);
  return boolean
}
checaIgualdadeDesconsiderandoCase(a, b)
// // EXERCÍCIO 13
// function checaRenovacaoRG() {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 14
// function checaAnoBissexto(ano) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 15
// function checaValidadeInscricaoLabenu() {
//   // implemente sua lógica aqui

// }