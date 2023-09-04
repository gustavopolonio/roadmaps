# Como abrir um arquivo HTML no navegador

Não precisa decorar a estrutura básica dos arquivos HTML (veremos o porque daqui a pouco). Salvar o arquivo criado na aula 1 (bolinha do VScode).

Para abrir esse html no navegador podemos copiar o caminho do arquivo html e colar no navegador ou ir para a pasta que criamos e dar dois cliques em cima do arquivo.

Do jeito que está, quando faço uma alteração no código ela não é refletida no navegador. Tenho que atualizar o navegador para ver a mudança. Para eu não precisar ficar atualizando o navegador a cada mudança, posso instalar a extensão `Live Server`, do VScode. Posso abrir meu arquivo com ela e as alteraçõs são refletidas.

## Entendendo a nova URL

Podemos notar também que a url foi alterada para `http://127.0.0.1:5500/`. Por baixo dos panos, essa extensão usa meu computador como um servidor local, para servir os arquivos ao navegador.

`http://127.0.0.1:5500/`
`127.0.0.1`: 127.0.0.1 é o endereço IP do localhost do meu computador (todos os computadores têm esse mesmo endereço de IP) e esse é o endereço de IP do servidor criado no computador (esses números podem ser substituídos por “localhost”). 
`:5500`:  Depois dos dois pontos vem o número da porta, esse número é responsável por identificar qual programa está rodando nesse endereço específico. Por exemplo: se eu quiser rodar dois programas diferentes, ao memos tempo, no meu localhost, cada um dos programas terá um número da porta diferente, e esse número sou eu quem vou escolher. No caso do nosso projeto atual, esse número é 5500 porque a extensão Live Server usa esse porta como padrão.