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
  O valor booleano é um valor true ou false (verdadeiro ou falso). Os booleanos são muito usados para fazer comparações. Ex:

```js

  5 > 3 // true
  10 > 50 // false

```


> Checando os tipos de dados:
```js

  console.log(typeof 'STRING') // string
  console.log(typeof 5) // number
  console.log(typeof true) // boolean

```


# Variáveis

Variáveis são usadas para armazenar dados em memória. Quando uma variável é declarada (criada), um lugar na memória é reservado para ela. Quando atribuímos um valor à variável, esse lugar na memória será preenchido com o valor associado.
As variáveis em programação são semelhantes às variáveis dos exercícios de matemática da escola:
x = 10  =>  variável x
y = 2   =>  variável y

No JavaScript, temos 3 palavras chave que podemos usar para declarar uma variável: `var`, `let` e `const`
> var e let => valor da variável pode mudar
> const => valor da variável não pode mudar (é constante)

```js

  var name1 = 'Gustavo'
  let name2 = 'Paulo'
  const name3 = 'Messi'

  name1 = 'Neymar'
  name2 = 'CR7'
  // name3 = 'Vini JR'  =>  Não posso trocar o valor de uma variável const

```

> Com `var` e `let` podemos declarar uma variável sem atribuir nenhum valor à ela:
```js

  var number1  // Tipo undefined, é um valor indefinido (ver com typeof)
  let number2
  // const name3  =>  Ao declarar uma variável com const sou obrigado a atribuir um valor

  number1 = 1
  number2 = 2

```

> Obs: Quase nunca usamos `var`. Vamos ficar entre `let` e `const`.


### Definindo nomes de variáveis
  Regras gerais:
    - O nome de uma variável não pode começar com um número
    - O nome de uma variável não aceita caracteres especiais, exceto: `$` e `_`
    - O nome de uma variável não pode ter espaços
    - Normalmente o nome da variável é em inglês
    - O nome da variável deve especificar exatamente o que a variável armazena
    - Normalmente seguimos a convenção camelCase

```js

  // Nomes válidos e nos padrões:
  let country
  let firstName
  let lastName
  let year2020
  let year_2020

  // Nomes válidos mas fora do padrão camelCase:
  let first_name
  let last_name

  // Nomes inválidos
  let first-name
  let 1_num
  let num_#_1

```