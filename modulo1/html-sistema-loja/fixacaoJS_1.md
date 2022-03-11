```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  let bonus = 100
  let bonusPorc
  let total
  bonusPorc = valorTotalVendas * 0.05
  total = (bonus * qtdeCarrosVendidos) + bonusPorc + 2000
  return total
}
```