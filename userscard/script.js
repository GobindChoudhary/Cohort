let usersArr = [
  {
    name: "Wade Wilson",
    role: "UI/UX Designer",
    company: "Epic Coders",
    rate: "$55/hr",
    skills: ["UI", "UX", "Photoshop", "+4"],
    istatus: "available",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    description:
      "Creative designer with a passion for sleek, modern interfaces.",
  },
  {
    name: "Maria Petrescu",
    role: "Mobile Designer",
    company: "Freelancer",
    rate: "$32/hr",
    skills: ["PHP", "Android", "iOS", "+2"],
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "Experienced mobile designer with strong backend knowledge.",
  },
  {
    name: "Alexandra Morgan",
    role: "Mobile Designer",
    company: "Freelancer",
    rate: "$42/hr",
    skills: ["PHP", "Android", "iOS", "+12"],
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    description:
      "Detail-oriented designer focused on usability and experience.",
  },
  {
    name: "Jennifer Smith",
    role: "Interactive Designer",
    company: "Freelancer",
    rate: "$44/hr",
    skills: ["Android", "iOS", "+2"],
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    description: "Specializes in engaging, interactive mobile interfaces.",
  },
  {
    name: "Svetlana Anyukova",
    role: "Mobile Designer",
    company: "Freelancer",
    rate: "$40/hr",
    skills: ["PHP", "Android", "iOS", "+2"],
    istatus: "available",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    description: "Bringing ideas to life with clean and responsive design.",
  },
  {
    name: "Marko van Kooh",
    role: "UI/UX Designer",
    company: "Visual Madness",
    rate: "$30/hr",
    skills: ["UI", "UX", "Photoshop", "+4"],
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    description: "Minimalist designer with a love for intuitive layouts.",
  },
  {
    name: "Pawel Koszentka",
    role: "UX Designer",
    company: "Apple Inc.",
    rate: "$50/hr",
    skills: ["UI", "UX", "Photoshop", "+4"],
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    description: "UX innovator delivering cutting-edge product experiences.",
  },
  {
    name: "Sonia Simionov",
    role: "Mobile Designer",
    company: "Freelancer",
    rate: "$32/hr",
    skills: ["PHP", "Android", "iOS", "+2"],
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    description: "Mobile design expert blending style with functionality.",
  },
  {
    name: "Jonathan Wayne",
    role: "Photographer",
    company: "Epic Coders",
    rate: "$40/hr",
    skills: ["UI", "UX", "Photoshop", "+4"],
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    description: "Creative eye for detail and storytelling through visuals.",
  },
  {
    name: "Batman",
    role: "Superhero",
    company: "Freelancer",
    rate: "Free",
    skills: ["Tech", "IT", "Martial Arts", "+4"],
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "The Dark Knight with unmatched problem-solving skills.",
  },
  {
    name: "Georgiana Suclea",
    role: "Mobile Designer",
    company: "Freelancer",
    rate: "$39/hr",
    skills: ["PHP", "Android", "iOS", "+2"],
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    description: "Crafts seamless mobile experiences across all platforms.",
  },
  {
    name: "Gregory Johnes",
    role: "UI/UX Designer",
    company: "Epic Coders",
    rate: "$45/hr",
    skills: ["UI", "UX", "Photoshop", "+4"],
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    description: "Driven by creativity and fueled by user-first design.",
  },
];
let container = document.querySelector(".container");
sum = "";
usersArr.forEach((elem, ind) => {
  sum += `
   <div
      class="card h-110 w-85 flex flex-col items-center bg-gray-200 px-5 py-5"
    >
      <!-- Availability and Price -->
      <div class="flex justify-between items-center h-10 w-full">
        ${
          elem.istatus
            ? `<div class="w-[7rem] font-medium rounded-2xl h-8 bg-green-200 flex items-center justify-center">
              ${elem.istatus}
            </div>`
            : ""
        }
        <div class="price font-medium">${elem.rate}</div>
      </div>

      <!-- Profile Picture -->
      <div
        class="h-40 w-40 rounded-full bg-[url(${
          elem.image
        })] bg-cover bg-center"
      ></div>

      <!-- User Information -->
      <h1 class="text-xl font-medium mt-3">${elem.name}</h1>
      <p class="text-zinc-500 text-sm">${elem.role}</p>
      <p class="text-blue-500 text-sm">${elem.company}</p>

      <!-- Skills -->
      <div class="skills text-sm flex gap-1  mt-2">${elem.skills
        .map(
          (item) =>
            `<div class="p-1 text-center rounded-sm bg-blue-400">${item}</div>`
        )
        .join("")}</div>

      <!-- Description -->
      <p class="text-xs text-zinc-500 text-center mt-3">
        ${elem.description}
      </p>

      <!-- Divider -->
      <div class="w-20 border-t border-zinc-300 my-4"></div>

      <!-- Profile Link -->
      <div class="text-md uppercase font-medium cursor-pointer">
        View Profile
      </div>
    </div> `;
});

container.innerHTML = sum;
console.log(sum);
