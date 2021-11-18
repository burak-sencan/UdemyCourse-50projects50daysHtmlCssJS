const btn = document.getElementById("btn");
const active = document.querySelector(".active");
console.log(btn);
let notActive = true;
btn.addEventListener("click", () => {
  if (notActive) {
    active.style.width = 100 + "%";
    btn.style.left = 86 + "%";
    notActive = false;
  } else {
    active.style.width = 0 + "%";
    btn.style.left = 0 + "%";

    notActive = true;
  }
});
