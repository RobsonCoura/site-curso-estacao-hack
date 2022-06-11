// Script por Cel.Lep Robson Cod

// Recuperando usuario e senha do HTML
var inputUsuario = document.getElementById('usuario')
var inputSenha = document.getElementById('senha')
// Manipulação modal
var myModalButton = document.getElementById('myModalButton')
var myModalText = document.getElementById('myModalText')

function autenticar(event){
  //Interroper o evento de submit
  event.preventDefault()
  // Consistencia
  if(inputUsuario.value == 'admin' && inputSenha.value == '1234'){
    myModalText.innerText = 'Usuário Logado!'
  }else{
     myModalText.innerText = 'Usuário ou Senha inválido!'
  }

  myModalButton.click()
}