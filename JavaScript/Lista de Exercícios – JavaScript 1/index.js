// 7. Na festa de São João do IFC, os alunos do terceiro ano irão vender pipoca para
// arrecadar dinheiro para pagar sua formatura. Eles gastaram R$ 150,00 comprando
// os itens suficientes para produzir 250 saquinhos de pipoca. Escreva um algoritmo
// que calcule o valor pelo qual deve ser vendido cada saquinho de pipoca para que
// o lucro final da turma seja de R$ 350,00.

var valorPorVenda = (150 + 350) / 250
document.getElementById('q7').append(`O valor a ser vendido é de: ${valorPorVenda}`)

// Um casal de namorados aluga dois filmes: um romântico e um de investigação. O
// filme romântico tem 90 minutos. Durante esse filme, o garoto dorme a maioria do
// tempo, e a garota fica acordada o tempo inteiro. O filme de investigação tem 110
// minutos. Durante esse filme, a garota dorme na maioria do tempo, e o garoto fica
// acordado o tempo inteiro. Escreva um algoritmo que solicite ao usuário o tempo
// de sono de cada pessoa, depois calcule e mostre na tela quanto tempo cada um
// ficou acordado assistindo os filmes.

function calculaSono() {
  var inputSonoGarota = document.getElementById('sonoGarota').value
  var inputSonoGaroto = document.getElementById('sonoGaroto').value
  const filmeRomantico = 90
  const filmeInvestigacao = 110

  document.getElementById('q5').innerHTML = `O garoto dormiu: ${filmeRomantico - inputSonoGaroto} minutos. A garota dormiu ${filmeInvestigacao - inputSonoGarota} minutos`

}

// O mesmo aluno da questão 3 vai perder um ponto na média final da disciplina de
// algoritmos para cada 100 tweets que escrever. Escreva um algoritmo que solicite
// ao usuário a nota inicial do aluno, o número de tweets do aluno no ano, calcule a
// sua nota final e mostre na tela.

function calculaNota() {
  var notaInicial = document.getElementById('notaIni').value
  var numeroTweets = document.getElementById('tweets').value

  document.getElementById('q3').innerHTML = `A nota final é: ${notaInicial - (Math.floor(numeroTweets / 100))}`

}