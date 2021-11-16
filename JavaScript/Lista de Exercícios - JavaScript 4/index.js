// 11. Faça um algoritmo que calcule e escreva a soma da seguinte série de 100 termos:
function serieCentena() {
  var n = 100;
  var soma = 0;
  while (n > 0) {
    soma += n;
    n--;
  }
  document.getElementById(
    "q11"
  ).innerHTML = `A somatória dos termos de 0 a 100 é ${soma}`;
}

// 12. Faça um algoritmo que calcule e escreva a soma da seguinte série de 100 termos:
function serieInversaCentena() {
  var n = 100;
  var soma = 0;
  while (n > 0) {
    soma += 1 / n;
    n--;
  }
  document.getElementById(
    "q12"
  ).innerHTML = `A somatória de 1 sobre os termos variando de 0 a 100 é ${soma}`;
}

// 15. Construir um algoritmo que calcule o fatorial de um número N.
function fatorial() {
  var x = document.getElementById("x").value;
  var resultado = x;
  while (x > 1) {
    resultado *= x - 1;
    x--;
  }
  document.getElementById("q15").innerHTML = `O fatorial de ${
    document.getElementById("x").value
  } é ${resultado}`;
}


// 16. Fazer um algoritmo que calcule e escreva a soma dos 20 primeiros termos da série:
function numeradorFatorialCrescente() {
  var numerador = 99;
  var resultado = 100;
  var denominador = 1;
  while (numerador > 80) {
    resultado += numerador / fatorial2(denominador)
    numerador--;
    denominador++;
  }
  document.getElementById('q16').innerHTML = `O resultado é ${resultado}`
}

function fatorial2(x) {
  var resultado = x;
  while (x > 1) {
    resultado *= x - 1;
    x--;
  }
  return resultado
}