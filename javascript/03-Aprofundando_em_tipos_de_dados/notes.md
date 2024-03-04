# Numbers

1) Math object - Objeto nativo do JS que contém vários métodos para trabalhar com números

```js

  const PI = Math.PI
  console.log(PI)

  // Arredondando um número para cima, se o número estiver mais perto do próximo número inteiro. Ou para baixo, caso contrário:
  console.log(Math.round(PI))
  console.log(Math.round(9.81))

  // Arredondando um número para baixo:
  console.log(Math.floor(PI))

  // Arredondando um número para cima:
  console.log(Math.ceil(PI))

  // Retornando o menor valor de uma sequência numérica:
  console.log(Math.min(-5, 3, 20, 4, 5, 10))

  // Retornando o maior valor de uma sequência numérica:
  console.log(Math.max(-5, 3, 20, 4, 5, 10))

  // Criando um número aleatório entre 0 e 0.999999
  const randNum = Math.random()
  console.log(randNum)

  // Como criar um número inteiro e aleatório entre 0 e 10?
  const num = Math.floor(Math.random() * 11)
  console.log(num)

  // Pegando o valor absoluto de um número:
  console.log(Math.abs(-10))
  console.log(Math.abs(10))

  // Raiz quadrada
  console.log(Math.sqrt(100))
  console.log(Math.sqrt(2))

  // Exponenciação
  console.log(Math.pow(3, 2))

```


# Strings

1) Concatenando strings (conectar duas ou mais strings):

```js

  const firstName = 'Joel'
  const lastName = 'Jota'
  const space = ' '
  console.log(firstName + space + lastName)

  // Ou posso concatenar assim:
  console.log(firstName + ' ' + lastName)

  // Ou usando Template Literals (Template Strings):
  console.log(`${firstName} ${lastName}`)

```

```js

  // Quando tenho strings muiuto grandes posso dividi-la em linhas menores para ficar mais fácil de ler. Para sso uso a barra: \

  const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
  I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
  Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
  In the end of 2019, I was thinking to expand my teaching and to reach \
  to global audience and I started a Python challenge from November 20 - December 19.\
  It was one of the most rewarding and inspiring experience.\
  Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
  I hope you are enjoying too."

  console.log(paragraph)


  // Caracter de escape: usado para indicar uma quebra de linha:

  console.log('Espero que meu time vença essa semana.\n\nSerá que ele vai?')

```


2) Métodos para trabalhar com strings
> Métodos (ou funções) são ferramentas nativas do JS que fazer alguma ação. As strings possuem métodos que facilitam o trabalho com elas.

2.1) length: Método que retorna o número de caracteres de uma string (incluindo espaços). (Comprimento)
```js

  const js = 'JavaScript'
  console.log(js.length)            // 10
  const completeName = 'Joel Jota'
  console.log(completeName.length)  // 9

```

2.2) Acessando caracteres de uma string: Podemos acessar cada caracter de uma string usando os index da string. O index é a posição de cada caracter. O primeiro index é sempre zero e o últmo é o length da string -1
```js

  const city = 'São Paulo' // 9 letras
  // index      012345678

  const firstLetter = city[0]
  const secondLetter = city[1]
  const lastLetter = city[city.length - 1]

  console.log(firstLetter)  // S
  console.log(secondLetter)  // ã
  console.log(lastLetter)  // o

```

2.2.1) charAt: retorna o caracter presente no index informado:
```js

  const club = 'Real Madrid'
  console.log(club.charAt(0))  // R
  console.log(club.charAt(club.length - 1))  // d

```

2.3) toUpperCase: Deixa todas as letras da string em letra maiúscula
```js

  const city = 'Santos'
  console.log(city.toUpperCase())  // SANTOS

```

2.4) toLowerCase: Deixa todas as letras da string em letra minúscula
```js

  const city = 'Santos'
  console.log(city.toLowerCase())  // santos

```

2.5) substring: Pega uma parte de uma string. Recebe 2 argumentos: o index inicial e o index final (não inclui o caracter do index final):
> Lembrando que o index começa no zero
```js

  const text = 'JavaScript é melhor do que Python'
  console.log(text.substring(4, 10))  // Script
  console.log(text.substring(27))  // Python

```

2.6) split: divide a string no(s) caracter(es) que passarmos no parâmetro. Retorna um array de strings
```js

  const text = 'JavaScript é melhor do que Python'
  console.log(text.split(' '))  // [ 'JavaScript', 'é', 'melhor', 'do', 'que', 'Python' ]
  console.log(text.split('é'))  // [ 'JavaScript ', ' melhor do que Python' ]
  console.log(text.split('e'))  // [ 'JavaScript é m', 'lhor do qu', ' Python' ]
  console.log(text.split('melhor'))  // [ 'JavaScript é ', ' do que Python' ]

```

2.7) trim: remove espaços em branco do começo e do fim da string:
```js

  const text = '   JavaScript é melhor do que Python       '
  console.log(text)
  console.log(text.trim())  // JavaScript é melhor do que Python

```

2.8) includes: recebe uma substring como argumento e checa se essa substring existe na string. Retorna um booleano.
```js

  const substring = 'Neymar'
  const text1 = 'O Neymar já jogou no Santos'
  const text2 = 'O Ronaldo já jogou no Santos'
  const text3 = 'O neymar já jogou no Santos'

  console.log(text1.includes(substring))  // true
  console.log(text2.includes(substring))  // false
  console.log(text3.includes(substring))  // false (é case sensitive: letra maiúscula é diferente de minúscula)

```

2.9) replace: substitui uma substring por outra. Recebe dois parâmetros: a substring que é para ser substituída e a nova substring. Substitui apenas a 1a substring que aparecer. Se a substring que é para ser substituída não existir, a string original não muda. É case sensitive:
```js

  const text = 'O brasil é hexacampeão'
  console.log(text.replace('hexa', 'penta'))  // O brasil é pentacampeão
  console.log(text.replace('tetra', 'penta'))  // O brasil é hexacampeão

  const text2 = 'O Brasil é cercado de florestas, pois o Brasil é lindo'
  console.log(text2.replace('Brasil', 'Peru'))  // O Brasil é cercado de florestas, pois o Brasil é lindo

```

2.10) replaceAll: substitui uma substring por outra. Recebe dois parâmetros: a substring que é para ser substituída e a nova substring. Substitui todas as substrings que aparecerem. Se a substring que é para ser substituída não existir, a string original não muda. É case sensitive:
```js

  const text = 'O Brasil é cercado de florestas, pois o Brasil é lindo'
  console.log(text.replaceAll('Brasil', 'Peru'))  // O Peru é cercado de florestas, pois o Peru é lindo

```

2.11) indexOf: Recebe uma substring como parâmetro. Se a substring existir na string principal é retornado o index da primeira letra da primeira substring, senão é retornado -1
```js

  const text = 'O Brasil é cercado de florestas, pois o Brasil é lindo'
  console.log(text.indexOf('Brasil'))  // 2
  console.log(text.indexOf('Peru'))  // -1

```

2.12) lastIndexOf: Recebe uma substring como parâmetro. Se a substring existir na string principal é retornado o index da primeira letra da última substring, senão é retornado -1
```js

  const text = 'O Brasil é cercado de florestas, pois o Brasil é lindo'
  console.log(text.lastIndexOf('Brasil'))  // 40
  console.log(text.lastIndexOf('Peru'))  // -1

```

2.13) concat: Pode receber inúmeros parâmetros. Cada parâmetro é uma substring. O concat então juntará essas substrings
```js

  const text = 'O Brasil é'
  console.log(text.concat(' ', 'lindo', ' ', 'e', ' ', 'grande'))  // O Brasil é lindo e grande

```

2.14) startsWith: recebe uma substring como parâmetro e checa se a string principal começa com a substring informada. Se começar, retorna truue. Senão, retorna false. É case sensitive:
```js

  const text = 'O Brasil é grande'
  console.log(text.startsWith('O'))  // true
  console.log(text.startsWith('o'))  // false
  console.log(text.startsWith('O Bra'))  // true

```


# Casting: converter um tipo de dado para outro tipo de dado

1.1) String para Int
```js

  const numString = '10'
  const numInt = parseInt(numString)

  console.log(typeof numString)  // string
  console.log(numString)  // 10
  console.log(typeof numInt)  // number
  console.log(numInt)  // 10

  // OU

  const numString = '10'
  const numInt = Number(numString)

  console.log(typeof numString)  // string
  console.log(numString)  // 10
  console.log(typeof numInt)  // number
  console.log(numInt)  // 10

```

1.2) String para Float
```js

  const numString = '10.2'
  const numFloat = parseFloat(numString)

  console.log(typeof numString)  // string
  console.log(numString)  // 10.2
  console.log(typeof numFloat)  // number
  console.log(numFloat)  // 10.2

  // OU

  const numString = '10.2'
  const numFloat = Number(numString)

  console.log(typeof numString)  // string
  console.log(numString)  // 10.2
  console.log(typeof numFloat)  // number
  console.log(numFloat)  // 10.2

```

2.3) Float para Int
```js

  let numFloat = 9.81
  let numInt = parseInt(numFloat)

  console.log(numInt)  // 9

```