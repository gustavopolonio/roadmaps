# JavaScript: A linguagem de programação mais usada atualmente!

É possível escrever código JS diretamente no navegador. O V8 é um mecanismo que foi criado pelo Google para executar JavaScript nos navegadores Chrome (2008). Com o passar do tempo, o V8 foi adotado pelos demais navegadores, para o mesmo princípio. Na aba `console` do inspecionar elementos. Brincar com `console.log()`.
Além disso, o V8 também é utilizado para executar JavaScript em outros ambientes, por exemplo no Node.js


## Cálculos Aritméticos

O JS, assim como todas as outras linguagens, aceita instruções matemáticas para a realização de cálculos:

```js

  console.log(2 + 3)  // Adição
  console.log(3 - 2)  // Subtração
  console.log(3 / 2)  // Divisão
  console.log(3 % 2)  // Módulo - resto da divisão
  console.log(2 * 3)  // Multiplicação
  console.log(3 ** 2) // Exponencial 3 ** 2 == 3 * 3

```


## Colocando JS numa página web - VScode

> Podemos adicionar JS numa página web de 3 formas diferentes:

1) Inline JS

```js

  <html>
    <head></head>
    <body>
      <button onclick="alert('Você ativou um alerta!')">Clique aqui</button>
    </body>
  </html>

```

2) JS interno no arquivo HTML

> Podemos escrever JS no `head` ou no final do `body` de um arquivo HTML. É sempre melhor escrever no final do `body` para que o código JS seja aplicado após o código HTML:

```js

  <html>
    <head>
      <script>
        console.log('Hello World')
      </script>
    </head>
    <body></body>
  </html>

```

```js

  <html>
    <head></head>
    <body>
      <button onclick="alert('Você ativou um alerta!');">Clique aqui</button>
      <script>
        console.log('Hello World')
      </script>
    </body>
  </html>

```

3) Script externo

> Arquivo externo que só recebe código JS (similar ao arquivo externo de CSS). Colocamos a extensão `.js`. Ex: `index.js`. O arquivo externo pode ser importado no `head` ou no `body do HTML`:

```js

  <html>
    <head>
      <script async src="index.js"></script>
    </head>
    <body></body>
  </html>

```

```js

  <html>
    <head></head>
    <body>
      <script src="index.js"></script>
    </body>
  </html>

```