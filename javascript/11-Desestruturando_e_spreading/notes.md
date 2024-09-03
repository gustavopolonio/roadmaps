# Desestruturação e Spread

## Desestruturação

Desestruturar é uma forma de desempacotar arrays e objetos, ou seja, armazenar cada valor do array ou cada propriedade de um objeto numa variável.


### Desestruturando arrays

```js

  const numbers = [1, 2, 3]
  const [firstNumber, secondNumber, thirdNumber] = numbers
  // Criei 3 variáveis. Em cada uma armazenei um elemento do array numbers

  console.log(firstNumber, secondNumber, thirdNumber)  // 1 2 3

```

```js

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack

  console.log(frontEnd)  // ['HTML', 'CSS', 'JS', 'React']
  console.log(backEnd)  // ['Node', 'Express', 'MongoDB']

```

Posso omitir um elemento do array usando uma vírgula adicional:
```js

  const numbers = [1, 2, 3]
  const [firstNumber, , thirdNumber] = numbers  // Elemento 2 é omitido

  console.log(firstNumber, thirdNumber)

```

Se eu tentar criar uma quantidade de variáveis maior do que o número de elementos do array, as variáveis a mais terão valor `undefined`
```js

  const names = ['Asabeneh', 'Brook', 'David']
  const [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

  console.log(firstPerson, secondPerson,thirdPerson, fourthPerson) // Asabeneh Brook David undefined

```

Para evitar isso, posso passar um valor padrão (default) ao criar minhas variáveis
```js

  const names = ['Asabeneh', 'Brook', 'David']
  const [firstPerson, secondPerson, thirdPerson, fourthPerson = 'John'] = names

  console.log(firstPerson, secondPerson,thirdPerson, fourthPerson) // Asabeneh Brook David John

```

Se eu quiser pegar apenas alguns elementos do array e armazenar os demais elementos num novo array posso usar o spread operator (...)
```js

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [num1, num2, num3, ...otherElements] = nums
  // Peguei apenas os 3 primeiros elementos do array e armazenei os demais num novo array que criei chamado otherElements

  console.log(num1, num2, num3)  // 1 2 3
  console.log(otherElements)  // [4, 5, 6, 7, 8, 9, 10]

```


### Desestruturando objetos

```js

  const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  const { width, height, area, perimeter } = rectangle
  // O nome das variáveis que eu criar na desestruturação devem ser iguais aos nomes das propriedades do objeto (width, height, area)

  console.log(width, height, area, perimeter)  // 20 10 200 undefined

```

Se eu quiser que as variáveis que criei tenham um nome diferente das propriedades do objeto, posso renomeá-las durante a desestruturação
```js

  const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  const { width: w, height: h, area: a, perimeter: p } = rectangle
  // Renomeei o nome das variáveis usando os dois pontos

  console.log(w, h, a, p)  // 20 10 200 undefined

```

Para evitar criar variáveis `undefined` posso definir um valor padrão:
```js

  const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  const { width = 30, height, area, perimeter = 60 } = rectangle

  console.log(width, height, area, perimeter)  // 20 10 200 60

```


#### Desestruturando objetos passados como parâmetros de funções

Quando uma fç recebe um objeto como parâmetro, posso desestruturar o objeto
```js

  function showPersonInfoWithoutDestructuring(personInfo) {
    // Não estou desestruturando o objeto recebido como parâmetro
    console.log(`
      O ${person.firstName} ${person.lastName} fala as seguintes línguas: ${personInfo.languages.join(', ')}
    `)
  }

  function showPersonInfoDestructuring({
    firstName,
    lastName,
    languages
  }) {
    // Estou desestruturando o objeto recebido como parâmetro
    console.log(`O ${firstName} ${lastName} fala as seguintes línguas: ${languages.join(', ')}`)
  }

  const person = {
    firstName: 'Luiz',
    lastName: 'Alberto',
    languages: ['Portuguese', 'English', 'Spanish']
  }

  showPersonInfoWithoutDestructuring(person)
  showPersonInfoDestructuring(person)

```


## Spread ou Rest Operator

O spread operator pode ser usado para copiar um array ou um objeto. Ou, como vimos acima, pode ser usado para pegar o resto dos elementos de um array na desestruturação.

### Pegando o resto dos elementos (elementos que não foram desestruturados) de um array
```js

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [num1, num2, num3, , ...rest] = nums
  // Obeserve que a vírgula adicional adicional acima faz o número 4 ser ignorado

  console.log(num1, num2, num3)  // 1 2 3
  console.log(rest)  // [5, 6, 7, 8, 9, 10]

```

### Spread operator para copiar um array

Já vimos algumas formas de copiar um array (por ex. usando o slice):
```js

  const numbers1 = [1, 2, 3, 4, 5]
  const numbers2 = numbers1.slice()

  console.log(numbers2)  // [ 1, 2, 3, 4, 5 ]

```

Também é possível copiar um array usando o spread operator:
```js

  const evens = [0, 2, 4, 6, 8, 10]
  const evenNumbers = [...evens]

  const odds = [1, 3, 5, 7, 9]
  const oddNumbers = [...odds]

  const wholeNumbers = [...evens, ...odds]

  console.log(evenNumbers)  // [ 0, 2, 4, 6, 8, 10 ]
  console.log(oddNumbers)  // [1, 3, 5, 7, 9]
  console.log(wholeNumbers)  // [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

```

### Spread operator para copiar um objeto
Já vimos uma forma de copiar um objeto (Object.assign). Também é possível copiar um objeto usando o spread operator:

```js

  const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }

  const copiedUser = {...user}
  console.log(copiedUser)
    // {
    //   name: 'Asabeneh',
    //   title: 'Programmer',
    //   country: 'Finland',
    //   city: 'Helsinki'
    // }

```

É possível modificar ou adicionar propriedades ao objeto copiado:
```js

  const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }

  // Modificando name para John e adicionando age: 20
  const copiedUser = {...user, name: 'John', age: 20}
  console.log(copiedUser)
  // {
  //   name: 'John',
  //   title: 'Programmer',
  //   country: 'Finland',
  //   city: 'Helsinki',
  //   age: 20
  // }

```