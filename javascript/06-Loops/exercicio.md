1)
Crie um código com o for loop que printe do número 0 ao 10 (usando console.log)


2)
Crie um código com o while que printe do número 0 ao 10 (usando console.log)


3)
Crie um código com o for loop que printe do número 10 ao 0 (usando console.log)


4)
Crie um código com o while que printe do número 10 ao 0 (usando console.log)


5) Usando for loop, printe apenas os números pares que estão entre o número 0 ao 20


6) Usando for loop, encontre a soma de todos os números entre o 0 e o 100 (resultado deve ser 5050)


7) Crie um programa que gere um array de 5 números aleatórios. Ex: [2, 5, 1, 0, -2]. Dica: use o Math do JS
```js

  // 1 - Criar um array vazio
  // 2 - Criar um for que vai rodar 5x
  // 3 - Dentro do for: gerar um número aleatório
  // 4 - Dentro do for: colocar o numero aleatorio no array inicial
  // A resposta final será o array inicial criado

  const arr = []
  console.log(arr)

  for (let i = 0; i < 5; i++) {
    const num = Math.floor(Math.random() * 1000)
    arr.push(num)
  }

  console.log(arr)

```


8)
Considere o seguinte array:

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

Crie um array em que, cada posição dele será o comprimento do nome de cada país do array acima. A resposta deve ser o array: [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

```js

  // 1 - Criar um array vazio (answer)
  // 1.5 - Criar um for que vai rodar o tanto de países que o array countries tem (length)
  // 2 - Dentro do for: Pegar o país, e ver o comprimento dele (length)
  // 3 - Dentro do for: Colocar esse comprimento no array answer (push)
  // A respota final é o array answer

  const answer = []

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i]
    const len = country.length
    answer.push(len)
  }

  console.log(answer)

```


9) Considere o seguinte array:

const countries = [
  'Albania',
  'Canada',
  'Bolivia',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

Encontre e printe (com console.log) o país que tem o nome mais longo. Se a resposta for 2 ou mais países, printe o nome de todos.


```js

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

```