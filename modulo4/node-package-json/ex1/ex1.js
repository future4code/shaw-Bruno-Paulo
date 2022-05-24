// 1- 
// a) você cria uma variavel e quando chamar o arquivo no node, declara ela na process.argv[2]

const name = process.argv[2]
const age = process.argv[3]

console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${Number(age) + 7}`)