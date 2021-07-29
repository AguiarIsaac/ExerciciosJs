var numero = Number(gets()) // alterar a forma com que o dado será capturado
function pares(num){
	for(let c = 0; c <= num; c++) {
  	if (c % 2 === 0 && c != 0) {
    	console.log(c)
    }
  }
}

pares(numero)
