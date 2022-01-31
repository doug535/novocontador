//estado da minha aplicação

let numero = 0

//alteradores de estado da aplicação
function adicionar() {
 numero = numero+1
 mostrarNaTela ()   
}

function subtrair() {
 numero = numero-1  
 mostrarNaTela ()
}

//atualizar estado da aplicação na tela
function mostrarNaTela () {
    const p = document.querySelector("p")
    p.innerText = numero
}

//iniciar
mostrarNaTela ()