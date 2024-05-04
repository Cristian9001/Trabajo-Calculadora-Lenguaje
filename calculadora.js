const pantalla = document.querySelector('.screen');
const botones = document.querySelectorAll('.btn,.operator');

let numeroActual = '';
let numeroAnterior = '';
let operador = '';

botones.forEach((boton) => {
  boton.addEventListener('click', (e) => {
    const valor = e.target.value;

    if (!isNaN(valor) || valor === '.') {
      numeroActual += valor;
      pantalla.value = numeroActual;
    }

    else {
      switch (valor) {
        case '+':
        case '-':
        case '*':
        case '/':
          if (numeroAnterior !== '') {
            numeroActual = calcular(numeroAnterior, numeroActual, operador);
            pantalla.value = numeroActual;
          }
          numeroAnterior = numeroActual;
          numeroActual = '';
          operador = valor;
          break;
        case '=':
          if (numeroAnterior !== '' && numeroActual !== '') {
            numeroActual = calcular(numeroAnterior, numeroActual, operador);
            pantalla.value = numeroActual;
            numeroAnterior = '';
            operador = '';
          }
          break;
        case 'C':
          numeroActual = '';
          numeroAnterior = '';
          operador = '';
          pantalla.value = '';
          break;
      }
    }
  });
});

function calcular(num1, num2, operador) {
  let resultado = 0;

  switch (operador) {
    case '+':
      resultado = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      resultado = parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      resultado = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      resultado = parseFloat(num1) / parseFloat(num2);
      break;
  }

  return resultado.toString();
}