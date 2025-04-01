let inc = document.querySelector("#increment");
let reset = document.querySelector(".reset");
let dec = document.querySelector(".decrement");
let box = document.querySelector("#box");

let count = 3;
box.innerHTML = `${count}`;
inc.addEventListener("click", function () {
  count = count + 1;
  box.innerHTML = `${count}`;
});
reset.addEventListener("click", function () {
  count = 0;
  box.innerHTML = `${count}`;
});
dec.addEventListener("click", function () {
  count = count - 1;
  box.innerHTML = `${count}`;
});
