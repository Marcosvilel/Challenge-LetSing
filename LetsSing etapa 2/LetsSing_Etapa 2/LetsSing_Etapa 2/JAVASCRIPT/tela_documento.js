 document.getElementById("selectAllBtn").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(".row-check");
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);

    checkboxes.forEach(cb => cb.checked = !allChecked);
  });



  //teste


  document.addEventListener("DOMContentLoaded", function () {
  const exportBtn = document.querySelector(".action-btn.success");

  exportBtn.addEventListener("click", function () {
    const rows = document.querySelectorAll(".row-check:checked");
    if (rows.length === 0) {
      alert("Nenhuma linha selecionada.");
      return;
    }

    let csvContent = "Documento,Origem,Status,Assinatura,Data\n";

    rows.forEach((checkbox) => {
      const row = checkbox.closest(".row");
      const cells = row.querySelectorAll(".col:not(.col-1)");
      let rowData = [];
      cells.forEach((cell) => {
        rowData.push(cell.innerText.trim());
      });
      csvContent += rowData.join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "dados_selecionados.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

  //teste 

  document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".action-btn.primary");
  const container = document.querySelector(".container-fluid");

  const nomesDocumentos = [
    "Contrato de Aluguel",
    "Documento Importante",
    "Termo de Responsabilidade",
    "Relatório Financeiro",
    "Proposta Comercial",
    "Contrato de Prestação de Serviços",
    "Ata de Reunião",
    "Formulário de Cadastro",
    "Declaração de Comparecimento",
    "Contrato de Confidencialidade"
  ];

  let usados = new Set(); // para evitar repetições

  function getNomeUnico() {
    if (usados.size >= nomesDocumentos.length) return "Documento Extra";

    let nome;
    do {
      nome = nomesDocumentos[Math.floor(Math.random() * nomesDocumentos.length)];
    } while (usados.has(nome));
    usados.add(nome);
    return nome;
  }

  function gerarDataAleatoria() {
    const dia = Math.floor(Math.random() * 28) + 1;
    const mes = Math.floor(Math.random() * 12) + 1;
    const ano = 2024;
    return `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
  }

  addButton.addEventListener("click", function () {
    const newRow = document.createElement("div");
    newRow.className = "row data-row gx-5 align-items-center";

    const nomeDoc = getNomeUnico();
    const statusAprovado = Math.random() < 0.5;
    const statusTexto = statusAprovado ? "Aprovado" : "Pendente";
    const statusClasse = statusAprovado ? "status-approved" : "status-pending";
    const dataAssinatura = statusAprovado ? `Assinado em ${gerarDataAleatoria()}` : "--";
    const dataCriacao = gerarDataAleatoria();

    newRow.innerHTML = `
      <div class="col-1 text-start">
        <input type="checkbox" class="row-check" />
      </div>
      <div class="col text-center"><span>${nomeDoc}</span></div>
      <div class="col text-center"><span>Importado</span></div>
      <div class="col text-center"><span class="${statusClasse}">${statusTexto}</span></div>
      <div class="col text-center"><span>${dataAssinatura}</span></div>
      <div class="col text-center"><span>${dataCriacao}</span></div>
    `;

    container.appendChild(newRow);
  });
});

  