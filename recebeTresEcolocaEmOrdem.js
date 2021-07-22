const arrayRecebeTres = []

function recebe() {
  let c = 0
  while (c < 3) {
    let n = window.prompt('Digite os valores um de cada vez')
    arrayRecebeTres.push(n)
    console.log(arrayRecebeTres)
    c++
  }
}

recebe()

function imprime() {
  let ordem = arrayRecebeTres.sort()
  ordem.forEach((item) => { console.log(item) })

}

imprime()
