# Condicionais

> Conseguimos criar condições no nosso código, igual fazemos na vida real. Na nossa vida todas as ações que tomamos são baseadas em condições. Por exemplo: quando você vai sair de casa, SE estiver chovendo você pega o guarda-chuva, SENÃO você não pega. A ideia é a mesma para nossos códigos.

> Implementamos condicionais no JavaScript usando `if` e `else`. If: SE; else: SENÃO

```js

  const condition = 5 > 0

  if (condition) {  // SE a condição for verdadeira (TRUE) o código entra no if, SENÃO (false) não entra
    console.log('É positivo!')
  }

```

> Obs: Até agora sempre vimos que o código é executado de cima para baixo, da esquerda para a direita. No entanto, podemos mudar esse fluxo com o if (por exemplo, podemos não executar o que está dentro do if)

> Obs2: Lembrando o que são considerados valores true e false no JS:
<!-- Truthy values -->
* Todos os números (positivos e negativos) são true, exceto o zero
* Todas as strings são true, exceto as strings vazias ('')


<!-- Exemplo com else -->
```js

  const condition = -2 > 0

  if (condition) {
    console.log('É positivo!')
  } else {
    console.log('É negativo!')
  }

```

<!-- Mas e se eu quiser fazer uma terceira checagem, para ver se o número é igual a zero? -->
```js

  const num = 0

  if (num > 0) {
    console.log('É positivo!')
  } else if (num === 0) {
    console.log('É zero!')
  } else {
    console.log('É negativo!')
  }

```

<!-- Posso adicionar quantos else if eu quiser! -->
```js

  const num = 0

  if (num === 0) {
    console.log('É positivo!')
  } else if (num === 1) {
    console.log('É um!')
  } else if (num === 2) {
    console.log('É dois!')
  } else {
    console.log('Desconhecido')
  }

```

<!-- Exemplo prático de uso do if/else -->
```js

  const num1 = 3
  const num2 = 4
  const operator = '*'

  if (operator === '+') {
    console.log(num1 + num2)
  } else if (operator === '-') {
    console.log(num1 - num2)
  } else if (operator === '/') {
    console.log(num1 / num2)
  } else if (operator === '*') {
    console.log(num1 * num2)
  }

```
> Obs: Veja que não é obrigatório usar else.


## Operadores de comparação

> Como já vimos, no JavaScript, um sinal de igual significa atribuição (Colocar valor numa variável)
```js

  let name = 'Gustavo'  // Declarando e aribuindo valor
  name = 'Paulo'  // Apenas aribuindo valor

```

> No JS temos os operadores de comparação `==` e `===`
O `==` apenas checa se dois valores possuem o mesmo valor. Já o `===` checa se dois valores possuem o mesmo valor e são do mesmo tipo de dado. Usamos mais esse último tipo de comparação

```js

  const numString = '1'
  const numInt = 1

  console.log(numString == numInt)  // true
  console.log(numString === numInt)  // false

```

> Também temos outros operadores de comparação:
-> `>`: maior que
-> `>=`: maior ou igual que
-> `<`: menor que
-> `<=`: menor ou igual que
-> `!=`: diferente (considerando apenas o valor)
-> `!==`: diferente (considerando o valor e o tipo de dado)

```js

  console.log(3 > 2)  // true
  console.log(3 >= 2)  // true
  console.log(3 < 2)  // false
  console.log(2 < 3)  // true
  console.log(2 <= 3)  // true
  console.log(3 === 2)  // false
  console.log(3 !== 2)  // true  
  console.log(3 !== 3)  // false
  console.log(0 == false)  // true
  console.log(0 === false)  // false

```

## Operadores lógicos
> Usamos quando queremos montar uma condição mais sofisticada

### Operador: &&
```js

  // Cheque se o número é maior do que 2 e igual a 10

  const num = 3
  console.log(num > 2 && num === 10)  // false

```

### Operador: ||
```js

  // Cheque se o número é maior do que 2 ou igual a 10

  const num = 3
  console.log(num > 2 || num === 10)  // true

```


> Voltando para as condicionais podemos fazer coisas mais legais. Dados dois números inteiros, checar se eles são ímpares ou pares:
```js

  const num1 = 0
  const num2 = 0

  if (num1 % 2 === 0 && num2 % 2 === 0) {
    console.log('Ambos são pares')
  } else if (num1 % 2 === 0 && num2 % 2 !== 0) {
    console.log('Apenas o 1o é par')
  } else if (num1 % 2 !== 0 && num2 % 2 === 0) {
    console.log('Apenas o 2o é par')
  } else {
    console.log('Ambos são ímpares')
  }

```



<!-- Switch e ternary -->