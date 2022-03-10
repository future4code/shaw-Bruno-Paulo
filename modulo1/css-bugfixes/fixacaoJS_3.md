```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  var nota = (ex + p1 + p2) / 3
  var notaFinal
  if (nota >= 9){
     notaFinal = 'A'
    return notaFinal
  }
  else if (nota < 9 && nota >= 7.5){
    notaFinal = 'B'
    return notaFinal
  }
  else if (nota < 7.5 && nota >= 6){
    notaFinal = 'C'
    return notaFinal
  }
  else{
    notaFinal = 'D'
    return notaFinal
  }
}
```