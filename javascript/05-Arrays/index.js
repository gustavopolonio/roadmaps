const cities = [
  'São Carlos',
  'Santos',
  'Florianópolis',
  'Bauru',
]
console.log(cities)  // ['São Carlos', 'Santos', 'Florianópolis', 'Bauru']

cities[0] = 'Rio de Janeiro'  // Modifiquei a cidade da posição 0
console.log(cities)  // ['Rio de Janeiro', 'Santos', 'Florianópolis', 'Bauru']

cities[4] = 'São Paulo'  // Modifiquei (criei) a cidade da posição 4
console.log(cities)  // ['Rio de Janeiro', 'Santos', 'Florianópolis', 'Bauru', 'São Paulo']

cities[cities.length] = 'Nova Cidade'  // Adicionando uma cidade na últmia posição do array
console.log(cities)  // ['Rio de Janeiro', 'Santos', 'Florianópolis', 'Bauru', 'São Paulo', 'Nova Cidade']