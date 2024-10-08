const h1 = document.createElement('h1')
h1.textContent = 'Título principal'

const section = document.createElement('section')

// document.body.appendChild(h1)
// document.body.appendChild(section)

document.body.append(h1, section)
