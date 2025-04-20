document.getElementById('searchBar').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    const searchableElements = document.querySelectorAll('.searchable');

    searchableElements.forEach(function(element) {
        const isVisible = element.textContent.toLowerCase().includes(term);
        element.closest('.category').style.display = isVisible ? 'block' : 'none';
    });
});

const pdfFiles = {
    "Ata de Reuniões": [
         { name: "Ata_01_Reuniao2024.pdf", url: "pdf/ATA-N1_Gremio Estudantil.pdf" },
        { name: "Ata_02_Reuniao2024.pdf", url: "pdf/ATA-N2_Gremio Estudantil.pdf" },
        { name: "Ata_03_Reuniao2024.pdf", url: "pdf/ATA-N3_Gremio Estudantil.pdf" },
        { name: "Ata_04_Reuniao2024.pdf", url: "pdf/ATA-N4_Gremio Estudantil.pdf" },
    ],
    "Prestação de Contas": [
        { name: "TrasparenciaFiscal_2023.pdf", url: "pdf/Prestação de Contas Anual - 2023.pdf" },
         { name: "TrasparenciaFiscal_06/2024.pdf", url: "pdf/Prestação de Contas Mensal - 06.2024.pdf" },
    ],
    "Ofícios": [
        { name: "Oficio-Halloween_2023.pdf", url: "pdf/Ofício-Halloween_2023.pdf" },
        { name: "Oficio-Convite_002/2024.pdf", url: "pdf/Ofício - Convite Prefeitura de Juru.pdf" },
        { name: "Oficio-Convite_003/2024.pdf", url: "pdf/Ofício - Convite Prefeitura de Água Branca.pdf" },
        { name: "Oficio-Convite_004/2024.pdf", url: "pdf/Ofício - Convite Prefeitura de Tavares.pdf" },
        { name: "Oficio-Convite_005/2024.pdf", url: "pdf/Ofício - Convite Prefeitura de Manaíra.pdf" },
        { name: "Oficio-Convite_006/2024.pdf", url: "pdf/Ofício - Convite Prefeitura de São José de Princesa.pdf" },
        { name: "Oficio-Convocação_007/2024.pdf", url: "pdf/Ofício - Convite Reunião.pdf" },
        { name: "Oficio-Convocação_008/2024.pdf", url: "pdf/Ofício - Convite Reunião (2).pdf" },
        { name: "Oficio-Convocação_009/2024.pdf", url: "pdf/Ofício - Convite Reunião(09).pdf" },
        { name: "Oficio_010A/2025.pdf", url: "pdf/Ofício - 010A_2025.pdf" },
        { name: "Oficio-Convocação_001/2025.pdf", url: "pdf/Ofício - Convite Reunião (001_2025).pdf" },
        
        
    ]
};

window.onload = function() {
    // Inicializa os links de PDF
    Object.keys(pdfFiles).forEach(function(category) {
        const files = pdfFiles[category];
        const categoryDiv = getCategoryDiv(category);

        files.forEach(function(pdf) {
            const fileLink = createFileLink(pdf);
            categoryDiv.appendChild(fileLink);
        });
    });

    // Configuração do modal
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
};

function getCategoryDiv(category) {
    let categoryDiv = null;
    switch(category) {
        case "Ata de Reuniões":
            categoryDiv = document.getElementById('atas');
            break;
        case "Prestação de Contas":
            categoryDiv = document.getElementById('prestacaoDeContas');
            break;
        case "Ofícios":
            categoryDiv = document.getElementById('oficios');
            break;
    }
    return categoryDiv;
}

function createFileLink(pdf) {
    const fileLink = document.createElement('a');
    fileLink.href = pdf.url;
    fileLink.textContent = pdf.name;
    fileLink.setAttribute('target', '_blank');
    return fileLink;
}

