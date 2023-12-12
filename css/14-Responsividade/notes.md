# Responsividade

> Responsivar um site é deixá-lo prático, otimizado e sem quebras para todos os tipos de dispositivos (computadores, tablets, celulares, etc..). Para isso, usamos as `media queries` do CSS.

Para criar uma media query no CSS, colocamos `@media` seguido do `tipo do dispositivo` que queremos pegar. Existem 2 tipos principais de dispositivos:

1) Print: se aplica para páginas ou documentos vistos no modo de print (por exemplo ao imprimir ou salvar a página como pdf).
```css

  /* É muito raro usarmos esse tipo de media query */
  @media print {
    .titulo {
      color: blue;
    }
  }

```

* Dentro da media query, escrevo css normal.


2) Screen: Se aplica pra qualquer tipo de tela, por exemplo: desktops, celulares e tablets.
```css

  @media screen {
    .titulo {
      color: red;
    }
  }

```

*E podemos juntar todos os tipos de dispositivos (print e screen) com o tipo `all`. Esse é o jeito mais comum de usar media queries*
```css

  @media all {
    .titulo {
      color: green;
    }
  }

```

## Seletores da media query
Também é possível combinar o `tipo de dispositivo` com um `seletor` do media query. O seletor que mais usamos é baseado na largura da tela, então se eu quero selecionar todos os tipos de dispositivos que tenham uma largura máxima de 500px:
```css

  @media all and (max-width: 500px) {
    .titulo {
      color: blue;
    }
  }

```
> Aqui estamos selecionando todos os tipos de dispositivos (all), mas pegando apenas aqueles que tem uma largura menor do que 500px. Se o dispositivo se encaixar nessas regras, a estilização da media query será aplicada nele, senão nada acontece nele.

> Provavelmente você não verá o seletor `all` sendo utilizado, pois esse é o valor `padrão`. Então se não informarmos o tipo de dispositivo, está implicito que estamos selecionando todos os tipos:
```css

  @media (max-width: 500px) {
    .titulo {
      color: blue;
    }
  }

```

> Um comportamento interessante de notar é que a media query é um seletor que segue a regra normal de `cascata` do CSS. Se adicionarmos um estilo abaixo da media query, o ultimo estilo é o que será aplicado:
```css

  @media (max-width: 500px) {
    .titulo {
      color: blue;
    }
  }

  .titulo {
    color: red;
  }

```

*Por isso que sempre colocamos as media queries no final dos arquivos CSS, e sempre as menores larguras de tela serão as últimas*:
```css

  @media (max-width: 800px) {
    .titulo {
      font-size: 20px;
    }
  }

  @media (max-width: 700px) {
    .titulo {
      font-size: 18px;
    }
  }

  @media (max-width: 400px) {
    .titulo {
      font-size: 16px;
    }
  }

```


> Outro seletor muito usado nas media queries é o `min-width`. A ideia dele é o contrário do max-width:
```css

  @media (max-width: 500px) {
    .titulo {
      color: blue;
    }
  }

  @media (min-width: 600px) {
    .titulo {
      color: red;
    }
  }
  /* Aqui, a cor será vermelha para todos os tipos de dispositivos que tenham uma largura mínima de 600px, ou seja, que tenham mais do que 600px de largura */

```

> Podemos combinar vários seletores em um único media query. Se eu quero que a cor seja azul para uma largura entre 500px e 700px:
```css

  @media (min-width: 500px) and (max-width: 700px) {
    .titulo {
      color: blue;
    }
  }

```

> Se eu quero que a cor seja azul para uma largura maior que 800px ou uma altura menor que 700px:
```css

  @media (min-width: 800px), (max-height: 700px) {
    .titulo {
      color: blue;
    }
  }

```


## Breakpoints padrões
> Existem alguns breakpoints (larguras de tela padrões) muito adotados pela comunidade:
```css

  /* Extra Small	< 576px */
  @media (max-width: 576px) {}

  /* Small	≥ 576px */
  @media (min-width: 576px) {}

  /* Medium	≥ 768px */
  @media (min-width: 768px) {}

  /* Large	≥ 992px */
  @media (min-width: 992px) {}

  /* Extra large	≥ 1200px */
  @media (min-width: 1200px) {}
  
  /* Extra extra large	≥ 1400px */
  @media (min-width: 1400px) {}

```


## Meta tag viewport
Um detalhe importante para que não tenhamos problemas indesejados ao trabalhar com resposividade e media queries é: no `head` dos arquivos HTML é super importante termos a meta tag:
```html

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

```
Pois com ela vamos garantir que nosso layout será flexível e terá escala correta de 1:1, sendo assim, não teremos problemas ao trabalhar com responsividade.
