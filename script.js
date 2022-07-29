const imagem = document.querySelector('.imagem')
const titulo = document.querySelector('.titulo')
const preco = document.querySelector('.preco')
let contador = '0'

function muda() {
	if (contador === '0') {
		imagem.src="assets/intensity.png"
		contador = '1'
        titulo.innerHTML = "PASSION"
        preco.innerHTML = "$20"
	} else {
		imagem.src="assets/cosiness.png"
		contador = '0'
        titulo.innerHTML = "CEBOLA"
        preco.innerHTML = "$15"
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