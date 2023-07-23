const namee = "Turkey";
const form = document.getElementById("form");
const inputSearch = document.getElementById("inputSearch");
const submitSearch = document.getElementById("submit");
const card_group = document.querySelector(".cardGroup");
const urlAll = `https://restcountries.com/v3.1/all`;

submitSearch.addEventListener("click", (e) => {
  e.preventDefault();
  const urlname = `https://restcountries.com/v3.1/name/${inputSearch.value}`;
  if (urlname) {
    card_group.innerHTML = "";

    function renderByName() {
      fetch(urlname)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Ishlamayabdi");
          }
          return res.json();
        })
        .then((data) => {
          // if (urlname) {
          // }
          function renderCard() {
            let response = "";
            data.map((country) => {
              console.log(country.name.common);

              const containerDiv = document.querySelector(".cardGroup");

              const card = document.createElement("card");
              card.className = "card";

              const img = document.createElement("img");
              img.classList = "card-img-top ";
              img.src = country.flags.png;

              const card_body = document.createElement("div");
              card_body.classList = "card-body";

              const name = document.createElement("h5");
              name.classList = "card-title";
              name.innerHTML = country.name.common;
              const capital = document.createElement("p");
              capital.classList = "card-text";
              capital.innerHTML = ` <span class="fw-bold">Capital: </span> ${country.capital}`;
              const population = document.createElement("p");
              population.classList = "card-text";
              population.innerHTML = ` <span class="fw-bold">Population: </span> ${country.population} mln`;
              const currency = document.createElement("p");
              currency.classList = "card-text";
              currency.innerHTML = ` <span class="fw-bold">Currency: </span> ${country.currencies.name}`;

              card.appendChild(img);
              card_body.appendChild(name);
              card_body.appendChild(capital);
              card_body.appendChild(population);
              card_body.appendChild(currency);

              card.appendChild(card_body);
              containerDiv.appendChild(card);
            });
          }
          renderCard();
        });
    }
    renderByName();
  }
});
function renderAll() {
  fetch(urlAll)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Ishlamayabdi");
      }
      return res.json();
    })
    .then((data) => {
      // if (urlname) {
      // }
      function renderCard() {
        let response = "";
        data.map((country) => {
          console.log(country.name.common);

          const containerDiv = document.querySelector(".cardGroup");

          const card = document.createElement("card");
          card.className = "card";

          const img = document.createElement("img");
          img.classList = "card-img-top ";
          img.src = country.flags.png;

          const card_body = document.createElement("div");
          card_body.classList = "card-body";

          const name = document.createElement("h5");
          name.classList = "card-title";
          name.innerHTML = country.name.common;
          const capital = document.createElement("p");
          capital.classList = "card-text";
          capital.innerHTML = ` <span class="fw-bold">Capital: </span> ${country.capital}`;
          const population = document.createElement("p");
          population.classList = "card-text";
          population.innerHTML = ` <span class="fw-bold">Population: </span> ${country.population} mln`;
          const currency = document.createElement("p");
          currency.classList = "card-text";
          currency.innerHTML = ` <span class="fw-bold">Currency: </span> ${country.currencies.name}`;

          card.appendChild(img);
          card_body.appendChild(name);
          card_body.appendChild(capital);
          card_body.appendChild(population);
          card_body.appendChild(currency);

          card.appendChild(card_body);
          containerDiv.appendChild(card);
        });
      }
      renderCard();
    })

    .catch((error) => console.error("Nimadir xato ketgan API ga qara", error));
}

renderAll();
