let imagem = document.querySelector(".imagem")
function muda() {
    if (imagem.src="assets/cosiness.png") {
        imagem.src="assets/intensity.png"
    } else {
        imagem.src="assets/cosiness.png"
    }
}


let numero = document.querySelector(".numero")
let contador = 1;

function Soma() {
    numero.innerHTML = contador++
}

function Subtracao(){
    if(contador > 0) {
        numero.innerHTML = contador--
    }
}


// function soma(){
    
// }

// function diminuir(){

// }