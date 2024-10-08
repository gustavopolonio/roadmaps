const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formEvent = e.target
  

  const firstInput = formEvent["first-name"].value
  const secondInput = formEvent["last-name"].value
  console.log(firstInput)
  console.log(secondInput)
})