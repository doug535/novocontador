//estado da minha aplicação
const body = document.querySelector("body")
let numero = 0

//alteradores de estado da aplicação
function adicionar() {
 numero++
 mostrarNaTela () 
}

function subtrair() {
 numero--
 mostrarNaTela ()
}

//atualizar estado da aplicação na tela
function mostrarNaTela () {
    const p = document.querySelector("#resultado")
    p.innerText = numero
}
if(numero == 10) {
    body.style.backgroundColor = "#0000"
}
//iniciar
mostrarNaTela ()