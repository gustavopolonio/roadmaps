# Elemento table

Para criar uma tabela no HTML usamos o elemento `table`.

Uma `table` pode conter um header `thead` e um footer `tfoot`. Os dados da tabela ficam dentro da tag `tbody`.

Cada linha da tabela é criada pelo elemento `tr`. (Table row)

As células que são o header (título) de um grupo de células são definidas no elemento `th`. Já as células que contêm dados, são definidas no elemento `td`.

Exemplo de tabela simples:

```html

  <table>
    <thead>
      <tr>
        <th>Banda</th>
        <th>Vocal</th>
        <th>Guitarrista</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Guns</td>
        <td>Axel</td>
        <td>Slash</td>
      </tr>
  
      <tr>
        <td>Red Hot</td>
        <td>Kiedis</td>
        <td>John</td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <th>Total de bandas</th>
        <td>2</td>
      </tr>
    </tfoot>
  </table>

```

No exemplo acima a linha do footer contém apenas 2 colunas, portanto a última coluna fica vazia. Se eu quisesse que a 1a coluna ficasse vazia, eu poderia criar um `td` (ou um th) sem valor nenhum dentro:

```html

  <tfoot>
    <tr>
      <td></td>
      <th>Total de bandas</th>
      <td>2</td>
    </tr>
  </tfoot>

```

Mas e seu eu quisesse que a célula do texto `Total de bandas` ocupasse 2 colunas ao invés de uma? Usaria o atributo `colspan`:

```html

  <tfoot>
    <tr>
      <th colspan="2">Total de bandas</th>
      <td>2</td>
    </tr>
  </tfoot>

```

> Qualquer célula da tabela pode receber o atributo colspan para ocupar quantas células eu achar necessário.

A mesma ideia acontence quando uso o atributo `rowspan`. A célula passará a ocupar a quantidade de linhas que eu definir:

```html

  <tr>
    <td rowspan="2">Guns</td>
    <td>Axel</td>
    <td>Slash</td>
  </tr>

```

*Obs: é sempre interessante passar o atributo `scope` para as tag's `th`. Esse atributo define quais células que o elemento `th` se refere*

```html

<table>
  <thead>
    <tr>
      <th scope="col">Banda</th>
      <th scope="col">Vocal</th>
      <th scope="col">Guitarrista</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Guns</td>
      <td>Axel</td>
      <td>Slash</td>
    </tr>

    <tr>
      <td>Red Hot</td>
      <td>Kiedis</td>
      <td>John</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th colspan="2" scope="row">Total de bandas</th>
      <td>2</td>
    </tr>
  </tfoot>
</table>

```


## Estilizando tabelas

As tabelas possuem uma estilização padrão bem simples e pouco agradáveis ao olhos. Por isso, vamos ver alguns estilos padrões que podem ser aplicados em qualquer tabela:

```css

  table {
    width: 100%; /* Tabela ocupa a largura do elemento pai */
    border: 3px solid black; /* Borda ao redor da tabela inteira */
  }

  thead th:nth-child(1) { /* Definindo a largura que cada coluna terá. Esse valor é aplicado na coluna inteira (a largura dos elementos td é definida aqui também) */
    width: 30%;
  }

  thead th:nth-child(2) {
    width: 30%;
  }

  thead th:nth-child(3) {
    width: 40%;
  }

  th,
  td { /* Dando um espaçamento nas células */
    padding: 20px;
  }

  tbody td {
    text-align: center; /* Centralizando os textos da células de dados */
  }

  tfoot th {
    text-align: right; /* Colocando o texto da célula de título do footer para a direita */
  }

```

Adicionando cores:

```css

  thead,
  tfoot {
    background: #f1f1f1;
  }

  th,
  td { /* Adicionando bordas nas células */
    border: 3px solid black;
  }

  /* As bordas não se encontram umas nas outras, está ficando um espaço entre elas. Para tirar esse espaço passamos: */
  table {
    border-collapse: collapse;
  }

  /* Efeito de zebra */
  tbody tr:nth-child(odd) {
    background-color: #ff33cc;
  }

  tbody tr:nth-child(even) {
    background-color: #e495e4;
  }

```

Arredondando as bordas:
> Apenas passar a prop border-radius para a `table` não arredonda as bordas. Para arredondar podemos:

```css

  table {
    border-radius: 10px;
    border-style: hidden;
    box-shadow: 0 0 0 3px #000;
    overflow: hidden;
  }

```

### Dicas finais

-> Tente criar a tabela da maneira mais simples possível e prefira deixar as medidas flexíveis (por ex. usando porcentagem)
-> Quase sempre usamos `border-collapse: collapse` para que as bordas se colapsem umas nas outras e fique mais fácil estilizar
-> Sempre divida a tabela semanticamente, usando as tag's `thead`, `tbody` e `tfoot` quando necessário
