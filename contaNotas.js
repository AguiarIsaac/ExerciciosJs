let n = parseInt(576)
let Qnotas = 0
let cedulas = [100,50,20,10,5,2,1]

function contaNotas(valor) {
	console.log(valor)
	for(let cedula in cedulas){
		Qnotas = parseInt(valor / cedulas[cedula])
  	console.log(`${Qnotas} nota(s) de R$ ${cedulas[cedula]},00`)
  	valor = valor % cedulas[cedula]
	}
	
}

contaNotas(n)
