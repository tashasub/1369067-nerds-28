var buttonMail = document.querySelector(".button-mail");
var modalContactUs = document.querySelector(".modal-contact-us");
var modalForm = document.querySelector(".modal-form");
var modalClose = document.querySelector(".modal-close");
var modalNameInput = document.querySelector(".modal-name-input");
var modalEmailInput = document.querySelector(".modal-email-input");
var modalTextTextarea = document.querySelector(".modal-text-textarea");
var ESC_CODE = 27;

var isStorageSupport = true;
var login = "";
var email = "";

try {
  login = localStorage.getItem("login");
  email = localStorage.getItem("email")
} catch (err) {
  isStorageSupport = false;
}

buttonMail.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalContactUs.classList.add("modal-show");

  if (login) {
    modalNameInput.value = login;
    if (email) {
      modalEmailInput.value = email;
      modalTextTextarea.focus();
    } else {
      modalEmailInput.focus();
    }
  } else {
    modalNameInput.focus();
  }
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalContactUs.classList.remove("modal-show");
  modalContactUs.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function(evt) {
  if (!(modalNameInput.value || modalEmailInput.value || modalTextTextarea.value)) {
    evt.preventDefault();
    modalContactUs.classList.remove("modal-error");
    modalContactUs.offsetWidth = modalContactUs.offsetWidth;
    modalContactUs.classList.add("modal-error");
  } else if (isStorageSupport) {
      localStorage.setItem("login", modalNameInput.value);
      localStorage.setItem("email", modalEmailInput.value);
    }
});


window.addEventListener("keydown", function(evt) {
  if ((evt.keyCode === ESC_CODE) && modalContactUs.classList.contains("modal-show")) {
      evt.preventDefault();
      modalContactUs.classList.remove("modal-show");
      modalContactUs.classList.remove("modal-error");
    }
});
