# Elementos inline e block

Os elementos HTML podem ser do tipo inline, block ou inline-block


## Diferenças entre inline e block

1. Inline: 
- Não começam em uma nova linha (2 ou mais elementos inline ficam na mesma linha, um ao lado do outro)
- Elemento ocupa somente a largura do seu conteúdo
- Não é possível definir largura e altura (com as propriedades width e height)
- Margin e padding verticais (top e bottom) não têm efeito
- Elementos inline mais usados: `span, strong, a, *img`

2. Block:
- Começam em uma nova linha (um elemento block fica sozinho em uma linha)
- Elemento ocupa toda a largura disponível do seu elemento pai
- É possível definir largura e altura (com as propriedades width e height)
- Margin e padding funcionam normalmente
- Elementos block mais usados: `h1…h6, div, form, header, footer, main, p, section, table, ul`


Ex.1: Analisar o comportamento dos elementos no arquivo HTML


## Elementos do tipo inline-block
Têm algumas características do inline e algumas do block

2. Inline-block:
- Não começam em uma nova linha
- É possível definir largura e altura
- Margin e padding funcionam normalmente
- Elementos inline-block mais usados: `button, input, textarea`


Ex.2: Analisar o comportamento dos elementos no arquivo HTML


> Dica: Não decorar qual o tipo de cada elemento (com o tempo decora). Para saber qual o tipo de um elemento => DevTools => aba "Computed"

> Obs: Alguns desses comportamentos podem variar em relação ao navegador usado (ex: um navegador pode considerar o elemento `img` como inline-block). Nessa aula, me baseei no Google Chrome.