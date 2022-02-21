// Exercícios de interpretação de código
//1

//a) Matheus Nachtergaele
//b) Virginia Cavendish
//c) Object
// canal: "Globo"
// horario: "14h"

//2

//a){nome: 'Juca', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Juca"
// raca: "SRD"
// [[Prototype]]: Object
// index.js:22 
// {nome: 'Juba', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Juba"
// raca: "SRD"
// [[Prototype]]: Object
// index.js:23 
// {nome: 'Jubo', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Jubo"
// raca: "SRD"
//b) Ele faz o novo objeto espelhar as antigas informações do outro objeto

//3

//a)false
//undefined
//b) o segundo valor a ser impresso foi registrado como undefined porque não existia a propriedade declarada

// Exercícios de escrita de código

//1

//a)
const pessoa = {
    nome: 'Bruno', 
    apelidos: ["Bru", "Bubu", "Brunovisk"]
 }

fpessoa(pessoa)

//b)

const novaPessoa = {
    ...pessoa.nome ,
    apelidos: ["Siqueira", "Elder", "Siqueirão"]
}

function fpessoa(a) {
    console.log(`Eu sou ${a.nome}, mas pode me chamar de: ${a.apelidos[0]}, ${a.apelidos[1]} ou ${a.apelidos[2]}`);
}


fpessoa(novaPessoa)

//2

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const pessoase = {
	nome: "Bruno", 
    idade: "25", 
	profissao: "Teacher"
}

// b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:

function novaFuncao(a) {
    const resultado = [] 
    resultado[0] = a.nome ,
    resultado[1] = a.nome.length ,
    resultado[2] = a.idade ,
    resultado[3] = a.profissao ,
    resultado[4] = a.profissao.length
    console.log(resultado);
    return resultado;
}

novaFuncao(pessoase);
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

//3

// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
var carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: 
// nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
const banana = {
    nome:"banana",
    disponibilidade: true
}
const pera = {
    nome:"pera",
    disponibilidade: true
}
const maca = {
    nome:"maçã",
    disponibilidade: true
}
// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`.
// Invoque essa função passando os três objetos criados. 
function frutasf(a,b,c) {
    carrinho.push(a)
    carrinho.push(b)
    carrinho.push(c)
}
frutasf(banana,pera,maca)
// - 💡  Dica
    
//     <aside>
//     💡 Aqui você deve usar o método **push()**
    
//     </aside>
    

// d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**
console.log(carrinho);