var btnsDecrementar = document.querySelectorAll(".btn-decrementar")
var btnsIncrementar = document.querySelectorAll(".btn-incrementar")

for(let btn of btnsDecrementar) {
    btn.onclick = function() {

        //Obter Elementos
        let tr = this.closest("tr");
        let tdvalorUnitario = tr.querySelector("td.valorUnitario");
        let tdQuantidade = tr.querySelector("td.quantidade");
        let tdValorTotalProduto = tr.querySelector(".valorTotalProduto");

        //Calcular Quantidades e Valores
        let novaQuantidade = tdQuantidade.getAttribute("data-quantidade") - 1;
        if (novaQuantidade < 1) {
            novaQuantidade = 1;
        }
        let novoValorTotal = novaQuantidade * tdvalorUnitario.getAttribute("data-valorunitario");

        //Alterar Dados nos elementos
        tdQuantidade.setAttribute("data-quantidade", novaQuantidade);
        tdValorTotalProduto.setAttribute("data-valorTotalProduto", novoValorTotal);

        //Alterar informações na tabela
        tdQuantidade.querySelector("span").innerHTML = novaQuantidade;
        tdValorTotalProduto.textContent = ("R$ " + novoValorTotal).replace(".", ",");

        console.log(novaQuantidade);
        console.log(novoValorTotal);
    }
}

// for(let btn of btnsIncrementar) {
//     btn.onclick = function(){
//         alert("Aumentou")
//     }
// }