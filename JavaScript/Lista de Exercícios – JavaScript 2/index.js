// Faça um programa em JavaScript que, dada a idade do usuário em anos, calcule
// quantas horas ele viveu, aproximadamente.

function idadeHoras() {
  var idade = document.getElementById('idade').value
  document.getElementById('q8').innerHTML = `Sua idade é de ${idade * 365 * 24} horas`
}

// Escreva um programa em JavaScript que receba o nome de dois usuários, inverta-
// os entre variáveis, e mostre-os na tela.
function reverteNomes() {
  var nome1 = document.getElementById('nome1').value
  var nome2 = document.getElementById('nome2').value

  var nome1inverso = nome1.split('')
  nome1inverso = nome1inverso.reverse()

  var nome2inverso = nome2.split('')
  nome2inverso = nome2inverso.reverse()

  document.getElementById('q7').innerHTML = `Primeiro nome invertido: ${nome1inverso.join('')}. Segundo nome invertido: ${nome2inverso.join('')}`
}

// Osvlédson desenvolveu um website que recebe centenas de visitas diariamente.
// Aproveitando seu sucesso, Osvlédson inscreveu o site nos anúncios do Google. O
// Google vai pagar R$ 0,02 por cada clique nos anúncios do site. Escreva um
// programa em JavaScript que ajude Osvlédson a saber quanto ele pode lucrar. O
// programa deve solicitar o valor que Osvlédson deseja ganhar e deve informar
// quantos cliques são necessários para que ele receba o valor desejado.
function adSense() {
  var lucro = document.getElementById('lucro').value

  document.getElementById('q5').innerHTML = `Serão necessários ${Math.ceil(lucro / 0.02)} cliques em anúncios`
}