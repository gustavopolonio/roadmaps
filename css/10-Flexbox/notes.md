# Flexbox

*Um dos assuntos mais importantes e mais usados do CSS*

Flexbox = método que permite espaçar e alinhar os elementos HTML, ou seja, posicionar os elementos HTML da forma que quisermos.

Para aplicar o flexbox em alguma área do documento HTML, temos que ter um flex container (que é o elemento pai). Daí colocamos nele a propriedade `display: flex`. Com isso, os filhos diretos dele passarão a ser os flex-items.

Ao colocar o `display: flex`, os flex items ficam todos na mesma linha (porque esse é o padrão inicial do flexbox) e eles também ficam todos com o mesmo tamanho.

A primeira coisa para entender: as propriedades que passarmos para o flexbox serão aplicadas em relação ao `eixo principal` e ao `eixo secundário`.

Ex.1: Descomentar o background.css e os eixos, e ver o eixo principal e o secundário.

> Por padrão, o eixo principal é na direção horizontal, ou seja, na direção da linha. O secundário é sempre perpendicular ao principal (90°). Por isso, nesse caso, fica na direção vertical (coluna). Os itens do flexbox, por padrão, seguem a mesma direção do eixo principal, nesse caso a linha.

Podemos alterar esse comportamento com a propriedade flex-direction (mudar a direção do eixo principal), mas vamos falar dela um pouco mais pra frente.


1. Posicionando elementos ao longo do eixo principal: `justify-content`
Para posicionar os flex-items ao longo do eixo principal, podemos usar a propriedade justify-content (no flex container):

```css

  .flex-container {
    justify-content: flex-start; /* Valor padrão: flex-items no começo do eixo principal */
    justify-content: center; /* flex-items no centro do eixo principal */
    justify-content: flex-end; /* flex-items no final do eixo principal */

    justify-content: space-between; /* Espaça os flex-items para eles ficarem com a mesma distância entre eles */

    justify-content: space-around; /* Os flex-items têm o mesma distância entre eles, e a metade dessa distância antes do 1o item e depois do último item */

    justify-content: space-evenly; /* A distância entre os flex-items, a distância antes do 1o item e depois do último item são iguais. Todos os espaçamentos têm o mesmo valor */
  }

```

2.Posicionando elementos  ao longo do eixo secundário: `align-items`
Para posicionar os flex-items ao longo do eixo secundário, podemos usar a propriedade align-items (no flex container):
<!-- Aumentar height do flex-container para 400px -->

```css

  .flex-container {
    align-items: stretch; /* Valor padrão: Os flex items se esticam para ter o tamanho do eixo secundário (por isso que eles ficam do mesmo tamanho) */

    align-items: flex-start; /* flex-items no começo do eixo secundário */
    align-items: center; /* flex-items no centro do eixo secundário */
    align-items: flex-end; /* flex-items no final do eixo secundário */

  }

```


Podemos alinhar um flex item ao longo do eixo secundário separadamente, com a propriedade `align-self`:

```css

  .flex-item {
    align-self; /* Alinha um flex item ao longo do eixo secundário (aplicada no flex item) */
  }
  
```

<!-- Colocar `justify-content: center;` e `align-items: center;` -->
> Podemos dar espaçamento entre os flex items, com as props: `gap: <row-gap> <column-gap>`,`row-gap` ou `column-gap` (aplicadas no flex container)


3.Propriedade `flex-wrap`
O flexbox é um modelo unidimensional, ou seja, os flex items ficam apenas numa única linha ou numa única coluna. Por mais que os flex items tenham uma largura (ou altura) muito grande, a ponto de não caberem no flex container, eles se espremem diminuindo de tamanho para ficarem todos na mesma direção principal.
<!-- Colocar width: 250px no flex container -->

Isso acontence porque por padrão a propriedade `flex-wrap: nowrap`, mas podemos alterar esse comportamento com a propriedade `flex-wrap: wrap`. Com isso, se os flex items tiverem uma largura muito grande a ponto de não caberem na mesma direção no flex container, eles começarão se organizar de uma maneira mais inteligente, ocupando as linhas debaixo para manterem a largura que passamos para eles. Aplicada no flex container.

<!-- height: 400px; -->
`align-content`: Distribui os items ao longo do eixo secundário (só funciona se tiver 2 ou mais linhas). Aplicada no flex container.


4.Alterando a direção do eixo principal
<!-- Tirar eixos -->
Como comentamos anteriormente, por padrão o eixo principal é na direção horizontal, porque a propriedade `flex-direction` tem o valor `row`. E todos os flex-items acompanham a direção principal. Mas podemos alterar a direção do eixo principal, para que ele fique na vertical. Para isso, passamos `flex-direction: column`, e notamos que já que os flex items acompanham a direção do eixo principal, eles ficam todos na mesma coluna. E agora podemos usar as mesmas propriedades justify-content para o eixo principal, que agora é na vertical. E align-items para o eixo secundário, que agora é na horizontal.

> Curiosidade:
`flex-direction: row-reverse`
`flex-direction: column-reverse`

5.Controlando o tamanho dos flex items
Controlando `razões` dos flex items ao longo do eixo principal (propriedades aplicadas nos flex items)

* `flex-shrink`: quanto do espaço livre negativo pode ser removido desse item? Quando os flex items não cabem no flex container e se expremem, diminuindo de tamanho. Padrão: `flex-shrink: 1`. Testar: `flex-shrink: 0`

* `flex-grow`: quanto do espaço livre positivo esse item ocupa? Quando sobra espaço no flex container. Padrão: `flex-grow: 0`. Testar: `flex-grow: 1`

* `flex-basis`: tamanho inicial de um flex item. Tem prioridade em relação à prop `width`. Padrão: `flex-basis: auto`

Para que um flex item ocupe o dobro do tamanho de outro, usando o flex-grow, o flex-basis precisa ser zero. Senão, o espaço que ficou a mais no flex container será dividido proporcionalmente ao flex-grow, e adicionado em relação à largura que os flex items já têm. Para isso sobrepomos a width que passamos pro flex item com a prop flex basis.

flex-basis: 0  ⇒  é a partir de 0px que o espaço extra será adicionado.

Essas 3 propriedades podem ser resumidas na prop `flex: <flex-grow> <flex-shrink> <flex-basis>`
Quando tenho apenas um valor nessa prop => flex-basis = 0; defino o flex-grow
Ex: `flex: 1`;

6.Alterando a ordem de aparição dos flex items

Consigo alterar a ordem que os elementos do flexbox aparecem por meio do CSS - sem precisar alterar no HTML.

Propriedade `order` nos flex-items, informando um valor inteiro. Os menores valores inteiros aparecem antes. Se dois ou mais elementos tiverem o mesmo número, o que vem antes no HTML aparece antes.

Só usar quando realmente precisar, porque os leitores de tela vão continuar lendo na ordem que aparece no HTML. Então não é uma boa propriedade para acessibilidade.

7.Propriedades mais usadas do flexbox

> Lembrando que essas propriedades só funcionam se eu declarar um flexbox, ou seja, se eu tiver um elemento pai com `display: flex`.

- justify content
- align items
- gap
- flex-direction
- flex: 1