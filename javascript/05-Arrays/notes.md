# Arrays

Até agora vimos que podemos armazenar um valor de cada vez numa variável. Mas e se quisermos armazenar vários valores num único lugar? Podemos usar um array.

Um array é uma coleção de diferentes tipos de dados ordenados (cada valor do array possui um índice) que podem ser modificados, alterados ou excluídos.

Para criar um array vazio podemos:

```js

  const newArray = []  // Um array é representado pelo par de colchetes

```

Para criar um array com dados:

```js

  const fruits = ['Maçã', 'Banana', 'Mamão', 'Abacate']

```
> Esse array tem 4 posições, ou seja, o tamanho dele é 4. Podemos calcular isso usando o `.length`. Além disso, cada posição no array tem um índice (sempre começando do índice 0). Podemos acessar uma posição usando `fruits[0]`

```js

  const fruits = ['Maçã', 'Banana', 'Mamão', 'Abacate']
  console.log(fruits.length)  // 4
  console.log(fruits[0]) // Maçã
  console.log(fruits[fruits.length - 1])  // Abacate

  // ['Maçã', 'Banana', 'Mamão', 'Abacate']
  //    0         1        2         3

```
> É semelhante ao que fizemos com strings


Um array pode ter diferentes tipos de dados:
```js

  const myArray = ['Gustavo', 19, 10.2, true, { city: 'Santos' }]

```


## Método split
Lembra que vimos o método `split` para dividir uma string num determinado ponto? Vimos que o retorno desse método é um array:

```js

  const text = 'Javascript é melhor do que Python'
  console.log(text.split(' '))  // [ 'Javascript', 'é', 'melhor', 'do', 'que', 'Python' ]

```


## Modificando os itens do array
O array é mutável, ou seja, podemos alterar os valores dos itens do array:

```js

  const cities = [
    'São Carlos',
    'Santos',
    'Florianópolis',
    'Bauru'
  ]
  console.log(cities)  // ['São Carlos', 'Santos', 'Florianópolis', 'Bauru']

  cities[0] = 'Rio de Janeiro'  // Modifiquei a cidade da posição 0
  console.log(cities)  // ['Rio de Janeiro', 'Santos', 'Florianópolis', 'Bauru']

  cities[4] = 'São Paulo'  // Modifiquei (criei) a cidade da posição 4
  console.log(cities)  // ['Rio de Janeiro', 'Santos', 'Florianópolis', 'Bauru', 'São Paulo']

  cities[cities.length] = 'Nova Cidade'  // Adicionando uma cidade na últmia posição do array
  console.log(cities)  // ['Rio de Janeiro', 'Santos', 'Florianópolis', 'Bauru', 'São Paulo', 'Nova Cidade']

```


## Métodos para manipular arrays

1) fill: Muda os elementos de um array considerando os índices informados
```js

  const arr = [1, 2, 3, 4]
  arr.fill(0)
  console.log(arr)  // [ 0, 0, 0, 0 ]

  const arr = [1, 2, 3, 4]
  arr.fill(0, 2)  // Muda todos a partir da 2a posição
  console.log(arr)  // [ 1, 2, 0, 0 ]

  const arr = [1, 2, 3, 4]
  arr.fill(0, 2, 3)  // Muda todos a partir da 2a posição (inclusivo) até a 3a (exclusivo)
  console.log(arr)  // [ 1, 2, 0, 4 ]

```

2) concat: concatena (junta) dois arrays em um só
```js

  const names1 = ['Gustavo', 'Ana', 'Caio']
  const names2 = ['Jairo', 'Ale']
  const concated = names1.concat(names2)
  console.log(concated)  // [ 'Gustavo', 'Ana', 'Caio', 'Jairo', 'Ale' ]

```

3) indexOf: retorna o 1o índice do elemento procurado. Se o array não tiver esse elemento, retorna -1
```js

  const animals = ['Cachorro', 'Gato', 'Cachorro']

  const hasDog = animals.indexOf('Cachorro')
  console.log(hasDog)  // 0

  const hasBird = animals.indexOf('Pássaro')
  console.log(hasBird)  // -1

```

4) lastIndexOf: retorna o último índice do elemento procurado. Se o array não tiver esse elemento, retorna -1
```js

  const animals = ['Cachorro', 'Gato', 'Cachorro']

  const hasDog = animals.lastIndexOf('Cachorro')
  console.log(hasDog)  // 2

  const hasBird = animals.lastIndexOf('Pássaro')
  console.log(hasBird)  // -1

```

5) includes: checa se um item existe no array. Se existir, retorna true. Senão, retorna false
```js

  const arr = [10, 20, 30, 40]

  const hasNumberTen = arr.includes(10)
  console.log(hasNumberTen)  // true

  const hasNumberOne = arr.includes(1)
  console.log(hasNumberOne)  // false

```

6) join: junta os elementos do array, retornando uma string. Por padrão, os elementos serão separados por vírgulas. Podemos passar os caracteres que quisermos para separar os elementos
```js

  const webTechs = ['HTML', 'CSS', 'JavaScript', 'React']

  const joinWithComma = webTechs.join()
  console.log(joinWithComma)  // HTML,CSS,JavaScript,React

  const joinWithSpace = webTechs.join(' ')
  console.log(joinWithSpace)  // HTML CSS JavaScript React

```

7) slice: usado para gerar um novo array com alguns itens do array principal. Informamos um índice incial (incluso) e um índice final (excluso)
```js

  const webTechs = ['HTML', 'CSS', 'JavaScript', 'React']

  const slicedArray = webTechs.slice(1, 3)
  console.log(slicedArray)  // [ 'CSS', 'JavaScript' ]

```

8) splice: troca os elementos de um array, removendo, substituindo ou adicionando elementos. Recebe 3 parâmetros: o índice inicial para começar a alterar o array; um inteiro indicando o número de elementos que serão excluídos a partir do índice inicial; os elementos que serão adicionado no array, a partir do índice inicial
```js

  const months = ['Jan', 'March', 'April', 'June']

  months.splice(1, 0, 'Feb')  // Inserindo 'Feb' no índice 1, sem remover nenhum elemento'
  console.log(months)  // [ 'Jan', 'Feb', 'March', 'April', 'June' ]

  months.splice(4, 1, 'May')  // Inserindo 'May' no índice 4, removendo 1 elemento
  console.log(months)  // [ 'Jan', 'Feb', 'March', 'April', 'May' ]

  months.splice(2)  // Removendo todos os elementos a partir do índice 2
  console.log(months)  // [ 'Jan', 'Feb' ]

```

9) push: adiciona iten(s) no final do array
```js

  const numbers = [0, 1, 2, 3, 4]

  numbers.push(5)
  console.log(numbers)  // [ 0, 1, 2, 3, 4, 5 ]

```

10) pop: remove o último elemento do array
```js

  const numbers = [0, 1, 2, 3, 4]

  numbers.pop()
  console.log(numbers)  // [ 0, 1, 2, 3 ]

```

11) reverse: reverte a ordem dos elementos do array
```js

  const numbers = [0, 1, 2, 3, 4]

  numbers.reverse()
  console.log(numbers)  // [ 4, 3, 2, 1, 0 ]

```

12) sort: ordena os elementos do array em ordem alfabética
```js

  const webTechs = ['HTML', 'CSS', 'JavaScript', 'React']

  webTechs.sort()
  console.log(webTechs)  // [ 'CSS', 'HTML', 'JavaScript', 'React' ]

```