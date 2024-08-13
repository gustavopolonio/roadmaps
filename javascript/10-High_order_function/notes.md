# High order function

Uma função é considerada high order function (HOF) se ela receber pelo menos 1 função como parâmetro ou se o retorno dela for uma função.


### Exemplo de high order function

A fç abaixo é uma HOF pois recebe uma fç como parâmetro

```js

  // Função de callback - fç passada como parâmetro para a HOF
  function callbackFunction() {
    console.log('Sou uma Função de callback');
  }

  // High order function
  function higherOrderFunction(func) {
    console.log('Sou uma higher order function')
    func()
  }

  higherOrderFunction(callbackFunction);

```

> Obs: A fç passada como parâmetro é chamada de callback function


### Exemplo prático de high order function

Suponha que quero escrever uma fç que calcula a área e o perímetro de vários retângulos. Podemos fazer o seguinte:

```js

  const medidasRetangulos = [[1, 2], [3, 7], [2, 5]]

  function calculaArea(medidas) {
    const response = []
    
    for (let i = 0; i < medidas.length; i++) {
      response.push(medidas[i][0] * medidas[i][1])
    }

    return response
  }

  function calculaPerimetro(medidas) {
    const response = []
    
    for (let i = 0; i < medidas.length; i++) {
      response.push((medidas[i][0] * 2) + (medidas[i][1] * 2))
    }

    return response
  }

  console.log(calculaArea(medidasRetangulos))
  console.log(calculaPerimetro(medidasRetangulos))

```

A maneira acima está correta, mas as fçs têm praticamente o mesmo códgio. Então é possível escrever uma fç geral com o código que se repete e outras fçs específicas apenas para calcular a área e o perímetro


```js

  const medidasRetangulos = [[1, 2], [3, 7], [2, 5]]

  function calculaArea(base, altura) {
    return base * altura
  }

  function calculaPerimetro(base, altura) {
    return (base * 2) + (altura * 2)
  }

  function calculo(medidas, logica) {
    const response = []

    for (let i = 0; i < medidas.length; i++) {
      response.push(logica(medidas[i][0], medidas[i][1]))
    }

    return response
  }

  console.log(calculo(medidasRetangulos, calculaArea))
  console.log(calculo(medidasRetangulos, calculaPerimetro))

```

Agora o código está mais conciso e as fçs de cálculo podem ser reutilizadas. Além disso, posso criar facilmente outras fçs de cálculo. Ex: criar uma fç que calcula a diagonal do retângulo:

```js

  const medidasRetangulos = [[1, 2], [3, 7], [2, 5]]

  function calculaDiagonal(base, altura) {
    return Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2))
  }

  function calculo(medidas, logica) {
    const response = []

    for (let i = 0; i < medidas.length; i++) {
      response.push(logica(medidas[i][0], medidas[i][1]))
    }

    return response
  }

  console.log(calculo(medidasRetangulos, calculaDiagonal))  

```


## HOF nativas do JavaScript

O JS possui várias HOF nativas, que facilitam nosso trabalho. Algumas da mais usadas são as fçs para manipular arrays (ao invés de ter que criar for loops em todas as ocasiões). Os mais usados são:


1) forEach: executa a fç (callback) fornecida uma vez para cada elemento do array.
Retorna undefined.

```js

  const numeros = [3, 6, 8, 10]

  numeros.forEach(function (numero, index, arr) {
    console.log(numero + 10)
  })

  // Usando arrow function (sempre usa-se arrow fç)
  numeros.forEach(numero => console.log(numero + 10))

```


2) map: executa a fç (callback) fornecida uma vez para cada elemento do array.
Retorna um novo array com os valores resultantes.

```js

  const numeros = [3, 6, 8, 10]

  // const numerosSomados = numeros.map((numero, index, arr) => numero + 10)
  const numerosSomados = numeros.map(numero => numero + 10)

  console.log(numerosSomados)

```


3) filter: executa a fç (callback) fornecida uma vez para cada elemento do array, e constrói um novo array com todos os valores que retornaram TRUE na fç de callback.
Retorna cópia do array, apenas com os elementos que retornaram TRUE no teste de lógica.

```js

  const palavras = ['arroz', 'frutas', 'agua', 'geladeira']

  // const resultado = palavras.filter((palavra, index, arr) => palavra.length > 5)
  const resultado = palavras.filter(palavra => palavra.length > 5)

  console.log(resultado)

```


4) every: testa se todos os elementos do array passam no teste da fç de callback.
Retorna booleano: TRUE se todos passarem ou FALSE se pelo menos 1 não passar.

```js

  const palavras = ['arroz', 'frutas', 'agua', 'geladeira']

  // const resultado = palavras.every((palavra, index, arr) => palavra.length > 4)
  const resultado = palavras.every(palavra => palavra.length > 4)

  console.log(resultado)  // false

```


5) some: testa se pelo menos um elemento do array passa no teste da fç de callback.
Retorna booleano: TRUE se pelo menos 1 passar ou FALSE se nenhum passar.

```js

  const palavras = ['arroz', 'frutas', 'agua', 'geladeira']

  // const resultado = palavras.some((palavra, index, arr) => palavra.length < 4)
  const resultado = palavras.some(palavra => palavra.length < 4)

  console.log(resultado)  // false

```


6) find: retorna o primeiro elemento do array que satisfaz o teste da fç de callback. Se nenhum valor satisfazer, retorna undefined.

```js

  const numeros = [5, 12, 8, 130, 44]

  // const resposta = numeros.find((numero, index, arr) => numero > 10)
  const resposta = numeros.find(numero => numero > 10)

  console.log(resposta)

```


7) findIndex: retorna o index do primeiro elemento do array que satisfaz o teste da fç de callback. Se nenhum valor satisfazer, retorna -1.

```js

  const numeros = [5, 12, 8, 130, 44]

  // const resposta = numeros.findIndex((numero, index, arr) => numero > 10)
  const resposta = numeros.findIndex(numero => numero > 10)

  console.log(resposta)

```


8) includes: checa se o array possui o valor informado. Se possui, retorna TRUE. Senão, retorna FALSE.

```js

  const numeros = [5, 12, 8, 130, 44]

  const resposta = numeros.includes(8)

  console.log(resposta)

```


9) sort: ordena os elementos de um array e retorna o array ordenado. A ordem padrão de ordenação é crescente, onde cada elemento do array é convertido para uma string e comparado com o próximo elemento.

```js

  const meses = ['Março', 'Janeiro', 'Fevereiro', 'Dezembro']
  meses.sort()
  console.log(meses)  // [ 'Dezembro', 'Fevereiro', 'Janeiro', 'Março' ]

  const numeros = [1, 30, 4, 21, 100000]
  numeros.sort()
  console.log(numeros)  // [1, 100000, 21, 30, 4]

```

O sort pode receber uma fç de comparação, que determinará a ordem que eu quero que os elementos sejam ordenados.
A fç de comparação é chamada com os seguintes argumentos:
  - a: o 1o elemento para comparação
  - b: o 2o elemento para comparação

A fç de comparação deve retornar um número, onde:
  - um valor negativo indica que "a" deve ficar antes de "b"
  - um valor positivo indica que "a" deve ficar depois de "b"
  - zero indica que "a" e "b" são iguais e mantém a mesma ordem

```js

  // Ordenando números em ordem crescente
  const numeros = [1, 30, 4, 21, 100000]
  numeros.sort((a, b) => a - b)
  console.log(numeros)  // [ 1, 4, 21, 30, 100000 ]

  // Ordenando números em ordem decrescente
  const numeros2 = [1, 30, 4, 21, 100000]
  numeros2.sort((a, b) => b - a)
  console.log(numeros2)  // [ 100000, 30, 21, 4, 1 ]

```


10) reduce: executa a fç de callback (chamada de reducer) em cada elemento do array e retorna um valor único no final (reduz o array num valor único, ex: um número, um objeto, etc..)

O reduce recebe 2 params: a fç de callback e o initialValue

A fç de callback pode receber 4 parâmetros:
  1) accumulator: o valor resultante do retorno anterior da fç de callback. Na 1a chamada seu valor é initialValue.
  2) currentValue: o valor do elemento atual do array
  3) currentIndex: o index do elemento atual do array
  4) array: o array em si

O reduce recebe como 2o param o initialValue, que é o valor inicial do accumulator.

```js

  // Somando os números do array
  const numeros = [1, 4, 2, 8]

  const soma = numeros.reduce((acc, current) => {
    return acc + current
  }, 0)

  console.log(soma)

```

Usando o reduce para retornar um objeto no final:

```js

  // Verificando o fluxo de caixa de uma empresa, para ficar no formato do objeto abaixo:
  // [10, -20]
  // {
  //   entradas: 10,
  //   saidas: 20,
  //   saldo: -10
  // }

  const fluxoDeCaixa = [10, -4.2, 21.2, -81]

  const resposta = fluxoDeCaixa.reduce((acc, current) => {
    if (current >= 0) {
      acc.entradas += current
    } else {
      acc.saidas -= current
    }

    acc.saldo = acc.entradas - acc.saidas

    return acc
  }, {
    entradas: 0,
    saidas: 0,
    saldo: 0
  })

  console.log(resposta)

```


# Setting time
No JavaScript podemos executar alguma atividade repetidamente a cada intervalo de tempo (ex: executar uma função a cada 5 segundos) usando `setInterval`. Também é possível setar um cronômetro para executar uma atividade uma única vez quando o tempo expirar (ex: executar uma função daqui 10 segundos) usando `setTimeout`.

## setInterval
setInterval é uma HOF que executa alguma atividade repetidamente a cada intervalo de tempo. Ela recebe dois parâmetros: a fç de callback que será executada repetidamente e o intervalo (em milissegundos).

```js

  function sayHello() {
    console.log('Hello')
  }

  setInterval(sayHello, 1000)  // 1000ms = 1 segundo

```

A setInterval retorna um interval ID, que é um ID único que identifica esse intervalo. Com esse ID, podemos parar a execução desse intervalo, usando o clearInterval:


```js

  function sayHello() {
    console.log('Hello')
  }

  const intervalId = setInterval(sayHello, 1000)  // 1000ms = 1 segundo

  // if (condition) {
  //   clearInterval(intervalId)
  // }

```


## setTimeout
setTimeout é uma HOF que seta um cronômetro para executar uma fç uma única vez quando o tempo expirar. Ela recebe dois parâmetros: a fç de callback que será executada e a duração do cronômetro (em milissegundos).

```js

  setTimeout(() => {
    console.log("Mensagem depois de 5 segundos");
  }, 5000);

  setTimeout(() => {
    console.log("Mensagem depois de 3 segundos");
  }, 3000);

  setTimeout(() => {
    console.log("Mensagem depois de 1 segundo");
  }, 1000);

```

A setTimeout retorna um timeoutID, que é um ID único que identifica esse timeout. Com esse ID, podemos parar a cancelar esse timeout, usando o clearTimeout:

```js

  const timeoutID = setTimeout(() => {
    console.log("Mensagem depois de 4 segundos");
  }, 4000);

  if (true) {
    clearTimeout(timeoutID)
  }

```
