var buttonMail = document.querySelector(".button-mail");
var modalContactUs = document.querySelector(".modal-contact-us");
var modalForm = document.querySelector(".modal-form");
var modalClose = document.querySelector(".modal-close");
var modalNameInput = document.querySelector(".modal-name-input");
var modalEmailInput = document.querySelector(".modal-email-input");
var modalTextTextarea = document.querySelector(".modal-text-textarea");


buttonMail.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalContactUs.classList.add("modal-show");
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalContactUs.classList.remove("modal-show");
});

modalForm.addEventListener("submit", function (evt) {
  if (!modalNameInput.value || modalEmailInput.value || modalTextTextarea.value) {
    evt.preventDefault();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalContactUs.classList.contains("modal-show")) {
      evt.preventDefault();
      modalContactUs.classList.remove("modal-show");
    }
  }
});
