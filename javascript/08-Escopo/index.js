let a = 'JavaScript' // Variável a foi criada no escopo global (raiz do arquivo). Portanto pode ser acessada em qualquer local desse arquivo
let b = 10 //  Variável b foi criada no escopo global, igual a variável a

function letsLearnScope() {
  console.log(a, b)

  const c = 10

  if (true) {
    const d = 10
  }

  console.log(d)
}

letsLearnScope()