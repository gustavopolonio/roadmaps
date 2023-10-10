# Tipos principais de seletores

### O CSS possui 3 tipos principais de seletores:
1. Elemento
2. Classe
3. ID

## Elemento
Vimos no exemplo anterior o uso de elementos como seletores, quando colocamos todos
os elementos h1 na cor vermelha

```css

  h1 {
    color: red; 
  }

```
Podemos usar qualquer elemento HTML como seletor. A estilização que passarmos para
esse seletor será aplicada em todos os elementos HTML do tipo escolhido. Ex:

```css

  div {
    color: red;
  }
  p {
    color: red;
  }
  strong {
    color: red;
  }

```

Ex.1: Colocar cor de fundo preta em todas as div's e cor branca em todos os textos


## Classe
Classes são os tipos de seletores mais utilizados. A classe é um atributo global,
ou seja, todos os elementos HTML podem receber ela.

* Criando uma classe num elemento HTML:
<h1 class="nome-da-classe">
  Título
</h1>

`O nome de uma classe não pode ter acentos ou espaços`

* Um elemento pode receber diversas classes no mesmo atributo class:
<h1 class="nome1 nome2 nome3">
  Título
</h1>

*Como selecionar uma classe no CSS ?*
Usando um ponto (.) seguido pelo nome da classe:

```css

  .nome-da-classe {
    propriedade: valor;
  }

```

*Por que as classes são os tipos de seletores mais utilizados ?*
Elas são ótimas para criar códigos reutilizáveis.

Ex.2: Criar 3 botões com a mesma largura e mesma altura, sem duplicar código CSS. Cada botão deve ter uma cor de fundo única.


## ID
Evitar usar ID's como seletores!
ID = Identificador Único de um elemento.
ID's também são atributos HTML.

`Cada elemento deve ter no máximo 1 ID`
`Não devemos adicionar o mesmo ID em 2 ou mais elementos numa mesma página HTML`

<h1 id="nome-do-id">
  Título
</h1>

*Como selecionar um ID no CSS ?*
Usando sinal de hashtag (#) seguido pelo nome do ID:

```css

  #nome-do-id {
    propriedade: valor;
  }

```

> Como o ID deve ser único para cada elemento, não podemos fazer o Ex.2 dos 3 botões (reaproveitando código) usando ID's como seletores

Ex.2.1: Criar os mesmos 3 botões do exercício passado usando ID's como seletores.



*Sequência de uso que recomendo para seletores*
classe > elemento > ID