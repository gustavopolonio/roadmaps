# Funções

Já vimos e trabalhamos com funções nativas do JS nas aulas passadas, que chamamos de métodos. Vimos métodos para strings, arrays e etc. Nessa aula vamos ver como criar nossas próprias funções e entender a utilidade delas.

> O que é uma função?
Uma função é um bloco de código reutilizável, feito para executar uma determinada tarefa. Exemplo: suponha que você tenha um programa que calcula a média das 2 provas feitas pelos alunos de uma sala. Para fazer os cálculos das médias, podemos pegar as notas de cada aluno separadamente e calcular a média. No entanto, teremos que repetir o mesmo cálculo diversas vezes. Se a sala tiver 100 alunos, teremos que fazer 100 cálculos diferentes das médias. Nesse caso, podemos criar uma função que calcula a média entre duas notas, e chamá-la quando necessário.

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


Exemplo da mesma função recebendo mais um parâmetro: o nome do aluno:
```js

  function calculateAverage(name, note1, note2) {
    console.log('Calculando a média das provas...')

    const average = (note1 + note2) / 2
    console.log(`A média final do aluno ${name} é: ${average}`)
  }

  calculateAverage('Paulo', 9, 8)

```


### Função com retorno




escopo de fç