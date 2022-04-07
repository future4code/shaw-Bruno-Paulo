```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let vezesAparecidas = 0
  for (let i = 0; i < arrayDeNumeros.length; i++) {
   if(arrayDeNumeros[i] == numeroEscolhido){
     vezesAparecidas++
   }
  }
  
  if(vezesAparecidas >= 1){
    return `O número ${numeroEscolhido} aparece ${vezesAparecidas}x`
  } else{
    return "Número não encontrado"
  }
}
```