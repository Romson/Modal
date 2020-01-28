const modal = document.querySelector("#simpleModal");
const modalBtn = document.querySelector("#modalBtn");
const closeBtn = document.querySelector(".closeBtn");

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutsideModal);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function clickOutsideModal(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
