const title = document.createElement('h1')
title.textContent = 'Titulo'
title.className = 'classe'

document.body.appendChild(title)



const section = document.querySelector('section')
document.body.removeChild(section)