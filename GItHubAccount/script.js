const card = document.querySelector(".card");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

search.addEventListener("click", function () {
  let inputValue = input.value.trim();
  getUser(inputValue).then((data) => getCard(data));
});

const getUser = function (userName) {
  return fetch(`https://api.github.com/users/${userName}`).then(function (res) {
    if (!res.ok) {
      console.log("Some Error occour");
    }
    return res.json();
  });
};

const getRepo = function (userName) {
  return fetch(`https://api.github.com/users/${userName}/repos`).then(function (
    res
  ) {
    if (!res.ok) {
      console.log("Some Error occour");
    }
    return res.json();
  });
};
getRepo("async").then((data) => console.log(data));

const getCard = function (detail) {
  card.innerHTML = `<div
          class="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8"
        >
          <img
            class="w-28 h-28 rounded-full border-2 border-gray-600/20 object-cover"
            src=${detail.avatar_url}
            alt="Profile Picture"
          />
          <div class="flex-1 text-center sm:text-left">
            <h2 class="text-2xl font-semibold text-white">${detail.name}</h2>
            <p class="text-gray-400 text-base">@${detail.login}</p>
            <p class="mt-3 text-gray-300 text-sm leading-relaxed">
            ${detail.bio}
            </p>
            <div class="divider my-4"></div>
            <div class="grid grid-cols-3 gap-6 text-center sm:text-left">
              <div>
                <p class="text-sm font-medium text-gray-500">Repositories</p>
                <p class="text-lg font-semibold text-white">${detail.public_repos}</p>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-500">Followers</p>
                <p class="text-lg font-semibold text-white">${detail.followers}</p>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-500">Following</p>
                <p class="text-lg font-semibold text-white">${detail.following}</p>
              </div>
            </div>
            <a
              href="https://github.com/${detail.login}"
              class="mt-5 inline-block premium-button text-white px-5 py-2 rounded-md transition-colors font-medium text-sm"
            >
              View GitHub Profile
            </a>
          </div>
        </div>`;
};
