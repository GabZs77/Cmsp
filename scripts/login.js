const buttonEnviar = document.getElementById("btn-entrar");
const btnRa = document.getElementById("txt-ra");
const btnDigito = document.getElementById("txt-digito");
const btnEstado = document.getElementById("txt-estado");
const btnSenha = document.getElementById("txt-senha");
const header = document.getElementById("header");

buttonEnviar.onclick = (event) => {
  event.preventDefault()
  const ra = btnRa.value
  if(ra.length > 9){
    mensagemDeErro(`O número do ra (${ra}) excedeu o limite de 9 caracteres!`, btnRa)
    return
  }

  const digito = btnDigito.value
  if(digito.length > 1){
    mensagemDeErro('O número de caracteres do campo dígito foi excedido!', btnDigito)
    return
  }

  const estado = btnEstado.value
  const senha = btnSenha.value

  if(ra === '109027070' && digito === '7' && estado === 'SP' && senha === '1234'){
    window.location.href= "../index.html"
  } else{
    mensagemDeErro('Dados Inválidos!', false)
  }
}


function  mensagemDeErro(message, input){
  header.innerHTML = `
    <div class="message-inputs" id="message">
        <img src="../assets/icons/icon-cancel.svg" alt="icone de cancelar">${message}
    </div>
    `
  if(input === false){
    setTimeout(() => {
      header.innerHTML = ''
    }, 4000)
  }  

  input.style.borderColor = 'var(--cor-caixa-mensagem)'

  setTimeout(() => {
    header.innerHTML = ''
    input.style.borderColor = 'var(--borda)'  
  }, 4000)
}