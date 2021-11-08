// Escreva um algoritmo que leia as idades de 2 homens e 2 mulheres (considere
// que as idades dos homens serão sempre diferentes, bem como as das mulheres).
// Calcule e escreva a soma das idades do homem mais velho com a mulher mais
// nova, e o produto das idades do homem mais novo com a mulher mais velha.
function somaProdutoIdades() {
  var idadeHomem = document.getElementById("idadeHomem").value;
  var idadeHomem2 = document.getElementById("idadeHomem2").value;
  var idadeMulher = document.getElementById("idadeMulher").value;
  var idadeMulher2 = document.getElementById("idadeMulher2").value;

  if (idadeHomem < idadeHomem2) {
    var menorIdadeHomem = idadeHomem;
    var maiorIdadeHomem = idadeHomem2;
  } else {
    var menorIdadeHomem = idadeHomem2;
    var maiorIdadeHomem = idadeHomem;
  }
  if (idadeMulher < idadeMulher2) {
    var menorIdadeMulher = idadeMulher;
    var maiorIdadeMulher = idadeMulher2;
  } else {
    var menorIdadeMulher = idadeMulher2;
    var maiorIdadeMulher = idadeMulher;
  }

  document.getElementById(
    "q9"
  ).innerHTML = `A soma das idades do homem mais velho com a mulher mais jovem é ${
    maiorIdadeHomem + menorIdadeMulher
  } e o produto da idade do homem mais novo com a mulher velha é ${
    menorIdadeHomem * maiorIdadeMulher
  }`;
}

// Escrever um algoritmo que leia valores inteiros em duas variáveis distintas e faça
// o seguinte:
// • Se o resto da divisão da primeira pela segunda for 1 mostre a soma dessas
// variáveis mais o resto da divisão;
// • Se o resto for 2 escreva se o primeiro e o segundo valor são pares ou ímpares;
// • Se o resto for igual a 3 multiplique a soma dos valores lidos pelo primeiro;
// • Se o resto for igual a 4 divida a soma dos números lidos pelo segund0, se este
// for diferente de zero. Em qualquer outra situação mostre o quadrado dos
// números lidos.
function restoDivisao() {
  var valor = document.getElementById("valor").value;
  var valor2 = document.getElementById("valor2").value;

  var restoDivisao = valor % valor2;

  var resposta;
  if (restoDivisao == 1) {
    resposta = `A soma do primeiro valor com o segundo, mais o resto da divisão do primeiro pelo segundo é ${
      Number(valor) + Number(valor2) + Number(restoDivisao)
    }`;
  } else if (restoDivisao == 2) {
    resposta = `O primeiro valor é ${
      valor % 2 == 0 ? "par" : "ímpar"
    } e o segundo é ${valor % 2 == 0 ? "par" : "ímpar"}`;
  } else if (restoDivisao == 3) {
    resposta = `A soma dos valores multiplicados pelo primeiro valor, resulta em: ${
      (Number(valor) + Number(valor2)) * Number(valor)
    }`;
  } else {
    var numeroNulo = valor2 == 0 ? true : false;
    if (numeroNulo) {
      resposta = `O quadrado do primeiro valor é ${
        valor ** 2
      }, e do segundo é ${valor2 ** 2}`;
    } else {
      resposta = `A soma dos valores multiplicados pelo segundo é igual a ${
        (Number(valor) + Number(valor2)) * Number(valor2)
      }`;
    }
  }
  document.getElementById("q8").innerHTML = resposta;
}

// Escreva um programa em JavaScript que receba o nome de dois usuários, inverta-
// os entre variáveis, e mostre-os na tela.
function reverteNomes() {
  var nome1 = document.getElementById("nome1").value;
  var nome2 = document.getElementById("nome2").value;

  var nome1inverso = nome1.split("");
  nome1inverso = nome1inverso.reverse();

  var nome2inverso = nome2.split("");
  nome2inverso = nome2inverso.reverse();

  document.getElementById(
    "q7"
  ).innerHTML = `Primeiro nome invertido: ${nome1inverso.join(
    ""
  )}. Segundo nome invertido: ${nome2inverso.join("")}`;
}

// Osvlédson desenvolveu um website que recebe centenas de visitas diariamente.
// Aproveitando seu sucesso, Osvlédson inscreveu o site nos anúncios do Google. O
// Google vai pagar R$ 0,02 por cada clique nos anúncios do site. Escreva um
// programa em JavaScript que ajude Osvlédson a saber quanto ele pode lucrar. O
// programa deve solicitar o valor que Osvlédson deseja ganhar e deve informar
// quantos cliques são necessários para que ele receba o valor desejado.
function adSense() {
  var lucro = document.getElementById("lucro").value;

  document.getElementById("q5").innerHTML = `Serão necessários ${Math.ceil(
    lucro / 0.02
  )} cliques em anúncios`;
}