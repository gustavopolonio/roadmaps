# Funções

Já vimos e trabalhamos com funções nativas do JS nas aulas passadas, que chamamos de métodos. Vimos métodos para strings, arrays e etc. Nessa aula vamos ver como criar nossas próprias funções e entender a utilidade delas.

> O que é uma função?
Uma função é um bloco de código reutilizável, feito para executar uma determinada tarefa.
Exemplo: suponha que você tenha um programa que calcula a média das 2 provas feitas pelos alunos de uma sala. Para fazer os cálculos das médias, podemos pegar as notas de cada aluno separadamente e calcular a média. No entanto, teremos que repetir o mesmo cálculo diversas vezes. Se a sala tiver 100 alunos, teremos que fazer 100 cálculos diferentes das médias. Nesse caso, podemos criar uma função que calcula a média entre duas notas, e chamá-la quando necessário.

Ou seja, as funções deixam o código mais `limpo e fácil de entender`, `reutilizável` e `fácil de testar`.

Uma função pode conter ou não parâmetros (argumentos) e pode retornar ou não algum valor (veremos isso daqui a pouco).

Podemos declarar (criar) uma função de 3 maneiras principais:


1) Declaração padrão
```js
  // Palavra reservada `function` seguida do nome da função, parênteses e chaves

  // Declarando uma função chamada calculateAverage (cammel case)
  function calculateAverage() {
    // Código que será executado fica aqui dentro
  }

```

Acima declaramos uma função. Mas não adianta nada declarar uma função e não executar ela (chamar ela). Então, sempre que quisermos que uma função seja executada, temos que chamá-la:
```js

  // Declarando uma função chamada calculateAverage (cammel case)
  function calculateAverage() {
    // Código que será executado fica aqui dentro
  }

  // Chamando a função (sempre colocar os parênteses)
  calculateAverage()

```

Se executarmos a função que criamos nada será exibido no terminal, pois nossa função não faz nada ainda. Vamos fazer ela printar alguma coisa com console.log:
```js

  function calculateAverage() {
    console.log('Calculando a média das provas...')
  }

  calculateAverage()
  calculateAverage()
  calculateAverage()  // Posso executar uma função quantas vezes eu quiser

```

Obs: é sempre bom declarar uma função antes de chamá-la
```js

  // Não recomendado!!!

  calculateAverage()  // Executando a função

  // Declarando a função
  function calculateAverage() {
    console.log('Calculando a média das provas...')
  }


```

### Função com parâmetro
Acima criamos funções que não recebem nenhum parâmetro. Mas uma função pode receber 1 ou mais parâmetros. Parâmetros são dados (number, string, array, objeto, booleanos) que temos que passar para uma função quando executamos ela.

```js

  function calculateAverage(note1, note2) {
    console.log('Calculando a média das provas...')

    const average = (note1 + note2) / 2
    console.log(`A média final é: ${average}`)
  }

  calculateAverage(5, 8)

```
> Agora, nossa função calculateAverage precisa receber 2 parâmetros, que são as 2 notas do aluno. Essa função usa as 2 notas para calcular a média final do aluno. Sempre que chamarmos essa função, teremos que informar os 2 parâmetros, senão a função não vai conseguir fazer o cálculo correto e pode dar erro.


Exemplo da mesma função recebendo mais um parâmetro, o nome do aluno:
```js

  function calculateAverage(name, note1, note2) {
    console.log('Calculando a média das provas...')

    const average = (note1 + note2) / 2
    console.log(`A média final do aluno ${name} é: ${average}`)
  }

  calculateAverage('Paulo', 9, 8)

```

> Obs: é possível colocar um valor padrão (default) no parâmetro. Assim, se esse param não for informado, o valor dele será o valor default

```js
  // O valor default do param note2 é 5. Sendo assim, se não passarmos um valor para esse param ao executar a fç, o valor dele será 5

  function calculateAverage(note1, note2 = 5) {
    const average = (note1 + note2) / 2
    console.log(`A média final é: ${average}`)
  }

  // Informando apenas o valor do param1 note1 e não informando para o note2
  calculateAverage(10)


  // O valor passado para um param ao executar a fç sobrescreverá o valor default desse param
  function calculateAverage2(note1, note2 = 5) {
    const average = (note1 + note2) / 2
    console.log(`A média final é: ${average}`)
  }

  // Nesse caso, o valor default de note2 foi sobrescrito pelo valor 7
  calculateAverage2(10, 7)

```


### Função com retorno
As funções podem retornar um valor. Se uma função não retorna um valor, o valor dela é `undefined`


```js

  // Fç que não retorna um valor: ela é undefined
  function calculateAverage() {
    console.log('Fç executada!!')
  }

  const answer = calculateAverage()

  console.log(answer)  // undefined


  // Fç retornando uma string
  function calculateAverage() {
    return 'Fç executada!!'
  }

  const answer = calculateAverage()

  console.log(answer)  // 'Fç executada!!'

```

> Importante: dentro da fç, o código que vier depois do `return` não será executado. Ao executar o return, saímos imediatamente da fç.

```js

  function calculateAverage(number) {
    if (number > 10) {
      return 'Número maior do que 10'  // Tudo o que vem depois não será executado
    }

    console.log('Passou aqui')
    return 'Número menor ou igual a 10' // Tudo o que vem depois não será executado
  }

  const answer = calculateAverage(11)
  console.log(answer)  // Número maior do que 10

```


2) Arrow functions
Arrow function é uma alternativa para declarar uma função. Ela funciona praticamente igual à função criada do jeito tradicional (têm algumas diferenças que não importam agora). A única diferença que veremos é o modo de declarar:

## A mesma função declarada do modo tradicional e com arrow function

```js

  // Fç declarada do modo tradicional
  function calculateAverage(note1, note2) {
    const average = (note1 + note2) / 2

    return average
  }

  const average = calculateAverage(2, 3)
  console.log(average)  // 2.5


  // Mesma fç declarada com arrow function
  const calculateAverageArrow = (note1, note2) => {
    const average = (note1 + note2) / 2

    return average
  }

  const averageArrow = calculateAverageArrow(2, 3)
  console.log(averageArrow)  // 2.5

```
> Considerações sobre arrow functions:
  - Não usamos a palavra reservada `function` para declarar a arrow fç
  - A arrow function é um fç anônima, ou seja, ela não tem um nome
  - Podemos armazenar a arrow function numa variável. É por meio dessa variável que conseguimos executar a arrow function


### Parâmetros na arrow function
A sintaxe da arrow function pode ser um pouco diferente, dependendo da quantidade de parâmetros que ela recebe:

```js

  // Arrow function sem nenhum param
  const sum0 = () => {
    const total = 0

    return total
  }

  const answer0 = sum0()
  console.log(answer0)  // 0

  // Arrow function com 1 param
  // Qnd tem apenas 1 param, posso remover as () em volta do param
  const sum1 = number1 => {
    const total = number1

    return total
  }

  const answer1 = sum1(10)
  console.log(answer1)  // 10

  // Arrow function com 2 ou mais param
  // Mais do que 1 param: obrigatório () em volta dos params
  const sum3 = (number1, number2, number3) => {
    const total = number1 + number2 + number3

    return total
  }

  const answer3 = sum3(10, 20, 30)
  console.log(answer3)  // 60

```

### Retorno na arrow function
Se a arrow function tem apenas o retorno dentro dela, as chaves {} podem ser omitidas

```js

  // Arrow function normal
  const sum = (number1, number2) => {
    const total = number1 + number2

    return total
  }

  const answer = sum(10, 20)
  console.log(answer)  // 30


  // Omitindo as chaves {} da arrow function
  const sum2 = (number1, number2) => number1 + number2

  const answer2 = sum2(10, 20)
  console.log(answer2)  // 30

```


3) Função anônima
Fç anônima é uma fç que não tem nome. Já vimos que as arrow fç são fçs anônimas. Mas também podemos declarar uma fç anônima do modo tradicional
Obs: para executar uma fç anônima é necessário armazená-la numa variável. Daí conseguimos invocar a fç através da variável

```js

  const sum = function(number1, number2) {
    const total = number1 + number2

    return total
  }

  const answer = sum(10, 15)
  console.log(answer)  // 25

```

> Obs: posso definir valores default para os param em todos os 3 tipos de fçs que vimos





escopo de fç

Exercicios