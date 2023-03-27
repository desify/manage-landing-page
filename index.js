
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const overlay = document.querySelector(".overlay");

navToggle.addEventListener('click', () => {
    if (primaryNav.hasAttribute('data-visible')) {
        navToggle.setAttribute('area-expanded', 'false');

    } else {
        navToggle.setAttribute('area-expanded', 'true');
    }
    primaryNav.toggleAttribute("data-visible");
    overlay.toggleAttribute("data-overlay");
    navToggle.toggleAttribute('data-closeBtn');
})

// const mql = window.matchMedia("(min-width: 55em)");
// function removeAttr(e) {
//     if (e.matches) {
//         if (body.hasAttribute("data-no-scroll")) {
//             body.removeAttribute("data-no-scroll");
//         }
//     }
// }
// mql.addEventListener("change", removeAttr);