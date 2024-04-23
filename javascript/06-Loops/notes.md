# Loops

A maioria dos problemas que resolvemos na programação são cheios de repetições, ou seja, executamos o mesmo código diversas vezes.

> Imagine que eu peça para você printar na tela do número `0 ao 100`, usando console.log(). Você teria que escrever 100x `console.log(number)`, e isso daria um trabalhão desnecessário!

É por isso que todas as linguagens de programação têm o conceito de `loop` (laço de repetição), para evitar repetir o mesmo código várias vezes.

No JS, existem algumas maneiras de criar um loop. As principais são:

1) for loop: o `for` vai se repetir até a condição aplicada ser `false`.

```js

  // Estrutura do for loop
  // for (inicialização da variável; condição; incremento/decremento da variável) {}

  for (let i = 0; i <= 100; i = i + 1) {
    // Código que será repetido fica aqui dentro
  }

  // É muito comum usarmos a letra i, pois deriva de iteraction

```

Printando 100x console.log:
```js

  for (let i = 0; i <= 100; i++) {
    console.log(i)
  }

```

Exemplo com decremento da variável:
```js

  for (let i = 5; i >= 0; i--) {
    console.log(i)
  }

```

Exemplo colocando todas as palavras de um array em letra maiúscula:
```js

  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
  const newArr = []
  for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
  }

  console.log(newArr) // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

  // Perceba que podemos usar as varioáveis criadas fora do loop

```

Exemplo somando os números de um array numérico:
```js

  const numbers = [1, 2, 3, 4, 5]
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
  }

  console.log(sum)  // 15

```


2) while loop: while (enquanto) se repete enquanto a condição for `true`. No momento em que a condição passa a ser `false` o loop se encerra. Importante: a verificação da condição será feita antes do código do loop ser executado:

```js

  // Estrutura do while loop
  // while (condição) {}

```

Printando 100x console.log:
```js

  let i = 0
  while (i <= 100) {
    console.log(i)
    i++
  }

```

Exemplo com decremento da variável:
```js

  let i = 5
  while (i >= 0) {
    console.log(i)
    i--
  }

```

> Importante: usando while sempre garanta que a condição ficará falsa em algum momento, senão o loop será infinito:

Exemplo de loop infinito:
```js

  let i = 5
  while (i >= 0) {
    console.log(i)
    i++
  }

```

## Como parar um loop sem ter que esperar ele chegar até o fim?
Podemos usar o `break` (aquele mesmo que usamos no `switch`).

Printando do número 0 ao 100, mas saindo do loop quando encontrar o número 30:
```js

  for (let i = 0; i <= 100; i++) {
    console.log(i)

    if (i === 30) {
      break
    }
  }

```

Break no while:
```js

  let i = 5
  while (i >= 0) {
    console.log(i)

    if (i === 3) {
      break
    }

    i--
  }

```


## Como ir para a próxima iteração do loop imediatamente?
Usando o `continue`

Printando do número 0 ao 10, sem printar o 5:
```js

  for (let i = 0; i <= 10; i++) {  
    if (i === 5) {
      continue  // O código vai imediatamente para a próxima iteração
    }

    console.log(i)
  }

```


3) for of: usando para iterar sobre arrays. É uma maneira boa de iterar um array quando não precisamos trabalhar com os índices do array.

```js

  for (const element of arr) {
    // código fica aqui
  }

```

Printando todos os elementos de um array:
```js

  const numbers = [1, 2, 3, 4, 5]

  for (const num of numbers) {
    console.log(num)
  }

```

Exemplo printando todas as palavras de um array em letra maiúscula:
```js

  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
  for (const country of countries) {
    console.log(country.toUpperCase())
  }

```