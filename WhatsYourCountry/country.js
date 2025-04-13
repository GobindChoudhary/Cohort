const param = new URLSearchParams(window.location.search);
const box = document.querySelector(".box");
const back = document.querySelector(".back");
const home = document.querySelector(".home");
const borderCountry = document.querySelector(".borderCountry");

const countryName = param.get("country");
const data = JSON.parse(localStorage.getItem("data"));

let country = data.find((country) => country.name.common == countryName);

sum = `
<img
          id="flag"
          src=${country.flags.png}
          alt="Country Flag"
          class="w-[45%] bg-center  bg-cover  "
        />
        <div class="w-[55%] flex flex-col  pl-20 py-5 gap-5   ">
          <h1 class="font-bold text-2xl">${country.name.common}</h1>
          <div class="w-[100%] flex gap-10 ">
            <div class="w-1/2 flex flex-col gap-2">
              <p><strong>Native Name:</strong> ${country.name.common}</p>
              <p><strong>Population:</strong> ${country.population}</p>
              <p><strong>Region:</strong> ${country.region}</p>
              <p><strong>Sub Region:</strong> ${country.subregion}</p>
              <p><strong>Capital:</strong> ${country.capital}</p>
            </div>
            <div class="w-1/2 flex flex-col gap-2">
            ${
              country.tld
                ? `<p><strong>Top Level Domain:</strong> ${country.tld.join(
                    ","
                  )}</p>`
                : ""
            }
              <p><strong>Currencies:</strong> ${
                Object.values(country.currencies)[0].name
              }</p>
              <p><strong>Langueges:</strong>${Object.values(
                country.languages
              ).join(",")}</p>
            </div>
          </div>
           ${
             country.borders
               ? `<div class="flex gap-5  "> Border Countries:
               <div class="borderCountry font-bold flex flex-wrap  gap-3  items-center">
                ${country.borders
                  .map(
                    (border) =>
                      `<a href="country.html?country=${encodeURIComponent(
                        data.find((country) => country.cca3 === border).name
                          .common
                      )}" class="borderCountryLink px-2 py-1 cursor-pointer bg-gray-100 rounded-md text-black">${border}</a>`
                  )
                  .join("")}
              </div>`
               : ""
           } </div>
        </div>  
      </div>
`;
box.innerHTML = sum;

back.addEventListener("click", function () {
  window.history.back();
});
home.addEventListener("click", function () {
  window.location.href = "index.html";
});

box.addEventListener("click", function (e) {
  if (e.target.classList.contains("borderCountryLink")) {
    const clickedText = e.target.textContent;
    const brdcountry = data.find((country) => country.cca3 === clickedText);
  }
});

if (localStorage.getItem("mode") == "dark") {
  document.documentElement.classList.add("dark");
}
if (localStorage.getItem("mode") == "light") {
  document.documentElement.classList.remove("dark");
}

console.log(
  data.find((country) => country.name.common.toLowerCase() == "tokelau")
);
