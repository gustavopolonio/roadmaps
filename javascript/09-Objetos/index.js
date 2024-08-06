const pessoa = {
  nome: 'Daniel',
  sobrenome: 'Afonso',
  idade: 20,
  irmaos: ['Pedro', 'Raul'],
  fazFaculdade: true
}

const aaa = Object.keys(pessoa)
const bbb = Object.values(pessoa)

const entriesVar = Object.entries(pessoa)

// console.log(aaa) 
// console.log(bbb)

// console.log(entriesVar[4])
for (var i = 0; i < entriesVar.length; i++) {
  console.log(entriesVar[i])
}