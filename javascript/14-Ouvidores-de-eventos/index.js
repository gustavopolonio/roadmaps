const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()  // Por padrão o forumálrio recarrega a página quando submitado. Para evitar isso
  // chamamos o método preventDefault

  const formElement = e.target

  const firstName = formElement['first-name'].value
  // OR
  // const firstName = formElement.querySelector('.first-name').value

  const lastName = formElement['last-name'].value

  console.log('firstName: ', firstName)
  console.log('lastName: ', lastName)
})