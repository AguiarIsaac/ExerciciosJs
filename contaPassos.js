let btn = document.querySelector('input#btn')
let posicaoI = document.querySelector('input#posicaoI')
let posicaoF = document.querySelector('input#posicaoF')
let result = document.querySelector('h1#resultado')
let passo = 0

btn.addEventListener('click', contaPassos)

function contaPassos() {
   let c = Number(posicaoI.value)
  while (c < Number(posicaoF.value) ) {
    passo += 1
    c++
  }
  result.innerHTML = `Ponto inicial: ${posicaoF.value}; Destino: ${posicaoF.value}; Quantidade de passos necessarios: ${passo}.`
}

/*
-- Adicionar no HTML --
<input type="number" id="posicaoI" placeholder="Digite o ponto inicial: ">
<input type="number" id="posicaoF" placeholder="Digite o ponto final: ">
<input type="button" id="btn" value="calcular passos">
<h1 id="resultado"></h1>*/