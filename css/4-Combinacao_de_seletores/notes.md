# Combinação de seletores

O CSS permite a combinação de seletores, para deixar o seletor mais específico.


## Juntar os seletores de um elemento

Ex: Selecionar todos os h2 que tenham a classe “titulo-secundario"

<body>
  <h2 class=“titulo-secundario”>Título secundário</h2>
  <h2 class=“titulo”>Título</h2>

  <div>
    <h2 class=“titulo-secundario”>Título secundário</h2>
  </div>
</body>

```css

  h2.titulo-secundario {
    propriedade: valor;
  }

```


Ex: Selecionar todos os elementos que tenham o id “texto" e as classes “grande” e “verde”

<body>
  <h2 id="texto1" class="grande verde azul">Título secundário</h2>
  <h2 class="titulo-secundario">Título secundário</h2>

  <div>
    <p id="texto" class="grande verde">Texto</p>
  </div>

  <strong id="texto3" class="verde">Texto</strong>
</body>

```css

  #texto.grande.verde {
    propriedade: valor;
  }

```


## Selecionar os elementos filhos de um elemento ancestral

Separar com um espaço esses seletores.

Ex: Selecionar todos os elementos h3 que estão dentro de uma div

<body>
  <div>
    <h3>Selecionado</h3>   
    <h3>Selecionado</h3>   
    <span>
      <h3>Selecionado</h3> 
    </span>
  </div>

  <h3>Não Selecionado</h3>
</body>

```css

  div h3 {
    propriedade: valor;
  }

```


*Mesclar esses tipos de combinações, para criar seletores mais específicos*

Ex: Selecionar todos os h2 de classe "titulo" que estão dentro de uma section de classe “secao”

<body>
  <section class="secao">
    <h2 class="titulo">Titulo</h2>
  </section>
</body>

```css

  section.secao h2.titulo {
    propriedade: valor;
  }

```


## Compartilhar a mesma estilização entre diversos seletores diferentes

Por exemplo: se eu tenho 2 seletores que têm a mesma estilização, posso juntá-los:

```css

  .cor-principal {
    color: red;
  }

  .cor-vermelho {
    color: red;
  }

```
Juntando (e evitando duplicação de código):

```css

  .cor-principal, .cor-vermelho {
    color: red;
  }

```


## Seletor que seleciona TODOS os elementos do HTML

O seletor com sinal de asterisco (*) seleciona todos os elementos do HTML
Usamos esse seletor para definir estilizações padrões (que todos os elementos HTML vão ter), por exemplo definir qual fonte será usada no site:

```css

  * {
    font-family: "Roboto";
  }

```


Ex.1: Colocar o texto de todos os paragráfos (elemento p) de classe 'paragrafo-padrao' e que estão dentro de alguma seção (elemento section) na cor azul.