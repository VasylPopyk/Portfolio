const headerBurger = document.querySelector('.burger')
const headerMenu = document.querySelector('.header_menu')

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active')
    headerMenu.classList.toggle('active')
})

const items = document.querySelectorAll('.creation_content_item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    items.forEach(item => {
        observer.observe(item);
    });