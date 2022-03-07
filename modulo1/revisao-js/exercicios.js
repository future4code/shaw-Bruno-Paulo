// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a, b) {
        return a - b;
    });
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) === 0) {
            novoArray.push(array[i]);
        }
    }
    return novoArray;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
    let novoArrayPar = [];
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) === 0) {
            novoArrayPar.push(Math.pow(array[i], 2));
        }
    }
    return novoArrayPar;

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }
    return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   
    let conferirDivisao = 0
    const objeto = {
    maiorNumero : 0,
    maiorDivisivelPorMenor : true,
    diferenca : 0
    }

    if (num1 > num2){
        objeto.maiorNumero = num1
        conferirDivisao = num1 / num2
        objeto.maiorDivisivelPorMenor = Number.isInteger(conferirDivisao)
        objeto.diferenca = num1 - num2
    } else{
        objeto.maiorNumero = num2
        conferirDivisao = num2 / num1
        objeto.maiorDivisivelPorMenor = Number.isInteger(conferirDivisao)
        objeto.diferenca = num2 - num1
    }
    
    return objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   var array = []
   for (let i = 0; array.length < n; i++) {
        if ((i % 2) == 0) {
            array.push(i)
        }
   }
   return array;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
}

    if (ladoA === ladoB && ladoA !== ladoC || ladoA === ladoC && ladoA !== ladoB || ladoB === ladoC && ladoB !== ladoA){
            return "Isósceles"
    }

    if ((ladoA !== ladoB && ladoA !== ladoC) || (ladoB !== ladoA && ladoB !== ladoC)){
        return "Escaleno"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  var novoArray = []
  var max = 0
  var maxs
  var mins
  var min = 0
  for (let i = 0; i < array.length; i++) {
      if (max < array[i]){
          max = array[i]
      }
     }
  min = max
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]){
        min = array[i]
      }
    }
    maxs = max
    mins = min
    
    if (array.length != 2){
        for (let i = 0; i < array.length; i++) {
            if (min < array[i] && array[i] != maxs){
                novoArray[0] = array[i] 
                min = array[i]
            }
        
        }

        for (let i = 0; i < array.length; i++) {
            if (max > array[i] && array[i] != mins){
                novoArray[1] = array[i] 
                max = array[i]
            }
        
        }
    } else {
        novoArray[0] = mins
        novoArray[1] = maxs
    }
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return 'Venha assistir ao filme ' + filme.nome + ', de ' + filme.ano + ', dirigido por '+ filme.diretor + ' e estrelado por ' + filme.atores[0] + ', ' + filme.atores[1]+ ', ' + filme.atores[2] + ', ' + filme.atores[3] + '.'

}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   var newPerson = {...pessoa
    }
    newPerson.nome = "ANÔNIMO"
    return newPerson
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   var podemEntrar = pessoas.filter(function(pessoas) { 
       return pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60; 
    })
    return podemEntrar
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    var naoEntram = pessoas.filter(function(pessoas) { 
        return pessoas.altura < 1.5 || pessoas.idade <= 14 || pessoas.idade >= 60; 
     })
     return naoEntram
}

// [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let soma
    for (let i = 0; i < 3; i++) {
        soma =+ contas[0].compras[i]
    }
    contas[0].compras = []
    contas[0].saldoTotal = [soma]
    soma = 0
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}