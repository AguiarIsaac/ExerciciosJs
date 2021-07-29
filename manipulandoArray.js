let totalitens = [
	['banana','laranja', 'uva', 'caja', 'limão','banana'], 
  ['carne','queijo','carne','frango', 'carne'], 
  ['uva','sacola','oleo', 'uva']
]
console.log(totalitens.length)
for(let c = 0; c < totalitens.length; c++) {
  let nTotal = totalitens[c].filter((este, i) => { return totalitens[c].indexOf(este) === i;})
  console.log(nTotal.sort())
}
