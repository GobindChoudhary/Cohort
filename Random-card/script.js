const indiaSquad2025 = [
  {
    name: "Rohit Sharma",
    role: "Batsman (Captain)",
    description:
      "Led from the front as a right-hand opening batter. With over 11,000 ODI runs, he became the second fastest to reach this milestone in 261 innings during the group stage against Bangladesh. His leadership and batting prowess were instrumental in India's campaign.",
    profileImage:
      "https://i.pinimg.com/736x/ca/d7/8e/cad78eb43c7cb7a4e6f1c4fa392d8fa4.jpg",
  },
  {
    name: "Shubman Gill",
    role: "Batsman (Vice-Captain)",
    description:
      "A top-order batsman with over 2,000 ODI runs. Became the fastest batter to reach this milestone in just 38 innings. Entered the tournament as the highest-ranked ODI batter, scoring an unbeaten 101 in the opening match against Bangladesh.",
    profileImage:
      "https://i.pinimg.com/474x/6c/6b/23/6c6b23f7e43531fc176aa83a832b8743.jpg",
  },
  {
    name: "Virat Kohli",
    role: "Batsman",
    description:
      "One of India's most celebrated cricketers with over 12,000 ODI runs. Scored a match-winning century against Pakistan and an 80-run knock in the semi-final against Australia.",
    profileImage:
      "https://i.pinimg.com/474x/d5/9e/1a/d59e1a81c4ef78c752abf1c34e86fa4c.jpg",
  },
  {
    name: "Shreyas Iyer",
    role: "Batsman",
    description:
      "A dependable middle-order batter who contributed significantly with 243 runs in five innings during the tournament. His crucial knocks in the semi-final and final provided India with stability.",
    profileImage:
      "https://i.pinimg.com/474x/db/a0/ca/dba0ca92c563651d2fe610b4a614753c.jpg",
  },
  {
    name: "KL Rahul",
    role: "Batsman (Wicketkeeper)",
    description:
      "A right-hand batter and wicketkeeper with over 6,000 ODI runs. His ability to anchor the innings and perform under pressure made him a vital player.",
    profileImage:
      "https://i.pinimg.com/474x/93/19/fb/9319fba70095d5f4a228f4428a6edefc.jpg",
  },
  {
    name: "Rishabh Pant",
    role: "Batsman (Wicketkeeper)",
    description:
      "An explosive middle-order batsman with over 2,500 ODI runs. Provided quick runs and was reliable behind the stumps during the tournament.",
    profileImage:
      "https://i.pinimg.com/474x/9f/f3/68/9ff368626c3b27cbba7131f2aea0162c.jpg",
  },
  {
    name: "Hardik Pandya",
    role: "All-rounder",
    description:
      "India’s leading all-rounder with over 3,000 ODI runs and 100 wickets. His contributions with both bat and ball were crucial in balancing the team.",
    profileImage:
      "https://i.pinimg.com/474x/34/e4/0b/34e40b8ac7ec7eaa89492384d3a2b9ce.jpg",
  },
  {
    name: "Axar Patel",
    role: "All-rounder",
    description:
      "Played a significant role with over 1,500 runs and 100 wickets in ODIs. Scored 109 runs and took five wickets in the 2025 Champions Trophy.",
    profileImage:
      "https://i.pinimg.com/474x/70/89/34/708934300dd881a365f46f4157080424.jpg",
  },
  {
    name: "Washington Sundar",
    role: "All-rounder",
    description:
      "An off-spinning all-rounder with over 1,000 runs and 50 wickets in ODIs. Contributed in all departments during the tournament.",
    profileImage:
      "https://i.pinimg.com/474x/42/c3/71/42c371a8d1af9d6cc04fb8de42bc8404.jpg",
  },
  {
    name: "Kuldeep Yadav",
    role: "Bowler",
    description:
      "India’s premier wrist-spinner with over 150 ODI wickets. Played a key role in India’s bowling attack.",
    profileImage:
      "https://i.pinimg.com/474x/a0/db/da/a0dbda5e4486839e5ca842cbe3a6b14c.jpg",
  },
  {
    name: "Harshit Rana",
    role: "Bowler",
    description:
      "A right-arm fast bowler who made his ODI debut as a replacement for the injured Jasprit Bumrah. Showed potential with his pace and aggression.",
    profileImage:
      "https://i.pinimg.com/474x/44/50/4e/44504ea266dbc59dcfe86ac013e81f35.jpg",
  },
  {
    name: "Mohammed Shami",
    role: "Bowler",
    description:
      "An experienced pacer with over 200 ODI wickets. Took 10 wickets in 5 matches, including a brilliant 5/53 haul.",
    profileImage:
      "https://i.pinimg.com/474x/8b/73/0b/8b730b32ac5ed08e9c1e1b4531561873.jpg",
  },
  {
    name: "Arshdeep Singh",
    role: "Bowler",
    description:
      "A left-arm medium-fast bowler with over 50 ODI wickets. Maintained an economy rate of 4.36 in five matches.",
    profileImage:
      "https://i.pinimg.com/474x/01/d2/39/01d23949ca8b7031eca6bb6ab93e56e2.jpg",
  },
  {
    name: "Ravindra Jadeja",
    role: "All-rounder",
    description:
      "One of India's most accomplished all-rounders with over 2,500 runs and 150 wickets in ODIs. Scored the winning runs in the final.",
    profileImage:
      "https://i.pinimg.com/474x/06/70/66/067066a1a582508938aa2052e504f78d.jpg",
  },
  {
    name: "Varun Chakaravarthy",
    role: "Bowler",
    description:
      "A mystery spinner with over 20 ODI wickets. Took 9 wickets in 3 matches, including a 5/42 against New Zealand.",
    profileImage:
      "https://i.pinimg.com/474x/0e/8e/9c/0e8e9c972cab1dba1c103f8b8d5a8032.jpg",
  },
];

let btnfor = document.querySelector(".btnfor");
let btnback = document.querySelector(".btnback");
let random = document.querySelector(".random");
let img = document.querySelector(".img");
let name = document.querySelector(".name");
let role = document.querySelector(".role");
let discription = document.querySelector(".discription");

let index = 0;

function initialCard() {
  img.style.backgroundImage = `url('${indiaSquad2025[0].profileImage}')`;
  name.innerHTML = indiaSquad2025[0].name;
  role.innerHTML = indiaSquad2025[0].role;
  discription.innerHTML = indiaSquad2025[0].description;
}

initialCard();

btnfor.addEventListener("click", function () {
  index = (index + 1) % indiaSquad2025.length;
  img.style.backgroundImage = `url('${indiaSquad2025[index].profileImage}')`;
  name.innerHTML = indiaSquad2025[index].name;
  role.innerHTML = indiaSquad2025[index].role;
  discription.innerHTML = indiaSquad2025[index].description;
  console.log(index);
});

btnback.addEventListener("click", function () {
  index = Math.abs(index - 1 + indiaSquad2025.length) % indiaSquad2025.length;
  img.style.backgroundImage = `url('${indiaSquad2025[index].profileImage}')`;
  name.innerHTML = indiaSquad2025[index].name;
  role.innerHTML = indiaSquad2025[index].role;
  discription.innerHTML = indiaSquad2025[index].description;
  console.log(index);
});

random.addEventListener("click", function () {
  let index = Math.trunc(Math.random() * indiaSquad2025.length);
  img.style.backgroundImage = `url('${indiaSquad2025[index].profileImage}')`;
  name.innerHTML = indiaSquad2025[index].name;
  role.innerHTML = indiaSquad2025[index].role;
  discription.innerHTML = indiaSquad2025[index].description;
  console.log(index);
});
