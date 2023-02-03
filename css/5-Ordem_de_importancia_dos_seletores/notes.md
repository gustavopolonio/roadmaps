# Ordem de importância dos seletores

*Se tiver 2 ou mais seletores para o mesmo elemento, qual estilo será aplicado ?*
Ordem de prioridade (hierarquia) do CSS: elementos < classes < ID

```css

  #id.classe1.classe2 {
    propriedade: valor; /* Esse estilo será aplicado */
  }

  .classe1.classe2.classe3 {
    propriedade: valor;
  }

```

> Dica: Contar o número de ID’s, depois de classes, depois o de elementos. Se todos forem iguais, o estilo que vem por último será aplicado.

> Obs: É por isso que o CSS é chamado de Folha de Estilos em Cascata, porque temos uma folha (arquivo) próprio para aplicar estilos, e os estilos são aplicados de cima para baixo (no formato de cascata): aquele que vier por último será aplicado (respeitando a ordem de importância acima).



### Todos os estilos inline vão sobrepor o resto
No exemplo abaixo, o h1 fica na cor blue (azul)

<body>
  <h1 id="titulo" style="color: blue">Título</h1>
</body>

```css

  #titulo {
    color: red;
  }

```


*Como alterar a ordem de importância dos seletores?*
O ponto de exclamação (!) seguido da palavra chave important altera a ordem de importância.
`!important`


Utilizando o último exemplo, mas adicionando important na cor red (vermelho), faria o h1 ficar na cor red

<body>
  <h1 id="titulo" style="color: blue">Título</h1>
</body>

```css

  #titulo {
    color: red !important;
  }

```


Outro exemplo: por mais que a cor blue seja aplicada depois do que a orange, a cor da classe "titulo" será orange por cause do `!important`

```css

  .titulo {
    color: orange !important;
  }

  .titulo {
    color: blue;
  }

```


Ex.1: Qual estilo é aplicado nesses casos?