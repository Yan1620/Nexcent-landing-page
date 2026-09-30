const subscribeForm = document.querySelector(".subscribe-form");
const subscribeFormInput = document.querySelector(".subscribe-form__input");

subscribeForm.addEventListener("submit", event => {
    event.preventDefault();
    subscribeFormInput.value = "";
})

const menuButton = document.querySelector(".primary-header__menu-button");
const primaryHeaderRight = document.querySelector(".primary-header__right");

menuButton.addEventListener("click", () => {
    if (primaryHeaderRight.hasAttribute("data-visible")) {
        menuButton.setAttribute("aria-expanded", false);
        primaryHeaderRight.style.height = 0;
    } else {
        menuButton.setAttribute("aria-expanded", true);
        primaryHeaderRight.style.height = primaryHeaderRight.scrollHeight + "px";
    }
    primaryHeaderRight.toggleAttribute("data-visible");
})