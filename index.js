let btn = document.querySelector("#popup-access");
btn.addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});
let closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click", () => {
  document.querySelector(".popup").classList.remove("active");
});
