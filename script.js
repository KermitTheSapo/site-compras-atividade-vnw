const imagem = document.querySelector('.imagem')
const titulo = document.querySelector('.titulo')
let contador = '0'

function muda() {
	if (contador === '0') {
		imagem.src="assets/intensity.png"
		contador = '1'
        
	} else {
		imagem.src="assets/cosiness.png"
		contador = '0'
	}
}




let numero = document.querySelector(".numero")
let batata = 0;

function Soma() {
    numero.innerHTML = batata+=1
}

function Subtracao(){
    if (batata > 0) {
        numero.innerHTML = batata-=1
    }
}