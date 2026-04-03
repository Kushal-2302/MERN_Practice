let menuLogo = document.querySelector('.menu-bar');
let navLinks = document.querySelector('.nav-links');

menuLogo.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});