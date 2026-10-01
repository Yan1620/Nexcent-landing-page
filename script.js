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

function closeMenu() {
    menuButton.setAttribute("aria-expanded", false);
    primaryHeaderRight.style.height = 0;
    primaryHeaderRight.removeAttribute("data-visible");
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && primaryHeaderRight.hasAttribute("data-visible")) {
        closeMenu();
    }
})

const primaryHeader = document.querySelector(".primary-header");

document.addEventListener("click", event => {
    const isClickInsideHeader = event.target.closest(".primary-header");
    
    if (!isClickInsideHeader && primaryHeaderRight.hasAttribute("data-visible")) {
        closeMenu();
    }
});

const headerWrapper = document.querySelector(".primary-header__wrapper");

headerWrapper.addEventListener("click", event => {
    const logo = event.target.closest(".primary-header__logo");
    const link = event.target.closest(".primary-header__link");
    const loginBtn = event.target.closest(".primary-header__login-btn");
    const signUpBtn = event.target.closest(".primary-header__sign-up-btn");


    if (logo || link || loginBtn || signUpBtn) {
        closeMenu();
    }
})