# Manipulação da DOM

## Criando um elemento
Criamos um elemento HTML pelo javascript usando o método `document.createElement()`. Esse método recebe como parâmetro o nome da tag a ser criada.

```js

  // Sintaxe
  document.createElement('tagName')

```

Criando um elemento h1:

```js

  const title = document.createElement('h1')
  title.className = 'title'
  title.textContent = 'Título principal'
  console.log(title)

```


## Criando vários elementos
Para criar vários elementos devemos criar um loop:

```js

  for (let i = 0; i < 3; i++) {
    const h2 = document.createElement('h2')
    h2.className = 'titulo-secundario'
    h2.textContent = `Título: ${i}`
    console.log(h2)
  }

```


## Adiconando o elemento criado como filho de um elemento pai - appendChild()
Para fazer o elemento criado aparecer em tela é necessário adicionar ele em algum lugar da DOM. Ou seja, é necessário adicioná-lo como filho de algum elemento pai.

O método `appendChild` adiciona o elemento informado como filho de um elemento pai.

```js

  // Sintaxe
  elementoPai.appendChild(elementoFilho)

```

Por exemplo, para criar um elemento h1 e adicioná-lo como filho do elemento `body`, basta:

```js
  // Usando o arquivo index.html como base

  const h1 = document.createElement('h1')
  h1.textContent = 'Título principal'

  document.body.appendChild(h1)

```

> Note que o `appendChild` adiciona o elemento como último filho do elemento pai.


## Removendo um elemento filho de um elemento pai - removeChild()
Para remover um elemento da DOM basta usar o método `removeChild`. Ele retorna o elemento removido.

```js

  // Sintaxe
  elementoPai.removeChild(elementoFilho)

```

Para remover a section do arquivo `index.html`:

```js

  const section = document.querySelector('section')
  document.body.removeChild(section)

```


Vamos usar o arquivo `index1.html` para manipular a DOM.

1) Criando um h1 e adicionando na página:

```js

  const title = document.createElement('h1')
  title.textContent = 'Título da página'
  document.body.appendChild(title)

```

2) Criando um lista e adicionando 3 `li` nela:

```js

  const list = document.createElement('ul')
  document.body.appendChild(list)
  const itemsQty = 3

  for (let i = 0; i < itemsQty; i++) {
    const item = document.createElement('li')
    item.className = `list-item item-${i + 1}`
    item.textContent = `Item: ${i + 1}`
    list.appendChild(item)
  }

```

3) Removendo o 2o item da lista:

```js

  const list = document.querySelector('ul')
  const secondItem = list.querySelector('li.item-2')

  list.removeChild(secondItem)

```

4) Removendo todos os items da lista:

```js

  const list = document.querySelector('ul')
  const items = list.querySelectorAll('li')

  for (let i = 0; i < items.length; i++) {
    list.removeChild(items[i])
  }

  // OU

  const list = document.querySelector('ul')
  list.innerHTML = ''

```


## Adiconando o elemento criado como filho de um elemento pai - append()
O método `append`, assim como o `appendChild`, adiciona o elemento informado como filho de um elemento pai. As diferenças entre eles são as seguintes:

1) É possível adicionar strings com o `append`, enquanto que o `appendChild` só adiciona elementos.

2) `append` não tem nenhum valor no retorno, o `appendChild` retorna o elemento adicionado.

3) `append` pode adicionar diversos elementos e strings de uma vez, o `appendChild` só pode adicionar um elemento de cada vez.

```js

  // Sintaxe
  elementoPai.append(elementoFilho1, elementoFilho2, ..., elementoFilhoN)

```

Por exemplo, para criar um elemento h1 e uma section e adicioná-los como filhos do elemento `body`, basta:

```js
  // Usando o arquivo index1.html como base

  const h1 = document.createElement('h1')
  h1.textContent = 'Título principal'

  const section = document.createElement('section')

  document.body.append(h1, section)

```
