https://github.com/sudheerj/reactjs-interview-questions/blob/master/README.md#what-is-react

# 1 - O que é React

  React é uma biblioteca JavaScript de front-end open source usada para a criação de interfaces de usuário web's e nativas. Com o React é possível criar interfaces de usuário a partir da junção de pedaços de códigos, chamados de componentes.

# 2 - Quais são as principais características do React?

  - Usa a sintaxe JSX, um extensão do Javascript tradicional, que permite a escrita do HTML no mesmo arquivo do JS.
  - Usa a Virtual DOM ao invés da Real DOM, já que manipulações na Real DOM são mais custosas (em relação à performance)
  - Suporta server side rendering (SSR), o que é útil para SEO
  - É unidirecional ou one-way dat flow ou data binding 
  - Usa componentes reutilizáveis para a construção das telas

# 3 - O que é JSX?

  JSX é uma abreviação para Javascript XML. É uma extensão do Javascript tradicional, que permite a escrita de códigos HTML em conjunto com JS. Isso faz com que a lógica de renderização e a linguagem de marcação fiquem juntas no componente relacionado à elas, garantindo melhor sincronização.

# 4 - O que são e como criar componentes no React?

  Os componentes são blocos de códigos isolados, independetes e reutilizáveis que juntos formam as UI's no React. Eles podem ser criados de duas maneiras:

  1) Functions components: Jeito mais simples de criar um componente. São funções Javascript puras que aceitam propriedades no formato de objeto como primeiro parâmetro e retornam elementos React para renderização:
  ```js
  
    function Greeting({ message }) {
      return <h1>{`Hello, ${message}`}</h1>
    }

  ```

  2) Class components: É possível usar classes ES6 para definir um componente. O function component acima pode ser escrito em formato de class component:
  ```js
  
    class Greeting extends React.Component {
      render() {
        return <h1>{`Hello, ${this.props.message}`}</h1>
      }
    }

  ```

# 5 - O que são componentes puros?
Componente puro só será renderizado novamente se as props ou os estados mudarem. Ele evita renderizações desnecessárias. Podemos atingir isso com o React.memo
  
# 6 - O que é estado no React?
  
  O estado de um componente no React é um objeto que armazena algumas informações do componente que podem mudar. O ponto importante é que quando o objeto do estado muda (com a função setState), o componente e seus filhos renderizam novamente, mantendo o valor do estado anterior (diferentemente das variáveis locais que não são persistidas entre renderizações). Por isso é importante sempre tentar minimizar a quantidade de componentes que possuem estado.

# 6.1 - Por que não devemos atualizar um estado diretamente?

  Se atualizarmos um estado diretamente o componente não será renderizado novamente. Ao invés disso, devemos usar a função setState(). Ela 'agenda' uma atualização no objeto de estado do componente. E quando esse estado mudar, o componente responde renderizando novamente.

# 7 - O que são propriedades no React?

  Props são inputs para os componentes. As props são valores únicos ou objetos contendo um conjunto de valores que são passados por um componente na criação dele. São similares aos atributos das tag's HTML.
  As props são passadas de um componente pai para um filho, e nunca o contrário.

  Os principais usos de props são:
  - Passar dados customizados para um componente
  - Acionar mudança de estado

# 8 - Quais as diferenças entre estado e propriedade?

  No React, ambos estado e propriedade são objetos Javascript simples usados para gerenciar os dados de um componente. Mas são usados para fins diferentes.
  O estado é gerenciado pelo próprio componente e pode ser atualizado com a função setState. Diferente das propriedades, o estado pode ser modificado pelo próprio componente e é usado para gerenciar o estado interno de um componente. A mudança num estado gera renderização do componente e dos seus elementos filhos.
  Propriedades são passadas para um componente pelo seu componente pai e são read-only, ou seja, não podem ser alteradas pelo componente em si. As props podem ser usadas para configurar o comportamento de um componente e para passar dados entre componentes.

# 9 - 3 momentos principais em que um componente é renderizado novamente no React:

- Quando algum estado altera
- Quando alguma propriedade altera
- Quando um componente pai renderiza novamente

# 10 - Ao percorrer um array com map, por que não posso usar o índice do array como valor do atributo key?

  O atributo key ajuda o React a identificar quais itens do array foram alterados, adicionados ou removidos. Cada item deve ter um valor único de key.
  Porque ao usar os índices do array como key o React não vai renderizar como esperado.
  Por exemplo: se um componente pai recebe uma array de 5 itens e renderiza 5 componentes baseados no array. Suponha que o 3° item é removido do array. Na próxima renderização o pai receberá um array com 4 itens, e o React vai renderizar 4 componentes. No entanto, vai parecer que o item removido foi o 5°, porque o React não tem como diferenciar os itens baseados no índice do array.

  ```jsx
    const posts = [1, 2, 3, 4, 5]
    // Posição do array como índice: 0, 1, 2, 3, 4

    // Se remove o 3°:
    const posts = [1, 2, 4, 5]
    // Posição do array como índice: 0, 1, 2, 3
  ```

  # 11 - O que é um contexto?

    Contexto é uma maneira de passar dados entre componentes, sem precisar passar propriedades manualmente de pai para filho em cada nível da árvore de elementos.
    Os contextos são úteis quando temos alguma(s) informações que serão usadas por diversos componentes da aplicação, em diversos níveis diferentes da árvore de elementos. Por exemplo: dados sobre usuários autenticados, temas UI e preferências locais.

# Por que o React é unidirecional ou one-way dat flow ou data binding?

  Data binding é o processo de conectar a UI com os dados que preenchem ela. No React, os componentes são renderizados para a UI e a lógica do componente contém os dados que serão mostrados na UI. Essa conexão entre os dados mostrados na tela e a lógica do componente é chamada de data binding.

# O que são hooks?

  Os hooks permitem usar features nativas do React (built-in hooks) ou usar features sem ter que escrever classes (criando meus próprios hooks) nos componentes. Mais usados (estados, contexto, ref, effect)

# Fale mais do useEffect?

  É um dos hooks mais importantes do React, que permite executar efeitos colaterais em componentes funcionais. Então, o useEffect permite, por exemplo, executar um pedaço de código sempre que alguma dependência alterar de valor ou fazer uma chamada para API quando o componente montar.

# O que é Virtual DOM?

  A virtual DOM é um conceito implementado por lib's e não pelos navegadores.
  Ao desenvolver apliações com HTML, é por meio da DOM que podemos manipular os elementos dele. Porém, cada acesso à DOM leva um tempo e cada alteração obriga o navegador a renderizar novamente a parte alterada. Então, quanto mais coisas precisam ser atualizadas, menor será a performance.
  Já a virtual DOM é uma representação da DOM mantida em memória. Assim, as alterações são feitas na virtual DOM, e é feita uma sincronização entre a virtual DOM e DOM real (reconciliação), fazendo com que haja o menor número possível de acessos ao DOM real, melhorando a performance das aplicações.


# SSR x SPA?
  Single page application (React): tipo de aplicação web que carrega uma única página html, e em vez de carregar páginas novas inteiras no servidor para cada interação do usuário, atualiza dinamicamente o conteúdo da página.
   quando o usuário faz uma req, o back busca no db os dados pedidos, mas o back não é mais responsável por construir a tela. O back retorna no formato JSON (estrutura de dados para transmitir dados entre fonte e destino) apenas os dados necessários para construir a tela. O app front (React) transforma esses dados JSON em html, css e js.
  
  Server side rendering (Next): o servidor recebe a requisição feita pelo usuário (browser). O server tem o back e o front, ele cria a página inteira (html, css e js) e devolve ela pronta para o browser. Bom para SEO (indexa a página antes de ser carregada no browser).
  

# Imutabilidade no React

  É uma boa prática não mutar as variáveis, ou seja, não alterar o valor delas na memória. É melhor criar um novo espaço na memória. 
  Isso gera mais performance: no algoritmo de reconciliação, baseado na virtual DOM, o React fica analisando se um valor mudou ou não para ver quais partes do app precisam ser atualizadas. Então é melhor criar um novo valor na memória e comparar com o valor passado.

# Closures no React

  Se eu tenho um estado que armazena um valor numérico e uso a função setState para atualizar o valor dessa variável 3x seguidas, o valor dela será aumentado em apenas 1, pois as 3 chamadas para a setState estão acontecendo no mesmo contexto (o componente não foi re-renderizado após a 1a execução da setState).
  Solução: para atualizar uma variável de estado que depende do valor que essa variável tinha anteriormente (ex: um contador), eu passo uma função como 1o parâmetro da setState e capturo o valor mais recente desse estado.

  ```js
  
    setCount((state) => state + 1)
  
  ```

  O 2o parâmetro da setState é uma fç callback, nela posso pegar o valor mais recente do estado também para executar alguma função, por exemplo.
