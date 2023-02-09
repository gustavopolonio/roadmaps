# Box Model

Box Model = Modelo de Caixa => Modelo que os navegadores representam os elementos HTML (todos os elementos HTML são representados no formato de uma caixa retangular).

Ex.1: Mostrar no DevTools o formato de caixa que esses elementos HTML são representados.


> Obs: A maioria dos elementos HTML têm estilizações padrões, por exemplo `h1` tem margens em cima e embaixo (mostrar no DevTools).


Todas essas caixas, ou seja, todos os elementos HTML são compostos por 4 partes (4 camadas ou 4 áreas) - Abrir e analisar Imagem 1

*As 4 partes são:*

1. Content (conteúdo):
Contém o conteúdo real do elemento. Esse conteúdo pode ser textos (por exemplo os textos das tag’s h1, p, button e assim por diante), imagens ou vídeos.

Ex.2: Mostrar o content do box model do `h1` no DevTools.


2. Padding (preenchimento):
É o preenchimento interno do elemento, ou seja, é a área que vai preencher internamente o elemento.
O padding é definido pela propriedade `padding` no CSS, em que definimos qual será o valor desse preenchimento no topo, na direita, embaixo e na esquerda do elemento.

Ex.2.1: Aplicar padding no `h1` e ver o box model no DevTools

> Obs: A propriedade padding aceita abreviações.
```css

  h1 {
    /* top | right | bottom | left */
    padding: 16px 8px 0 32px;
  
    /* Mesmo valor aplicado para os 4 lados do elemento */
    /* padding: 16px 16px 16px 16px; */
    padding: 16px;
  
    /* top e bottom | right e left */
    /* padding: 16px 32px 16px 32px; */
    padding: 16px 32px;
  
    /* top | right e left | bottom */
    /* padding: 16px 32px 8px 32px; */
    padding: 16px 32px 8px;
  }

```


3. Border (borda):
É a borda que o elemento terá.
O estilo e o tamanho da borda são definidos com a propriedade `border` no CSS.
Informamos a espessura da borda, seguido pelo estilo (tracejada, com pontinhos, normal, etc..) e seguido pela cor.
`border: <espessura> <estilo> <cor>`

Ex.2.2: Aplicar border no `h1` e ver o box model no DevTools.

As informações da borda também podem ser definidas separadamente, com as propriedades `border-width`, `border-style` e `border-color`. Essas 3 propriedades aceitam as mesmas abreviações do `padding`.


4. Margin (margem):
É a área ocupada pela margem do elemento. Geralmente usamos para separar um elemento dos demais elementos ao redor dele.
A margin é definida pela propriedade `margin` no CSS, em que definimos qual será o valor dessa margem no topo, na direita, embaixo e na esquerda do elemento.

Ex.2.3: Aplicar margin no `h1` e ver o box model no DevTools

> Obs: A propriedade margin aceita as mesmas abreviações da padding.
> Obs 2: As margens aceitam valores negativos.


Ex.3: Colocar as propriedades do box model apenas na 1a div e comparar com a 2a.


## Propriedade box-sizing
Quando defino uma largura (width) e uma altura (height) pro elemento, esses valores variam de acordo com o padding e border que passo.

Ex.4: Aplicar padding e border no `h1` e ver se a largura e altura que passei para ele mudam.

Isso acontece porque por padrão todos os elementos HTML: `box-sizing: content-box`. O nome da propriedade já diz tudo: o tamanho da caixa (do elemento) será aplicado na parte do content. Ou seja, o width e height definem apenas o tamanho do conteúdo do elemento. Sendo assim, o tamanho total do elemento será: `width + padding + border`

Esse comportamento é ruim na maioria dos casos, já que quando tenho um layout pronto, sei exatamente o tamanho que cada elemento deve ocupar. E não quero ficar fazendo cálculo entre o width, padding e border para saber o tamanho total ocupado pelo elemento.

Para resolver isso, passamos o valor: `box-sizing: border-box`, para que o tamanho (width e height) que eu passar para um elemento seja aplicado até a parte da borda dele, ou seja, o tamanho vai incluir as partes do conteúdo, do padding e da borda. Sendo assim, o tamanho total do elemento será os valores do width e do height.

Abrir e analisar Imagem 2

Ex.4.1: Mudar o valor da box-sizing do `h1` e ver se a largura e altura que passei para ele mudam.


## Reset CSS
Em quase todos os projetos colocamos estilizações iniciais para os elementos (resetamos o CSS):
```css

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

```

Seletor all: * => Todos os elementos terão o comportamento `border-box` e zeramos a margin e o padding de todos os elementos para facilitar a estilização.



> Resumo: O padding é o preenchimento interno do elemento, ou seja, nós podemos criar um espaço extra dentro do elemento. A borda já é auto explicativa, é para colocar uma borda no elemento. E a margin é a parte de fora do elemento, para espaçar os elementos um do outro, criando um espaço extra fora do elemento.