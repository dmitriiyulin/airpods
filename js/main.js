const chooseColors = document.querySelectorAll(".choose-color__btn");
const contentItems = document.querySelectorAll(".content-item");

chooseColors.forEach(function (el) {
  el.addEventListener("click", open);
});

function open(event) {
  const target = event.currentTarget;
  chooseColors.forEach(function (it) {
    it.classList.remove("choose-color__btn--active");
  });
  target.classList.add("choose-color__btn--active");

  const color = target.dataset.button;

  contentItems.forEach(function (it) {
    it.classList.remove("content-item--active");
    if (it.classList.contains(color)) {
      it.classList.add("content-item--active");
    }
  });
}
