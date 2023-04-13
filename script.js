var btnsDecrementar = document.querySelectorAll(".btn-decrementar");
var btnsIncrementar = document.querySelectorAll(".btn-incrementar");
let cupomInput = document.getElementById("cupom");
let aplicarCupomBtn = document.getElementById("aplicar-cupom");
let cuponsUsados = {};

aplicarCupomBtn.addEventListener("click", function() {
  const cupom = cupomInput.value;
  
  let total = parseFloat(document.querySelector(".total-valor").textContent.replace("R$ ", "").replace(",", "."));
  const DESCONTO_CUPOM1 = 0.1; // 10% de desconto
  const DESCONTO_CUPOM2 = 0.2; // 20% de desconto
  
  if (cupom === "CUPOM1") {
    if (cuponsUsados.CUPOM1){
      alert("Cupom já utilizado!");
      return
    }
    
    const desconto = total * DESCONTO_CUPOM1;
    const totalComDesconto = total - desconto;
    document.querySelector(".total-valor").textContent = formatarNumeros(totalComDesconto);
    cuponsUsados.CUPOM1 = true;

  } else if (cupom === "CUPOM2") {
    if (cuponsUsados.CUPOM2){
      alert("Cupom já utilizado!");
      return
    }

    const desconto = total * DESCONTO_CUPOM2;
    const totalComDesconto = total - desconto;
    document.querySelector(".total-valor").textContent = formatarNumeros(totalComDesconto);
    cuponsUsados.CUPOM2 = true;

  } else {
    alert("Cupom inválido");
  }
 
});

function atualizaTotais() {
  let todosTdsQuantidade = document.querySelectorAll("td.quantidade");
  let novaQuantidadeTotal = 0;
  let novoValorTotal = 0;
  let todosTdsValores = document.querySelectorAll("td.valorTotalProduto");

  for (let td of todosTdsQuantidade) {
    novaQuantidadeTotal += parseInt(td.getAttribute("data-quantidade"));
  }

  for (let td of todosTdsValores) {
    novoValorTotal += parseFloat(td.getAttribute("data-valortotalproduto"));
  }

  document.querySelector(".total-itens").innerHTML = novaQuantidadeTotal;
  document.querySelector(".total-valor").innerHTML =
    formatarNumeros(novoValorTotal);
}

function formatarNumeros(numero) {
  return ("R$ " + numero).replace(".", ",");
}

for (let btn of btnsIncrementar) {
  btn.onclick = function () {
    // Obter Elementos
    let tr = this.closest("tr");
    let tdValorUnitario = tr.querySelector("td.valorUnitario");
    let tdQuantidade = tr.querySelector("td.quantidade");
    let tdValorTotalProduto = tr.querySelector(".valorTotalProduto");

    // Calcular Quantidades e Valores
    let novaQuantidade =
      parseInt(tdQuantidade.getAttribute("data-quantidade")) + 1;
    let novoValorTotal =
      novaQuantidade *
      parseFloat(tdValorUnitario.getAttribute("data-valorunitario"));

    // Alterar Dados nos elementos
    tdQuantidade.setAttribute("data-quantidade", novaQuantidade);
    tdValorTotalProduto.setAttribute("data-valortotalproduto", novoValorTotal);

    // Alterar informações na tabela
    tdQuantidade.querySelector("span").innerHTML = novaQuantidade;
    tdValorTotalProduto.textContent = formatarNumeros(novoValorTotal);

    // Funções Atualiza valor total
    atualizaTotais();
  };
}

for (let btn of btnsDecrementar) {
  btn.onclick = function () {
    // Obter Elementos
    let tr = this.closest("tr");
    let tdValorUnitario = tr.querySelector("td.valorUnitario");
    let tdQuantidade = tr.querySelector("td.quantidade");
    let tdValorTotalProduto = tr.querySelector(".valorTotalProduto");

    // Calcular Quantidades e Valores
    let novaQuantidade = tdQuantidade.getAttribute("data-quantidade") - 1;
    if (novaQuantidade < 0) {
      novaQuantidade = 0;
    }
    let novoValorTotal =
      novaQuantidade * tdValorUnitario.getAttribute("data-valorunitario");

    // Alterar Dados nos elementos
    tdQuantidade.setAttribute("data-quantidade", novaQuantidade);
    tdValorTotalProduto.setAttribute("data-valorTotalProduto", novoValorTotal);

    // Alterar informações na tabela
    tdQuantidade.querySelector("span").innerHTML = novaQuantidade;
    tdValorTotalProduto.textContent = formatarNumeros(novoValorTotal);

    // Funções Atualiza valor total
    atualizaTotais();
  };
}
