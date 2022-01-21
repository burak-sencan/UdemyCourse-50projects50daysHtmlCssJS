const toggles = document.querySelectorAll(".toggle");
const toggle = document.querySelector("#toggle");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => {
    doTheTrick(e.target);
  });
});

function doTheTrick(theclickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theclickedOne) {
      fast.checked = false;
    }
    if (cheap === theclickedOne) {
      good.checked = false;
    }
    if (fast === theclickedOne) {
      cheap.checked = false;
    }
  }
}
