const subscribeForm = document.querySelector(".subscribe-form");
const subscribeFormInput = document.querySelector(".subscribe-form__input");

subscribeForm.addEventListener("submit", event => {
    event.preventDefault();
    subscribeFormInput.value = "";
})