# Ouvidores de eventos

Pelo JavaScript é possível adicionar ouvidores de eventos (event listener) em qualquer elemento do HTML. Esses ouvidores de eventos ficam "ouvindo" se o evento passado foi executado no elemento. Quando o evento for executado, a função que passarmos será chamada.

Exemplo: é possível adicionar um ouvidor de eventos num botão para executar uma função assim que o botão for cliclado.

# Usando o método addEventListener para adicionar event listeners

```js

  // Sintaxe
  elemento.addEventListener(event, fçCallback)

```

> Obs: a fçCallback pode receber um parâmetro (`e`) que é o objeto do event listenter. Ele contém alguns dados, por ex. contém o elemento selecionado (`e.target`)

Adicionando um ouvidor de eventos no botão do `index.html` para dar um console.log quando clicar nele:

```js

  const button = document.querySelector('.click-button')

  button.addEventListener('click', () => {
    console.log('Botão foi clicado')
  })

```

Existem diversos eventos que podem se capturados, vamos ver os principais:


1) click: Usado para capturar o clique em algum elemento (não necessariamente um botão)

```js

  const divParagraph = document.querySelector('.div-paragraph')

  divParagraph.addEventListener('click', () => {
    console.log('Clicou na div do parágrafo')
  })

```


2) input e change: Usados para capturar mudanças no valor de inputs

```js

  const input = document.querySelector('input')
  const span = document.querySelector('.input-span')

  input.addEventListener('input', (e) => {
    span.textContent = e.target.value
  })


  const selectElement = document.querySelector(".ice-cream");
  const result = document.querySelector(".result");

  selectElement.addEventListener('change', (event) => {
    result.textContent = `Você gosta de ${event.target.value}`;
  });

```

> Obs: os eventos `input` e `change` podem apresentar comportamentos diferentes dependendo a situação. As mudanças do input sempre serão capturadas na hora.


3) keypress, keydown e keyup: Usados para capturar cliques no teclado.

- keypress: captura qualquer clique no teclado

```js

  window.addEventListener('keypress', (e) => {
    console.log(e.key)

    if (e.key === 'a') {
      console.log('Letra A')
    }
  })

```


- keydown: captura quando uma tecla é pressionada

```js

  window.addEventListener('keydown', (e) => {
    console.log(e.key)

    if (e.key === 'ArrowUp') {
      console.log('Seta para cima')
    }
  })

```


- keyup: captura quando uma tecla é soltada

```js

  window.addEventListener('keyup', (e) => {
    console.log(e.key)

    if (e.key === 'ArrowRight') {
      console.log('Seta para direita soltada')
    }
  })

```


4) submit: Usado para capturar o envio de um formulário

```js

  const form = document.querySelector('form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()  // Por padrão o formulário recarrega a página quando submitado. Para evitar isso
    // chamamos o método preventDefault

    const formElement = e.target

    const firstName = formElement['first-name'].value  // Valor do 1o input
    // OR
    // const firstName = formElement.querySelector('.first-name').value

    const lastName = formElement['last-name'].value  // Valor do 2o input

    console.log('firstName: ', firstName)
    console.log('lastName: ', lastName)
  })

```