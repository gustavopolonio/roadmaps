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


- Criar um array vazio
- Criar um for, que vai pegar um país de cada vez. Esse for tem que ser criado usando o length.
- Dentro do for: Para cada iteração do for, pegar um país (sempre pegar o país da mesma posição do index). Calcular o comprimento desse país (usando length)
- Dentro do for: Adicionar o comprimento do país no array inicial criado (método push)
- A resposta final é o array inicial criado


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


- Criar uma variável (que será a resposta final, com o nome do país mais longo). Ex: respotaFinal = ''
- Criar uma variável para armazenar o comprimento do país que estamos vendo atualmente. Ex: countrySize = 0
- Criar um for, que vai pegar um país de cada vez. Esse for tem que ser criado usando o length.
- Dentro do for: Para cada iteração do for, pegar um país (sempre pegar o país da mesma posição do index). 
- Dentro do for: Calcular o comprimento do país pegado (length)
- Dentro do for: Verificar se o comprimento do país atual é maior do que a variavel countrySize
  - Se for maior: respotaFinal = nome do país atual
  - Se for igual: respotaFinal = nome do país atual e o valor da variavel respotaFinal
  - Senão: não fazer nada
- Dentro do for: armazenar o comprimento do país com o comprimento mais longo até o momento, na variavel countrySize
- A resposta final é a variavel respotaFinal