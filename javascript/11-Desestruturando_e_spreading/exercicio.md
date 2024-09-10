```js

const constants = [2.72, 3.14, 9.81, 37, 100]

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  }
]

```


1) Desestruture o array `constants` armazenando cada elemento numa variável


2) Desestruture o objeto `rectangle` armazenando cada propriedade numa variável


3) Itere pelo array `users` e armazene todas as propriedades de cada user numa variável (usando desestruturação)


4) Usando o array `users`, crie um novo array que contenha apenas os users que tenham mais do que 2 skills (use qualquer método)


```js

  const student = ['David', ['HTML', 'CSS', 'JavaScript', 'React'], [98, 85, 90, 95]]

```

5) O array `student` acima está estruturado de maneira que a 1a posição é o nome do estudante, a 2a são as skills que ele tem e a 3a é a nota que ele tirou em cada skill. Mostre na tela (num único console.log) o nome do estudante, a quantidade de skills que ele sabe e as notas que ele tirou em JavaScript e React. Use desestruturação.