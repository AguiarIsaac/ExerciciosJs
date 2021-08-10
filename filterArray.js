let array = [1,2,3,4,-10,-3]

let pares = array.filter((array) => { return array % 2 === 0 })

let impares = array.filter((array) => { return array % 2 != 0 })

let positivos = array.filter((array) => { return array > 0 })

let negativos = array.filter((array) => {return array < 0 })
