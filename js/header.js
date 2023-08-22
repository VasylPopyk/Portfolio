const burger = document.querySelector('.header_burger');
const headerMenu = document.querySelector('.header_menu');
const langMenu = document.querySelector('.header_lang');
const headerArray = document.querySelector('.langArray');
const header = document.querySelector('.header')
langMenu.addEventListener('click', (e) => {
    e.preventDefault();
    langMenu.classList.toggle('active')
    headerArray.classList.toggle('active')
})
burger.addEventListener("click", function(e){
    burger.classList.toggle('active');
    headerMenu.classList.toggle('active');
})
let scrollpos = window.scrollY;
//Скільки пікселів потрібно проскроліть, щоб додати клас. Можете змінити значення
const scrollChange = 30;
const scrollMenu = 100;
//Функція, яка додаватиме клас
const add_class_on_scroll = () => header.classList.add("scrolled");
window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;
    if (scrollpos >= scrollChange) { add_class_on_scroll();}
    else{
    	header.classList.remove("scrolled");
    }
});