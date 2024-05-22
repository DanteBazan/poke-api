// seleccionamos elementos

const input = document.getElementById("input");
const button = document.getElementById("button");
const cardContainer = document.querySelector(".card__container");

// pedido a la API

button.addEventListener("click", () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(input.value)}`)
    .then((response) => response.json())
    .then((data) => {
      const card = `
        <div class="card">
        <div class="container__card-img">
          <img src="${data.sprites.other.dream_world.front_default}" alt="${
        data.name
      }" class="card__img" />
        </div>
        <div class="card__description">
          <p>Nombre :${data.name}</p>
          <p>Tipo: ${data.types[0].type.name}</p>
          <p>Peso :${data.weight / 10} kg</p>
          <p>Altura: ${data.height / 10} mts</p>
        </div>
      </div>
        `;
      cardContainer.innerHTML = card;
    })
    .catch((error) => {
      cardContainer.innerHTML = `
      <p>No se ha encontrado el pokemon</p>
      `;
    });
});
