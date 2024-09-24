# DOM

Document Object Model (DOM) é a representação de uma página HTML no formato de objeto ou node. Por meio da DOM conseguimos acessar e alterar a estrutura, os estilos e o conteúdo do HTML. Ou seja, conseguimos criar elementos, deletar elementos, alterar classes, atributos, estilos e tudo o que vimos até agora, por meio do javascript.

Para acessar o documento (elementos HTML), geralmente usamos a API `document` que é nativa do javascript (vamos ver abaixo).


## Pegando elementos
Podemos pegar um ou mais elementos já criados usando javascript. Para isso, existem diversos métodos diferentes. Vamos ver alguns:

1) getElementsByTagName()
Pega todos os elementos da tag informada. Retorna um HTMLCollection, que é um array like object, ou seja, um HTMLCollection não suporta todos os métodos de array que vimos até agora (ex. forEach). Por isso, para iterar devemos usar o for loop tradicional ou transformar a HTMLCollection num array (com Array.from) e daí podemos usar os métodos que vimos. 

```js

  // Sintaxe
  document.getElementsByTagName('tagName')

```

```js

  // Usando o arquivo pegando-elementos.html como base

  const allH1 = document.getElementsByTagName('h1')

  console.log(allH1)  // HTMLCollection(4)

  // Iterando com for loop
  for (let i = 0; i < allH1.length; i++) {
    console.log(allH1[i])
  }

  const allH1Array = Array.from(allH1)  // Transformando a HTMLCollection num array
  allH1Array.forEach(el => console.log(el))  // Iterando com forEach

```

2) getElementsByClassName()
Pega todos os elementos que tenham a classe informada. Retorna um HTMLCollection.

```js

  // Sintaxe
  document.getElementsByClassName('className')

```

```js

  // Usando o arquivo pegando-elementos.html

  const allTitle = document.getElementsByClassName('title')

  console.log(allTitle)  // HTMLCollection(4)

  // Iterando com for loop
  for (let i = 0; i < allTitle.length; i++) {
    console.log(allTitle[i])
  }

  const allTitleArray = Array.from(allTitle)  // Transformando a HTMLCollection num array
  allTitleArray.forEach(el => console.log(el))  // Iterando com forEach

```

3) getElementById()
Pega o 1o elemento que tenha o ID informado. Retorna o elemento encontrado ou nulo se nenhum elemento for encontrado.

```js

  // Sintaxe
  document.getElementById('id')

```

```js

  // Usando o arquivo pegando-elementos.html

  const firstTitle = document.getElementById('first-title')

  console.log(firstTitle)  // <h1 class="title" id="first-title">First Title</h1>

```

4) querySelector()
O querySelector pode pegar elementos por meio do nome da tag, pela classe ou pelo ID. A estrutura é semelhante a estilizar elementos no CSS.
Retorna o 1o elemento encontrado ou nulo.

```js

  // Usando o arquivo pegando-elementos.html

  const firstTitleTag = document.querySelector('h1') // Pega o 1o elemento h1
  const firstTitleId = document.querySelector('#first-title') // Pega o 1o elemento com id='first-title'
  const firstTitleClass = document.querySelector('.title') // Pega o 1o elemento com classe='title'

  console.log(firstTitleTag)  // <h1 class="title" id="first-title">First Title</h1>
  console.log(firstTitleId)  // <h1 class="title" id="first-title">First Title</h1>
  console.log(firstTitleClass)  // <h1 class="title" id="first-title">First Title</h1>

```

Combinando seletores (igual no css):

```js

  // Usando o arquivo pegando-elementos.html

  const title = document.querySelector('h1#second-title.second-title')
  console.log(title)  // <h1 class="title second-title" id="second-title">Second Title</h1>

  const h2Title = document.querySelector('h2.title')
  console.log(h2Title)  // <h2 class="title">h2 Title</h2>

```

5) querySelectorAll()
O querySelectorAll pode pegar elementos por meio do nome da tag, pela classe ou pelo ID. A estrutura é semelhante a estilizar elementos no CSS.
Retorna uma nodeList com todos os elementos encontrados. Uma nodeList é um array like object que suporta for loop tradicional e forEach.

```js

  // Usando o arquivo pegando-elementos.html

  const allTitle = document.querySelectorAll('.title')  // Selecionar todos os elementos que têm classe 'title'
  console.log(allTitle)  // NodeList(4)

  for (let i = 0; i < allTitle.length; i++) {
    console.log(allTitle[i])
  }

  allTitle.forEach(title => console.log(title))

```


## Adicionando atributos
Podemos adicionar atributos a um elemento que pegamos no javascript. Atributos mais usados do HTML: id, class, src, style, href, disabled, title, alt.

> Obs: do modo abaixo os atributos são sobrescritos se já existirem

```js

  const h1 = document.querySelectorAll('h1')
  const h2 = document.querySelector('h2.title')
  const button = document.querySelector('button')
  const img = document.querySelector('img')

  h2.id = 'id-teste'  // Sobrescreve o id do h2, se o h2 não tiver id...
  h2.className = 'classe-teste'
  h2.style = 'color: red; font-size: 20px'

  button.disabled = true

  img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png'
  img.alt = 'Alt teste'

  h1[1].style = 'color: green'

```


### Adicionando atributos com o método setAttribute()
Sobrescreve o valor de um atributo, se ele já existir. Senão, cria um novo atributo.

```js

  // Sintaxe
  setAttribute('nomeDoAtributo', 'valorDoAtributo')

```

```js

  const h1 = document.querySelectorAll('h1')
  const h2 = document.querySelector('h2.title')
  const button = document.querySelector('button')
  const img = document.querySelector('img')

  h2.setAttribute('id', 'id-teste')
  h2.setAttribute('class', 'classe-teste')
  h2.setAttribute('style', 'color: red; font-size: 20px')

  button.setAttribute('disabled', true)

  img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png')
  img.setAttribute('alt', 'Alt teste')

  h1[1].setAttribute('style', 'color: green')

```

> É recomendado usar o `setAttribute` ao invés do 1o modo visto.


### Adicionando classes com o método add
O método `add` adiciona uma nova classe ao elemento. Importante: esse método não sobrescreve as classes já existentes.

```js

  const button = document.querySelector('button')
  button.classList.add('outra-classe')

```


### Removendo classes com o método remove
O método `remove` remove a classe especificada do elemento.

```js

  const button = document.querySelector('button')
  button.classList.remove('button')

```


### Método toggle para manipular classes
O método toggle checa se o elemento possui ou não a classe especificada. Se possuir, a classe é removida. Senão, a classe é adicionada.

```js

  const button = document.querySelector('button')
  button.classList.toggle('button')  // O button tem a classe 'button', então ela é removida
  button.classList.toggle('classe-teste')  // O button não tem a classe 'classe-teste', então ela é adicionada

```


### Adicionando texto num elemento com o textContent
Podemos adicionar/alterar o texto exibido em tela de um elemento usando o textContent:

```js

  const button = document.querySelector('button')
  button.textContent = 'Texto'

```


### Adicionando texto num elemento com o innerHTML
Assim como o textContent, o innerHTML também pode adicionar texto num elemento. Mas, além disso, o innerHTML também pode adicionar elementos HTML.

```js

  const button = document.querySelector('button')
  button.innerHTML = 'Texto'  // Adicionando texto normal

```

```js

  // Adicionando elementos html
  const button = document.querySelector('button')
  button.innerHTML = `
    <span>Span 1</span>
    <a>Link</a>
    <span>Span 2</span>
  `

```

O innerHTML também pode ser utilizado para remover todos os elementos filhos do elemento selecionado:

```js

  const div = document.querySelector('.div')
  div.innerHTML = ''

```


### Adicionando estilos num elemento com o style
Como vimos acima, podemos adicionar vários estilos de uma vez (no formato de CSS) usando o `style` ou o `setAttribute('style', 'color: red; font-size: 20px')`

Mas também é possível adicionar propriedades específicas do CSS:

```js

  const h1 = document.querySelectorAll('h1')
  h1.forEach(element => element.style.fontSize = '50px')

```

> Obs: repare que, aqui no javascript, as propriedades CSS são em cammelCase
