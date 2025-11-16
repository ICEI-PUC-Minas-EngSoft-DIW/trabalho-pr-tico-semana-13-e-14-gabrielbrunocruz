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

//mapa
const centralLatLong = [-44.2, -20.15]; // Brumadinho (aprox)

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FicmllbGNydXpkZXYiLCJhIjoiY21pMHVkdGN4MHJuMDJrcTV2M21kZTFlNyJ9.RCZOyIwmC2G_rJCAVsoLcQ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: centralLatLong,
  zoom: 11
});

// Marcador de Brumadinho
new mapboxgl.Marker({ color: 'red' })
  .setLngLat(centralLatLong)
  .setPopup(new mapboxgl.Popup().setHTML('<h4>Brumadinho - MG</h4>'))
  .addTo(map);

// Coordenadas do Inhotim
const inhotimCoords = [-44.2157, -20.1301];


new mapboxgl.Marker({ element: document.querySelector('.marker-destaque') })
  .setLngLat(inhotimCoords)
  .setPopup(new mapboxgl.Popup().setHTML('<h4>Inhotim</h4>'))
  .addTo(map);

// Coordenadas do memorial de Brumadinho
const memorialCoords = [-44.15388, -20.20447];

new mapboxgl.Marker({ element: document.querySelector('.marker-destaque') })
  .setLngLat(memorialCoords)
  .setPopup(new mapboxgl.Popup().setHTML('<h4>Memorial Brumadinho</h4>'))
  .addTo(map);
// Coordenada da cachoeira das ostras
const cachoeiraCoords = [-44.1985, -20.1623];

new mapboxgl.Marker({ element: document.querySelector('.marker-destaque') })
  .setLngLat(cachoeiraCoords)
  .setPopup(new mapboxgl.Popup().setHTML('<h4>Cachoeira das Ostras</h4>'))
  .addTo(map);

// Coordenadas Igreja Piedade do Paraopeba
const igrejaCoords = [-44.1912, -20.1675];

new mapboxgl.Marker({ element: document.querySelector('.marker-destaque') })
  .setLngLat(igrejaCoords)
  .setPopup(new mapboxgl.Popup().setHTML('<h4>Igreja Piedade do Paraopeba</h4>'))
  .addTo(map);

// Coordenadas Ruinas do Forte
const forteCoords = [-44.1793, -20.1554];


new mapboxgl.Marker({ element: document.querySelector('.marker-destaque') })
  .setLngLat(forteCoords)
  .setPopup(new mapboxgl.Popup().setHTML('<h4>Ruínas do Forte</h4>'))
  .addTo(map);

// Coordenadas Fazenda dos Martins
const fazendaCoords = [-44.2167, -20.1833];

new mapboxgl.Marker({ element: document.querySelector('.marker-destaque') })
  .setLngLat(fazendaCoords)
  .setPopup(new mapboxgl.Popup().setHTML('<h4>Fazenda dos Martins</h4>'))
  .addTo(map);