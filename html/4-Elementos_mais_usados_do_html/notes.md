# Elementos mais usados do HTML

- Bora colocar a mão na massa, criar um projeto juntos para aprender os principais elementos do HTML.

Projeto que vamos fazer:
C:\Users\gusta\Desktop\aulas-youtube\intoducao-desenvolvimento-web\Como-programar-um-Carrinho-de-Compras_Tutorial-JavaScript


## Estrutura básica dos elementos (tag's) HTML

- A maioria dos elementos HTML são compostos pela tag inicial (tag de abertura) e pela tag final (tag de fechamento). Entre a tag de abertura e fechamento vai o conteúdo do elemento (que pode ser outros elementos ou textos).
  Ex: Elemento h1 com texto dentro e elemento div com outro elemento dentro
  ```html
  
    <h1>Título pincipal</h1>

    <div>
      <h2>Título secundário</h2>
    </div>
  
  ```

- No entanto, existem elementos que não possuem conteúdo, por isso não têm uma tag de fechamento. Esses são os elementos vazios. Repare que o elemento fecha nele mesmo.
  Ex: Elemento img
  ```html
  
    <img src="" alt="" />
  
  ```

- Todos os elementos HTML podem receber atributos. Os atributos são características adicionais que podemos fornecer aos elementos. Por exemplo, o elemento `img` pode receber os atributos `src` que indica o caminho do arquivo da imagem adicionada e `alt` que indica o texto alternativo caso a imagem não seja carregada.
  Ex: Elemento com os atributos classe e id
  ```html
  
    <div class="classe-1" id="id-1"></div>
    <div class="classe-1" id="id-2"></div>
  
  ```


## Elementos genéricos

A maioria dos elementos que vimos até aqui possuem significado, ou seja, o próprio nome do elemento deixa claro qual a função dele. 
  Ex: 
    `head`: usado para armazenar o conteúdo do cabeçalho
    `img`: usado para adicionar uma image
    `h1 ... h6`: usados para heading, ou seja, definir os títulos da página

No entanto, algumas partes da página não possuem nenhum significado. Nesses casos usamos os elementos genéricos. Os dois principais elementos genéricos são: `div` e `span`. Ambos são usados para agrupar elementos html que não possuem significado ou quando o significado em questão não se refere a um elemento HTML existente.

> A diferença entre a div e o span é que o elemento div é um elemento do tipo `block`. Por isso a div vai aparecer numa linha diferente dos demais elementos que estão ao redor dela. Já o span é um elemento do tipo `inline`, por isso aparece na mesma linha dos demais elementos ao redor dele. 


Ex.1: Criar um novo arquivo html com a abreviação e passar pelos elementos.