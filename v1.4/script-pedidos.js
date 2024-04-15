
function showDetails(item) {
    // Mostra a tela de detalhes e atualiza o conteúdo com base no item selecionado
    document.getElementById('detailsTitle').innerText = item;
    // Atualiza a imagem do item em tamanho maior de acordo com o item selecionado
    if (item === 'Torta Recheada') {
        document.getElementById('itemImage').src = './assets/images/produtos/01-Torta-Recheada.png'; // Caminho da imagem da Torta Recheada
        document.getElementById('itemDescription').innerText = 'Descrição detalhada da Torta Recheada vai aqui...';
    } else if (item === 'Mousse de Paçoca') {
        document.getElementById('itemImage').src = './assets/images/produtos/02-Mousse-Pacoca.png'; // Caminho da imagem do Mousse de Paçoca
        document.getElementById('itemDescription').innerText = 'Descrição detalhada do Mousse de Paçoca vai aqui...';
    }
    document.getElementById('detailsOverlay').style.display = 'flex'; // Exibe a tela de detalhes
}

function hideDetails() {
    // Oculta a tela de detalhes ao clicar no botão Fechar
    document.getElementById('detailsOverlay').style.display = 'none';
}
