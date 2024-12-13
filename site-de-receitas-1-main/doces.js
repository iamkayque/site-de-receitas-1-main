function calcular() {
  // Seleciona todas as linhas do corpo da tabela
  const linhas = document.querySelectorAll("tbody tr");
  let totalGeral = 0;

  // Itera sobre cada linha
  linhas.forEach((linha) => {
      // Obtém os campos de preço, quantidade e total
      const precoInput = linha.querySelector(".num");
      const quantidadeInput = linha.querySelector(".qtd");
      const total1 = linha.querySelector(".tot");

      // Garante que só processe linhas com inputs (ignora a linha do Total Geral)
      if (precoInput && quantidadeInput && total1) {
          // Converte os valores dos inputs para números
          const preco = parseFloat(precoInput.value) || 0;
          const quantidade = parseFloat(quantidadeInput.value) || 0;

          // Calcula o total da linha
          const totalLinha = preco * quantidade;

          // Atualiza a célula total da linha
          total1.textContent = totalLinha.toFixed(2);

          // Soma o total da linha ao total geral
          totalGeral += totalLinha;
      }
  });

  // Atualiza o total geral no rodapé da tabela
  const totalGeralCell = document.getElementById("total");
  if (totalGeralCell) {
      totalGeralCell.textContent = totalGeral.toFixed(2);
  }
}

// Adiciona eventos de input para recalcular automaticamente
document.querySelectorAll(".num, .qtd").forEach((input) => {
  input.addEventListener("input", calcular);
});