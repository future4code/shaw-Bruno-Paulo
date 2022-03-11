/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Boas vindas ao jogo de Blackjack!")
const cartasUsuarioA = []
const cartasComputadorA = []
let e = 0;
let valorUsuario = 0
let valorComputador = 0
let c = 0
   
      for (let i = 0; (c||i ) <= 20; e++) {
         
         
      
         if(confirm("Quer iniciar uma nova rodada? Reponda OK para sim, e CANCELAR para não") === true) {
            // o que fazer se o usuário clicar "ok"
            const cartasUsuario = comprarCarta(); 
            
            console.log(`Usuário: ${cartasUsuario.texto}`) 
            cartasUsuarioA[e] = cartasUsuario.texto
            valorUsuario = valorUsuario + cartasUsuario.valor
            console.log(`Usuário - cartas: ${cartasUsuarioA} - pontuação: ${valorUsuario}`) 
            
            const cartasComputador = comprarCarta(); 
            
            console.log(`Computador: ${cartasComputador.texto}`) 
            cartasComputadorA[e] = cartasComputador.texto
            valorComputador = valorComputador + cartasComputador.valor
            console.log(`Computador - cartas: ${cartasComputadorA} - pontuação: ${valorComputador}`) 
            c = c + cartasComputador.valor
            i = i + cartasUsuario.valor
            } else {
               // o que fazer se o usuário clicar "cancelar"
               alert("O jogo acabou")
         }
      }
const valores = {
   usuario: valorUsuario,
   computador: valorComputador
}
   if (valores.usuario === 21){
      console.log("O usuário ganhou!");
   }
   if (valores.computador === 21){
         console.log("O computador ganhou!");
   }
   if (valores.usuario === valores.computador){
         console.log("Empate!");
   }  
   if (valores.computador && valores.usuario > 21){
         console.log("Empate!");
   }      
   if ((valores.computador > 21) && (valores.usuario < 21)) {
         console.log("O usuário ganhou!");
   }   
   if (valores.usuario > 21 && valores.computador < 21){
         console.log("O computador ganhou!");
      }
   else{
         console.log("erro")}