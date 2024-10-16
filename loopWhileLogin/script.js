const usuario = 'Admin'
const senha = '123'
let estaLogado = false
let l, s = ""

while (l !="Admin" || s !="123") {
  l = prompt('Digite o usuário: ')
  s = prompt('Digite a senha: ')

  
  if (l != usuario && s != senha) {
    alert('Usuário ou senha inválidos')
    break
    
  }
  window.location.replace("www.alura.com.br")
  
}