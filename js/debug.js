const menuLinks = Array.from(document.getElementsByClassName('header_link'));
const services = document.querySelector('.services')
const body = document.body
let servicesPos = services.offsetTop;
const projects = document.querySelector('.projects')
let projectsPos = projects.offsetTop;
const burgerMenu = document.querySelector('.header_menu')

if (menuLinks.length > 0){ 
   menuLinks.forEach(menuLink => {
       menuLink.addEventListener('click', (e) => {
           e.preventDefault();
           if(menuLink.classList.contains('servicesLink')){
                window.scrollTo({
                    top: servicesPos - 10,
                    left: 0,
                    behavior: "smooth"
                })
                if(burgerMenu.classList.contains('active')){
                    burgerMenu.classList.remove('active')
                }
           }
           if(menuLink.classList.contains('projectsLink')){
                window.scrollTo({
                    top: projectsPos,
                    left: 0,
                    behavior: "smooth"
                })
                if(burgerMenu.classList.contains('active')){
                    burgerMenu.classList.remove('active')
                }
            }
       })      
   })
}