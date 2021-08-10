let teste = []
let positivos = []

for(let c = 0; c < 6; c++) {
	teste.push(window.prompt('Informe o número:'))
}

for(let c = 0; c < teste.length; c++) {
	if(teste[c] >= 0) {
  	positivos.push(teste[c])
  }
}

console.log(`${positivos.length} valores positivos`)
