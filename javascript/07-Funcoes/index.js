function calculateAverage(number) {
  if (number > 10) {
    return 'Número maior do que 10'  // Tudo o que vem depois não será executado
  }

  console.log('Passou aqui')
  return 'Número menor ou igual a 10' // Tudo o que vem depois não será executado
}

const answer = calculateAverage(8)
console.log(answer)  // Número maior do que 10