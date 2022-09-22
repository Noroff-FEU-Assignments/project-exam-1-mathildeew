export function contactForm() {
  const footerLinks = document.querySelectorAll(".hover");

  const form = document.querySelector("#contact-form");

  const name = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");

  const subject = document.querySelector("#subject");
  const subjectError = document.querySelector("#subject-error");

  const message = document.querySelector("#message");
  const messageError = document.querySelector("#message-error");

  const sentMessage = document.querySelector(".message-sent");

  function validateForm() {
    event.preventDefault();

    if (checkLength(name.value, 4) === true) {
      nameError.style.display = "none";
    } else {
      nameError.style.display = "block";
    }
    if (validateEmail(email.value) === true) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }
    if (checkLength(subject.value, 14) === true) {
      subjectError.style.display = "none";
    } else {
      subjectError.style.display = "block";
    }
    if (checkLength(message.value, 24) === true) {
      messageError.style.display = "none";
    } else {
      messageError.style.display = "block";
    }
    sendForm();
  }

  form.addEventListener("submit", validateForm);

  function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
  }

  function sendForm(event) {
    if (
      checkLength(name.value, 4) === true &&
      validateEmail(email.value) === true &&
      checkLength(subject.value, 14) === true &&
      checkLength(message.value, 24) === true
    ) {
      window.scrollTo(0, 0);
      body.style.overflow = "hidden";
      form.style.display = "none";
      sentMessage.classList.toggle("active");
      footerLinks.style.display = "none";
    }
  }
}
