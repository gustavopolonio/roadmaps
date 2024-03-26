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


## Modificando os items do array
O array é mutável, ou seja, podemos alterar os valores dos items do array:

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






<!-- Métodos manipular array: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/05_Day_Arrays/05_day_arrays.md#methods-to-manipulate-array -->