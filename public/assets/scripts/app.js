const API_URL = "http://localhost:3000/pontos";
const container = document.getElementById("cards-container");

// Função para listar os pontos turísticos
async function carregarPontos() {
  const resposta = await fetch(API_URL);
  const pontos = await resposta.json();

  container.innerHTML = " "; // limpa antes de carregar

  pontos.forEach(ponto => {
    const card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `
      <div class="card h-100">
        <img src="${ponto.imagemPrincipal.url}" class="card-img-top" alt=" ">
        <div class="card-body">
          <h5 class="card-title">${ponto.nome}</h5>
          <p class="card-text">${ponto.descricao}</p>
          <a href="detalhes.html?id=${ponto.id}" class="btn btn-primary">Saiba mais</a>
        </div>
        <div class="card-footer">
          <small class="text-muted">fonte img: ${ponto.imagemPrincipal.Fonte}</small>
        </div>
      </div>
      `;
    container.appendChild(card);
  });
}

// Chama a função assim que o site carregar
carregarPontos();
