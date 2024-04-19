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
        
    ],
    "Prestação de Contas": [
        { name: "TrasparenciaFiscal_2023.pdf", url: "pdf/Prestação de Contas Anual - 2023.pdf" },
        
    ],
    "Ofícios": [
        { name: "Oficio-Halloween_2023.pdf", url: "pdf/Ofício - Halloween 2023.pdf" },
        
    ]
};

window.onload = function() {
    const atasDiv = document.getElementById('atas');
    const prestacaoDeContasDiv = document.getElementById('prestacaoDeContas');
    const oficiosDiv = document.getElementById('oficios');

    Object.keys(pdfFiles).forEach(function(category) {
        const files = pdfFiles[category];
        const categoryDiv = getCategoryDiv(category);

        files.forEach(function(pdf) {
            const fileLink = createFileLink(pdf);
            categoryDiv.appendChild(fileLink);
        });
    });
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
