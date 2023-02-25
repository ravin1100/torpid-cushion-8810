let imgArr = [
  "https://assets.tatacliq.com/medias/sys_master/images/46111635767326.gif",
  "https://assets.tatacliq.com/medias/sys_master/images/46111654608926.jpg",
  "https://assets.tatacliq.com/medias/sys_master/images/46111654543390.jpg",
  "https://assets.tatacliq.com/medias/sys_master/images/46100662812702.jpg",
  "https://assets.tatacliq.com/medias/sys_master/images/46111654739998.gif",
];
let slider = document.getElementById("slider");
let i = 1;
setInterval(function () {
  slider.innerHTML = null;
  let image = document.createElement("img");
  image.src = imgArr[i];
  slider.append(image);
  i++;
  if (i == imgArr.length) {
    i = 0;
  }
}, 5000);

// js code for signin popup and close

let btn = document.querySelector("#popup-access");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".popup").classList.add("active");
});
let closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".popup").classList.remove("active");
});
