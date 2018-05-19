const mobileBtn = document.querySelector('.js-mobile-menu');
const mobileMenu = document.querySelector('.header__navigation-block');

let menuActive = true;

let onKeyDown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeMenu();
    }
};

let showMenu = function () {
    mobileBtn.querySelector('.menu-btn').classList.add('open');
    mobileMenu.classList.add('open');
    document.body.classList.add('mobile-menu-opened');
    document.addEventListener('keydown', onKeyDown);
    menuActive = false;
}
let closeMenu = function () {
    mobileBtn.querySelector('.menu-btn').classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.classList.remove('mobile-menu-opened');
    document.removeEventListener('keydown', onKeyDown);
    menuActive = true;
}

mobileBtn.onclick = function () {
    if (menuActive) {
        showMenu();
    } else {
        closeMenu();
    }
};