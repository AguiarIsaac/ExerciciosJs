const operator = 'S'
let matriz = [ 
[], // remover o primeiro e o ultimo
[], // remover os dois primeiros e os dois ultimos
[], // remover os tres primeiros e ultimos
[], // remover os quatro primeiros e ultimos
[], // remover os 5 primeiros e ultimos
[], // não fazer nada
[], // não fazer nada
[], // não fazer nada
[], // não fazer nada
[], // não fazer nada
[], // não fazer nada
[] ]

for(let c = 0; c < matriz.length; c++) {
	for( let c = 0; c <= 11; c++) {
  	matriz[c].push(10)
  }
}

function removeInicio(vezes, array) {
	for(let c = 0; c < vezes ; c++) {
  	array.shift()
  }
  return array
}

function remocao(lMatriz, rIni, rF) {
	let a1 = matriz[lMatriz]
  let ini = removeInicio(rIni, a1)
  let fim = ini.splice(0, rF)
  let na1 = fim.reduce((total, numero) => { return total + numero})
  return na1
}

if(operator === 'S') {
	let n1 = remocao(0, 1, 10)
  let n2 = remocao(1, 2, 8)
  let n3 = remocao(2, 3, 6)
  let n4 = remocao(3, 4, 4)
  let n5 = remocao(4, 5, 4)
  
  let result = n1 + n2 + n3 + n4 + n5
  
  console.log(result.toFixed(1))
  
} else if( operator === 'M') {
	let n1 = remocao(0, 1, 10)
  let n2 = remocao(1, 2, 8)
  let n3 = remocao(2, 3, 6)
  let n4 = remocao(3, 4, 4)
  let n5 = remocao(4, 5, 4)
  
  let result = n1 + n2 + n3 + n4 + n5 / 5
  
  console.log(result.toFixed(1))
} 
