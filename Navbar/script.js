const elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
  const img = val.childNodes[3];

  val.addEventListener("mouseenter", function () {
    img.style.opacity = "1";
  });

  val.addEventListener("mouseleave", function () {
    img.style.opacity = "0";
  });

  val.addEventListener("mousemove", function (e) {
    const rect = val.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  });
});
