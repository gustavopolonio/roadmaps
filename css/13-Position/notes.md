# Position

> Usamos a propriedade position para posicionar os elementos HTML de algumas formas específicas.

1) Position: static
  - Todos os elementos HTML têm esse valor por padrão.

2) Position: relative
  - Comportamento bem parecido com a static, mas o elemento com `relative` pode se deslocar relativamente a posição dele mesmo, usando as propriedades top, right, bottom e left.

Aplicar no css:
```css

  .div2 {
    position: relative;
    top: 80px;
    left: 100px;
  }

```

  - O descolamento do elemento com position relative não afeta os outros elementos, ou seja, os demais elementos continuam onde estão, independente dos valores que passarmos. Eles agem como se o elemento deslocado estivesse ocupando o lugar original dele.
  - Mas geralmente não usamos top, right, bottom e left diretamente num elemento com position relative.

3) Position: absolute
  - O elemento com position `absolute` é posicionado em relação ao seu elemento ancestral mais próximo que seja posicionado (posicionado = ter um valor de position relative, absolute, fixed ou sticky, ou seja, qualquer valor que não seja static).
  - Se nenhum elemento ancestral for posicionado, o elemento com position `absolute` é posicionado em relação à página página html.

```css

  .div2 {
    position: absolute;
    top: 0;
    right: 0;
  }

```

  - Elemento é removido do fluxo normal do documento, portanto os demais elementos se posicionam como se ele não existisse.

> Lembrando que os 4 valores da prop position podem receber qualquer valor de medida, por exempo px, porcentagem, rem e assim por diante.


*Mas o jeito que mais usamos o position absolute é mesclando ele com o relative. Pois sempre que precisarmos posicionar um elemento em relação ao outro, colocamos relative no pai e absolute no filho. Assim, é só posicionar o filho em relação ao pai.*
Por exemplo, para posicionar a div2 em relação ao à div container:

```css

  .container {
    position: relative;
  }

  .div2 {
    position: absolute;
    top: 0;
    left: 0;
  }

```

4) Position: fixed
  - É parecido com o absolute, pois o elemento também é removido do flow normal do documento, portanto os demais elementos se posicionam como se ele não existisse.
  - A diferença é que com fixed, o elemento é posicionado sempre em relação à página html. E ele sempre fica visível no local que definirmos para ele, independente da página scrollar ou não. 
  - O fixed é usado para criar um elemento flutuante que fica no mesmo lugar da página, independente de scrolling.

```css

  .container {
    height: 2000px;
  }

  .div2 {
    position: fixed;
    top: 0;
    left: 0;

    /* position: absolute; */
    /* Se fosse position absolute o elemento não ficaria aparencendo ao dar scroll */
  }

```

5) Position: sticky
  - É uma mistura entre `relative` e `fixed`, pois o elemento fica agindo como se fosse relative, até atingir um limite que colocarmos nele, dai ele passa a ser fixed.

```css

  .container {
    height: 2000px;
  }

  .div2 {
    position: sticky;
    top: 0;
  }

```


*Resumão!*

Por padrão, os elemento têm position: `static`.

O position `relative` age semelhante ao static, mas com ele podemos aplicar as propriedades top, right, bottom e left no elemento.

O position `absolute` faz com que os demais elementos se posicionem como se ele não existisse. E ele é posicionado em relação ao seu elemento ancestral mais próximo que tenha um position diferente de static. Se nenhum tiver, é posicionado em relação à página nossa página html.

> O que mais usamos no dia a dia é a junção entre relative e absolute.

O `fixed` é parecido com o absolute, pois os demais elementos se posicionam como se ele não existisse. A diferença é que com fixed, o elemento é posicionado sempre em relação à página html. E ele sempre fica visível no local que definirmos para ele, independente da página scrollar ou não.

`Sticky` é uma mistura entre relative e fixed. O elemento age como se fosse relative, até atingir o limite que definimos, dai ele passa a ser fixed.