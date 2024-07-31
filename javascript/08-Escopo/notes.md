# Escopo
É o pedaço de código que está entre 2 chaves {}. Ex: escopo de fç, escopo do if, escopo do for, etc...

Ex:
```js

  if (true) {
    // Inicio do escopo do if
    console.log('Oi')
    // Final do escopo do if
  }


  function soma(a, b) {
    // Inicio do escopo da fç
    return a + b
    // Final do escopo da fç
  }

```

> E por que é importante entender os escopos? Porque uma variável ou uma expressão só pode ser acessada se estiver "no escopo atual". Caso contrário, essa variável ou essa expressão não estarão disponíveis para uso.
> Imagine que escopo é uma caixa e tudo que for criado nessa caixa pode ser acessado por qualquer objeto dentro da mesma.

Ex:
```js

  let a = 'JavaScript' // Variável a foi criada no escopo global (raiz do arquivo). Portanto pode ser acessada em qualquer local desse arquivo
  let b = 10 //  Variável b foi criada no escopo global, igual a variável a

  function letsLearnScope() {
    // Escopo de fç
    console.log(a, b) // Tenho acesso a ambas as variáveis
    let value = false  // Variável value foi criada no escopo local da função. Portanto pode ser acessada APENAS dentro da fç

    if (true) {
      // Variáveis criadas dentro do if pertencerão ao escopo local do if
      let a = 'Python'
      let b = 20
      let c = 30
      console.log(value)  // false
      value = true
      console.log(a, b, value) // Python 20 true
    }

    console.log(a, b, value) // JavaScript 10 true
    console.log(c) // Não consigo acessar a variável c, pois ela pertence ao escopo local do if
  }

  letsLearnScope()
  console.log(a, b) // JavaScript 10

```

> Os escopos também seguem as hierarquias, de modo que os escopos filhos tenham acesso aos escopos pais, mas não vice-versa.

```js

  if (true) {
    // Escopo de if
    let n1 = 1
    const n2 = 2

    if (true) {
      // Escopo de if
      // Dentro do escopo desse if tenho acesso ao escopo do if de cima (escopo pai)
      console.log(n1)
      console.log(n2)
      let n3 = 3
    }

    console.log(n1)
    console.log(n2)
    console.log(n3)  // Não tenho acesso ao n3, pois ela foi criada no escopo filho
  }

```