var km = Number(gets())
var litro = Number(gets())

function consumoMedio(km, l) {
  let media = km / litro
  console.log(`${media.toFixed(3)} km/l`)
}

consumoMedio(km, litro)
