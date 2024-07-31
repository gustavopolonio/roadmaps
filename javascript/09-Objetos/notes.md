# Objetos
Objetos são mais um tipo de dado no JavaScript. Um objeto é usado para armazenar dados do tipo chave-valor.


## Criando objetos
Para criar um objeto usamos as chaves

### Objeto vazio
```js

  const pessoa = {}
  // Criando um objeto vazio e armazenando ele numa variável pessoa

```

### Objeto com valores
```js

  const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Afonso',
    idade: 20,
    alimentacao: {
      frutas: ['maca', 'pera'],
      doce: ['chocolate']
    }
  }
  // Criando um objeto com pares chave-valor (uma chave sempre deve ter um valor associado)

```

> O objeto `pessoa` acima tem 3 propriedades (pares chave-valor). A prop nome tem valor de Daniel (string). A prop sobrenome tem valor Afonso (string). A prop idade tem valor 20 (number)

> O valor de uma propriedade pode ser string, number, boolean, um objeto, null, undefined ou uma função

```js

  const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Afonso',
    idade: 20,
    irmaos: ['Pedro', 'Raul'],
    fazFaculdade: true
  }

```

### Pegando valores de um Objeto
É possível acessar o valor de um objeto de 2 maneiras:
  - Usando um ponto (.) seguido do nome da propriedade (chave) que queremos (maneira mais usada)
  - Colocando o nome da propriedade em aspas dentro de colchetes

```js

  const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Afonso',
    idade: 20,
    irmaos: ['Pedro', 'Raul'],
    fazFaculdade: true
  }

  console.log(pessoa.nome)  // Daniel
  console.log(pessoa.sobrenome)  // Afonso
  console.log(pessoa.idade)  // 20
  console.log(pessoa.irmaos)  // [ 'Pedro', 'Raul' ]
  console.log(pessoa.fazFaculdade)  // true
  console.log(pessoa.endereco)  // undefined

  console.log(pessoa['nome'])  // Daniel
  console.log(pessoa['sobrenome'])  // Afonso
  console.log(pessoa['idade'])  // 20
  console.log(pessoa['irmaos'])  // [ 'Pedro', 'Raul' ]
  console.log(pessoa['fazFaculdade'])  // true
  console.log(pessoa['endereco'])  // undefined

```


### Modificando um objeto
Os objetos são mutáveis, então é possível criar novas propriedades ou alterar os valores das propriedades já existentes

```js

  const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Afonso',
    idade: 20,
    irmaos: ['Pedro', 'Raul'],
    fazFaculdade: true
  }

  pessoa.nome = 'Rafael'
  pessoa.idade = 22
  pessoa.irmaos.push('Ana')
  pessoa.estado = 'SP'

  console.log(pessoa.nome)  // Rafael
  console.log(pessoa.sobrenome)  // Afonso
  console.log(pessoa.idade)  // 22
  console.log(pessoa.irmaos)  // [ 'Pedro', 'Raul', 'Ana' ]
  console.log(pessoa.fazFaculdade)  // true
  console.log(pessoa.endereco)  // undefined
  console.log(pessoa.estado)  // SP

```

### Métodos do objeto

1) Object.assign: copia um objeto sem modificar o objeto original
```js

  const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Afonso',
    idade: 20,
    irmaos: ['Pedro', 'Raul'],
    fazFaculdade: true
  }

  const pessoa2 = Object.assign({}, pessoa)

```

2) Object.keys(): retorna um array com as chaves (propriedades) de um objeto
```js

  const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Afonso',
    idade: 20,
    irmaos: ['Pedro', 'Raul'],
    fazFaculdade: true
  }

  const keys = Object.keys(pessoa)

  console.log(keys)  // [ 'nome', 'sobrenome', 'idade', 'irmaos', 'fazFaculdade' ]

```

3) Object.values(): retorna um array com os valores das propriedades de um objeto
```js

  const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Afonso',
    idade: 20,
    irmaos: ['Pedro', 'Raul'],
    fazFaculdade: true
  }

  const values = Object.values(pessoa)

  console.log(values)  // [ 'Daniel', 'Afonso', 20, [ 'Pedro', 'Raul' ], true ]

```

4) Object.entries(): retorna um array com as chaves e valores de um objeto
```js

  const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Afonso',
    idade: 20,
    irmaos: ['Pedro', 'Raul'],
    fazFaculdade: true
  }

  const entries = Object.entries(pessoa)

  console.log(entries)
  // [
  //   [ 'nome', 'Daniel' ],
  //   [ 'sobrenome', 'Afonso' ],
  //   [ 'idade', 20 ],
  //   [ 'irmaos', [ 'Pedro', 'Raul' ] ],
  //   [ 'fazFaculdade', true ]
  // ]

```