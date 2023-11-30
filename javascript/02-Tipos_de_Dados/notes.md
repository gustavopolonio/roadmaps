# Tipos de Dados

Toda linguagem de programação aceita alguns tipos de dados. Os tipos primitivos de dados do JS são:

1) Numbers
  - Inteiros (negativo, zero e positivo): ... -3, -2, -1, 0, 1, 2 ...
  - Float (ponto flutuante): números decimais: -3.5, -1.0, 0.0, 2.1

2) Strings
  Conjuntos de um ou mais caracteres localizados dentro de aspas simples, aspas duplas ou backticks.

```js

  'Isso é uma string em aspas simples'
  "Isso é uma string em aspas duplas"
  `Isso é uma string em backticks`

```

3) Booleanos
  O valor booleano é um valor True ou False (verdadeiro ou falso). Os booleanos são muito usados para fazer comparações. Ex:

```js

  5 > 3 // true
  10 > 50 // false

```

4) Undefined
  Algum valor indefinido. Por exemplo, se uma função não retorna nada, ela retorna undefined.

5) Null
  Null significa um valor nulo (vazio).


> Checando os tipos de dados:
```js

  console.log(typeof 'STRING') // string
  console.log(typeof 5) // number
  console.log(typeof true) // boolean
  console.log(typeof null) // object type
  console.log(typeof undefined) // undefined

```