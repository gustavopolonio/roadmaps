# 1 - Can you explain the concept of closures in JavaScript? Can you provide an example of a practical use-case for a closure?

  A closure is the mix of a function itself and its lexical environment (its surrounding state). In JavaScript, every function has its closure.
  That's why a function can access its surrounding states and variables, even though the function is executed outside its lexical scope.
  A practical usecase for a closure on web development is a JavaScript event-based code. I.e. to execute some action when the user clicks on a button. I can define a function and attach it as a callback function. When the user triggers the event, the callback function is executed.

  ```js
  
  function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  
  ```

# 2 - How does JavaScript handle asynchronous operations? Can you describe how promises and async/await work in this context?

  Asynchronous operations allow a program to execute a task and at the same time be responsive to other tasks. Therefore the program doesn't wait until the end of a task to start other task, it can execute more than one task at
the same time.
  In JavaScript there are two main ways to handle asynchronous operations: then/catch and async/await.
Promises are objects that return the completion or failure of an asynchronous operation. With this return we can know if the asynchronous code was successfully or not. To handle promises we can use async/await method.
  To transform a default function to asynchronous function we use the async keyword and in every fetch requests use await keyword. So the code will wait for the fetch to be performed and then goes to the next line.

# O que é a DOM?

  Document object model (DOM) é uma interface que permite o acesso e atualização do conteúdo, da estrutura e dos estilos de um documento. Por meio dela, é possível interagir com a página, buscando, alterando, adicionando ou deletando os elementos HTML de uma página web.
  Para acessar a DOM é só usar a API do objeto document e usar os métodos presentes nela.