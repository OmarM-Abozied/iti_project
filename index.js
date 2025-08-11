let btn = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

let nav = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 600) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
