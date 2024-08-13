const medidasRetangulos = [[1, 2], [3, 7], [2, 5]]

function calculaArea(base, altura) {
  return base * altura
}

function calculaPerimetro(base, altura) {
  return (base * 2) + (altura * 2)
}

function calculo(medidas, logica) {
  const response = []

  for (let i = 0; i < medidas.length; i++) {
    response.push(logica(medidas[i][0], medidas[i][1]))
  }

  return response
}

calculo(medidasRetangulos, calculaArea)

// console.log(calculo(medidasRetangulos, calculaArea))
// console.log(calculo(medidasRetangulos, calculaPerimetro))