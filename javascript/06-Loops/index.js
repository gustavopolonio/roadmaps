// Considere o seguinte array:

const countries = [
  'Albania',
  'Canada',
  'Bolivia',
  'Denmark',
  // 'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
  'Brasil'
]

// Encontre e printe (com console.log) o país que tem o nome mais longo. 
// Se a resposta for 2 ou mais países, printe o nome de todos.

// 1 - Criar uma variável (answer) const answer = ['']
// 1.5 - Criar for (usando length) que vai rodar a quantidade de países do array countries 
// 2 - Dentro do for: Pegar um país de cada vez
// 3 - Dentro do for: Pegar o comprimento desse país (length)
// 4 - Dentro do for: Comparar o comprimento do pais atual com o comprimento do pais 
// da posição 0 da resposta answer
//   - Se o atual é maior: answer = [país atual]
//   - Se os dois são iguais: adicionar o pais atual na anwswer com push
//   - Senão (o atual é menor): a resposta answer continua igual

let answer = []
let count = 0

for (let i = 0; i < countries.length; i++) {
  const country = countries[i]
  const len = country.length

  if (len > count) {
    answer = [country]
    count = len
  } else if (len === count) {
    answer.push(country)
  }
}

const formatted = answer.join(', ')

console.log(formatted)