const headerMenu = document.querySelector('.header_menu');
const headerBurger = document.querySelector('.burger');

headerBurger.addEventListener('click', (e) => {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
})