# Ligação entre o CSS e o HTML

Existem 3 formas de adicionar CSS no HTML:


1. Adicionar estilos inline com o atributo `style`.

Acabamos de ver um exemplo de estilo inline ao adicionar a cor azul no elemento h1:
<body>
  <h1 id="titulo" style="color: blue">Título</h1>
</body>

> Obs: essa não é uma boa prática, pois o HTML foi feito apenas para definir o conteúdo da página, e não para conter a apresentação de estilos dela. E também não conseguimos reutilizar o código CSS dessa maneira.


2. Adicionar o elemento style dentro do head do HTML e passar os estilos normalmente dentro desse elemento:

<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
<body>
  <h1>Título</h1>
</body>

> Obs: essa também não é a melhor prática, já que desse modo a estilização da página ainda fica definida no arquivo HTML e não no CSS. E ainda não podemos reutilizar esse código CSS entre as outras páginas do nosso site.


3. Criar arquivos exclusivos para os códigos css

* Esses arquivos podem ser reutilizados em todas as páginas do nosso site
* O formato do arquivo vai ser o `nome-arquivo.css`

Para linkar um arquivo CSS dentro de um arquivo HTML colocamos um elemento `link` no head do HTML:
<head>
  <link rel="stylesheet" href="nome-arquivo.css" />
</head>

> rel=”stylesheet” => o elemento link criado tem uma relação do tipo folha de estilos com o HTML
> href => aponta para o arquivo css


Ex.1: Criar um arquivo HTML e um CSS e linkar um ao outro. Checar se o link tá funcionando.



## Como fazer comentários num arquivo CSS
Os comentários são textos que não influenciam no código e podemos escrevê-los para:
- Deixar claro o que um pedaço do nosso código faz
- Documentar o código
- Escrever alguma observação
- Etc...

Comentário em arquivos CSS: `    /* Comentário aqui dentro */    `

```css

  /* Colocando título na cor vermelha */
  .titulo {
    color: red;
  }

```