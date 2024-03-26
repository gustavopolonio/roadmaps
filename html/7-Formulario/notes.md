# Elemento formulário

Formulários são muito importantes, pois através deles é possível fazer a ponte entre o front e o back. Podemos pedir dados para o usuário, analisar esses dados e armazená-los num banco de dados.

Vamos criar um forms simples para pegar o nome e a idade do usuário:
```html

  <form>
    <input type="text" />

    <input type="number" />

    <button type="submit">
      Enviar
    </button>
  </form>

```
> Input's: usados para criar controle de interação com o usuário. Ou seja, são os inputs que vão capturar os dados do user. Existem vários tipos de input, acima vimos o de texto e o numérico

> O formulário sempre precisa ter um botão do tipo `submit`, para o user conseguir enviar seus dados


Mas esse form ainda está sem muita informação pro user. Vamos indicar o que esperamos que o user escreva em cada input:

```html

  <form>
    <label for="firstName">Digite seu nome</label>
    <input type="text" id="firstName" />

    <label for="age">Digite sua idade</label>
    <input type="number" id="age" />

    <button type="submit">
      Enviar
    </button>
  </form>

```
> Usamos o elemento `label` para indicar sobre o que o input trata. Importante notar que sempre que possível vamos associar a label com o input correspondente. Para isso, o valor do atributo `for` da label deve ser igual ao valor do `id` do input. Essa associação é boa para acessibilidade (leitores de tela) e facilita a navegação (quando clico na label, o input é focado automaticamente)

> Essa associação também pode ser feita colocando o input dentro da label. Nesse caso, não é necessário passar `for` e `id`:

```html

  <form>
    <label>
      Digite seu nome
      <input type="text" />
    </label>

    <label>
      Digite sua idade
      <input type="number" />
    </label>

    <button type="submit">
      Enviar
    </button>
  </form>

```

Vamos ver alguns dos tipos mais usados de input's e algumas validações que podemos usar neles:

> Obs: Todos os inputs pode receber os atributos `name` e `value`. Com o `name` pegamos no JS o input que queremos, e com o `value` acessamos o valor informado pelo user naquele input. Além disso, todos os inputs podem ser obrigatórios, para isso usamos o atributo `required`

1) Text: usado para armazenar qualquer tipo de texto (aceita letras, números e caracteres especiais)
```html

  <input
    type="text"
    minlength="4"
    maxlength="10"
    placeholder="Seu nome aqui"
  />

```

2) Number: usado para armazenar números
```html

  <input 
    type="number"
    min="-2"
    max="4"
    step="2"
  />

```

3) Checkbox: uma caixa que quando está marcada é indicada com um 'check'
```html

  <input 
    type="checkbox"
  />

  <label>
    Hoje é quarta-feira
    <input
      type="checkbox"
    />
  </label>

```

4) Date: usado para armazenar datas (dia, mês e ano)
```html

  <input 
    type="date"
  />

```

5) Radio: usado para quando temos várias opções e o user deve escolher uma
```html

  <h2>Selecione uma cor:</h2>

  <div>
    <input type="radio" id="blue" name="drone" checked />
    <label for="blue">Azul</label>
  </div>

  <div>
    <input type="radio" id="yellow" name="drone" />
    <label for="yellow">Amarelo</label>
  </div>

  <div>
    <input type="radio" id="black" name="drone" />
    <label for="black">Preto</label>
  </div>

```

6) Submit: usado para enviar um forms. Faz a mesma coisa que o button type="submit"
```html

  <input type="submit" value="Enviar form" />

```

Outros tipos de input's: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types


## O elemento select
Com o elemento `select` é possível criar um menu de opções

```html

  <label for="pet-select">Escolha um animal:</label>

  <select id="pet-select">
    <option value="">-- Selecione uma opção --</option>
    <option value="dog">Cachorro</option>
    <option value="cat">Gato</option>
    <option value="hamster">Hamster</option>
    <option value="spider">Aranha</option>
  </select>

```

## Mais sobre forms
Para facilitar a estilização, podemos agrupar input's e select em div's ou no elemento `fieldset`

```html

  <fieldset>
    <div>
      <label for="character-name">Nome</label>
      <input type="text" id="character-name" />
    </div>

    <div>
      <label for="last-name">Sobrenome</label>
      <input type="text" id="last-name" />
    </div>
  </fieldset>

```
