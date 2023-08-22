const burger = document.querySelector('.header_burger')
const headerMenu = document.querySelector('.header_menu')
const header = document.querySelector(".header");
burger.addEventListener('click', (e) => {
    burger.classList.toggle('active')
    headerMenu.classList.toggle('active')
})

