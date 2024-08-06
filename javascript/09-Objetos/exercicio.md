1)
Crie um objeto vazio chamado 'cachorro'


2)
Adicione as seguintes propriedades ao objeto cachorro: nome, cor, raca e idade. Pode colocar os valores que você quiser.


3)
Printe na tela (com console log) os valores de todas as propriedades do objeto cachorro.


4)
Adicione uma nova propriedade 'tamanho' ao objeto cachorro, com o valor que você quiser.


Considere o objeto 'users' abaixo para o exercício 5:

```js

  const users = {
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
  }

```

5)
Adicione seus dados no objeto users, sem modificar o objeto original. Dica: você terá que criar um novo objeto copiando o objeto users


Considere o array 'products' abaixo para o exercício 6:

```js

  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [
        { userId: 'fg12cy', rate: 5 }
      ],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [],
      likes: ['fg12cy', 'zwf8md']
    }
  ]

```

6)
Percorra cada um dos produtos e printe na tela um texto no formato:
'O produto {nome do produto}, de id: {id do produto}, custa {preço do produto}. Descrição: {descrição do produto}. Esse produto tem {quantidade de avaliações} avaliações e {quantidade de likes} likes.'