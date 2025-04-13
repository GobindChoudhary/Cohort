let hero = document.querySelector(".hero");
let search = document.querySelector(".search");
let filter = document.querySelector("#continent");
let navbar = document.querySelector(".nav");
let main = document.querySelector(".main");
let mode = document.querySelector(".mode");
let card = document.querySelector(".card");

// fetching data and call renderCards

async function fetchdata() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    localStorage.setItem("data", JSON.stringify(data));
    renderCards(data);
  } catch (error) {
    console.error(error);
  }
}

//calling fetchdata if session storage is empty

if (localStorage.getItem("data")) {
  let storedData = JSON.parse(localStorage.getItem("data"));
  renderCards(storedData);
} else {
  fetchdata();
}

// renderCards

function renderCards(data) {
  // let data = JSON.parse(localStorage.getItem("data"));
  let sum = "";
  data.map((country) => {
    sum += `<a
            href="country.html?country=${encodeURIComponent(
              country.name.common
            )}"
            
            class="card w-70 h-90 shadow-xl bg-gray-200   rounded-md overflow-hidden"
          >
            <div
              class="flag h-[50%] w-full bg-[url(${
                country.flags.png
              })]   bg-center bg-cover bg-no-repeat"
            ></div>
            <div class="flex flex-col    justify-center px-3">
              <h1 class="text-xl font-bold capitalize my-3">${
                country.name.common
              }</h1>
              <p class="font-medium capitalize">Population: ${
                country.population
              }</p>
              <p class="font-medium capitalize">region: ${country.region}</p>
              <p class="font-medium capitalize">capital: ${country.capital}</p>
            </div>
            </a>`;
  });
  hero.innerHTML = sum;
}

// search countries

search.addEventListener("input", function (e) {
  let searchedValue = e.target.value.toLowerCase();
  let data = JSON.parse(localStorage.getItem("data"));

  let filterData = data.filter(function (country) {
    return Object.values(country).some((val) =>
      val.toString().toLowerCase().includes(searchedValue)
    );
  });
  renderCards(filterData);
});

// fiter contry based on region/continent

filter.addEventListener("change", function (e) {
  const selectedValue = e.target.value;
  let data = JSON.parse(localStorage.getItem("data"));
  if (e.target.value == "All") {
    renderCards(data);
  } else {
    const regiondata = data.filter(function (country) {
      return (
        country.continents[0].toLowerCase() === selectedValue.toLowerCase()
      );
    });
    renderCards(regiondata);
  }
});

// navbar scrollUp Navbar appears

let lastScroll = 0;
window.addEventListener("scroll", function () {
  const currentscroll = this.window.pageYOffset;
  if (currentscroll > lastScroll) {
    navbar.style.top = "-100px";
  } else if (currentscroll < lastScroll) {
    navbar.style.top = "0px";
  }
  lastScroll = currentscroll <= 0 ? 0 : currentscroll;
});

// light and dark mode

if (localStorage.getItem("mode") == "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
mode.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "mode",
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
});

// Event bubbling on cards
hero.addEventListener("click", function (e) {
  if (e.target.closest(".card")) {
    const cardElement = e.target.closest(".card"); // Get the card's ID (country name)
  }
});
