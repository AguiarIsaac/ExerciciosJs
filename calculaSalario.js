let btn = document.querySelector('input#btn')
let valorHora = document.querySelector('input#valorHora')
let horaMes = document.querySelector('input#horaMes')
let salarioBruto = 0
let ir = 0 //11%
let inss = 0 //8%
let sindicato = 0 //5%
let salarioLiquido = 0

btn.addEventListener('click', calculoSalario)

function calculoSalario() {

	salarioBruto = Number(valorHora.value) * Number(horaMes.value)
  ir = (salarioBruto * 11) / 100
  inss = (salarioBruto * 8) / 100
  sindicato = (salarioBruto * 5) / 100
  salarioLiquido = salarioBruto - (ir + inss + sindicato)
  
  document.querySelector('div#content').innerHTML += `<p>Salário Bruto: ${salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br>IR: ${ir.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br> INSS: ${inss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br>Sindicato: ${sindicato.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br><strong>Salário liquido: ${salarioLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong><br></p>`
}


/*  <div id="content">
    <input type="number" placeholder="Valor hora: " id="valorHora">
    <input type="number" placeholder="Horas Mês" id="horaMes">
    <input type="button" value="Calcular" id="btn">
  </div>
*/
